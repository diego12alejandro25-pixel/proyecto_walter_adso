import express from "express"; //IMPORTAMOS LA LIBRERIA
import cors from "cors";
import rutausuario from "./src/modules/usuario/usuario.routes.js"
import rutaproducto from "./src/modules/producto/producto.routes.js";
//CREAMOS UNA INSTANCIA DE LA LIBRERIA EXPRESS EN LA CONSTANTE APP
const app = express(); //METODO CONSTRUCTOR DE LA LIBRERIA
const PORT = 4100; // PUERTO DONDE DESPLEAGMOS EL SERVER

// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

app.use("/api", rutausuario);
app.use("/api", rutaproducto);
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

