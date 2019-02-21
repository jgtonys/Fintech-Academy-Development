const async = require('async');
const _ = require('lodash');
const jwt = require('../../config/jwt');
const db = require('../../config/db');
const request = require('request');


/*

계좌 조회 시 테스트배드에 조회할 계좌가 등록되어 있어야 하며
access token 도 해당 계좌와 동일하게 만들어져야 한다.

*/


/**
 * POST: /authResult
 * 초기 토큰 발급 (성공)
 **/

module.exports.authResult = (req, res, next) => {
  let code = req.query.code;
  let option = {
    method : 'POST',
    url : 'https://testapi.open-platform.or.kr/oauth/2.0/token',
    header : 'Content-type: application/x-www-form-urlencoded; charset=UTF-8',
    form : {
      code : code,
      client_id : 'l7xx6bd36b771b5247198bce82dbd8641b26',
      client_secret : '1bffe72415de4bccb25fc6d91be645fd',
      redirect_uri : 'http://localhost:8080/authResult',
      grant_type : 'authorization_code'
    }
  }
  request(option, function(err,response,body) {
    db.sequelize.query("INSERT INTO user (access_token,user_num,user_id,user_name,user_password,user_type) VALUES('" + JSON.parse(body).access_token + "','" + JSON.parse(body).user_seq_no + "','dummy','dummy','dummy',0)", function(err){})
    res.write("<script>self.close();</script>");
  });

}


/**
 * POST:
 * 계좌 조회 (성공)
 **/
module.exports.mydata = (req, res, next) => {
  var requestURL = 'https://testapi.open-platform.or.kr/user/me?user_seq_no=1100034750';
  option= {
    url: requestURL,
    method:'get',
    headers: {
      'Authorization': 'Bearer bbec8114-b5ea-4461-af11-8a34b02223bc',
    }
  }
  request(option,function(error,response,body){
    //console.log(JSON.parse(body));
    console.log(JSON.parse(body).res_list);
    res.send(body);
  })
}

/**
 * POST:
 * 잔액 조회 (성공)
 **/

module.exports.mylist = (req, res, next) => {
  var requestURL = 'https://testapi.open-platform.or.kr/v1.0/account/balance?fintech_use_num=199003903057724838972539&tran_dtime=20190219163857';
  option= {
    url: requestURL,
    method:'get',
    headers: {
      'Authorization': 'Bearer bbec8114-b5ea-4461-af11-8a34b02223bc',
    }
  }
  request(option,function(error,response,body){
    //console.log(JSON.parse(body));
    console.log(body);
    res.send(body);
  })
}

module.exports.receive = (req, res, next) => {
  var requestURL = 'https://testapi.open-platform.or.kr/transfer/deposit';
  option= {
    url: requestURL,
    method:'post',
    json : true,
    headers: {
      'Authorization': 'Bearer bbec8114-b5ea-4461-af11-8a34b02223bc',
      'Content-Type' : 'application/json; charset=UTF-8',
    },
    body : {
      "wd_pass_phrase" : "T990039030MSINCX8VJ1",
      "wd_print_content" : "출금계좌",
      "print_content" : "통장기재내용",
      "tran_amt" : "1000",
      "tran_dtime" : "20190219010101",
      "cms_no" : "123456789"
    }
  }
  request(option,function(error,response,body){
    console.log(body);
  })
}

module.exports.apitest = (req, res, next) => {
  console.log("blabla");
  let code = req.body.code;
  console.log(code);

}


module.exports.send = (req, res, next) => {
  var requestURL = 'https://testapi.open-platform.or.kr/v1.0/transfer/withdraw';
  option= {
    url: requestURL,
    method:'post',
    json : true,
    headers: {
      'Authorization': 'Bearer bbec8114-b5ea-4461-af11-8a34b02223bc',
      'Content-Type' : 'application/json; charset=UTF-8',
    },
    body : {
      "dps_print_content" : "입금계좌인자내역",
      "fintech_use_num" : "199003903057724838972539",
      "print_content" : "통장기재내용",
      "tran_amt" : "1000",
      "tran_dtime" : "20190219000001",
      "cms_no" : "123456789"
    }
  }
  request(option,function(error,response,body){
    console.log(body);
  })
}


/**
 * POST: /user/me
 * 계좌 실명 조회
 **/

 /*module.exports.userMe = (req, res, next) => {
   //const token;
   const use_num;
   const qs = 'user_seq.no' + use_num;
   let uequestURL = 'https://testapi.open-platform.or.kr/user/me?';
   option = {
     header : {
       'Authorization : Bearer ';
     }
   }
   request(option,function(error,response,body) {
     console.log(JSON.parse(body)); //
   })
 }*/


 /**
  * GET:
  * 최초 토큰 발급
  **/


  /*module.exports.generateToken = (req, res, next) => {
    var qs =
     "?response_type=code&" +
     "client_id=l7xx74cb3784a9c2434882132b32d82cece6&" +
     "redirect_uri=http://localhost:3000/authResult&" +
     "scope=login inquiry transfer&" +
     "auth_type=0&" +
     "invoke_type=ajax";
    let requestURL = 'https://testapi.open-platform.or.kr/oauth/2.0/authorize2' + qs;
    option = {
      header : {
        'Authorization : Bearer ' + token;
      }
    }
    request(option,function(error,response,body) {
      console.log(JSON.parse(body)); //
    })
  }*/


 /*var qs =
  "?response_type=code&" +
  "client_id=l7xx74cb3784a9c2434882132b32d82cece6&" +
  "redirect_uri=http://localhost:3000/authResult&" +
  "scope=login inquiry transfer&" +
  "auth_type=0&" +
  "invoke_type=ajax";

  $(".signupbtn").click(function(){

      $.ajax({
        url:'https://testapi.open-platform.or.kr/oauth/2.0/authorize2' + qs,
        type: 'get',
      }).done(function(result) {
        console.log(result);
        window.name = "parents";
        var tmpwin = window.open("about:blank");
        tmpwin.location.href = result.location;
        $(".signupbtn").prop("disabled",true);
        $(".signupbtn").css("background","gray");
        $(".signupbtn").text('완료');
      });

      //console.log("server log : " + input_name,input_phone,input_age);
  })*/
