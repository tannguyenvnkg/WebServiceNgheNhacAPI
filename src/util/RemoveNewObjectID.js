module.exports = {
    removeNewObjectID: function(objectID){
        return objectID.replace(/{|_id|:|new|ObjectId|(|)|}| |"/g,'');
    },
    addObjectID: function(objectID){
        return 'ObjectId("'+objectID+'")'
    }
}