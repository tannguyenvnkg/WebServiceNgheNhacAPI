const User = require('../models/User');

class SignUpController {

    index(req,res, next) {
        const hoten = req.query.name;
        const mk = req.query.password;
        const gioitinh = req.query.sex;
        const email = req.query.email;
        User.find({
            email : email 
        },function(err, listUser){
            if(err) {
                console.log(err);
                return;
            }
            if (listUser[0] !== undefined) {
                res.json({error: true, message: 'Email này đã tồn tại'});
                
            }
            else {             
                // const user = new User({
                //     username : '',
                //     name : hoten,
                //     password : mk,
                //     sex : gioitinh,
                //     email : email,
                //     followPlaylist : []
                // });
                User.create({
                    username : '',
                    name : hoten,
                    password : mk,
                    sex : gioitinh,
                    email : email,
                    //followPlaylist : []
                }, function(err) {
                    if(err) {
                        res.json({error: true, message: err.message});
                        console.log(err.message)
                    }
                    else {
                        res.json({error: false, message: 'Đăng Ký thành công'});
                    }
                })
                // const users = [user]
                // User.insertMany(users).then(function() {
                //     res.json({error: false, message: 'Insert Success'});
                //     }).catch(function(err){
                //     res.json({error: true, message: err.message});
                // });
                // user.save(function(err){
                //     if(err) {
                //         res.json({
                //             error: true, 
                //             message : err.message
                //         })
                //     }
                //     else {
                //         res.json({
                //             error: false, 
                //             message: '', 
                //             user
                //         });
                //     }
                // });
            }
        })
    }
}

module.exports = new SignUpController;