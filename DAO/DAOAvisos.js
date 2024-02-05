"use strict"

class DAOAvisos {
    #poolConnections;
    constructor(poolConnections) {
        this.#poolConnections = poolConnections;
    }

    getAvisos(email, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT A.tipo, A.texto, A.fecha, A.id, A.textoTecnico, "+
                    "(SELECT U.nombre FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idTecnico) AS nombre, "+
                    "(SELECT f.categoria FROM ucm_aw_cau_fun_funciones f WHERE id = A.idFuncion) AS categoriaFuncion, "+
                    "(SELECT nombre FROM ucm_aw_cau_fun_funciones WHERE id=idFuncion) AS funcion "+
                    "FROM ucm_aw_cau_avi_avisos A WHERE A.terminado = 0 AND "+
                    "A.idUsuario IN (SELECT id FROM ucm_aw_cau_usu_usuarios WHERE correo = ?);", [email],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    getAvisosHistorico(email, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT A.tipo, A.texto, A.fecha, A.id, A.textoTecnico, "+
                    "(SELECT U.nombre FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idTecnico) AS nombre, "+
                    "(SELECT f.categoria FROM ucm_aw_cau_fun_funciones f WHERE id = A.idFuncion) AS categoriaFuncion, "+
                    "(SELECT nombre FROM ucm_aw_cau_fun_funciones WHERE id=idFuncion) AS funcion FROM ucm_aw_cau_avi_avisos A "+
                    "WHERE A.terminado = 1 AND A.idUsuario IN (SELECT id FROM ucm_aw_cau_usu_usuarios WHERE correo = ?);", [email],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    getAvisosTecnicos(callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT * , (SELECT U.nombre FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idUsuario) AS nombre, " +
                    "(SELECT f.categoria FROM ucm_aw_cau_fun_funciones f WHERE id = A.idFuncion) AS categoriaFuncion, " +
                    "(SELECT nombre FROM ucm_aw_cau_fun_funciones WHERE id=idFuncion) AS funcion, " + 
                    "(SELECT U.perfilUniversitario FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idUsuario) AS perfilUniversitario FROM ucm_aw_cau_avi_avisos A WHERE A.terminado = 0;",
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    getAvisosTecnicoAsignado(id, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT * ,(SELECT U.nombre FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idUsuario) AS nombreU, " +
                    "(SELECT U.perfilUniversitario FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idUsuario) AS perfilU, " +
                    "(SELECT F.categoria FROM ucm_aw_cau_fun_funciones F WHERE F.id = A.idFuncion) AS tipoFuncion, " +
                    "(SELECT F.nombre FROM ucm_aw_cau_fun_funciones F WHERE F.id = A.idFuncion) AS funcion FROM ucm_aw_cau_avi_avisos A WHERE A.idTecnico = ? AND A.terminado = 0", [id],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    getAvisosHistoricoTecnico(email, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT A.tipo, A.texto, A.fecha, A.id, A.textoTecnico, "+
                    "(SELECT U.nombre FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idUsuario) AS nombre, "+
                    "(SELECT f.categoria FROM ucm_aw_cau_fun_funciones f WHERE id = A.idFuncion) AS categoriaFuncion, "+
                    "(SELECT nombre FROM ucm_aw_cau_fun_funciones WHERE id=idFuncion) AS funcion, "+
                    "(SELECT U.perfilUniversitario FROM ucm_aw_cau_usu_usuarios U WHERE U.id = A.idUsuario) AS perfilUniversitario "+
                    "FROM ucm_aw_cau_avi_avisos A WHERE A.terminado = 1 AND "+
                    "A.idTecnico IN (SELECT id FROM ucm_aw_cau_usu_usuarios WHERE correo = ?);", [email],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    getTiposAvisos(tipoCuenta, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT nombre, id, categoria FROM ucm_aw_cau_fun_funciones WHERE perfil_universitario = ?", [tipoCuenta],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    getTiposFelicitaciones(callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT nombre, id FROM ucm_aw_cau_fun_funciones WHERE categoria = 'Felicitacion'",
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, []);
                            }
                            else{
                                callback(null, result);
                            }
                        }
                    })
                }
            }
        )
    }

    addAviso(tipo, texto, idUsuario, idFuncion, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(new Error("Error de conexion a la base de datos"));
                }
                else{
                    connection.query("INSERT INTO ucm_aw_cau_avi_avisos (tipo, texto, idUsuario, idFuncion) VALUES (?,?,?,?)", [tipo, texto, idUsuario, idFuncion],
                    function(err, message){
                        connection.release();
                        if (err){
                            callback(new Error("Error de acceso a la base de datos"));
                        }
                        else{
                            callback(null, true);
                        }
                    })
                }
        })
    }
      
    terminarAviso(idAviso, textoTecnico, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("UPDATE ucm_aw_cau_avi_avisos SET textoTecnico = ?, terminado = 1 WHERE id = ?", 
                    [textoTecnico, idAviso],
                    function(err, result){
                        connection.release();
                        if(err){                           
                            callback(err.message, true);
                        }
                        else{
                            callback(null, false);
                        }
                    });
                }
            }
        );
    }

    asignarAviso(idFuncion, idTecnico, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    console.log(idFuncion + idTecnico);
                    connection.query("UPDATE ucm_aw_cau_avi_avisos SET idTecnico = ? WHERE id = ?", [idTecnico, idFuncion],
                    function(err, message){
                        connection.release();
                        if (err){
                            callback(err.message);
                        }
                        else{
                            console.log("entra bien")
                            callback(null, true);
                        }
                    });
                }
        });
    }
    
}

module.exports = DAOAvisos;