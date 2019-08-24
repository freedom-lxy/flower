const express=require('express')
const Goods=require('../db/model/goods')

const router=express.Router()


router.post('/swiper',(req,res)=>{
    Goods.find({
        swiper:'轮播图'
    })
    .limit(3)
    .then((data)=>{
        res.send({
            code:1,
            msg:"轮播图获取成功",
            list:data
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({
            code:0,
            msg:"轮播图获取失败"
        })
    })
})


router.post('/hot',(req,res)=>{
    Goods.find({
        type:"观叶绿植"
    })
    .limit(8)
    .then((data)=>{
        res.send({
            code:1,
            msg:"热门推荐获取成功",
            list:data
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({
            code:0,
            msg:"热门推荐获取失败",
        })
    })
})

router.post("/fuzzy",(req,res)=>{
    const {type}=req.body
    
    Goods.find(
        
        {type:type}
    )
    
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"模糊查询成功",
            list:data

        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"模糊查询失败"
        })
    })
})


router.post("/list",(req,res)=>{
    Goods.find({type:"观叶绿植"})
    .limit(6)
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"获取分类成功",
            list:data
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"获取分类失败",
        })
    })
    
})
router.post("/list1",(req,res)=>{
    Goods.find({type:"观花绿植"})
    .limit(5)
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"获取分类成功",
            list:data
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"获取分类失败",
        })
    })
    
})
router.post("/list2",(req,res)=>{
    Goods.find({type:"观根绿植"})
   
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"获取分类成功",
            list:data
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"获取分类失败",
        })
    })
    
})
router.post("/list3",(req,res)=>{
    Goods.find({type:"多浆多肉"})
    
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"获取分类成功",
            list:data
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"获取分类失败",
        })
    })
    
})
router.post("/list4",(req,res)=>{
    Goods.find({type:"高级花盒"})
    .limit(6)
    
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"获取分类成功",
            list:data
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"获取分类失败",
        })
    })
    
})
router.post("/list5",(req,res)=>{
    Goods.find({type:"精品花束"})
    .limit(6)
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"获取分类成功",
            list:data
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"获取分类失败",
        })
    })
    
})

router.post("/detail",(req,res)=>{
    let {goodsId}=req.body
    Goods.find({
        _id:goodsId
    })
    
    .then((data)=>{
        res.send({
            code:1,
            msg:"商品详情查询成功",
            list:data[0]
        })
    })
    .catch((res)=>{
        console.log(res)
        res.send({
            code:0,
            msg:"商品详情查询失败",
        })
    })
    
})
router.post("/search",(req,res)=>{
    const {key}=req.body
    const regExp=new RegExp(key,"gi")

    Goods.find({
        $or:[
            {goodsName:{$regex:regExp}},
            {type:{$regex:regExp}},
            {goodsDesc:{$regex:regExp}}
        ]
    })
    .then((data)=>{
        res.send({
            code:1,
            msg:"查询成功",
            list:data
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({
            code:0,
            msg:"查询失败"
        })
    })
})

router.post("/fu",(req,res)=>{
    let{pageNum,key,type,rank,order,pageSize}=req.body
    pageNum=pageNum-0||1
    pageSize=pageSize-0||4
    const regExp=new RegExp(key,"ig")
    Goods.find({
        $or:[
            {goodsName:{$regex:regExp}},
            {type:{$regex:regExp}},
            {goodsDesc:{$regex:regExp}}
        ]}
    )
    .sort(
        !rank?{}:{[rank]:order}
    )
    .skip((pageNum-1)*pageSize)
    .limit(pageSize)
    .then((data)=>{
        res.send({
            code:1,
            msg:"模糊查询成功",
            list:data
        })
    })
    .catch((err)=>{
        console.log(err)
        res.send({
            code:0,
            msg:"模糊查询失败"
        })
    })
})
module.exports=router