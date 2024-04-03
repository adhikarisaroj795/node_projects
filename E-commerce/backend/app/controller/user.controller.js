const UserService = require("../services/user.services");
const { MongoClient } = require("mongodb");

const dbURL = "mongodb://localhost:27017";
const dbName = "mernE-commercee";

class UserController {
  constructor() {
    this.user_svc = new UserService();
  }

  useRegister = (req, res, next) => {
    let data = req.body;
    let error_msgs = this.user_svc.validateRegister(data);

    if (req.file) {
      data["image"] = req.file.filename;
    }

    if (Object.keys(error_msgs).length !== 0) {
      return next({
        status_code: 400,
        msg: error_msgs,
      });
    }

    MongoClient.connect(dbURL, (err, client) => {
      if (err) {
        return next({
          status_code: 500,
          msg: "Failed to connect to the database",
        });
      }

      const db = client.db(dbName);
      db.collection("users").insertOne(data, (err, result) => {
        client.close(); // Close the MongoDB connection

        if (err) {
          return next({ status_code: 422, msg: "Failed to insert user data" });
        }

        res.json({
          result: {
            _id: result.insertedId,
            ...data,
          },
          status: true,
          msg: "User created successfully",
        });
      });
    });
  };

  listAllUsers = (req, res, next) => {
    // Your implementation to list all users
  };
}

module.exports = UserController;
