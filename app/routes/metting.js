const express = require('express');
const router = express.Router();
const meetingController = require("./../../app/controllers/meetingController")
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

const app = express();

module.exports.setRouter = (app) => {
    
    let baseUrl = `${appConfig.apiVersion}/meeting`;

    app.post(`${baseUrl}/getAllMeetingsForUser`, auth.isAuthorized, meetingController.getUserMeeting);

     /**
 * @api {post}  api/v1/meeting/getAllMeetingForUser Request User information
 * @apiVersion 0.0.1
 * @apiName Meeting Information
 *
 * @apiParam {string} authToken the token for  authentication.
 * @apiParam {string} id Users unique ID.
 * 
 * @apiSuccessExample {json} Success-Response
 *    {
    "error": false,
    "message": "All Meeting Details Found",
    "status": 200,
    "data": [
                {
                    "meetingId" : "gdhasrg",
                    "userId" : "sdrgargg",
                    "userName" : "gajal",
                    "adminName" : "Suresh",
                    "adminId" : "gsgaga",
                    "Date" : "08/22/2018",
                    "time" : "20.00",
                    "countryCode" : "91",
                    "where" : "Delhi"           
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */

    app.post(`${baseUrl}/getMeetingByMeetingId`, auth.isAuthorized,  meetingController.getMeetingDetail);

       /**
 * @api {post}  api/v1/meeting/getMeetingByMeetingId Request User information
 * @apiVersion 0.0.1
 * @apiName Meeting Information
 *
 * @apiParam {string} authToken the token for  authentication.
 * @apiParam {string} id Users unique ID.
 * 
 * @apiSuccessExample {json} Success-Response
 *    {
    "error": false,
    "message": "All Meeting Details Found",
    "status": 200,
    "data": [
                {
                    "meetingId" : "gdhasrg",
                    "userId" : "sdrgargg",
                    "userName" : "gajal",
                    "adminName" : "Suresh",
                    "adminId" : "gsgaga",
                    "Date" : "08/22/2018",
                    "time" : "20.00",
                    "countryCode" : "91",
                    "where" : "Delhi"           
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */
    app.post(`${baseUrl}/addMeeting` , auth.isAuthorized, meetingController.addMeeting);

       /**
 * @api {post}  api/v1/meeting/addMeeting Request User information
 * @apiVersion 0.0.1
 * @apiName Meeting Information
 *
 * @apiParam {string} authToken the token for  authentication.
 * @apiParam {string} id Users unique ID.
 * 
 * @apiSuccessExample {json} Success-Response
 *    {
    "error": false,
    "message": "All Meeting Details Found",
    "status": 200,
    "data": [
                {
                    "meetingId" : "gdhasrg",
                    "userId" : "sdrgargg",
                    "userName" : "gajal",
                    "adminName" : "Suresh",
                    "adminId" : "gsgaga",
                    "Date" : "08/22/2018",
                    "time" : "20.00",
                    "countryCode" : "91",
                    "where" : "Delhi"           
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */

    app.post(`${baseUrl}/updateMeeting`, auth.isAuthorized, meetingController.updateMeeting);

       /**
 * @api {post}  api/v1/meeting/updateMeeting Request User information
 * @apiVersion 0.0.1
 * @apiName Meeting Information
 *
 * @apiParam {string} authToken the token for  authentication.
 * @apiParam {string} id Users unique ID.
 * 
 * @apiSuccessExample {json} Success-Response
 *    {
    "error": false,
    "message": "All Meeting Details Found",
    "status": 200,
    "data": [
                {
                    "update" : "Meeting update successfully"         
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */

    app.post(`${baseUrl}/deleteMeeting`, auth.isAuthorized,  meetingController.deleteMeeting);

       /**
 * @api {post}  api/v1/meeting/deleteMeeting Request User information
 * @apiVersion 0.0.1
 * @apiName Meeting Information
 *
 * @apiParam {string} authToken the token for  authentication.
 * @apiParam {string} id Users unique ID.
 * 
 * @apiSuccessExample {json} Success-Response
 *    {
    "error": false,
    "message": "All Meeting Details Found",
    "status": 200,
    "data": [
                {
                    "delete" : "Succesfully Deleted"           
        }
    ]
 * }
 * @apiErrorExample {json} Error-Response;
 * {
 *   "error" : true,
 *   "message" : "Error Occured",
 *   "Status" : "500",
 *   "data" : null
 * }
 */
   
}

