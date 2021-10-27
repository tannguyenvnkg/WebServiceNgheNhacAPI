const User = require('../models/User');

class SignInController {

    // [GET] /sigIn?q='values'&p='values'
    index(req, res, next) {
        const taikhoan = req.query.q;
        const mk = req.query.p;
        console.log(taikhoan);
        console.log(mk);
        if (taikhoan == '' || mk == ''){ // empty query
            res.json({error: true,  message: 'Vui lòng điền đầy đủ thông tin'});
        }
        else {
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
                    message : err.message
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
}

module.exports = new SignInController;