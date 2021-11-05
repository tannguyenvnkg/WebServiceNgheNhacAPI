const User = require('../models/User');

class LogInController {

    // [GET] /LogIn?username='values'&password='values'
    index(req, res) {
        const taikhoan = req.query.username;
        const mk = req.query.password;
        console.log(taikhoan);
        console.log(mk);
        User.find({
            $or:[
                {username: taikhoan},
                {email: taikhoan}
            ],
            $and:[
                {password: mk}
            ]
        },function(err, listUser) {
            console.log(listUser)
            if(err) {
                res.json( {error: true, 
                message : "Lỗi hệ thống vui lòng đăng nhập lại sau"
                }); 
                return;
            }
            if(listUser[0] === undefined){
                res.json({error: true, message: 'Sai tài khoản khoản hoặc mật khẩu'});
            }
            else {
                res.json({
                    error: false, 
                    message: 'Đăng nhập thành công', 
                    listUser
                });
            }
        });
    }
}

module.exports = new LogInController;