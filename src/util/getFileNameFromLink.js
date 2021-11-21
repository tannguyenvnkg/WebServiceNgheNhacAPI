function getFileName(path){
    console.log(path.split("/").pop())
    return path.split("/").pop();
}

module.exports ={
    getFileName
}