const User = require('../models/User');

class LogInController {

    // [GET] /LogIn?username='values'&password='values'
    index(req, res) {
        const taikhoan = req.query.username;
        const mk = req.query.password;
        User.findOne({
            $or:[
                {username: taikhoan},
                {email: taikhoan}
            ],
            $and:[
                {password: mk}
            ]
        },function(err, user) {
            console.log(user)
            if(err) {
                res.json( {error: true, 
                message : "Lỗi hệ thống vui lòng đăng nhập lại sau"
                }); 
                return;
            }
            if(user === null){
                res.json({error: true, message: 'Sai tài khoản khoản hoặc mật khẩu'});
            }
            else {
                res.json({
                    error: false, 
                    message: 'Đăng nhập thành công', 
                    user
                });
            }
        });
    }
}

module.exports = new LogInController;