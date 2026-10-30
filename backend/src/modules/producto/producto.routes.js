import { Router } from "express";
import * as productoCtr from "./producto.controller.js";

const router = Router();

router.get("/productos", productoCtr.obtenerProductos);
router.get("/productos/:codigo", productoCtr.obtenerProductoPorCodigo);
router.post("/productos", productoCtr.crearProducto);
router.put("/productos/:codigo", productoCtr.actualizarProducto);
router.delete("/productos/:codigo", productoCtr.borrarProducto);

export default router;