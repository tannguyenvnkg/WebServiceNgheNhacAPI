const User = require('../models/User');

class UpdateUserController{

    //[PUT] /updateuser?email="value"&name="value"&sex="value"
    index(req,res, next) {
        const email = req.query.email;
        const name = req.query.name;
        const sex = req.query.sex;
        User.findOne({ email : email}, function(err, user) {
            
            if(!err) {
                if(user === undefined) {
                    res.json({
                        error: true,
                        message : "Email này chưa tồn tại"
                    })
                }
                else {
                    user.name = name;
                    user.sex = sex;
                    user.save(function(err1) {
                        if(!err1) {
                            res.json({
                                error: false,
                                message : "Thay đổi thành công",
                                user
                            })
                        }
                        else{
                            console.log(err);
                        }
                    })
                }
            }
            else {
                console.log(err);
            }
        })
    } 
}

module.exports = new UpdateUserController;