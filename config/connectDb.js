import mongoose from "mongoose";

const connectMongoDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Db connected");
	} catch (error) {
		console.log(error);
	}
};

export default connectMongoDb;
