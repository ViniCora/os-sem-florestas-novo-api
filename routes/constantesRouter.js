import express from 'express';
import controller from '../controller/constantesController.js';

const app = express();

app.get('/constantes', controller.findAtributeByName);

app.put('/constantes', controller.findAtributeByNameAndUpdate);

export { app as constantesRouter };