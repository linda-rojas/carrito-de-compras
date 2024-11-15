import './styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../context/index';



export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return ( 
        <aside 
        className={`${context.isProductDetailOpen? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bg-white border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon 
                className='size-6 text-black cursor-pointer'
                onClick={() => context.ClosedProductDetail()} />
            </div>
            <figure className='px-6'>
                <img 
                className='w-full h-full rounded-lg' 
                src={context.showDetail.images} 
                alt={context.showDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.showDetail.price}</span>
                <span className='font-medium text-medium'>{context.showDetail.title}</span>
                <span className='font-light text-sm'>{context.showDetail.description}</span>
            </p>
        </aside>
    )
}

