let authController = require('../controllers/authentication.controller.js');
let maincontroller = require('../controllers/main.controller.js');

module.exports = (app) => {
    app.route('/')
      .get(maincontroller.mainpage);
    app.route('/alba_signup')
      .get(maincontroller.alba_signup);
    app.route('/sajang_signup')
      .get(maincontroller.sajang_signup);
    app.route('/payment')
      .get(maincontroller.paymentpage);
    app.route('/login')
      .get(maincontroller.loginpage);
    app.route('/testpage')
      .get(maincontroller.testpage);
    app.route('/home')
      .get(maincontroller.homepage);
    app.route('/home_update')
      .get(maincontroller.home_update);
    app.route('/signup_complete')
      .get(maincontroller.signup_complete);
    app.route('/signup_choose')
      .get(maincontroller.signup_choose);
    app.route('/signup_additional')
      .get(maincontroller.signup_additional);
    app.route('/alba_signup_complete')
      .get(maincontroller.alba_signup_complete);
    app.route('/sajang_signup_complete')
      .get(maincontroller.sajang_signup_complete);


    //test route
    app.route('/progress')
      .get(maincontroller.progress);
}
