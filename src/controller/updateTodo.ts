import mongoose from 'mongoose'
import todoSchema from '../model/todoSchema';
import { Request, Response } from 'express'
import z from 'zod'

// name , email , age , todoNote  

const updateSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
  todoNote: z.string()
}).partial();

const updateTodo = async (req: Request, res: Response): Promise<void> => {

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ success: false, err: "Send a valid todo Id" })
    return
  }

  try {
    const response = updateSchema.safeParse(req.body);

    if (!response.success) {
      res.status(403).json({ success: false, err: response.error.format() });
      return;
    }

    const updatedTodo = await todoSchema.findByIdAndUpdate(id, { $set: response.data }, { new: true });

    res.status(200).json({ success: true, msg: "Todo Updated Successfully", data: updatedTodo })

  }
  catch (err) {
    console.error((err as Error).message);
    res.status(500).json({ success: false, error: "internal server error" })
    process.exit(1);
  }


}

export { updateTodo }
