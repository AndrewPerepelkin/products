import React from 'react'
import { useContext } from 'react';
import Product from '../componets/Product';
import Loader from '../componets/Loader';
import { useProducts } from '../hooks/products';
import ErrorMessage from '../componets/ErrorMessage';
import Modal from '../componets/Modal';
import CreateProduct from '../componets/CreateProduct';
import { IProduct } from '../models';
import plus from '../images/plus.png';
import { ModalContext } from '../context/ModalContext';

const ProductPage = () => {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, openModal, closeModal } = useContext(ModalContext)

  const handleCreate = (product: IProduct) => {
    closeModal();
    addProduct(product);
  }
 
  return (
    <div className={'container mx-auto max-w-2xl mt-[65px]' + (loading ? ' flex justify-center h-screen' : ' pt-5')}>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product key={product.id} product={product} />)}
      {modal &&
        <Modal title='Create a New Product' onClose={closeModal}>
          <CreateProduct onCreate={handleCreate} />
        </Modal>}
      {!modal &&
        <button
          className='fixed bottom-16 right-16 flex justify-center items-center w-16 h-16 bg-yellow-400 rounded-full hover:bg-yellow-500 transition ease-in-out duration-300'
          onClick={openModal}
        >
          <img src={plus} alt="Plus" className='w-5 h-5' />
        </button>}
    </div>
  );
};

export default ProductPage;