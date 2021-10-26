const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const InsertCategoryController = require('../app/controllers/Insert/InsertCategoryController');
const InsertSingerController = require('../app/controllers/Insert/InsertSingerController');
// const InsertControllerAutomaly = require('../app/controllers/InsertControllerAutomaly');


// // auto insert and delete 
// router.use('/DeleteCategoryAutomaly',InsertControllerAutomaly.deleteCategoryAutomaly);
// router.use('/DeleteSingerAutomaly',InsertControllerAutomaly.deleteSingerAutomaly);

// router.use('/InsertCategoryAutomaly',InsertControllerAutomaly.insertCategoryAutomaly);
// router.use('/InsertSingerAutomaly',InsertControllerAutomaly.insertSingerAutomaly);
// // ==========================================================================


//insert song 
router.get('/insertCategory',InsertCategoryController.insertCategory);
router.post('/insertCategoryPost',InsertCategoryController.insertCategoryPost);

//insert singer
var storageImageSinger = multer.diskStorage({
    destination: function (req, file, cb) {
    const pathSingerImage = path.join(__dirname, '../','public','image','singer','/');
      cb(null, pathSingerImage)
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + file.originalname )
    }
  })
   
  var uploadImageSinger = multer({ storage: storageImageSinger })

router.get('/insertSinger',InsertSingerController.insertSinger);
router.post('/insertSingerPost', uploadImageSinger.single('image'),InsertSingerController.insertSingerPost);
//==========================================================================
router.use('/',InsertCategoryController.index);

module.exports = router;