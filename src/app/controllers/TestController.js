const Singer = require('../models/Singer');
class TestController {
    
    index(req, res) {
        console.log(req.body.listid)
        console.log(req.body)
        res.json({error:false,message:'notthing happen hihihihi'})
    }

    async TestArrayWithSingerID(req, res){
        try {
            console.log(req.body.listid);
            console.log(req.body);
            const singer = await Singer.find({_id: {$in: req.body.listid}});
            res.json({
                error:false,
                singer
            });
            // res.json({error:false,message:'TestArrayWithSingerID: notthing happen hihihihi'});
        } catch (error) {
            res.json({ error:true, message: error.message });
        }
    }
}

module.exports = new TestController;