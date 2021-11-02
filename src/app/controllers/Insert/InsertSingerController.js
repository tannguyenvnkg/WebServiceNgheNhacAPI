
const Singer = require('../../models/Singer');
class InsertSingerController {

    // [GET] /insertSinger 
    insertSinger(req, res) {
        console.log('req.hostname: ' + req.hostname);
        console.log('req.port: ' + req.headers.host);
        res.render('insertlayouts/InsertSinger');
    }

    // [POST] /insertSingerPost 
    insertSingerPost(req, res){
    
        console.log('req.file.path: ' + req.file.path);
        console.log('req.file.pathname: ' + req.file.filename);
        console.log('req.body.singername: ' + req.body.singername);

        req.body.image = req.protocol + '://' + req.headers.host + '/image/imagesinger/' + req.file.filename;
        console.log(req.body);
        const singer = new Singer(req.body);
        singer.save()
            .then(function(){
                res.json( {status : 'Thêm ca sĩ thành công!!!'})
            })
            .catch(function(err){
                res.json({ status: 'Thêm ca sĩ thất bại\n ', error_message: err.message })
            })          
    }
}

module.exports = new InsertSingerController;