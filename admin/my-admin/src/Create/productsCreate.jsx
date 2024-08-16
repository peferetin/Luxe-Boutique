
import { DateInput, Create, Edit, ReferenceInput, SimpleForm, TextInput, BooleanField, SelectField, BooleanInput } from 'react-admin';

const ProductsCreate = () => {

    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="description" />
                <TextInput source="price" />
                <TextInput source="image" />
                <TextInput source="brand" />
                <TextInput source="category" />
                <TextInput source="countInStock" />
                <TextInput source="size" />
                <TextInput source="color" />

            </SimpleForm>
        </Create>
    );


}
export default ProductsCreate;