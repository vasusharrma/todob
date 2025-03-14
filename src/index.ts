import express, { Request, Response } from 'express'
import { dbconnect } from './config/dbconnect';
import router from './router/todoRouter'

const app = express();
app.use(express.json());
const PORT = 4600;

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response): void => {
  res.send(`<h3>this is homepage lala</h3>`)
})

app.listen(PORT, (): void => {
  console.log(`server is live on port ${PORT}`)
})

dbconnect();
