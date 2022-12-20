import express from 'express';
import controller from '../controller/rollsController.js';

const app = express();

app.get('/roll/findAll', controller.findAll);

app.post('/roll/newRoll', controller.newRoll);

app.delete('/roll/deleteAll/', controller.deleteAll);

app.delete('/roll/deleteOne/:id', controller.deleteOne);

export { app as rollsRouter };