"use strict"

// app.js
const DAOUsers = require("./DAO/DAOUsers")
const DAOAvisos = require("./DAO/DAOAvisos")
const utils = require("./utils");

const config = require("./config");
const path = require("path");
const mysql = require("mysql");
const multer = require("multer")
const moment = require("moment");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const session = require("express-session");
const mysqlSession = require("express-mysql-session");
const MySQLStore = mysqlSession(session);
const sessionStore = new MySQLStore({
    host: "localhost",
    user: "root",
    password: "",
    database: "UCM_CAU"
});

const middlewareSession = session({
    saveUninitialized: false,
    secret: "foobar34",
    resave: false,
    store: sessionStore
});



const multerFactory = multer({storage: multer.memoryStorage()});
// Crear un servidor Express.js
const app = express();

// Crear un pool de conexiones a la base de datos de MySQL
const pool = mysql.createPool(config.mysqlConfig);
//Instancias de DAO
const daoU = new DAOUsers(pool);
const daoA = new DAOAvisos(pool);
const util = new utils();

const ficherosEstaticos = path.join(__dirname, "public");

app.use(express.static(ficherosEstaticos));
app.use(bodyParser.urlencoded({extended: true}));
app.use(middlewareSession);

function comprobarUsuario(request, response, next){
    try{
        if (typeof request.session.currentUser.correo != undefined){
            response.locals.userEmail = request.session.currentUser.correo;
            next();
        }

    }
    catch{
        response.redirect("/login");
    }
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/login", function(request, response){
    response.status(200);
    response.render('login', {errorMsg: null});
});

app.get("/avisos", comprobarUsuario, function(request, response){
    response.status(200);

    daoA.getAvisos(request.session.currentUser.correo, cogerAvisos);
    function cogerAvisos(err, avi){
        if(err){
            response.status(500);
        }
        else{
            let avisos = avi;
            avisos.forEach(a => {a.fecha = moment(a.fecha).format('DD/MM/YYYY');})
            daoU.getUserData(request.session.currentUser.correo, cogerNombre);
            function cogerNombre(err, nombre){
                if(err){
                    response.status(500);
                }
                else{
                    let user = nombre;
                    user.fecha_creacion = moment(user.fecha_creacion).format('DD/MM/YYYY');
                    daoA.getTiposAvisos(user.perfilUniversitario, cogerListaTipos);
                    function cogerListaTipos(err, tipoAvisos){
                        if(err){
                            response.status(500);
                        }
                        else{
                            let tipos = tipoAvisos;
                            user.contrasenia = util.transformarContrasenia(user.contrasenia);
                            daoA.getTiposFelicitaciones(getFeli);
                            function getFeli(err, feli){
                                if(err){
                                    console.log(err.message);
                                }
                                else{
                                    let felicitaciones = feli;
                                    response.render('avisos', {user: user, avisos: avisos, tipos: tipos, felicitaciones: felicitaciones});
                                }
                                
                            }
                            
                        }                        
                    }
                    
                }
            }
        }
    }
    
});

app.get("/avisosHistorico", comprobarUsuario, function(request, response){
    response.status(200);

    daoA.getAvisosHistorico(request.session.currentUser.correo, cogerAvisos);
    function cogerAvisos(err, avi){
        if(err){
            response.status(500);
        }
        else{
            let avisos = avi;
            avisos.forEach(a => {a.fecha = moment(a.fecha).format('DD/MM/YYYY');})
            daoU.getUserData(request.session.currentUser.correo, cogerNombre);
            function cogerNombre(err, nombre){
                if(err){
                    response.status(500);
                }
                else{
                    let user = nombre;
                    user.fecha_creacion = moment(user.fecha_creacion).format('DD/MM/YYYY');
                    daoA.getTiposAvisos(user.perfilUniversitario, cogerListaTipos);
                    function cogerListaTipos(err, tipoAvisos){
                        if(err){
                            response.status(500);
                        }
                        else{
                            let tipos = tipoAvisos;
                            user.contrasenia = util.transformarContrasenia(user.contrasenia);
                            response.render('avisosHistorico', {user: user, avisos: avisos, tipos: tipos});
                        }                        
                    }
                    
                }
            }
        }
    }
    
});

app.get("/avisosHistoricoTecnico", comprobarUsuario, function(request, response){
    response.status(200);

    daoA.getAvisosHistoricoTecnico(request.session.currentUser.correo, cogerAvisos);
    function cogerAvisos(err, avi){
        if(err){
            response.status(500);
        }
        else{
            let avisos = avi;
            avisos.forEach(a => {a.fecha = moment(a.fecha).format('DD/MM/YYYY');})
            daoU.getTecnicoData(request.session.currentUser.correo, cogerNombre);
            function cogerNombre(err, nombre){
                if(err){
                    response.status(500);
                }
                else{
                    let user = nombre;
                    user.fecha_creacion = moment(user.fecha_creacion).format('DD/MM/YYYY');
                    daoA.getTiposAvisos(user.perfilUniversitario, cogerListaTipos);
                    function cogerListaTipos(err, tipoAvisos){
                        if(err){
                            response.status(500);
                        }
                        else{
                            let tipos = tipoAvisos;
                            user.contrasenia = util.transformarContrasenia(user.contrasenia);
                            response.render('avisosHistoricoTecnico', {user: user, avisos: avisos, tipos: tipos});
                        }                        
                    }
                    
                }
            }
        }
    }
    
});

app.get("/avisosTecnico", comprobarUsuario, function(request, response){
    response.status(200);
    daoA.getAvisosTecnicoAsignado(request.session.currentUser.id, cogerAvisos);
    function cogerAvisos(err, avi){
        if(err){
            response.status(500);
        }
        else{
            let avisos = avi;
            avisos.forEach(a => {a.fecha = moment(a.fecha).format('DD/MM/YYYY');})
            daoU.getTecnicoData(request.session.currentUser.correo, cogerNombre);
            function cogerNombre(err, nombre){
                if(err){
                    response.status(500);
                }
                else{
                    let user = nombre;
                    user.fecha_creacion = moment(user.fecha_creacion).format('DD/MM/YYYY');
                    user.contrasenia = util.transformarContrasenia(user.contrasenia);
                    response.render('tecnicoPrincipal', {user: user, avisos: avisos});
                }
            }
        }
    }
});

app.get("/avisosEntrantes", comprobarUsuario, function(request, response){
    response.status(200);
    daoA.getAvisosTecnicos(cogerAvisos);
    function cogerAvisos(err, avi){
        if(err){
            response.status(500);
        }
        else{
            let avisos = avi;
            avisos.forEach(a => {a.fecha = moment(a.fecha).format('DD/MM/YYYY');})
            daoU.getTecnicoData(request.session.currentUser.correo, cogerNombre);
            function cogerNombre(err, nombre){
                if(err){
                    response.status(500);
                }
                else{
                    let user = nombre;
                    user.fecha_creacion = moment(user.fecha_creacion).format('DD/MM/YYYY');
                    daoU.getTecnicos(cogerTecnicos);
                    function cogerTecnicos(err, tecn){
                        let tecnicos = tecn;
                        user.contrasenia = util.transformarContrasenia(user.contrasenia);
                        response.render('avisosEntrantes', {user: user, avisos: avisos, tecnicos:tecnicos});                        
                    }
                }
            }
        }
    }
});

app.get("/gestionUsuarios", comprobarUsuario, function(request, response){
    response.status(200);
    daoU.getUsuarios(cogerUsuarios);

    function cogerUsuarios(err, usuarios){
        if(err){
            response.status(500);
        }
        else{
            usuarios.forEach(u => {u.fecha = moment(u.fecha).format('DD/MM/YYYY');});
            daoU.getTecnicoData(request.session.currentUser.correo, cogerNombre);
            function cogerNombre(err, user){
                if(err){
                    response.status(500);
                }
                else{
                    user.fecha_creacion = moment(user.fecha_creacion).format('DD/MM/YYYY');
                    user.contrasenia = util.transformarContrasenia(user.contrasenia);
                    response.render('gestionUsuarios', {user: user, usuarios: usuarios});
                }
            }
        }
    }
});

app.get("/register", function(request, response){
    response.status(200);
    response.render('register', {errorMsg : null});
});

app.get("/logout", function(request, response){
    request.session.destroy();
    response.redirect("/login");
});

app.get("/imagen", comprobarUsuario, function(request, response) {
	daoU.getImage(request.session.currentUser.correo, imagenUsu);
    function imagenUsu(err, result){
        if(err)
            console.log(err.message)
        else{
            if(result == null)
                response.sendFile(__dirname + '/public/img/usuario.png');
            else
                response.end(result);
        }

    }
});

app.post("/login", function(request, response){
    daoU.isUserCorrect(request.body.correo, request.body.password, userCorrect);
    function userCorrect(error, ok, user){
        if(error){
            response.status(500);
            response.render("login", {
                errorMsg: "Error interno de acceso a la base de datos"
            });
        }
        else if(ok){
            request.session.currentUser = request.body;
            request.session.currentUser.id = user.id;
            if(user.tecnico == 1)
                response.redirect("/avisosTecnico");
            else
                response.redirect("/avisos");
        } else{
            response.status(200);
            response.render("login",
                {errorMsg:"Email y/0 contraseña no válidos"});
        }
    }
});



app.post("/register",  multerFactory.single('imagen'), function(request, response){
    if(util.checkContrasenias(request.body.contrasenia, request.body.contrasenia2)){
        if(util.checkCorreo(request.body.correo)){
            daoU.getUserData(request.body.correo, correoExists);
            function correoExists(err, result){
                if(err){
                    response.status(500);
                }
                else if(result != null){
                    response.status(200);
                    response.render("register", {errorMsg:"El correo ya esta en uso, prueba a iniciar sesión."});
                }
                else{
                    if(request.body.perfilUniversitario != "null"){
                        if(request.body.nombre.length >= 4 && request.body.nombre.length <= 80){
                            if(!request.file || util.checkImage(request.file.originalname)){
                                if(request.body.tecnico){
                                    request.body.tecnico = 1;
                                    daoU.checkIDTecnico(request.body.nEmpleado, idTecnicoExists);
                                    function idTecnicoExists(err, ok){
                                        if(err){
                                            response.status(500);
                                        }
                                        else{
                                            if(ok){                                               
                                                if(request.file){
                                                    request.body.imagen = request.file.buffer;
                                                }
                                                else{
                                                    request.body.imagen = null;
                                                }
                                                daoU.insertUser(request.body, insertado);
                                            }
                                            else{
                                                response.status(200);
                                                response.render("register", {errorMsg:"El NºEmpleado no es válido o esta en uso"});
                                            }
                                        }
                                    }
                                }
                                else{
                                    request.body.tecnico = null;
                                    request.body.nEmpleado = null;
                                    if(request.file){
                                        request.body.imagen = request.file.buffer;
                                    }
                                    else{
                                        request.body.imagen = null;
                                    }
                                    daoU.insertUser(request.body, insertado);
                                }
                            }
                            else{
                                response.status(200);
                                response.render("register", {errorMsg:"La imagen debe de ser de tipo jpeg"});
                            }
                        }
                        else{
                            response.status(200);
                            response.render("register", {errorMsg:"El nombre tiene que tener entre 4 y 80 caracteres"});
                        }
                    }
                    else{
                        response.status(200);
                        response.render("register", {errorMsg:"Por favor, selecciona un perfil universitario"});
                    }
                }
            }
        }
        else{
            response.status(200);
            response.render("register", {errorMsg:"El correo debe de ser de la UCM (terminar en @ucm.es)"});
        }
    }
    else{
        response.status(200);
        response.render("register", {errorMsg:"La contraseña debe de tener: entre 8 y 16 caracteres, 1 minúscula, 1 mayúscula, 1 caracter especial y la confirmación de contraseña debe de ser la misma."});
    }

    function insertado(err){
        if(err){
            response.status(500);
            console.log(err);
        }
        else{
            daoU.isUserCorrect(request.body.correo, request.body.contrasenia, userCorrect);
            function userCorrect(error, ok, user){
                if(error){
                    response.status(500);
                    response.render("register", {
                        errorMsg: "Error interno de acceso a la base de datos"
                    });
                }
                else if(ok){
                    request.session.currentUser = request.body;
                    request.session.currentUser.id = user.id;
                    if(user.tecnico == 1)
                        response.redirect("/avisosTecnico");
                    else
                        response.redirect("/avisos");
                } 
                else{
                    response.status(200);
                    response.render("login",
                        {errorMsg:"Email y/0 contraseña no válidos"});
                }
    }
        }
    }
});

app.post("/crearAviso", comprobarUsuario, function(request, response){
    const array = request.body.tipo.split("-");
    let idTipo, nombreTipo, idUsuario, tipo;
    idTipo = array[0];
    nombreTipo = array[1];
    idUsuario = array[2];
    tipo = array[3];
    daoA.addAviso(tipo, request.body.texto, idUsuario, idTipo, insertarAviso);
    function insertarAviso(){
        response.redirect("/avisos");
    }
});

app.post("/crearFelicitacion", comprobarUsuario, function(request, response){
    let lista = request.body.tipo.split("-");
    daoA.addAviso("Felicitación", request.body.texto, request.session.currentUser.id, lista[2], insertarAviso);
    function insertarAviso(){
        response.redirect("/avisos");
    }
});

app.post("/terminarAviso", comprobarUsuario, function(request, response){
    let aux = request.body.terminarAviso.split("-");
    daoA.terminarAviso(aux[1], request.body.textoTec, terminar);
    function terminar(err){
        if (err){
            console.log(err);
        }
        else{
            response.redirect("/avisosTecnico");
        }
    }
});

app.post("/asignarAviso", comprobarUsuario, function(request, response){
    let aux = request.body.terminarAviso.split("-");
    daoA.asignarAviso(aux[1], request.body.tecnico, asignar);
    function asignar(err, ok){
        if (!ok){
            console.log(err);
        }
        else{
            response.redirect("/avisosEntrantes");
        }
    }
});

app.post("/borrarUsuario", comprobarUsuario, function(request, response){
    let aux = request.body.terminarAviso.split("-");
    daoU.eliminarUsuario(aux[1], borrar);
    function borrar(err, ok){
        if (!ok){
            console.log(err);
        }
        else{
            response.redirect("/gestionUsuarios");
        }
    }
});

app.use(function(request, response, next){
    response.status(404);
    response.render("404");
});

// Arrancar el servidor
app.listen(config.port, function(err) {
    if (err) {
        console.log("ERROR al iniciar el servidor");
    }
    else {
        console.log(`Servidor arrancado en el puerto ${config.port}`);
    }
});
