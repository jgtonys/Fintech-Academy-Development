const async = require('async');
const _ = require('lodash');
const jwt = require('../../config/jwt');
const db = require('../../config/db');


/**
 * POST: /authResult
 * 초기 토큰 발급
 **/


module.exports.authResult = (req, res, next) => {
  let code = req.query.code;
  let option = {
    method : 'POST',
    url : 'https://testapi.open-platform.or.kr/oauth/2.0/token',
    header : 'Content-type: application/x-www-form-urlencoded; charset=UTF-8',
    form : {
      code : code,
      client_id : 'l7xx74cb3784a9c2434882132b32d82cece6',
      client_secret : 'e7bb72e60ffb4e7e9981a9c8a53340a7',
      redirect_uri : 'http://localhost:3000/authResult',
      grant_type : 'authorization_code'
    }
  }
  request(option, function(err,response,body) {
    console.log(body);
    res.send(body);
  });
}


/**
 * POST: /user/me
 * 계좌 실명 조회
 **/

 module.exports.userMe = (req, res, next) => {
   const token, use_num;
   const qs = 'user_seq.no' + use_num;
   let uequestURL = 'https://testapi.open-platform.or.kr/user/me?';
   option = {
     header : {
       'Authorization : Bearer ' + token;
     }
   }
   request(option,function(error,response,body) {
     console.log(JSON.parse(body)); //
   })
 }


 /**
  * GET:
  * 최초 토큰 발급
  **/


  module.exports.generateToken = (req, res, next) => {
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
  }


 var qs =
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
  })
