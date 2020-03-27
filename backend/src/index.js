const express = require('express');
const cors = require('cors'); 5.2k (gzipped: 2.1k)
const routes = require('./routes');

const app = express();
    
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
   * Route Params: Parâmetro utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoBD, CouchBD, etc
    */

    /**
     * Driver: SELECT 8 FROM users
     * Query Builder: table('users').select('*').where()
     */


