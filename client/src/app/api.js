import axios from "axios";


const apiEndPoint = process.env.REACT_APP_API_URL;




function authorizeCustomer(email, password) {
  const response = axios.post(`${apiEndPoint}/login`, {
    email,
    password
  });
  return response;
}

function registerCustomer(username, email, password, address) {
  const response = axios.post(`${apiEndPoint}/register`, {
    username,
    email,
    password,
    address
  });
  return response;
}





function getCustomers() {
  const response = axios.get(`${apiEndPoint}/customer`);
  return response;
}

function getCreatedCustomer({ username, email, address }) {
  const response = axios.post(`${apiEndPoint}/customer`, {
    username,
    email,
    password: '12345678',
    address
  });
  return response;
}

function getUpdatedCustomer(id, customer) {
  const response = axios.put(`${apiEndPoint}/customer/${id}`, {
    id: customer.id,
    username: customer.username,
    email: customer.email,
    password: customer.password,
    address: customer.address
  });
  return response;
}

function getDeletedCustomer(id) {
  const response = axios.delete(`${apiEndPoint}/customer/${id}`);
  return response;
}














function getProducts() {
  const response = axios.get(`${apiEndPoint}/product`);
  return response;
}

function getCreatedProduct({ name, image, price, description }) {
  const response = axios.post(`${apiEndPoint}/product`, {
    name,
    image,
    price,
    description
  });
  return response;
}

function getUpdatedProduct(id, product) {
  const response = axios.put(`${apiEndPoint}/product/${id}`, {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    description: product.description
  });
  return response;
}

function getDeletedProduct(id) {
  const response = axios.delete(`${apiEndPoint}/product/${id}`);
  return response;
}














function getOrders() {
  const response = axios.get(`${apiEndPoint}/order`);
  return response;
}

function getCreatedOrder({ customerId, productId, quantity }) {
  const response = axios.post(`${apiEndPoint}/order`, {
    customerId,
    productId,
    quantity
  });
  return response;
}

function getUpdatedOrder(id, order) {
  const response = axios.put(`${apiEndPoint}/order/${id}`, {
    id: order.id,
    cutomerId: order.customerId,
    productId: order.productId,
    quantity: order.quantity
  });
  return response;
}

function getDeletedOrder(id) {
  const response = axios.delete(`${apiEndPoint}/order/${id}`);
  return response;
}









function getSuppliers() {
  const response = axios.get(`${apiEndPoint}/supplies`);
  return response;
}

function getCreatedSupplier({ username, email }) {
  const response = axios.post(`${apiEndPoint}/supplies`, {
    username,
    email,
  });
  return response;
}

function getUpdatedSupplier(id, supplier) {
  const response = axios.put(`${apiEndPoint}/supplies/${id}`, {
    id: supplier.id,
    username: supplier.username,
    email: supplier.email,
  });
  return response;
}

function getDeletedSupplier(id) {
  const response = axios.delete(`${apiEndPoint}/supplies/${id}`);
  return response;
}










export {
  authorizeCustomer,
  registerCustomer,

  getCustomers, 
  getCreatedCustomer, 
  getUpdatedCustomer, 
  getDeletedCustomer, 
  
  getOrders, 
  getCreatedOrder, 
  getUpdatedOrder, 
  getDeletedOrder, 

  getProducts, 
  getCreatedProduct, 
  getUpdatedProduct, 
  getDeletedProduct,

  getSuppliers,
  getCreatedSupplier,
  getUpdatedSupplier,
  getDeletedSupplier
};