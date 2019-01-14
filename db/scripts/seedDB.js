const mongoose = require("mongoose");
const db = require("../models");

// Connect to the Mongo DB
// This enables the db to be seeded without having to start the server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pocketPantryDB", { useNewUrlParser: true });

const savedRecipesSeeds = [
    {
    "name": "Pandan Wrapped Roast Pork",
    "image": "https://www.edamam.com/web-img/ae4/ae4608a482557f6e8c33881d8436a5db.jpg",
    "recipeID": "5e0a0380fcefe4cd472edb02cadd4dd7"
    },

    {
    "name": "Chicken Piccata",
    "image": "https://www.edamam.com/web-img/cc4/cc489abcab3838196f98dc6b85079f26.jpg",
    "recipeID": "963f621a557c15bd094b0699ad6c717f"
    },
    {
    "name": "Grilled Smoked Bologna With Yellow Mustard Slaw recipes",
    "image": "https://www.edamam.com/web-img/c84/c84cfb0a5dfa2e407b384a8f2246d2cb",
    "recipeID": "5b2a83218be4afc87a4bbe71c3307835"
    },

    {
    "name": "Fried Duck Eggs With Blood Sausage Recipe",
    "image": "https://www.edamam.com/web-img/d66/d66fd991ca7d35a673bae3857d2a8a4a.jpg",
    "recipeID": "80f4daac407ec425390829543ae6ce57"
    },
];

const userSeeds = [
    {
    "name": "Quy Nguyen",
    "googleId": "105336623638150383761",
    "imageUrl": "https://avatars2.githubusercontent.com/u/40550171?s=460&v=4",
    "email": "nguyenqb24@gmail.com"
    },
    {
    "name": "Brian Shaw",
    "googleId": "105336623638150383762",
    "imageUrl": "https://avatars2.githubusercontent.com/u/40550171?s=460&v=4",
    "email": "bshaw@gmail.com"
    },
    {
    "name": "Torre Matthew",
    "googleId": "103021467426357737305",
    "imageUrl": "https://lh6.googleusercontent.com/-Yj61w9oQns8/AAAAAAAAAAI/AAAAAAAAAKs/OJTLJO1YiKs/s96-c/photo.jpg",
    "email": "torre.matthew@gmail.com"
    },

];

// Seed Recipe Data to the db.
let seedRecipeData = () => {
    db.SavedRecipes
    .remove({})
    .then(() => db.SavedRecipes.insertMany(savedRecipesSeeds))
    .then(data => {
        console.log(data.length + " Recipe records inserted into the DB!");
        associateSavedRecipesToUser(); //Associate recipe to User after recipes and user records have been created.
    })
    .catch(err => {
        console.error(err);
    });
}

//Seed User Data to the db.
let seedUserData = () => {
    db.Users
    .remove({})
    .then(() => db.Users.insertMany(userSeeds))
    .then(data => {
        console.log(data.length + " User records inserted into the DB!");
    })
    .catch(err => {
        console.error(err);
    });
}

//Function for associated recipe to user record.
let associateSavedRecipesToUser = () => {
    let recipeArr = [];
    //Associate Associaate the meatloaf dish to Quy's user.
    db.SavedRecipes.find({"name": "Fried Duck Eggs With Blood Sausage Recipe"})
    .then(data => {
    //Update Quy's record to include a new saved recipe
        console.log(data[0]._id);
        db.Users.findOneAndUpdate({"googleId": "103021467426357737305"}, {$push: {savedRecipes: data[0]._id,}})
        .then(updatedUserRecord => {
            // console.log(updatedUserRecord);
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });

    })
    .catch(err => {
        console.error(err);
    });
    
}

seedRecipeData();
seedUserData();






