import { Request, Response } from 'express'
import TodoSchema from '../model/todoSchema'
import z from 'zod'

const todozSch = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  todoNote: z.string()
})


export const createTodos = async (req: Request, res: Response): Promise<void> => {

  const response = todozSch.safeParse(req.body);

  if (!response.success) {
    res.status(411).json(response.error.format())
    return;
  }
  try {

    const { name, email, age, todoNote } = response.data;

    const alreadyExits = await TodoSchema.findOne({ email });
    if (alreadyExits) {
      res.status(200).json({
        success: true,
        msg: "alreadyExits"
      })
      return;
    }

    const newUser = await TodoSchema.create({ name, email, age, todoNote });

    res.status(201).json({
      success: true,
      msg: "Successfully added",
      data: newUser
    })

  }
  catch (err) {
    console.error((err as Error).message);
    res.status(500).json({
      success: false,
      msg: "internal server error"
    })
  }


}
