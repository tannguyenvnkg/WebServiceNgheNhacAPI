module.exports = {
    removeNewObjectID: function(objectID){
        return objectID.replace(/new|ObjectId|(|)|"/g,'');
    },
    addObjectID: function(objectID){
        return 'ObjectId("'+objectID+'")'
    }
}