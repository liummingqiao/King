module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // bucause quote date base `s request-all ,use 
    //  const Category = mongoose.model('Category') is OK
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    router.get('/news/init', async (req, res) => {
        //find 新闻资讯 class   
        const parent = await Category.findOne({
            name: '新闻资讯'
        })
        const category = await Category.find().where({
            parent: parent
        }).lean()
        const newstitle = ["周年庆版本爆料③ | 对局体验大提升，残血不怕打错人！", "周年庆版本爆料② | 装备、技能、野怪现已加入特效套餐！", "网络不在状况？试试腾讯手游加速器", "99公益日，王者峡谷“益”起来", "Pick Me | 喊出我的新皮肤名字~“无限星赏官！”", "9月10日全服不停机优化公告", "9月10日全服不停机更新公告", "净化游戏环境声明及处罚公告（9月1日-9月9日）", "9月10日“演员”惩罚名单", "9月10日外挂专项打击公告", "花好月圆 中秋佳节福利活动周开启", "【预告】峡谷益起做好事 拿专属头像框活动公告", "浓情九月 秋日活动来袭", "最强战队争霸赛入围赛过半，晋级名额争夺激烈！", "乘风破浪闯峡谷 SNK永久英雄免费拿", "【KPL今日预报】QGhappy vs VG，正名之战谁能证明自己？", "你是赛评师：诺言马超首秀胜利，2019E星年？", "【关于王者荣耀赛事积分年与世冠名额获取规则调整公告】", "【KPL三周年】今日原班人马重战六届总决赛 看直播赢KPL限定皮肤礼包！", "触手可及的高校荣耀，第六届高校联赛线上赛道即将开启"]
        const newslist = newstitle.map(title => {
            const catrandom = category.slice(0).sort((a, b) => Math.random() - 0.5);
            return {
                categorys: catrandom.slice(0, 2),
                title:title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newslist)
        res.send(newslist)
    })
    app.use('/web/api', router);
}