const Product = require('../models/product.model');

// -------- GET ALL PRODUCTS ----------
const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------- GET PRODUCT BY ID --------------
const getproductById = async (req, res) => {
  try {
    const { id } = req.params; // res.params --> find id
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------- POST ONE PRODUCT -----------------
const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
};

// -------------- UPDATE ONE PRODUCT BY ID ---------------
const updateProduct = async (req, res) => {
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
};

// ------------ DELETE ONE PRODUCT BY ID ----------------
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProduct,
  getproductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
