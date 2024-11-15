import Layout from '../components/Layout';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1

    return (
    <Layout 
    className='bg-neutral-900 text-slate-400' >
      <div className='flex mb-6 items-center justify-center relative w-80'>
        <Link className='absolute left-0 rounded-md hover:bg-rose-200' to='/My-Orders'>
          <ChevronLeftIcon className='h-6 w-6 cursor-pointer text-black' />
        </Link>
        <span>My Order</span>  
      </div>

      <div className='flex flex-col w-80'>
            {
                context.order?.[index]?.products.map( product => (
                    <OrderCard 
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageUrl={product.images}
                      price={product.price}
                    />
                ))
            }
            </div>
    </Layout>
    )
  }

  export default MyOrder