let authController = require('../controllers/authentication.controller.js');
let apiController = require('../controllers/api.controller.js');

module.exports = (app) => {
    app.route('/authResult')
      .get(apiController.authResult);
    app.route('/send')
      .get(apiController.send);
    app.route('/mydata')
      .get(apiController.mydata);
    app.route('/mylist')
      .get(apiController.mylist);
    app.route('/apitest')
      .get(apiController.apitest);
};
