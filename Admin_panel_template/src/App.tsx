// import {
//   Admin,
//   Resource,
//   ListGuesser,
//   EditGuesser,
//   ShowGuesser,
// } from "react-admin";
// import { Layout } from "./Layout";
// import  dataProvider  from "./dataProvider";
// import { authProvider } from "./authProvider";
// import UsersList from "./List/usersList";

// export const App = () => (
//   <Admin
//     layout={Layout}
//     dataProvider={dataProvider}
//     authProvider={authProvider}
//   >

//     <Resource
//       name="users"
//       list={UsersList}
//       // edit={EditGuesser}
//       // show={ShowGuesser}
//     />
//   </Admin>
// );


import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Edit,
} from "react-admin";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserShow } from "./Show/usersShow";
import UsersList from './List/usersList.jsx'
import { ProductList } from "./List/productsList";
import { ProductShow } from "./Show/productsShow";
import { CategoryList } from "./List/categoriesList";
import { CategoryShow } from "./Show/categoriesShow";
import { OrderList } from "./List/ordersList";
import { OrderShow } from "./Show/ordersShow";
import { UserEdit } from "./Edit/usersEdit";
import { UserCreate } from "./Create/usersCreate";
import { ProductsCreate } from "./Create/productsCreate";
import { CategoriesCreate } from "./Create/categoriesCreate";
import { CategoriesEdit } from "./Edit/categoriesEdit";
import { ProductEdit } from "./Edit/productsEdit";
import { OrdersEdit } from "./Edit/ordersEdit";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      list={UsersList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name="products"
      list={ProductList}
      show={ProductShow}
      create={ProductsCreate}
      edit={ProductEdit}
    />
    <Resource
      name="categories"
      list={CategoryList}
      show={CategoryShow}
      create={CategoriesCreate}
      edit={CategoriesEdit}

    />
    <Resource
      name="orders"
      list={OrderList}
      show={OrderShow}
      edit={OrdersEdit}
    />
  </Admin>
);
