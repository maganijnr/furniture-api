import Product from "../models/Product.js";

const createProduct = async (req, res) => {
	const newProduct = new Product(req.body);
	try {
		await newProduct.save();
		res.status(200).json({
			message: "Product created successfully",
		});
	} catch (error) {
		res.status(500).json({ message: "Failed to create product" });
	}
};

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find().sort({ createdAt: -1 });

		res.status(200).json({
			message: "Products fetched successfully",
			products: products,
		});
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch products" });
	}
};

const getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		res.status(200).json({
			message: "Product fetched successfully",
			product: product,
		});
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch product" });
	}
};

const searchProduct = async (req, res) => {
	try {
		const result = await Product.aggregate([
			{
				$search: {
					index: "furniture",
					text: {
						query: req.params.key,
						path: {
							wildcard: "*",
						},
					},
				},
			},
		]);

		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch product" });
	}
};

const deleteProduct = async (req, res) => {
	try {
		const result = await Product.findByIdAndDelete(req.params.id);

		res.status(200).json({
			message: "Product deleted successfully",
		});
	} catch (error) {
		res.status(500).json({ message: "Failed to delete product" });
	}
}

export { createProduct, getAllProducts, getProduct, searchProduct };
