var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Newsletter = require('../public/models/Newsletter');

// Posting newsletter sign up
router.get('/', function (req, res, next) {
    
  var newsletter = new Newsletter();

  newsletter.firstName = req.body.firstName;
  newsletter.lastName = req.body.lastName;
  newsletter.email = req.body.email;
  

  newsletter.save(function (error){
      if (error)
          res.send(error);

      res.render('newsletter', { title: 'Sign Up' })    
      // res.json(
      //     {
      //         message: 'Contact saved!',
      //         post: newsletter
      //     }
      // );
  });

});
// router.get('/', function(req, res, next) {
//   res.render('newsletter', { title: 'Sign Up' });
// });


module.exports = router;