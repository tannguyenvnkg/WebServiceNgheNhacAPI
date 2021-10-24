const Song = require('../models/Song');
const Category = require('../models/Category');
const Singer = require('../models/Singer');
class InsertController {

    // [POST] /Insert 
    index(req, res) {
       res.json({error: true, message: 'Notthing Happened hihihi!!!!'});
    }

    // [POST] /InsertCategory
    insertCategory(req, res) {
        Category.insertMany([
            {categoryname: 'Nhạc trẻ'},
            {categoryname: 'Rock'},
            {categoryname: 'Jazz'},
            {categoryname: 'Blues'},
            {categoryname: 'Hip hop'},
            {categoryname: 'Nhạc đồng quê'},
            {categoryname: 'R&B'},
            {categoryname: 'Pop'},
            {categoryname: 'Ballad'},
            {categoryname: 'Bolero'},
            {categoryname: 'Rap'},
        ]).then(function(){
            res.json({error: false, message: 'Insert Success'});
        }).catch(function(err){
            res.json({error: true, message: err.message});
        });
    }

    // [DELETE] /DeleteCategory
    deleteCategory(req, res) {
        Category.deleteMany().then(function(){
            res.json({ error: false, message: 'Delete Category Success' });
        }).catch(function(err){
            res.json({ error: true, message: err.message });
        });
    }

    // [POST] /InsertSinger
    insertSinger(req, res) {
        // {singername: '', image: ''},
        Singer.insertMany([
            {singername: 'Sơn Tùng M-TP', image: 'https://static.wikia.nocookie.net/rapviet/images/c/c7/Mtp.jpg/revision/latest?cb=20190703144520&path-prefix=vi'},
            {singername: 'Noo Phước Thịnh', image: 'https://static2.yan.vn/YanNews/2167221/201905/tieu-su-ca-si-noo-phuoc-thinh-e28ca8c5.jpg'},
            {singername: 'Karik', image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/06/29/0/9/e/a/1593412376912_600.jpg'},
            {singername: 'Soobin Hoàng Sơn', image: 'https://vnn-imgs-f.vgcloud.vn/2019/02/22/09/img-3722.jpg'},
            {singername: 'Amee', image: 'https://static2.yan.vn/YanNews/2167221/201905/amee-la-ai-tieu-su-su-nghiep-va-doi-tu-nu-ca-si-c15b8814.jpg'},
            {singername: 'Trịnh Thăng Bình', image: 'https://cdn.vietnammoi.vn/stores/news_dataimages/thuynto/122016/05/12/2940_2.jpg'},
            {singername: 'Phan Mạnh Quỳnh', image: 'https://vnn-imgs-f.vgcloud.vn/2019/06/05/11/phan-manh-quynh-mv-moi-la-cau-chuyen-that-cua-toi-va-ban-gai-1.jpg'},
            {singername: 'Miu Lê', image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/4/b/a/44ba1dda7acac57805e5b8f2f4f41f5d.jpg'},
            {singername: 'Tóc Tiên', image: 'https://image.thanhnien.vn/1200x630/Uploaded/2021/drkxrvyxqx/2019_08_16/18485720_1711086485588058_5366180264398570304_n_zstn.jpg'},
            {singername: 'Chipu', image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/CHI_PU_2021.jpg'},
            {singername: 'B Ray', image: 'https://vnn-imgs-f.vgcloud.vn/2021/07/09/16/rapper-b-ray-tro-lai-lang-nhac-sau-thoi-gian-vang-bong.jpg'},
            {singername: 'Binz', image: 'https://tudienwiki.com/wp-content/uploads/2020/09/Binz.png'},
            {singername: 'Justatee', image: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/07/22/f/e/a/2/1563758181487_600.jpg'},
            {singername: 'Blackpink', image: 'https://media-cdn.laodong.vn/storage/newsportal/2021/10/16/964439/Blackpink.jpg?w=414&h=276&crop=auto&scale=both'},
            {singername: 'Liz Kim Cương', image: 'http://imagesfb.tintuc.vn/upload/images/hungyen/20170815/kim%20cuong%207.jpg'},
            {singername: 'Đức Phúc', image: 'https://image.thanhnien.vn/768/uploaded/hienth/2020_01_23/53167553_2122687297838771_6964634450827149312_o_gnbk.jpg'},
            {singername: 'Erik', image: 'https://vcdn-ngoisao.vnecdn.net/2021/01/11/erik-1-8030-1608477898-7163-1610308913.jpg'},
            {singername: 'Hòa Minzy', image: 'https://event.mediacdn.vn/257767050295742464/image/hot14/2021/1/28/chau-dang-khoa-12-16118241715851862549255.png'},
            {singername: 'Độ Mixi', image: 'https://event.mediacdn.vn/2020/10/13/do-mixi-2-16025682119328247512.png'},
            {singername: 'Đen Vâu', image: 'https://35express.org/wp-content/uploads/2020/01/den-vau-la-ai-35express.jpg'},
            {singername: 'Vũ', image: 'https://event.mediacdn.vn/2020/11/30/vu-p-16067234297342144615946.png'},
            {singername: 'Ricky Star', image: 'https://static.wikia.nocookie.net/producerviet/images/3/3e/Ricky_star.png/revision/latest?cb=20210520035022&path-prefix=vi'},
            {singername: 'Văn Mai Hương', image: 'https://nld.mediacdn.vn/2019/12/29/6716381322695000964524381462744021385347072n-15713141106921638035888-crop-15713141234082134792643-1577594090575458194441.jpg'},
        ]).then(function(){
            res.json({ error: false, message: 'Insert Success'});
        }).catch(function(err){
            res.json({ error: true, message: err.message});
        });
    }

    // [DELETE] /DeleteSinger
    deleteSinger(req, res) {
        Singer.deleteMany().then(function(){
            res.json({ error: false, message: 'Delete Singer Success'});
        }).catch(function(err){
            res.json({ error: true, message: err.message});
        });
    }
}

module.exports = new InsertController;