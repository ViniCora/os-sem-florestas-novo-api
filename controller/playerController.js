import { playerModel } from '../models/playerSchema.js';

const findAll = async (req, res) => {
 
   try {
     const atributes = await playerModel.find({});
     res.send(atributes);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };

const findAtributeByName = async (req, res) => {
   const nameReq = req.query.name;
     
   /*  //condicao para o filtro no findAll
    var condition = name
      ? { name: { $regex: new RegExp(name), $options: 'i' } }
      : {}; */
  
    try {
      const atributes = await playerModel.find({'name': nameReq});
      res.send(atributes);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Erro ao listar todos os atributos' });
      
    }
  };

  const updateVida = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{vida : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateRadioatividade = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }

    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{radioatividade : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMostrarTela = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{mostrar_tela : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateForca = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{força : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateValueAdicionar = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{pontos_adicionar : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateDestreza = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{destreza : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateCarisma = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{carisma : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateInteligente = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{inteligencia : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateResistencia = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{resistencia : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMira= async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{mira : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateOficio = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{oficio : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updatePercepcao = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{percepcao : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };


export default {findAll, findAtributeByName, updateVida, updateMostrarTela, updateForca, updateValueAdicionar ,updateDestreza, updateCarisma, updateInteligente, 
  updateResistencia, updateMira, updateOficio, updatePercepcao, updateRadioatividade};