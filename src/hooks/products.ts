import { useState, useEffect } from "react";
import axios, {AxiosError} from 'axios';
import { IProduct } from '../models';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product:IProduct) {
    setProducts(prevState => [...prevState, product])
  }
  
  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products/?limit=10');
      setProducts(res.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false);
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading, error, addProduct };
}