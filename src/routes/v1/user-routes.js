const express=require('express');

const {AuthRequestMiddlewares}=require('../../middlewares')
const {UserController}=require('../../controllers');

const router=express.Router();

// /api/v1/signup POST
router.post('/signup',
                      AuthRequestMiddlewares.validateAuthRequest,
                      UserController.signup);

router.post('/signin',
                      AuthRequestMiddlewares.validateAuthRequest,
                      UserController.signin);



module.exports=router;