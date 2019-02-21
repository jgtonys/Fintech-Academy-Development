const async = require('async');
const _ = require('lodash');
//const jwt = require('../../config/jwt');
//const db = require('../../config/db');
const path = require('path');

/**
 * Main page rendering
 *
 **/
module.exports.mainpage = (req, res, next) => {
    res.render('index');
};

module.exports.alba_signup = (req, res, next) => {
    res.render('alba_signup');
};

module.exports.sajang_signup = (req, res, next) => {
    res.render('sajang_signup');
};

module.exports.paymentpage = (req,res,next) =>{
    res.render('payment');
}

module.exports.testpage = (req,res,next) =>{
    res.render('testpage2');
}

module.exports.loginpage = (req,res,next) =>{
    res.render('login');
}

module.exports.homepage = (req,res,next) =>{
    res.render('home');
}

module.exports.home_update = (req,res,next) =>{
    res.render('home_update');
}

module.exports.signup_complete = (req,res,next) => {
  res.render('signup_complete');
}

module.exports.progress = (req,res,next) => {
  res.render('progress_bar');
}

module.exports.signup_choose = (req,res,next) => {
  res.render('signup_choose');
}

module.exports.signup_additional = (req,res,next) => {
  res.render('signup_additional');
}

module.exports.alba_signup_complete = (req,res,next) => {
  res.render('alba_signup_complete');
}

module.exports.sajang_signup_complete = (req,res,next) => {
  res.render('sajang_signup_complete');
}
