import { createReadStream } from 'fs';
import { createModel } from 'mongoose-gridfs';
import Project from '../models/project.js';

export const createProject = async (req, res) => {
  const Attachment = createModel();

  try {
    const { title, description } = req.body;
    const project = new Project({ title, description });

    if (req.file) {
      const { filename, mimetype, size } = req.file;
      const Model = createModel({
        modelName: 'imageId',
        connection: Project.db,
      });

      const writeStream = Model.write({
        filename,
        contentType: mimetype,
        metadata: { projectId: project._id },
      });

      createReadStream(req.file.path).pipe(writeStream);

      project.image = writeStream.id;
      await project.save();

      res.status(201).json(project);
    } else {
      await project.save();
      res.status(201).json(project);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getProjectImage = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project || !project.image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    const Model = createModel({
      modelName: 'imageId',
      connection: Project.db,
    });

    const readStream = Model.readById(project.image);

    readStream.on('error', () => {
      res.status(404).json({ message: 'Image not found' });
    });

    readStream.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
