let authController = require('../controllers/authentication.controller.js');
let userController = require('../controllers/users.controller.js');

module.exports = (app) => {
    app.route('/signin')
      .post(userController.signin);
    app.route('/signup')
      .post(userController.signup);
    app.route('/getall')
      .get(userController.getall);
    app.route('/delete_user')
      .post(userController.delete_user);
    
};
