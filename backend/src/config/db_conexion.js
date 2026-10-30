/* administra la conexion con la base de datos
usamos la libreria mysql2 para interactuar con MYSQL
esta libreria me permite implementar consultas, transacciones, procedimientos almacenados
etc.
una mejor opcion es usar un ORM: Son librerias con clases independientes 
del motor de base de datos, sequelize, prisma. */

import mysql from "mysql2/promise"; //importamos la libreria

//creamos una constante POOL

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "db_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool;
