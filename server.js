let express = require('./config/express');
let config = require('./config/config');
let db = require('./config/db');
db.sequelize.sync({force: false}).then(r => console.log("sequelize starting..")).catch(e => console.log(e));

express.listen(config.port, () => {
    console.log(`Express server has started on port ${config.port}`);
});
 
