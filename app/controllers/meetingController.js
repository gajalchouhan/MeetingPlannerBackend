const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('../libs/checkLib')
const AuthModel = mongoose.model('Auth')
var nodemailer = require('nodemailer');
var btoa = require('btoa');

/* Models */
const UserModel = mongoose.model('User')
const MeetingModel =  mongoose.model('Meeting')


let checkBodyParameters = (body) => {
    let value = false;
    //in some cases like adding a new meeting body won't have meetingId, so for delete
    // and update it will be checked in that method
    if (body.adminName && body.adminId && body.userId && body.username && body.date && body.time) {
        value = true;
    }

    return value;
}

// get all the meeting where user is participated
let getUserMeeting = (req, res) => {
    if (req.body.userId) {
        MeetingModel.find({ userId: req.body.userId }, (err, result) => {
            if (err) {
                //error in finding user
                logger.error(err.message, 'meetingController: getAllMeetingBYUserId', 10)
                let apiResponse = response.generate(true, 'Failed To Find Meeting By User Id', 500, null)
                res.send(apiResponse);
            } else {
                if (check.isEmpty(result)) {
                    let apiResponse = response.generate(false, 'Meetings not present', 403, result)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Meetings present', 200, result)
                    res.send(apiResponse)
                }
            }
        });
    } else {
        let apiResponse = response.generate(true, 'Body parameters empty', 403, null);
        res.send(apiResponse);
    }
} // end get normal user


// Found a meeting by meetingId
let getMeetingDetail = (req, res) => {
    if (req.body.meetingId) {
        MeetingModel.findOne({ meetingId: req.body.meetingId }, (err, result) => {
            if (err) {
                //error in finding user
                logger.error(err.message, 'meetingController: getAllMeetingBYUserId', 10)
                let apiResponse = response.generate(true, 'Failed To Find Meeting By Meeting Id', 500, null)
                res.send(apiResponse);
            } else {
                if (check.isEmpty(result)) {
                    let apiResponse = response.generate(false, 'Meeting not present', 403, result)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Meeting present', 200, result)
                    res.send(apiResponse)
                }
            }
        });
    } else {
        let apiResponse = response.generate(true, 'Body parameters empty', 403, null);
        res.send(apiResponse);
    }
} // and get all admin meeting.


// create a meeting between user and admin
let addMeeting = (req, res) => {
   
    let userId = req.body.userId;
    let checkIfUserIsAdmin = () => {
        return new Promise((resolve, reject) => {

            let adminId = req.body.adminId;
            console.log(adminId)
            UserModel.findOne({ userId: adminId }, (err, result) => {
                if (err) {
                    //error in finding user
                    logger.error(err.message, 'meetingController: addMeeting', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Id Admin or Not', 500, null)
                    reject(apiResponse);
                } else {
                    console.log(JSON.stringify(result));
                    if (result) {
                        if (result.admin === 'admin') {
                            //user is admin
                            resolve();
                        } else {
                            logger.error(result, 'meetingController: addMeeting', 10)
                            let apiResponse = response.generate(true, 'User not  Admin', 403, null)
                            reject(apiResponse);
                        }

                    } else {
                        //user is not admin
                        //error in finding user
                        logger.error(result, 'meetingController: addMeeting', 10)
                        let apiResponse = response.generate(true, 'User not  found', 403, null)
                        reject(apiResponse);
                    }
                }
            });

        });
    }
    
    let checkIfMeetingExistsForSameTime = () => {
        return new Promise((resolve, reject) => {
            MeetingModel.findOne({ date: req.body.date, time: req.body.time, userId: req.body.userId })
                .exec((err, result) => {
                    if (err) {
                        logger.error(err.message, 'meetingController: addMeeting', 10)
                        let apiResponse = response.generate(true, 'Meeting finding error', 500, null)
                        reject(apiResponse);
                    } else {
                        console.log(result);
                        if (check.isEmpty(result)) {
                            //go ahead meeting for same time and user does not exist
                            resolve();
                        } else {
                            //meeting for same time and user exists, send error
                            logger.error(result, 'meetingController: addMeeting', 10)
                            let apiResponse = response.generate(true,
                                'Meeting for exact time and user already exists. Please select different time or user.',
                                403, null)
                            reject(apiResponse);
                        }
                    }
                });
        });
    }
    

    let createMeeting = () => {
        return new Promise((resolve, reject) => {
            console.log(JSON.stringify(req.body));
            let meeting = new MeetingModel(
                {
                    meetingId: shortid.generate(),
                    adminId: req.body.adminId,
                    adminName: req.body.adminName,
                    userId: req.body.userId,
                    username: req.body.username,
                    where: req.body.where,
                    emailId : req.body.emaiId,
                    purpose: req.body.purpose,
                    date: req.body.date,
                    time: req.body.time
                }
            )

            meeting.save((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'meeting controller: ccreateMeeting', 10)
                    let apiResponse = response.generate(true, 'Failed to create new meeting', 500, null)
                    reject(apiResponse)
                } else {
                    let newMeetingObj = result.toObject();
                    resolve(newMeetingObj);
                }
            });

        });
    }

    let sendMail = (newMeetingObj) => {
        return new Promise((resolve, reject) => {
        
            let data={
                "username":req.body.username,
                "adminName": req.body.adminName,
                "email" : req.body.emailId,
                "purpose":req.body.purpose,
                "place" : req.body.where,
                "date" : req.body.date,
                "time" : req.body.time
            };

            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'myedwisormeetingplanner@gmail.com',
                    pass: 'mymeeting'
                }
            });

            const mailOptions = {
                from: 'myedwisormeetingplanner@gmail.com', // sender address
                to: data.email, // list of receivers
                subject: 'Please confirm your Email account', // Subject line
                text: `Hi! Follwing meeting conducted by ${data.adminName}`,// plain text body
                html: `Hi! ${data.username} <br> Follwing meeting conducted by ${data.adminName} <br> Meeting Schdule <br>  Purpose : ${data.purpose} <br> Place : ${data.place} <br> Date : ${data.date} <br> Time : ${data.time}`
               };
               console.log(mailOptions)
               transporter.sendMail(mailOptions, function (err, info) {           
                if (err) {
                    console.log(err);
                    logger.error('Sent Mail Failed!', 'meetingController: addMeeting', 10)
                    let apiResponse = response.generate(true, 'Server Error!Sent Mail Failed.', 500, null)
                    reject(apiResponse)
                }
                else {
                    console.log(info);
                    logger.error('Mail Sent Successful!', 'meetingController: addMeeting', 10)
                    resolve(newMeetingObj)
                }
            });
        });

    }//end

    let value = checkBodyParameters(req.body);
    console.log(value)
    if (!value) {
        let apiResponse = response.generate(true, 'Body parameters empty', 403, null);
        res.send(apiResponse);
    } else {
        checkIfUserIsAdmin(req, res)
            .then(checkIfMeetingExistsForSameTime)
            .then(createMeeting)
            .then(sendMail)
            .then((resolve) => {
                let apiResponse = response.generate(false, 'Meeting created', 200, resolve)
                res.send(apiResponse);
                          
                
                let mailData = {
                    userId : userId,
                    subject: 'Meeting Added',
                    message: `A meeting by  has been scheduled at ${req.body.date} on ${req.body.time}`,
                    
                }
                getUserInfoByUserIdAndSendMail(mailData)
                
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            })
    }

}// end of add meeting

let updateMeeting = (req, res) => {
    let options = req.body;
    if (req.body.meetingId && req.body.adminId && req.body.userId) {
        MeetingModel.findOneAndUpdate({ 'meetingId': req.body.meetingId }, options,
            {
                multi: true
            }).exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'meetingController: updateMeeting', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Meeting', 500, null)
                    res.send(apiResponse);
                } else {
                    if (!check.isEmpty(result)) {
                        let apiResponse = response.generate(false, 'Updated meeting', 200, result);
                        res.send(apiResponse);

                    } else {
                        let apiResponse = response.generate(true, 'Meeting not found.', 404, result)
                        res.send(apiResponse);
                    }
                }
            })
    } else {
        let apiResponse = response.generate(true, 'Body parameters empty', 403, null);
        res.send(apiResponse);
    }
}


let deleteMeeting = (req, res) => {

    if (req.body.adminId && req.body.meetingId && req.body.userId) {
        MeetingModel.findOneAndRemove({ adminId: req.body.adminId, meetingId: req.body.meetingId })
            .exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'meetingController: deleteMeeting', 10)
                    let apiResponse = response.generate(true, 'Failed To Delete', 500, null)
                    res.send(apiResponse);
                } else {
                    console.log(JSON.stringify(result));
                    if (result) {
                        let apiResponse = response.generate(false, 'Deleted meeting', 200, result);
                        res.send(apiResponse);
                        
                    } else {
                        let apiResponse = response.generate(true, 'Meeting not found.', 404, null)
                        res.send(apiResponse);
                    }

                }
            });
    } else {
        //paramters empty
        let apiResponse = response.generate(true, 'Body parameters empty', 403, null);
        res.send(apiResponse);
    }


}// end delete user


module.exports = {
    getUserMeeting : getUserMeeting,
    getMeetingDetail : getMeetingDetail,
    addMeeting : addMeeting,
    updateMeeting : updateMeeting,
    deleteMeeting : deleteMeeting
}