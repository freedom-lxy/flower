const mongoose=require("mongoose")
//定义一个集合的结构，这个集合中的每条数据由那些字段
const GoodsSchema=new mongoose.Schema({
    id:{type:String,required:true},

    goodsName:{type:String,required:true},
    goodsPrice:{type:Number,required:true},
    goodsImg:{type:String,required:true},
    goodsDesc:String,
    type:String,
   

    goodsNum:{type:Number,required:0},
    
})

//2：实例化一个操作用户集合的model，相当于一个集合
const Goods=mongoose.model("goods",GoodsSchema)

//导出这个函数
module.exports=Goods