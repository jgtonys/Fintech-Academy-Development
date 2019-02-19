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
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
};
