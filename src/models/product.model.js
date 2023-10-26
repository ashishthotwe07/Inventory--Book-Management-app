class ProductModel {
    constructor(_id, _name, _desc, _price, _imgUrl) {
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imgUrl;
    }
    static get() {
        return products;
    }
    static update(productObj){
       const index= products.findIndex(p => p.id == productObj.id);
        products[index] = productObj;
    }
    static add(productObj) {
        let newProduct = new ProductModel(products.length + 1, productObj.name, productObj.desc, productObj.price, productObj.imageUrl);
        products.push(newProduct);
    }
    static getByid(id){
        return products.find((p)=> p.id == id);
    }
    static delete(id){
        const index= products.findIndex(p => p.id == id);
        products.splice(index , 1);
    }
}

var products = [
    new ProductModel(1, 'Product 1', 'Description 1', 10.99, 'download.jpeg'),
    new ProductModel(2, 'Product 2', 'Description 2', 19.99, 'download.jpeg'),
    new ProductModel(3, 'Product 3', 'Description 3', 15.99, 'download.jpeg')
];
console.log(__dirname);
module.exports = ProductModel;
