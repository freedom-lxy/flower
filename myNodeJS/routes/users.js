/*
	这是一个路由文件，写一个路由文件，一般分4步
*/

// 1.引入express
var express = require('express');

// 2.实例化路由，所有这个页面后面所有的操作都是针对router
var router = express.Router();

// 3.写接口，第一个方法是请求方式，有GET和POST
// 第一个参数是请求路径，实际的请求路径是外层路径加上这里的请求路径
// 第二个参数是回调函数，参数分别是请求对象、响应对象和next方法
router.get('/index', function (req, res, next) {
	// 使用解析语法获取GET请求的参数
	const {username,sex} = req.query

	// 调用res的send方法直接返回一段字符串
	// res.send(`hello ${username}`);
	res.send(req.query)
});

// 添加拦截器
router.get('/hello',(req,res,next) => {
	const {money} = req.query

	if(!money){
		res.send({
			money: '数字'
		})
	}else if(money<100){
		res.send('在忙，下次带money能不能凑够一个毛爷爷')
	}else{
		next()
	}
},(req,res) => {
	res.send('赶紧进来坐吧')
})

/**
 * @api {get} /users/login  这个是一个测试GET请求的接口
 * @apiName 登陆-GET
 * @apiGroup Users
 *
 * @apiParam {Sting} username 用户名.
 * @apiParam {Sting} password 密码.
 *
 * @apiSuccess {Number} code 状态码.
 * @apiSuccess {String} msg  提示信息.
 */



//登陆，get请求
router.get("/login",(req,res)=>{
	const{username,password}=req.query
	if(username=="liuxinyi"&&password=="123456"){
		res.send({
			code:1,
			msg:"正确"
		})
	}else{
		res.send({
			code:0,
			msg:"不正确"
		})
	}
})

/**
 * @api {POST} /users/login  这个是一个测试POST请求的接口
 * @apiName 登陆-POST
 * @apiGroup Users
 *
 * @apiParam {Sting} username 用户名.
 * @apiParam {Sting} password 密码.
 *
 * @apiSuccess {Number} code 状态码.
 * @apiSuccess {String} msg  提示信息.
 */

//登陆，post请求
router.post("/login",(req,res)=>{
	const{username,password}=req.body
	if(username=="liuxinyi"&&password=="123456"){
		res.send({
			code:1,
			msg:"正确"
		})
	}else{
		res.send({
			code:0,
			msg:"不正确"
		})
	}
})
// 4.导出整个路由
module.exports = router;
