import { Request, Response } from 'express'
import mongoose from 'mongoose'
import todoSchema from '../model/todoSchema';


const deleteAllTodos = async (req: Request, res: Response): Promise<void> => {


  try {
    const data = await todoSchema.deleteMany({});
    res.status(200).json({
      success: true,
      data: data,
      msg: "successfully deleted "
    })
  }
  catch (err) {
    console.error((err as Error).message);
    res.status(403).json({
      success: false,
      msg: "Can't delete due to internal server error"
    })
  }

}


const deleteTodosById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {

    const deletedTodo = await todoSchema.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      data: deletedTodo,
      msg: "successfully deleted"
    })

  }
  catch (err) {
    console.error((err as Error).message);
    res.status(403).json({
      success: false,
      msg: "Can't delete due to internal server error"
    })
  }
}


export { deleteAllTodos, deleteTodosById }
