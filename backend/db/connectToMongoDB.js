import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    console.log("Connected to MongoDB successfully");
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectToMongoDB;