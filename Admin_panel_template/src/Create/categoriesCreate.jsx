import { DateInput, Create, Edit, ReferenceInput, SimpleForm, TextInput, BooleanField, SelectField, BooleanInput } from 'react-admin';

export const CategoriesCreate = () => (

    <Create>
        <SimpleForm>
            <TextInput source="Id" />
            <TextInput source="Name" />
            <TextInput source="Description" />
            <TextInput source="Image" />

        </SimpleForm>
    </Create>

);