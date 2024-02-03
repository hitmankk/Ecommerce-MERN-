const Products = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

// Create Product--Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Products.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// gET aLL pRODUCT
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Products.find();

  res.status(200).json({
    success: true,
    products,
  });
});

//  get product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// update product --Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = Products.findById(req.param.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await product.deleteOne();

  res.status(200).json({ success: true, message: "Product deleted" });
});