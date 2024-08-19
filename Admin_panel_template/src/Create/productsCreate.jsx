import { DateInput, Create, Edit, ReferenceInput, SimpleForm, TextInput, BooleanField, SelectField, BooleanInput } from 'react-admin';

export const ProductsCreate = () => (

    <Create>
        <SimpleForm>
            <TextInput source="Id" />
            <TextInput source="Category" />
            <TextInput source="Name" />
            <TextInput source="Price" />
            <TextInput source="Description" />
            <TextInput source="CountInStock" />
            <TextInput source="Image" />

        </SimpleForm>
    </Create>

);