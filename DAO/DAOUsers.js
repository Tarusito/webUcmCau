"use strict"

class DAOUsers {
    #poolConnections;
    constructor(poolConnections) {
        this.#poolConnections = poolConnections;
    }

    isUserCorrect(email, password, callback){
        this.#poolConnections.getConnection(
            function (err, connection) {
                if (err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT correo, contrasenia, id, tecnico FROM ucm_aw_cau_usu_usuarios WHERE correo = ? AND contrasenia = ? AND activo = 1", [email,password], 
                    function(err, user){
                        if(err){
                            connection.release();
                            callback(err.message);
                        }
                        else{
                            connection.release();
                            callback(null, user.length == 1, user[0]);
                        }
                    });
                }
            }
        );
    }

    getImage(email, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT imagen FROM ucm_aw_cau_usu_usuarios WHERE correo = ?", [email],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null);
                            }
                            else{
                                callback(null, result[0].imagen);
                            }
                        }
                    })
                }
            }
        );
    }

    getUserData(email, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT U.nombre, U.contrasenia, U.imagen, U.perfilUniversitario, U.id, U.fecha_creacion, U.tecnico, (SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idUsuario=U.id) AS nAvisos, " +
                    "(SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idUsuario=U.id AND A.tipo = 'Incidencia') AS nIncidencias, " +
                    "(SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idUsuario=U.id AND A.tipo = 'Sugerencia') AS nSugerencias, " +
                    "(SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idUsuario=U.id AND A.tipo = 'Felicitacion') AS nFelicitacion " +
                    "FROM ucm_aw_cau_usu_usuarios U WHERE U.correo = ?", [email],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, null);
                            }
                            else{
                                callback(null, result[0]);
                            }
                        }
                    })
                }
            }
        );
    }

    getTecnicoData(email, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT U.nombre, U.contrasenia, U.imagen, U.perfilUniversitario, U.id, U.fecha_creacion, U.tecnico, (SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idTecnico=U.id AND A.terminado=1) AS nAvisos, " +
                    "(SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idTecnico=U.id AND A.terminado=1 AND A.tipo = 'Incidencia') AS nIncidencias, " +
                    "(SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idTecnico=U.id AND A.terminado=1 AND A.tipo = 'Sugerencia') AS nSugerencias, " +
                    "(SELECT COUNT(*) FROM ucm_aw_cau_avi_avisos A WHERE A.idTecnico=U.id AND A.terminado=1 AND A.tipo = 'Felicitacion') AS nFelicitacion " +
                    "FROM ucm_aw_cau_usu_usuarios U WHERE U.correo = ?", [email],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, null);
                            }
                            else{
                                callback(null, result[0]);
                            }
                        }
                    })
                }
            }
        );
    }

    checkIDTecnico(id, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT * FROM ucm_aw_cau_idt_idtecnico WHERE id = ? AND enUso = 0", [id],
                    function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            if(result.length === 0){
                                callback(null, false);
                            }
                            else{
                                callback(null, true);
                            }
                        }
                    });
                }
            }
        );
    }

    insertUser(data, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("INSERT INTO ucm_aw_cau_usu_usuarios (`correo`, `nombre`, `contrasenia`, `imagen`, `perfilUniversitario`, `tecnico`, `numEmpleado`) VALUES (?, ?, ?, ?, ?, ?, ?)", 
                    [data.correo, data.nombre, data.contrasenia, data.imagen, data.perfilUniversitario, data.tecnico, data.nEmpleado],
                    function(err, result){
                        connection.release();
                        if(err)
                            callback(err.message);
                        else
                            callback(null);
                    });
                }
            }
        );
    }

    getTecnicos(callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT * FROM ucm_aw_cau_usu_usuarios WHERE tecnico = 1", function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            callback(null, result);
                        }
                    })
                }
            }
        );
    }

    getUsuarios(callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("SELECT * FROM ucm_aw_cau_usu_usuarios WHERE activo = 1", function(err, result){
                        connection.release();
                        if(err){
                            callback(err.message);
                        }
                        else{
                            callback(null, result);
                        }
                    })
                }
            }
        );
    }

    eliminarUsuario(idUsuario, callback){
        this.#poolConnections.getConnection(
            function(err, connection){
                if(err){
                    connection.release();
                    callback(err.message);
                }
                else{
                    connection.query("UPDATE ucm_aw_cau_usu_usuarios SET activo = 0 WHERE id = ?", [idUsuario],
                    function(err, message){
                        connection.release();
                        if (err){
                            callback(err.message);
                        }
                        else{
                            callback(null, true);
                        }
                    });
                }
        });
    }
}

module.exports = DAOUsers;