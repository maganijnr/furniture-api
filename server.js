import express from "express";
import dotenv from "dotenv";
import productRoutes from './routes/productRoutes.js'
import connectMongoDb from "./config/connectDb.js";


dotenv.config();

const app = express();

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/product", productRoutes);

const startServer = async () => {
	try {
		await connectMongoDb();

		app.listen(process.env.PORT, () => {
			console.log(`Server is running on ${process.env.PORT}`);
		});
	} catch (error) {
		conosc.error(error && error.message);
	}
};

startServer();