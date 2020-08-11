module.exports = {
    validarData(data){
        if(data.length != 10){
            return false;
        }
        if(data.split('-')[0].length != 4){
            return false
        }
        if(data.split('-')[1].length != 2){
            return false
        }
        if(data.split('-')[2].length != 2){
            return false
        }
        
        return true
    }
}