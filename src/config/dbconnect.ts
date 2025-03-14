import mongoose from 'mongoose'

const DATABASE_URI = "mongodb+srv://Ram:7spze2dy9n@vasusharrmaa.4itmd.mongodb.net/todos"

const dbconnect = async (): Promise<void> => {

  try {

    await mongoose.connect(DATABASE_URI);
    console.log("DB connected succesfully");

  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }

}

export { dbconnect }
