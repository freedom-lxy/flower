const express = require('express')
const Cart = require('../db/model/cart')
const Goods = require('../db/model/goods')
const jwt = require('../utils/jwt')
const router = express.Router()

// 定义一个全局的username
let username

// 拦截，判断用户是否登录
router.use('/', (req, res, next) => {
    const { token } = req.body
    // 校验token
    jwt.checkToken(token)
        .then((data) => { // 校验成功
            username = data.username

            next()
        })
        .catch((err) => { // 校验失败
            console.log(err)
            res.send({
                code: -2,
                msg: '用户未登录'
            })
        })

})

router.post("/add", (req, res) => {
    const { cartsId, buyNum } = req.body

    Cart.find({
        username,
        cartsId
    })
        .then((data) => {
            if (data.length) {
                const CartItem = data[0]
                
                Cart.updateOne(
                    CartItem, {
                        $set: { buynum: CartItem.buyNum + buyNum * 1 }
                    }
                )
                    .then((data) => {
                        res.send({
                            code: 1,
                            msg: "添加到购物车成功",
                            info: data
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        res.send({
                            code: 0,
                            msg: "添加到购物车失败"
                        })
                    })
            } else {
                Goods.find({
                    _id: cartsId
                })
                    .then((data) => {

                        const goodsItem = data[0];
                        

                        Cart.insertMany({
                            username,

                            cartsId: goodsItem._id,
                            cartsName: goodsItem.goodsName,
                            cartsPrice: goodsItem.goodsPrice,
                            cartsImg: goodsItem.goodsImg,
                            cartsDesc: goodsItem.goodsDesc,
                            cartsType: goodsItem.type,

                            buyNum
                        })
                       
                            .then((data) => {
                                res.send({
                                    code: 1,
                                    msg: "添加到购物车",
                                    info: data
                                })
                            })
                            .catch((err) => {
                                console.log(err)
                                res.send({
                                    code: 0,
                                    msg: "添加到购物车失败"
                                })
                            })
                    })

            }
        })
})

router.post("/list", (req, res) => {
    Cart.find({
        username
    })
        .then((data) => {
            res.send({
                code: 1,
                msg: "获取购物车成功",
                list: data
            })
        })
        .catch((err) => {
            console.log(err)
            res.send({
                code: 0,
                msg: "获取购物车失败",

            })
        })
})

router.post("/del",(req,res)=>{
    const {id}=req.body
    const id_arr=id.split(",")
    Cart.deleteMany({
        _id:{
            $in:id_arr
        }
    })
    .then(()=>{
        res.send({
            code:1,
            msg:"删除成功"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({
            code:0,
            msg:"删除失败"
        })
    })
})

router.post("/update",(req,res)=>{
    const {id,buyNum}=req.body
    Cart.find({
        _id:id
    })
    .then((data)=>{
        const CartItem=data[0]

        return Cart.updateMany(
            CartItem,{
                $set:{buyNum}
            }
        )
    })
    .then((data)=>{
        res.send({
            code:1,
            msg:"购物车更新成功",
            info:data
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({
            code:0,
            msg:"购物车更新失败"
        })
    })
})



module.exports = router