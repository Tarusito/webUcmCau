"use strict"

class utils{
    constructor() {
    }
    
    checkContrasenias(contrasenia, contrasenia2){
        if(contrasenia === contrasenia2){
            if(/^(?=.*[\W])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/.test(contrasenia))
                return true;
            else 
                return false;
        }
        else 
            return false;
    }

    checkCorreo(correo){
        if(correo.length <= 60){
            if(/^\w+([\.-]?\w+)*@ucm.es$/.test(correo))
                return true;
            else return false;  
        }
        else
            return false;
    }

    checkImage(imagen){
        return imagen == undefined || /.jpeg$/.test(imagen);
    }

    transformarContrasenia(contrasenia){
        let cifrada = "";
        for(let i = 0; i < contrasenia.length; i++){
            cifrada += "*";
        }
        return cifrada;
    }
}

module.exports = utils;