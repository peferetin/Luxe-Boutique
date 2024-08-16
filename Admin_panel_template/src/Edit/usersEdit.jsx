import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="token" />
            <TextInput source="address.street.addressLine1" />
        </SimpleForm>
    </Edit>
);