const express = require('express');
const app = express();
const morgan=require('morgan');



//coasaq que no queremos subir 
const dotenv =require('dotenv');

dotenv.config();
//conexion para los archibos
//app.use(formidable);
//app.use(formidable.parse({ MediaKeySession:true }));



app.use(morgan('dev'));
app.use(express.json());
//es como que esta bien la peticion y hace no se envie basio lo de la base de datos
app.use(express.urlencoded({extended:false}));


app.use('/static',express.static('static'));

//PUERTO
const PORT= process.env.PORT ;


//ruta
const router = require('./backend/routes/ruta.ventas');
app.use('/api/',router);



//puesto
app.listen(PORT, ()=>{
    console.log('estoy en linea desde el puerto: '+ PORT);
});