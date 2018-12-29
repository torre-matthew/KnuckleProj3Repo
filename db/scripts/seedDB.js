const mongoose = require("mongoose");
const db = require("../models");

// Connect to the Mongo DB
// This enables the db to be seeded without having to start the server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pocketPantryDB", { useNewUrlParser: true });

const savedRecipesSeeds = [
    {
    "name": "Meatloaf",
    "image": "https://images-gmi-pmc.edge-generalmills.com/3e0ded09-f8a2-45b6-aff7-e08ab138ed84.jpg",
    "recipeID": "123456789996"
    },

    {
    "name": "Panko Chicken Parmesan",
    "image": "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201404-xl-panko-chicken-parmesan.jpg?itok=a2KJsevW",
    "recipeID": "123456789999"
    },
    {
    "name": "Bologna Sandwich",
    "image": "https://images-gmi-pmc.edge-generalmills.com/3e0ded09-f8a2-45b6-aff7-e08ab138ed84.jpg",
    "recipeID": "123456789998"
    },

    {
    "name": "Mixed Green Chilli Bowl",
    "image": "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201404-xl-panko-chicken-parmesan.jpg?itok=a2KJsevW",
    "recipeID": "9999999997"
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
    db.SavedRecipes.find({"name": "Meatloaf"})
    .then(data => {
    //Update Quy's record to include a new saved recipe
        console.log(data[0]._id);
        db.Users.findOneAndUpdate({"googleId": "105336623638150383761"}, {$push: {savedRecipes: data[0]._id,}})
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






