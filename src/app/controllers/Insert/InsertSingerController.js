
const Singer = require('../../models/Singer');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

class InsertSingerController {

    // [GET] /insertSinger 
    insertSinger(req, res) {
        res.render('insertlayouts/InsertSinger');
    }

    // [POST] /insertSingerPost 
    insertSingerPost(req, res){
        // const singer = new Singer(req.body);
        console.log('req.file.path: ' + req.file.path);
        console.log('req.file.pathname: ' + req.file.filename);
        console.log('req.body.singername: ' + req.body.singername);

        
        req.body.image = '/image/imagesinger/' + req.file.filename;
        console.log(req.body);
        const singer = new Singer(req.body);
        singer.save()
                .then(function(){
                    res.json( {status : 'Thêm ca sĩ thành công!!!'})
                })
                .catch(function(err){
                    res.json({ status: 'Thêm ca sĩ thất bại\n ', error_message: err.message })
                })

        // res.json({values: req.body});

        
        // const pathSingerImage = path.join(__dirname, '../../../','public','image','singer','/');
        // console.log('đường dẫn : ' + pathSingerImage);

        // var form = new formidable.IncomingForm();
        // form.parse(req, function (err, fields, file) {
        //     var path = file.image.path; // temp path
        //     var filename = time + file.image.name; // file name :  time + name 
        //     var newpath = pathSingerImage + filename;
        //     fs.copyFile (path, newpath, function (err) {
        //         if (err) throw err;

        //         res.end(time);
        //     });
        // });
    }
}

module.exports = new InsertSingerController;