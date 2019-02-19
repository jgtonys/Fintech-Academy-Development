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

module.exports.paymentpage = (req,res,next) =>{
    res.render('payment');
}