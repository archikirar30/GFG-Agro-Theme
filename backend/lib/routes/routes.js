    const routes = require('express').Router();
    const users = require("../controllers/User.Controller");
  
    // Create a new Customer
    routes.post("/user", users.create);
  
    // Retrieve all Customers
    routes.get("/user", users.findAll);
  
    // Retrieve a single Customer with customerId
    routes.get("/user/:userId", users.findOne);
  
    // Update a Customer with customerId
    routes.put("/user/:userId", users.update);
  
    // Delete a Customer with customerId
    routes.delete("/user/:userId", users.delete);
  
    // Create a new Customer
    routes.delete("/user", users.deleteAll);
module.exports = routes;