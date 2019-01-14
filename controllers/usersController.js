const db = require("../db/models");
const recipesController = require("../controllers/recipesController");


// This function takes the googleId from the api get request and queries the db to look for the Users collection that
// matches that google Id. Return the savedRecipes array when found.
// we then take the savedRecipes array and find all recipes from the savedRecipes collection that match the recipeIDs in that array
let findUsersSavedRecipes = (req, res) => {
    db.Users.findOne({"googleId": req.params.googleId}, "savedRecipes")
    .then(data => {
            db.SavedRecipes.find({"_id": {$in: data.savedRecipes}})
        .then(data => {
            res.json(data) 
        })
        .catch(err => {
            console.error(err);
        });
    })
    .catch(err => console.log(err));
}

// This function Looks for the saved recipe that has the recipeID that we store from the Edemam API of the recipe the user is saving.
// Then lookup the user based on the stored googleID and push the mongodb id of that recipe into the savedRecipes array of that user. 
let associateSavedRecipesToUser = (req, res) => {
    db.SavedRecipes.find({"recipeID": req.body.recipeID})
    .then(data => {
        db.Users.findOneAndUpdate({"email": req.body.email}, {$push: {savedRecipes: data[0]._id}})
        .then(updatedUserRecord => {
            res.json(updatedUserRecord);
        })
        .catch(err => {
            console.error(err);   
        });
    })
    .catch(err => {
        console.error(err);
    });    
}

// create a new user in the db.
let createUser = (req, res) => {
    db.Users.create({
        "name": req.body.name,
        "googleId": req.body.googleId,
        "imageUrl": req.body.imageUrl,
        "email": req.body.email
    })
    .then(data => res.json(data))
    .catch(err => console.log(err));
}

// GET all users that exist in the db.
let getAllUsers = (req, res) => {
    db.Users.find({})
    .then(data => res.json(data))
}

// gets a user based on googleID and then returns all of the users information.
let getUser = (req, res) => {
    db.Users.findOne({"googleId": req.params.googleId})
    .then(userInfo => res.json(userInfo))
    .catch(err => console.log(err));
}


// Defining methods for the usersController
module.exports = {
    usersSavedRecipes: findUsersSavedRecipes,
    associateSavedRecipesToUser: associateSavedRecipesToUser,
    createUser: createUser,
    getAllUsers: getAllUsers, 
    getUser: getUser
};