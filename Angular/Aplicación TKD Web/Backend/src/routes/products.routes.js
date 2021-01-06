import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/product.controller";
import  {authjwt}  from "../middlewares";


router.post('/', [authjwt.verifyToken, authjwt.isAdministrador], productsCtrl.createProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', authjwt.verifyToken, productsCtrl.updateProductById);
router.delete('/:productId', [authjwt.verifyToken, authjwt.isProfesor], productsCtrl.deleteProductById);

export default router;