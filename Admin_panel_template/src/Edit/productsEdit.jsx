
import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="size" />
            <TextInput source="color" />
            {/* <ReferenceInput source="id" reference="s" /> */}
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
            {/* <ReferenceInput source="categoryId" reference="categories" /> */}
            <TextInput source="image" />
            <DateInput source="__v" />
            {/* <TextInput source="id" /> */}
        </SimpleForm>
    </Edit>
);