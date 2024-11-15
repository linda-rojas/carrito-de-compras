import Layout from '../components/Layout';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { OrdersCard } from '../components/OrdersCard';
import { Link } from 'react-router-dom';


function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
    <Layout className='bg-neutral-900 text-slate-400'>
      <div className='flex items-center justify-center relative w-80'>
        <p className='font-medium mb-4'>My Orders</p>
      </div>
        {
          context.order.map( (order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalProducts={order.totalProducts} totalPrice={order.totalPrice} />
          </Link>
          ))
        }
    </Layout>
    )
  }


  export default MyOrders