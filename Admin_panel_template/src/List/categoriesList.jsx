import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const CategoryList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
        </Datagrid>
    </List>
);