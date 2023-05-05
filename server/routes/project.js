import express from 'express';
import multer from 'multer';
import { createProject, getProjectImage } from '../controllers/project.js';

const router = express.Router();
const upload = multer({ limits: { fileSize: 50 * 1024 * 1024 } });

router.post('/project', upload.single('imageId'), createProject);
router.get('/project/:id/image', getProjectImage);

export default router;
