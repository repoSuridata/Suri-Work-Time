module.exports = {
    validarData(data){
        if(data.length != 7){
            return false;
        }
        if(data.split('-')[0].length != 4){
            return false
        }
        if(data.split('-')[1].length != 2){
            return false
        }
        
        return true
    }
}