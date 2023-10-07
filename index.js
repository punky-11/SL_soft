const express = require('express');
const app = express();
const morgan=require('morgan');
const dotenv =require('dotenv');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'tienda virtual sl-soft',
      version: '1.0.0',
      description: 'API de ventas'},
    servers: [
      {
        url: 'http://localhost:6600',
      },
    ],
    contact: {
      name: 'sl-soft',
      email: 'proyectosenaslsoft@gmail.com'},
  },
  apis: [`${path.join(__dirname, './backend/routes/ruta.js')}`],
};

dotenv.config();
// conexion para los archibos
// app.use(formidable);
// app.use(formidable.parse({ MediaKeySession:true }));


app.use(morgan('dev'));
app.use(express.json());
// es como que esta bien la peticion y hace no se envie basio lo de la base de datos
app.use(express.urlencoded({extended: false}));

app.use('/api-docs', swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerOptions)));

app.use('/static', express.static('static'));

// PUERTO
const PORT= process.env.PORT || 8080;


// ruta
const router = require('./backend/routes/ruta');
app.use('/v1/', router);


// puesto
app.listen(PORT, ()=>{
  console.log('estoy en linea desde el puerto: '+ PORT);
});
