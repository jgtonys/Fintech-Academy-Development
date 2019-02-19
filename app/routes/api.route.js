let authController = require('../controllers/authentication.controller.js');
let apiController = require('../controllers/api.controller.js');

module.exports = (app) => {
    app.route('/authResult')
      .get(apiController.authResult);
};
