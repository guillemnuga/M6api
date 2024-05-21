const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

const mysql = require('mysql2'); //pg con postgres

// Configura la conexiÃ³n a la base de datos MySQL

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ermwatesigma',
});

// Middleware para el anÃ¡lisis del cuerpo de solicitudes en formato JSON
app.use(express.json());
app.use(cors());

// Ruta para obtener todos los usuarios
app.get('/api/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al obtener gatos:', err);
      res.status(500).json({ error: 'Error al obtener gatos' });
    } else {
      res.json({ gatos: results });
    }
  });
});

// Ruta para obtener un usuario por su ID
app.get('/api/productos/:id', (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM productos WHERE id = ?', [productId], (err, results) => {
    if (err) {
      console.error('Error al obtener el gato:', err);
      res.status(500).json({ error: 'Error al obtener el gato' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'Gato no encontrado' });
      } else {
        res.json({ user: results[0] });
      }
    }
  });
});

// Ruta para crear un nuevo usuario
app.post('/api/productos', (req, res) => {
  const newProduct = req.body;
  db.query('INSERT INTO productos (referencia, nombre, precio, descripcion, imagen) VALUES (?, ?, ?, ?, ?)', [newProduct.referencia, newProduct.nombre, newProduct.precio, newProduct.descripcion, newProduct.imagen], (err, results) => {
    if (err) {
      console.error('Error al crear el gato:', err);
      res.status(500).json({ error: 'Error al crear el gato' });
    } else {
      res.json({ message: 'Gato creado con Ã©xito', user: newProduct });
    }
  });
});

// Ruta para actualizar un usuario por su ID
app.put('/api/productos/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  db.query('UPDATE productos SET referencia = ?, nombre = ?, SET precio = ?, descripcion = ?, SET imagen = ? WHERE id = ?', [updatedProduct.referencia, updatedProduct.nombre, updatedProduct.precio, updatedProduct.descripcion, updatedProduct.imagen, productId], (err, results) => {
    if (err) {
      console.error('Error al actualizar el gato:', err);
      res.status(500).json({ error: 'Error al actualizar el gato' });
    } else {
      res.json({ message: 'Gato actualizado con Ã©xito', user: updatedProduct });
    }
  });
});

// Ruta para eliminar un usuario por su ID
app.delete('/api/productos/:id', (req, res) => {
  const productId = req.params.id;
  db.query('DELETE FROM productos WHERE id = ?', [productId], (err, results) => {
    if (err) {
      console.error('Error al eliminar el gato:', err);
      res.status(500).json({ error: 'Error al eliminar el gato' });
    } else {
      res.json({ message: 'Gato eliminado con Ã©xito' });
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`El servidor estÃ¡ escuchando en el puerto ${port}`);
});