module.exports = {
    removeNewObjectID: function(objectID){
        return objectID.replace(/new|ObjectId|(|)|"/g,'');
    }
}