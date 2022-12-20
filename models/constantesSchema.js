import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const constantesSchema = new mongoose.Schema({
  name: { type: String, require: true },
  value: {type: Number, requires: true}
});

const constantesModel = mongoose.model('Constantes', constantesSchema, 'Constantes');

export { constantesModel };
