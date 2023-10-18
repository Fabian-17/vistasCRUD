import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";

dotenv.config();


import { environments } from "./src/config/environment.js";
import { connectToDatabase } from "./src/config/db.js";
import { indexRouter } from "./src/routes/index.routes.js";
import { passengerRouter } from "./src/routes/passenger.routes.js";
import { driverRouter } from "./src/routes/driver.routes.js";
import { enterpriseRouter } from "./src/routes/enterprise.routes.js";
import { handleErrors } from "./src/middlewares/handleError.js";
import { createLogs } from "./src/helpers/createLogs.js";
import './src/models/driver_enterprise.js';

import fileDirName  from "./src/utils/fileDirName.js";
const { __dirname } = fileDirName(import.meta);


import 'ejs'

const app = express();


app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(morgan('combined', {
  stream: {
    write: (message) => {
      createLogs(message, __dirname, 'logs');
    },
  },
}));
app.use(express.json())

app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');

app.use('/', indexRouter)
app.use('/passenger', passengerRouter)
app.use('/driver', driverRouter)
app.use('/enterprise', enterpriseRouter)

// app.use(handleErrors);


app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${environments.PORT}/';
           }, 3000)           
        )();
        </script>
    </h1>`)
});


app.listen(environments.PORT, async () => {
    console.log(`server on port http://localhost:${environments.PORT}`)
    connectToDatabase()
});