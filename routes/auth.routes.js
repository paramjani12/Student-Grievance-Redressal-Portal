//const { response } = require('express');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router(); 
const jwt = require("jsonwebtoken")
//const userSchema = require ("../model/users.js");
//const studentSchema = require("../model/users.js");
const {usedata,studentdata} = require("../model/users");
const authorize = require('../middleware/auth');
const { response, request } = require('express');
//const { check, validationResult } = require('express-validators');


router.post("/StudentLogin",(req,res,next)=>{
    let getUser;
    usedata.findOne({
        email: req.body.email,
    })
    .then((user) =>{
        if(!user)
        {
            return res.status(401).json({message: "Login Failed"});

        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then((response) =>{
        if(!response)
        {
            return res.status(401).json({ message:"Login failed"});

        }
        let jwtToken = jwt.sign (
            {
              email: req.body.email,
              userId: getUser._id,
        }, "longer-secret-is-better",{ expiresIn: "1h"}
        );
        res.status(200).json({ token:jwtToken , expiresIn: 3600 , msg: getUser,  
        });
    })
    .catch((err) => {
        console.log(err);
        return res.status(401).json({ message:" Auth failed"});
    });
});

router.post('/Student',
    (req, res, next) => {
        bcrypt.hash(req.body.password, 10).then((hash) => {
          const user = new usedata({
            email: req.body.email,
            enrollment: req.body.enrollment,
            password: hash,
          });
          user
            .save()
            .then((response) => {
              res.status(201).json({
                message: 'User successfully created!',
                result: response,
              });
            })
            .catch((error) => {
              
              res.status(500).json({
                error: error,
              });
            });
        });
      }
  );
  
router.get('/complaints',(req,res)=>{
    studentdata.find((err,result)=>{
      res.send(result);

    })
})
router.post('/complaint',(req,res)=>{
    const id = req.body.id
    studentdata.findOne({_id:id},(err,result)=>{
      res.send(result);
    })
})
router.post('/Register',(req,res,next)=>{
  //studentSchema.find((error,response)=>{
   const student = new studentdata  ({
    email: req.body.email,
    name: req.body.name,
    studentid: req.body.studentid,
    grievancesub: req.body.grievancesub,
    mobile:req.body.mobile,
    grievancedesc: req.body.grievancedesc,
    grievancecat: req.body.grievancecat,
    department: req.body.department,
    
   }) 
   student
   .save()
   .then(()=>{
    res.status(201).json({
      message: 'complaint successfully registered!',
    });

   })
   .catch((error) => {
    console.log(error);
    res.status(500).json({
      error:error,
    });
  });
  });
//});

router.post ('/Redressal',(req,res)=>{
    
    //complaint: req.body.complaint,

  studentdata.updateOne({_id:req.body._id},{redressal:req.body.redressal})
  .then(()=>{
   res.status(201).json({
     message: 'Redressal successfully submitted!',
   });

  })
  .catch((error) => {
   console.log(error);
   res.status(500).json({
     error:error,
   });
 });
})

router.get('/Logout',(req,res)=>{
  console.log('logged out');
  res.clearCookie('jwttoken',{path:'/'});
  res.status(200).send('user logged out');
})
module.exports = router;