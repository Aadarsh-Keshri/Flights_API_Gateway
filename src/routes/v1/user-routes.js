const express=require('express');

const {AuthRequestMiddlewares}=require('../../middlewares')
const {UserController}=require('../../controllers');

const router=express.Router();

// /api/v1/user/signup POST
router.post('/signup',
                      AuthRequestMiddlewares.validateAuthRequest,
                      UserController.signup);

router.post('/signin',
                      AuthRequestMiddlewares.validateAuthRequest,
                      UserController.signin);

router.post('/role',
                    AuthRequestMiddlewares.checkAuth,
                    AuthRequestMiddlewares.isAdmin,
                    UserController.addRoleToUser);


module.exports=router;