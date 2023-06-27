const router = require('express').Router();

const { User } = require("../../models");

router.get('/', (req, res) => {
    console.log("Get from the api/users");
    res.send("hi");
})
.post('/', async (req, res) => {
    //Create a new user
    //This code is currently taken directly from Week 14 example 19 Ins-Middleware, so if there's something that doesn't fit, that's probably why...
   
    try {
      const dbUserData = await User.create({
        //id? id: req.body.id,
        user_name: req.body.user_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  

module.exports = router; 