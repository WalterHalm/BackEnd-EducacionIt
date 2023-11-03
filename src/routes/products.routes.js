import {Router} from "express"
import * as productsCtrl from "../controllers/product.controller.js"
import {authJwt} from "../middlewares/index.js"

const router = Router()

router.post("/", [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProducts);

router.get("/", productsCtrl.getProducts);

router.get("/:productId", productsCtrl.getProductsById);

router.put("/:productId",  [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductsById);

router.delete("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductsById);


export default router;