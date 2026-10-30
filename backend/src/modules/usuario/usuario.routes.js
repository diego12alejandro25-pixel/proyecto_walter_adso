//importar el creador de rutas express
// /api/usuario
import { Router } from "express";

import * as usuarioCtr from "./usuario.controller.js";

const router = Router(); //uso el metodo router() de express para crear las rutas
//la ruta tiene dos parametros de la ruta misma 

router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioId);
router.post("/usuarios", usuarioCtr.crearUsuario);
router.delete("/usuarios/:id", usuarioCtr.borrarUsuario);
router.put("/usuarios/:id", usuarioCtr.actualizarUsuario); 

export default router;
