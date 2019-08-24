const mongoose=require("mongoose")
//定义一个集合的结构，这个集合中的每条数据由那些字段
const CartSchema=new mongoose.Schema({
    username:String,
    cartsid:{type:String},

    cartsName:{type:String,required:true},
    cartsPrice:{type:Number,required:true},
    cartsImg:{type:String,required:true},
    cartsDesc:String,
    cartsType:{type:String},
    

    buyNum:{type:Number,required:1},
    cartsNum:{type:Number},
})

//2：实例化一个操作用户集合的model，相当于一个集合
const Cart=mongoose.model("cart",CartSchema)

//导出这个函数
module.exports=Cart