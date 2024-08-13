import { Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="categoryId" reference="categories" link="show" />
            <TextField source="name" />
            <NumberField source="price" />
            <TextField source="description" />
            <NumberField source="quantity" />
            <TextField source="images" />
        </Datagrid>
    </List>
);