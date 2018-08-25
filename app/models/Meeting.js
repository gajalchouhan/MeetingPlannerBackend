'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let meetingSchema = new Schema({
  meetingId: {
    type: String,
    default: '',
    index : true,
    unique : true
  },
  adminId:{
    type: String,
    default: 'none',
  },
  adminName:{
    type: String,
    default: 'none',
  },
  username:{
    type: String,
    default: 'none',
  },
  userId:{
    type: String,
    default: 'none',
  },
  emailId:{
    type : String,
    default : 'none'
  },
  where:{
    type: String,
    default: '',
  },
  purpose:{
      type: String,
      default: 'none',
  },
  date:{
    type:String,
    default: ''
  },
  time:{
    type: String,
    default:'',
  }
});


mongoose.model('Meeting', meetingSchema);