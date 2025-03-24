// Write your code here
let products=["Laptop","Phone","HeadPhones","Monitor"]
function logFirstProduct (){
  console.log (products[0])
}
function updateProductName(pos,name){
  products[pos]=name
}
function removeLastProduct(){
  products.pop()
}
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
