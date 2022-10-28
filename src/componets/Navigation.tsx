import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white fixed top-0 right-0 left-0'>
      <span className='font-bold'>ReactTS</span>
      <span>
        <Link to={'/'} className='mr-2'>Products</Link>
        <Link to={'/about'}>About</Link>
      </span>
    </nav>
  );
};

export default Navigation;