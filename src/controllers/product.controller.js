const path = require('path');
const ProductModel  = require('../models/product.model');
class ProductController {
    getProducts(req , res){
       let products = ProductModel.get();
     return res.render('product' , {
        products:products
    })
    }   
    getForm(req,res){
      return res.render('new-product' , {errorMessage:null});
    }

    getAddproduct(req, res){

      ProductModel.add(req.body);
      let products = ProductModel.get();
      return res.render('product' , { products })
    }

    getProductUpdateView(req, res ,next){
        const id = req.params.id;
        const productFound = ProductModel.getByid(id);
        if(productFound){
          res.render('update-product' , {product:productFound , errorMessage:null} );
        }else{
          return res.status(401).send(
          'product not found'
          )
        }
    }

    postUpdateproduct(req, res){
      ProductModel.update(req.body);
      let products = ProductModel.get();
      return res.render('product' , { products });
    }

    deleteProduct(req, res){
      const id = req.params.id;
      const productFound = ProductModel.getByid(id);
      if(!productFound){
        return res.status(401).send(
          'product not found'
          )
      }
      ProductModel.delete(id);
      let products = ProductModel.get();
      return res.render('product' , { products });
    }

 }
 
 module.exports = ProductController;
 