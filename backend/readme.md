## PASO A PASO
- Verificar version del node: node -v
- Inicializar el proyecto: npm init
- crea el package.json
- cambiamos esta linea: "type": "module", para poder implementar modules de es6
- paquetes basicos: npm i nodemon cors express mysql2
    - nodemon: solo para desarrollar: sirve para cambiar el codigo y que se actualice
    - cors_ setear la seguridad de interactuar con direcciones ip diferentes - http
    - express: libreria para crear un servidor rest (post, put, get, delete)
    - mysql2: libreria que permite hacer consultas sql desde node js

- Cambiamos la sesion script en package.json asi:
    "dev": "nodemon index.js", 
    "start": "node index.js",
    con el fin de tener 2 script de ejecucion, uno de desarrollo y uno de despliegue