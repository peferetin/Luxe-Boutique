import { ArrayField, ChipField, Datagrid, DateField, List, NumberField, ReferenceField, SingleFieldList, TextField } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ArrayField source="products">
                <SingleFieldList>
                    <ReferenceField source="product" reference='products' link='show' />
                </SingleFieldList>
            </ArrayField>
            <ReferenceField source="user" reference='users' link='show' />
            <TextField source="status" />
            <TextField source="paymentDetails.id" />
            <NumberField source="totalPrice" />
        </Datagrid>
    </List>
);