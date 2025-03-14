import express from 'express'
import { createTodos } from '../controller/createTodo'
import { getAllTodos, getTodosById } from '../controller/getAllTodos';
import { deleteAllTodos, deleteTodosById } from '../controller/deleteTodo'
const router = express.Router();
router.post('/createTodos', createTodos);
router.get('/getAllTodos', getAllTodos);
router.get('/getTodosById/:id', getTodosById);
router.delete('/deleteAllTodos', deleteAllTodos);
router.delete('/deleteTodosById/:id', deleteTodosById);

export default router;

