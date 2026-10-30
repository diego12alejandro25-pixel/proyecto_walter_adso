//importamos la cadena de conexion de la BD
import db from "../../config/db_conexion.js";
import bcrypt from "bcryptjs";
export const UserModel = {
  findALL: async () => {
    const sql = "SELECT * FROM usuario ORDER BY apellidos";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM usuario WHERE id_usuario=?";
    //almacenamos la respuesta en un arreglo 
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM usuario WHERE id_usuario=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    let email = data.email;
    console.log(data);
    // validamos que el email no exista ! , el usuario lo validaremos por el
    email
    const [emailExiste] = await db.query(
      "SELECT * FROM usuario WHERE email = ?",
      [email],
    );
    if (emailExiste.length > 0) {
      //dispara el gestor de errores de node js y le crea el error 
      throw new Error("El email ya está registrado");
    }
    const userNuevo = {
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      ciudad: data.ciudad,
      estado: data.estado,
      password: bcrypt.hashSync(data.password, 11) //encriptar la contraseña
    };
    const sql = "INSERT INTO usuario SET ?";
    const [rows] = await db.query(sql, [userNuevo]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE usuario SET ? WHERE id_usuario = ?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
