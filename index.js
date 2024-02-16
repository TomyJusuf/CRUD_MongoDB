const mongoose = require('mongoose');
const express = require('express');
const Product = require('./models/product.model');
const app = express();

const password = 'Sj0sn4xd0LdXNkR2';

// MIDDLE WARE
// parse application/json - We can log data from POSTMAN ("JSON")
app.use(express.json());
// URL encoded
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from node API');
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params; // res.params --> find id
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.messge });
    throw new Error(error);
  }
});

// update a product
app.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body);

    if (!updateProduct) {
      return res.status(400).json({ message: 'Product not found' });
    }

    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete method
app.delete('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// MONGOOSE CONNECTION
mongoose
  .connect(
    `mongodb+srv://misage87:${password}@cluster0.mpsttfz.mongodb.net/Node-API?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log('Server listen on post 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });
