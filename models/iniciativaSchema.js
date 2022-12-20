import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const iniciativaSchema = new mongoose.Schema({
  name: { type: String, require: true },
  imagePath: { type: String, require: true },
  value: {type: Number, requires: true},
  vez: {type: Boolean, requires: true}
});

const iniciativaModel = mongoose.model('Iniciativa', iniciativaSchema, 'Iniciativa');

export { iniciativaModel };
