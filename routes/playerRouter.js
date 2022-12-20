import express from 'express';
import controller from '../controller/playerController.js';
import { playerModel } from '../models/playerSchema.js';

const app = express();

app.get('/players/', controller.findAll);

app.post('/players/',(req, res) => {

    console.log(req.body);
    
    try {
      const personagem = new playerModel(
          {
              name: req.body.name,
              jogador: req.body.jogador,
              oficio_pre_base: req.body.oficio_pre_base,
              oficio_base: req.body.oficio_base,
              nascimento: req.body.nascimento,
              força: req.body.força,
              destreza: req.body.destreza,
              carisma: req.body.carisma,
              inteligencia: req.body.inteligencia,
              resistencia: req.body.resistencia,
              mira: req.body.mira,
              oficio: req.body.oficio,
              percepcao: req.body.percepcao,
              radioatividade: 100,
              vida: 100,
              pontos_adicionar: 0,
              mostrar_tela: req.body.mostrar_tela,
              imagePath: ''
          }
      );  
      personagem.save();
      res.send(personagem);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    }
  });

app.get('/atributes/', controller.findAtributeByName);

app.put('/atributes/radioatividade/:id', controller.updateRadioatividade);

app.put('/atributes/vida/:id', controller.updateVida);

app.put('/atributes/mostrarTela/:id', controller.updateMostrarTela);

app.put('/atributes/forca/:id', controller.updateForca);

app.put('/atributes/destreza/:id', controller.updateDestreza);

app.put('/atributes/pontosAdicionar/:id', controller.updateValueAdicionar);

app.put('/atributes/carisma/:id', controller.updateCarisma);

app.put('/atributes/inteligencia/:id', controller.updateInteligente);

app.put('/atributes/resistencia/:id', controller.updateResistencia);

app.put('/atributes/mira/:id', controller.updateMira);

app.put('/atributes/oficio/:id', controller.updateOficio);

app.put('/atributes/percepcao/:id', controller.updatePercepcao);


export { app as playerRouter };