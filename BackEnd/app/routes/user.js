
const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/view/all`,  userController.getAllUser);


    // params: userId.
    app.get(`${baseUrl}/:issueId/details`,  userController.getSingleIssue);
    app.get(`${baseUrl}/:userId`,  userController.getSingleUser);

    app.get(`${baseUrl}/issue/issueDetails`,  userController.getAllIssueDetails);

 
    
    // params: firstName, lastName, email, mobileNumber, password, apiKey.
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    app.post(`${baseUrl}/newissue`,  userController.newIssue)

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */
   app.put(`${baseUrl}/:issueId/edit`, userController.editIssue);

    app.post(`${baseUrl}/login`, userController.loginFunction);

    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);

    

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

}
