'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  admin:{
    type : String,
    default : "no"
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName:{
    type: String,
    default: ''
  },
  password:{
    type: String,
    default: 'passskdajakdjkadsj'
  },
  emailId:{
    type: String,
    default: ''
  },
  phoneNumber:{
    type: "string",
    default: "0"
  },
  countryCode:{
    type: String,
    default: 0
  },
  hash:{
    type:String,
    default: 'iloveyoubaby'
  },
  active:{
    type: Boolean,
    default: false
  },
  createdOn:{
    type:Date,
    default : ""
  }

})


mongoose.model('User', userSchema);