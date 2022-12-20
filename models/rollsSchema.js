import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const rollsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  imagePath: { type: String, require: true },
  atributo: { type: String, require: true },
  valorRodado: {type: Number, requires: true},
  valorContestação: {type: Number, requires: true},
  sucesso: {type: Boolean, requires: true}
});

const rollsModel = mongoose.model('Rolls', rollsSchema, 'Rolls');

export { rollsModel };
