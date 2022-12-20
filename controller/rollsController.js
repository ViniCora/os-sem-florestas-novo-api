import { rollsModel } from '../models/rollsSchema.js';

const findAll = async (req, res) => {
 
   try {
     const rolls = await rollsModel.find({});
     res.send(rolls);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };

 const newRoll = async (req, res) => {

  try {
    const roll = new rollsModel(
        {
            name: req.body.name,
            imagePath: req.body.imagePath,
            atributo: req.body.atributo,
            valorRodado: req.body.valorRodado,
            valorContestação: req.body.valorContestação,
            sucesso: req.body.sucesso
        }
    );  
    roll.save();
    res.send('Roll inserido com sucesso');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
};

const deleteAll = async (req, res) => {
  try {
    
    const roll = await rollsModel.deleteMany({});
    res.send('Rolls deletados com sucesso');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
}

const deleteOne = async (req, res) => {
  const id = req.params.id;

  try {
    
    const roll = await rollsModel.findByIdAndDelete(id);

    res.send('Roll deletado com sucesso');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
}



export default {findAll, newRoll, deleteAll, deleteOne};