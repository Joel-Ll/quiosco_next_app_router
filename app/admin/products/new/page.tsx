import AddProductoForm from '@/components/products/AddProductoForm';
import ProductForm from '@/components/products/ProductForm';
import Heading from '@/components/ui/Heading';

export default function CreateProducPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>
      <AddProductoForm>
        <ProductForm />
      </AddProductoForm>
    </>
  )
}
