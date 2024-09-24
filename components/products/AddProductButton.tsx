'use client';

import { Product } from '@prisma/client';
import { useStore } from '@/src/store';

interface Props {
  product: Product
}

export const AddProductButton = ({ product }: Props) => {
  const addToOrder = useStore((state) => state.addToOrder)

  return (
    <button
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
      onClick={() => addToOrder(product)}
    >Agregar</button>
  )
}
