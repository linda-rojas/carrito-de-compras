import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../context/index';

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.OpenProductDetail()
        context.setShowDetail(productDetail)
    }

    const addShoppingCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setShoppingCart([...context.shoppingCart, productData])
        context.OpenCheckoutSideMenu()
        context.ClosedProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.shoppingCart.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-green-600 w-6 h-6 rounded-full m-2 p-1' >
                    <CheckIcon className='size-6 text-white'/>
                </div>
            )
            } else {
                return (
                    <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-blue-400 w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addShoppingCart(event, data.data)} >
                        <PlusIcon className='size-6 text-white'/>
                    </div>
                )
            }
    }

    return (
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={data.data.images}
                    alt={data.data.title}
                    onError={(event) => {
                        event.currentTarget.src = 'https://images.pexels.com/photos/18213278/pexels-photo-18213278/free-photo-of-ciudad-gente-mujer-calle.jpeg?auto=compress&cs=tinysrgb&w=400'
                    }}
                />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>
                    {data.data.title}
                </span>
                <span className='text-lg font-semibold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card