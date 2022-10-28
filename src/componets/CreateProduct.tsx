import React, {useState} from 'react'
import { IProduct } from '../models';
import InputField from './InputField';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

let productData: IProduct = {
  title: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  rating: {
    rate: 42,
    count: 0
  }
};

const CreateProduct = ({onCreate}: CreateProductProps) => {
  const [data, setData] = useState({ title: '', price: '', description: '', image: '', category: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (Object.values(data).find((inputName: string) => inputName.trim().length === 0)?.length === 0) {
      setError('All fields must be filled');
      return;
    }

    productData = {
      ...productData,
      title: data.title,
      price: +data.price,
      description: data.description,
      image: data.image,
      category: data.category,
    };

    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    onCreate(response.data);
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
  }

  return (
    <form onSubmit={handleSubmit} className={'flex flex-col'}>
      <InputField
        id={'title'}
        label='title'
        name={'title'}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        placeholder={'Enter product title...'}
        value={data.title}
        onChange={handleChange}
      />
      <InputField
        id={'price'}
        label='price'
        name={'price'}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        placeholder={'Enter product price...'}
        value={data.price}
        onChange={handleChange}
      />
      <InputField
        id={'description'}
        label='description'
        name={'description'}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        placeholder={'Enter product description...'}
        value={data.description}
        onChange={handleChange}
      />
      <InputField
        id={'image'}
        label='image'
        name={'image'}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        placeholder={'Enter product image...'}
        value={data.image}
        onChange={handleChange}
      />
      <InputField
        id={'category'}
        label='category'
        name={'category'}
        className={'border py-2 px-4 mb-3 w-full outline-0'}
        placeholder={'Enter product category...'}
        value={data.category}
        onChange={handleChange}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type='submit'
        className='py-2 px-4 border bg-yellow-400 hover:opacity-75 self-center'
      >
        Create
      </button>
    </form>
  )
}

export default CreateProduct;