let authController = require('../controllers/authentication.controller.js');
let maincontroller = require('../controllers/main.controller.js');

module.exports = (app) => {
    app.route('/')
      .get(maincontroller.mainpage);
    app.route('/payment')
      .get(maincontroller.paymentpage);
}
