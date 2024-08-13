import { DateInput, Create, Edit, ReferenceInput, SimpleForm, TextInput, BooleanField, SelectField, BooleanInput } from 'react-admin';

export const UserCreate = () => (

    <Create>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="password" />
            <BooleanInput source='isAdmin' />
        </SimpleForm>
    </Create>

);