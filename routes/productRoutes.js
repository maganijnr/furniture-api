import express from 'express';
import { createProduct, getAllProducts, getProduct, searchProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/', createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.get('/search/:key', searchProduct)

export default router