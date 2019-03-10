
const serverURL = "http://localhost:8080"; //simply put in your server path here
// const serverURL = `http://192.168.1.158:3000`; // zain
//const urlZain = `http://192.168.1.158:3000`;
//const urlUros = `http://192.168.1.149:3000`;
//const urlLuca = `http://192.168.1.116:3000`;



export const apiConstants = {

  //LOGIN REGISTRATION
  LOGIN_URL: `${serverURL}/login`,
  USER_REGISTER_URL: `${serverURL}/signup`,

  //PRODUCTS AND CATEGORIES
  PRODUCTS_BY_CAT: `${serverURL}/products/cat`,
  PRODUCTS_URL: `${serverURL}/products`,
  CATEGORIES_URL: `${serverURL}/categories`,
  USER_SEARCH_PRODUCTS: `${serverURL}/search`,

  //ORDERS AND PAYMENTS
  CUSTOMER_POST_NEW_ORDER: `${serverURL}/orders`,
  CUSTOMER_GET_ORDERS: `${serverURL}/orders`,
  CUSTOMER_POST_NEW_ADDRESS: `${serverURL}/address`,
  PAYMENT: `${serverURL}/charge`,

  //ADMIN
  ADMIN_GET_ORDERS: `${serverURL}/admin/orders`,
  ADMIN_LOGIN_URL: `${serverURL}/admin/login`,
  ADMIN_REGISTER_URL: `${serverURL}/admin/signup`,
  ADMIN_PRODUCT_URL: `${serverURL}/admin/products`, //POST, PUT, DELETE
  ADMIN_CATEGORY_URL: `${serverURL}/admin/categories`, //POST, PUT, DELETE
  ADMIN_ORDERS_URL: `${serverURL}/admin/orders`,

}

