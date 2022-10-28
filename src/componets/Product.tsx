import { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const handleToggleDetails = () => setDetails(prevState => !prevState);
  
  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img src={product.image} alt={product.title} className='w-1/6' />
      <p>{product.title}</p>
      <span className='font-bold'>Price: {product.price}</span>
      <button
        className={'py-2 px-4 border w-[125px] h-[42px]' + (details ? ' bg-blue-400 hover:bg-blue-500' : ' bg-yellow-400 hover:bg-yellow-500')}
        onClick={handleToggleDetails}
      >
        {details ?  'Hide Details' : 'Show Details'}
      </button>
      {details && 
        <div>
          <p>{product.description}</p>
          <p style={{ textAlign: 'center' }}>Rate: <span style={{ fontWeight: 'bold'}}>{product?.rating?.rate ? product.rating?.rate : 0}</span></p>
        </div>
      }
    </div>
  )
}

export default Product