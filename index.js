const express = require('express');
const ProductController = require('./src/controllers/product.controller');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
// setting the view engine setting 
const validateRequest = require('./middlewares/validation.middleware'); 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, '/src/views'));
app.use(ejsLayouts);

const productController = new ProductController();

app.get('/', productController.getProducts);
app.get('/update-product/:id', productController.getProductUpdateView);
app.post('/',validateRequest, productController.getAddproduct);
app.get('/new', productController.getForm);

app.post('/update-product' ,productController.postUpdateproduct);
app.post('/delete-product/:id' , productController.deleteProduct);


app.use(express.static('src/views'));
app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
