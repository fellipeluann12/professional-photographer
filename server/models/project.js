import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  imageId: {
    type: mongoose.Types.ObjectId,
    required: false,
  },
});

projectSchema.virtual('image', {
  ref: 'GridFSBucket',
  localField: 'imageId',
  foreignField: '_id',
  justOne: true,
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
