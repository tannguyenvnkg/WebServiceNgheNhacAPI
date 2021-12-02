const Singer = require('../models/Singer');
class TestController {
    
    index(req, res) {
        console.log(req.body.listid)
        console.log(req.body)
        res.json({error:false,message:'notthing happen hihihihi'})
    }

    async TestArrayWithSingerID(req, res){
        try {
            console.log(req.body);
            const singer = await Singer.find({_id: {$in: req.body.listid}});
            
            console.log(singer);
            if(singer.length !== 0){
                res.json({ error:false, singer });
            }
            else{
                res.json({ error:true, message: 'không tìm thấy singer' });
            }
        } catch (error) {
            res.json({ error:true, message: error.message, note: 'ID ca sĩ có thể không hợp lệ' });
        }
    }
}

module.exports = new TestController;