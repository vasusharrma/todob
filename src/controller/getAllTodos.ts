import { Request, Response } from 'express'
import mongoose from 'mongoose';

import todoSchema from "../model/todoSchema";


const getAllTodos = async (req: Request, res: Response): Promise<void> => {


  try {
    const data = await todoSchema.find({});
    if (data.length == 0) {
      res.status(203).json({
        success: false,
        msg: "no todos found"
      })

    }
    res.status(201).json({
      success: true,
      data: data,
      msg: "successfully fetched"
    })
  }
  catch (err) {

    console.error((err as Error).message);
    res.status(404).json({
      success: false,
      msg: "Can't get the data due to internal sever error"
    })

  }

}

const getTodosById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({
        success: false,
        msg: "Invalid Id format"
      })
    }
    const data = await todoSchema.findById(id);
    if (!data) {
      res.status(404).json({
        success: false,
        msg: "No todo found with given id"
      })
      return;
    }
    res.status(200).json({
      success: true,
      data: data,
      msg: "successfully fetched",
    })

  }
  catch (err) {
    console.error((err as Error).message);
    res.status(500).json({
      success: false,
      msg: "Can't get the data due to internal sever error"
    })
  }


}

export { getAllTodos, getTodosById }
