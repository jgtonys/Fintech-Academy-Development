const async = require('async');
const _ = require('lodash');
const jwt = require('../../config/jwt');
const db = require('../../config/db');

 /**
 * @swagger
 * /signin:
 *   post:
 *     tags:
 *     - SignIn
 *     summary: "로그인 요청"
 *     description : ""
 *     consumes:
 *     - application/x-www-form-urlencoded
 *     produces:
 *     - application/json
 *     parameters:
 *     - name: user_id
 *       description:
 *            "유저 아이디 입력"
 *       in: formData
 *       required: true
 *       type: string
 *     - name: user_password
 *       description:
 *            "유저 패스워드 입력"
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *      400:
 *       description: invalidParams
 *      401:
 *       description: not found user
 *      402:
 *       description : invalid password
 */
module.exports.signin = (req, res, next) => {
    let user_id = req.body.user_id;
    let user_password = req.body.user_password;
    if (!user_id || !user_password) {
		return next({statusCode: 400, message: res.__('invalidParams')});
	}

    async.waterfall([
        (nextStep) => {
            db.user.findOne({
                where: { user_id }
            }).then(user => {
                if (!user) next({statusCode: 401, message: 'not found user'});
                else nextStep(null, user);
            }).catch(nextStep);
        },
        (user, nextStep) => {
            user.authenticate(password,user.user_password).then(valid => {
				if (valid) {
					let data = _.pick(user.get(), ['user_id', 'user_name', 'user_password', 'user_type']);
					let token = jwt.generate(data);
					nextStep(null, { token,data });//original : nextStep(null, { token, data });
				} else nextStep({statusCode: 402, message: 'invalid password'});
            }).catch(nextStep);
        }
    ], (err, result) => {
        if (err) next(err);
        else {
            res.json(result);
        }
    });
};

 /**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *     - SignUp
 *     summary: "회원가입 요청"
 *     description : ""
 *     consumes:
 *     - application/x-www-form-urlencoded
 *     produces:
 *     - application/json
 *     parameters:
 *     - name: user_id
 *       description:
 *            "유저 아이디 입력"
 *       in: formData
 *       required: true
 *       type: string
 *     - name: user_password
 *       description:
 *            "유저 패스워드 입력"
 *       in: formData
 *       required: true
 *       type: string
 *     - name: user_name
 *       description:
 *            "유저 이름 입력"
 *       in: formData
 *       required: true
 *       type: string
 *     - name: user_type
 *       description:
 *            "유저 타입 입력"
 *       in: formData
 *       required: true
 *       type: integer
 *     responses:
 *      200:
 *       description: success
 *      403:
 *       description: already existing user
 *      405:
 *       description: user creating database error
 */
module.exports.signup = (req,res,next) => {
    let user_id = req.body.user_id;
    let user_name = req.body.user_name;
    let user_password = req.body.user_password;
    let user_type = req.body.user_type;
    async.waterfall([
        (nextStep) => {
            db.user.findOne({
                where: { user_id }
            }).then(user => {
                if (user) next({statusCode: 403, message: 'already existing user'});
                else nextStep(null);
            }).catch(nextStep);
        },
        (nextStep) => {
            db.user.create({
                user_id: user_id,
                user_name: user_name,
                user_password: user_password,
                user_type: user_type
            })
            .then(created => {
                if(!created) next({statusCode: 405, message: 'user creating error!'});
                else nextStep(null,created);
            })
            .catch(nextStep);
        },
    ], (err, result) => {
        if (err) next(err);
        else res.json(result);
    });
};

/**
 * GET: /getall
 *
 **/
module.exports.getall = (req,res,next) => {
    async.waterfall([
        (nextStep) => {
            db.user.findAll().then(user => {
                if (!user) next({statusCode: 401, message: 'no users'});
                else nextStep(null,user);
            }).catch(nextStep);
        },
    ], (err, result) => {
        if (err) next(err);
        else res.send(result);
    });
};


/**
 * POST: /delete_user
 * { id }
 **/
module.exports.delete_user = (req,res,next) => {
    let user_id = req.body.user_id;
    async.waterfall([
        (nextStep) => {
            db.user.findOne({
                where: { user_id }
            }).then(user => {
                if (!user) next({statusCode: 401, message: 'invalid id! cannot delete from database'});
                else nextStep(null,user);
            }).catch(nextStep);
        },
        (user,nextStep) => {
            db.user.destroy({
                where: {user_id: user.user_id}
            })
            .then(rowDeleted => {
                if(rowDeleted != 1) next({statusCode: 401, message: 'user delete error!'});
                else res.send("successfully deleted");
            })
        }
    ]);
};
