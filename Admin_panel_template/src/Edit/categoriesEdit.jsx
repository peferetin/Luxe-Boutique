import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CategoriesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Id" />
            <TextInput source="Name" />
            <TextInput source="Description" />
            <TextInput source="Image" />

        </SimpleForm>
    </Edit>
);