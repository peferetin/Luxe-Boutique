import { EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <EmailField source="email" />
            <TextField source="token" />
            <TextField source="address.street.addressLine1" />
            <TextField source="address.street.number" />
        </SimpleShowLayout>
    </Show>
);