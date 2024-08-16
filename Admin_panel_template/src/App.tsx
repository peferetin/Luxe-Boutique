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
    />
    <Resource
      name="categories"
      list={CategoryList}
      show={CategoryShow}
    />
    <Resource
      name="orders"
      list={OrderList}
      show={OrderShow}
    />
  </Admin>
);
