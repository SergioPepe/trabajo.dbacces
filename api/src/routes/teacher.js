import { Router } from "express";
import { createTeacher, getTeacher, getOneTeacher, deleteTeacher, updateTeacher, getTeacherByClass} from '../controllers/teacher.controller'

const router = Router();

router.post('/', createTeacher);

router.get('/', getTeacher);

router.get('/:id', getOneTeacher);

router.delete('/:id', deleteTeacher);

router.put('/:id', updateTeacher)

router.get('/class/:classid', getTeacherByClass)

export default router;