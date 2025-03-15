import express from 'express'
import { createTodos } from '../controller/createTodo'
import { getAllTodos, getTodosById } from '../controller/getAllTodos';
import { deleteAllTodos, deleteTodosById } from '../controller/deleteTodo'
import { updateTodo } from '../controller/updateTodo';
const router = express.Router();
router.post('/createTodos', createTodos);
router.get('/getAllTodos', getAllTodos);
router.get('/getTodosById/:id', getTodosById);
router.delete('/deleteAllTodos', deleteAllTodos);
router.delete('/deleteTodosById/:id', deleteTodosById);
router.put('/updateTodo/:id', updateTodo);

export default router;

