
import { ArrayInput, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

export const OrdersEdit = () => (
    <Edit>
        <SimpleForm>
            {/* <ReferenceInput source="id" reference="s" /> */}
            <ArrayInput source="products"><SimpleFormIterator><TextInput source="product" />
                <NumberInput source="quantity" />
                <NumberInput source="price" />
                <TextInput source="name" />
                <TextInput source="size" />
                <TextInput source="color" />
                {/* <ReferenceInput source="id" reference="s" />     */}
            </SimpleFormIterator></ArrayInput>
            <TextInput source="user" />
            <TextInput source="status" />
            <TextInput source="paymentDetails.id" />
            <NumberInput source="totalPrice" />
            <DateInput source="__v" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);