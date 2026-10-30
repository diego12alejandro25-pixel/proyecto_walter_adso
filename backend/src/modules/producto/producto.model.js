import db from "../../config/db_conexion.js";

export const ProductoModel = {
  // Consultar todos los productos
  findAll: async () => {
    const sql = "SELECT * FROM producto ORDER BY descripcion ASC";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Consultar producto por su código
  findByCodigo: async (codigo) => {
    const sql = "SELECT * FROM producto WHERE codigo = ?";
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  },

  // Registrar un nuevo producto
  create: async (data) => {
    // Validar si el código ya existe
    const [existe] = await db.query("SELECT * FROM producto WHERE codigo = ?", [data.codigo]);
    if (existe.length > 0) {
      throw new Error("El código del producto ya se encuentra registrado");
    }

    const nuevoProducto = {
      codigo: data.codigo,
      descripcion: data.descripcion,
      unidad: data.unidad,
      costo: data.costo,
      precio: data.precio
    };

    const sql = "INSERT INTO producto SET ?";
    const [rows] = await db.query(sql, [nuevoProducto]);
    return rows;
  },

  // Actualizar un producto existente
  update: async (codigo, data) => {
    const sql = "UPDATE producto SET ? WHERE codigo = ?";
    const [rows] = await db.query(sql, [data, codigo]);
    return rows;
  },

  // Eliminar un producto por su código
  delete: async (codigo) => {
    const sql = "DELETE FROM producto WHERE codigo = ?";
    const [rows] = await db.query(sql, [codigo]);
    return rows;
  }
};