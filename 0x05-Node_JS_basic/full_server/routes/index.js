import { Router } from 'express';
import AppController from '../controllers/AppControllers';
import StudentsController from '../controllers/StudentsController';

const router = Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
