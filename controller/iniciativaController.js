import { iniciativaModel } from '../models/iniciativaSchema.js';

const findAll = async (req, res) => {
 
   try {
     const iniciativa = await iniciativaModel.find({});
     res.send(iniciativa);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };

 const newIniciativa = async (req, res) => {

  try {
    const iniciativa = new iniciativaModel(
        {
            name: req.body.name,
            imagePath: req.body.imagePath,
            value: req.body.value,
            vez: false
        }
    );  
    iniciativa.save();
    res.send('Iniciativa inserida com sucesso');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
};

const deleteAll = async (req, res) => {
  try {
    
    const iniciativa = await iniciativaModel.deleteMany({});
    res.send('Iniciativas deletadas com sucesso');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
}

const deleteOne = async (req, res) => {
  const id = req.params.id;

  try {
    
    const iniciativa = await iniciativaModel.findByIdAndDelete(id);

    res.send('Iniciativa deletada com sucesso');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
}

const updateVez = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  const value = req.body.value;

  try {
    const ini = await iniciativaModel.findByIdAndUpdate(
      { _id: id },
      {$set :{vez : value}},
      { new: true }
    );
    res.send(ini);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a iniciativa de id: ' + id });
  }
};


export default {findAll, newIniciativa, deleteAll, deleteOne, updateVez};