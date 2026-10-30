import { ProductoModel } from "./producto.model.js";

export const obtenerProductos = async (req, res) => {
  try {
    const results = await ProductoModel.findAll();
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar los productos: ${error.message}`
    });
  }
};

export const obtenerProductoPorCodigo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const results = await ProductoModel.findByCodigo(codigo);

    if (results.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ results: results[0] });
  } catch (error) {
    res.status(500).json({
      error: `Error al consultar el producto: ${error.message}`
    });
  }
};

export const crearProducto = async (req, res) => {
  const { codigo, descripcion, unidad, costo, precio } = req.body;

  // Validación básica de campos obligatorios
  if (!codigo || !descripcion || !unidad || costo === undefined || precio === undefined) {
    return res.status(400).json({
      error: "Todos los campos (codigo, descripcion, unidad, costo, precio) son requeridos"
    });
  }

  try {
    const results = await ProductoModel.create({
      codigo,
      descripcion,
      unidad,
      costo,
      precio
    });
    res.status(201).json({
      message: "Producto registrado exitosamente",
      results
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || "Error al registrar el producto"
    });
  }
};

export const actualizarProducto = async (req, res) => {
  const { codigo } = req.params;

  try {
    const results = await ProductoModel.update(codigo, req.body);
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado para actualizar" });
    }
    res.status(200).json({
      message: "Producto actualizado correctamente",
      results
    });
  } catch (error) {
    res.status(500).json({
      error: `Error al actualizar el producto: ${error.message}`
    });
  }
};

export const borrarProducto = async (req, res) => {
  const { codigo } = req.params;

  try {
    const results = await ProductoModel.delete(codigo);
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Producto no encontrado para eliminar" });
    }
    res.status(200).json({
      message: "Producto eliminado correctamente",
      results
    });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar el producto: ${error.message}`
    });
  }
};