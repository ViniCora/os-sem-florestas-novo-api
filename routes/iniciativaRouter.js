import express from 'express';
import controller from '../controller/iniciativaController.js';

const app = express();

app.get('/iniciativa/findAll', controller.findAll);

app.post('/iniciativa/newIniciativa', controller.newIniciativa);

app.delete('/iniciativa/deleteAll/', controller.deleteAll);

app.delete('/iniciativa/deleteOne/:id', controller.deleteOne);

app.put('/iniciativa/updateVez/:id', controller.updateVez);

export { app as iniciativaRouter };