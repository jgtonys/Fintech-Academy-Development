let authController = require('../controllers/authentication.controller.js');
let maincontroller = require('../controllers/main.controller.js');

module.exports = (app) => {
    app.route('/')
      .get(maincontroller.mainpage);
    app.route('/payment')
      .get(maincontroller.paymentpage);
    app.route('/login')
      .get(maincontroller.loginpage);
    app.route('/home')
      .get(maincontroller.homepage);
    app.route('/signup_complete')
      .get(maincontroller.signup_complete);


    //test route
    app.route('/progress')
      .get(maincontroller.progress);
}
