import { DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="price" />
            <TextField source="description" />
            <NumberField source="quantity" />
            <TextField source="images" />
        </SimpleShowLayout>
    </Show>
);