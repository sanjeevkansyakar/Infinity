import mongoose from "mongoose";

// Connect to db
const connectToMongoose = async () => {
  // Check if the connection is already established
  const connectionState = mongoose.connection.readyState;
  // console.log(connectionState);
  if (connectionState == 1) {
    return;
  } else {
    // if It's not connected
    try {
      mongoose
        .connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => console.log("Connected Succesfully"));
    } catch (error) {
      return error;
    }
  }
};

export { connectToMongoose };
