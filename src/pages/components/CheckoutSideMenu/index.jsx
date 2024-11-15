import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../../context/index';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../../utils';


export const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.shoppingCart.filter(product => product.id !== id)
        context.setShoppingCart(filteredProducts)
    }

    const handleOrder = () => {
        const orderToAdd = {
            date: '06.11.2024',
            products: context.shoppingCart,
            totalProducts: context.shoppingCart.length,
            totalPrice: totalPrice(context.shoppingCart)
        }
        context.setOrder([...context.order, orderToAdd])
        //clear after checkout
        context.setShoppingCart([])
    }

    return ( 
        <aside 
        className={`${context.isCheckoutSideMenuOpen? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon 
                className='size-6 text-red-700 cursor-pointer'
                onClick={() => context.ClosedCheckoutSideMenu()} />
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.shoppingCart.map( product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='p-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>
                        ${totalPrice(context.shoppingCart)}
                    </span>
                </p>
                <Link to='/My-Orders/last'>
                    <button 
                        className='w-full bg-green-600 py-3 text-white rounded-lg hover:bg-orange-700 text-lg' 
                        onClick={() => handleOrder()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

