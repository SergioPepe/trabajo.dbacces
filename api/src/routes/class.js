import { Router } from "express";
import { createClass, getClass, getOneClass, deleteClass, updateClass} from '../controllers/class.controller'

const router = Router();

router.post('/', createClass)

router.get('/', getClass)

router.get('/:id', getOneClass)

router.delete('/:id', deleteClass)

router.put('/:id', updateClass)

export default router;
