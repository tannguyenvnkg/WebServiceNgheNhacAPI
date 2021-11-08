
const {mutipleMongooseToObject} = require('../../../util/mongoose');
const Category = require('../../models/Category');

class InsertCategoryController {

    // [GET] / 
    index(req, res) {
       res.json({error: true, message: 'Notthing Happened hihihi!!!!'});
    }

    // [GET] /insertCategory 
    insertCategory(req, res) {
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        res.render('insertlayouts/InsertCategory');
    }

    // [POST] /insertCategoryPost 
    insertCategoryPost(req, res){
        const category = new Category(req.body);
        category.save()
                .then(function(){
                    res.json( {status : 'Thêm thể loại nhạc thành công!!!'})
                })
                .catch(function(err){
                    res.json({ status: 'Thêm Thể loại nhạc thất bại\n ', error_message: err.message })
                })
    }
}

module.exports = new InsertCategoryController;