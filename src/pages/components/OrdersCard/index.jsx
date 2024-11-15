import { CalendarDaysIcon, ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export const OrdersCard = (props) => {
    const { totalProducts, totalPrice } = props

    const date = new Date().toLocaleDateString()

    return (
        <div className='flex justify-between items-center mb-2 border border-blue-700  h-12 rounded-lg py-8 px-5 hover:bg-blue-200 w-64'>
            <p className='flex flex-col'>
                <p className='flex items-center gap-2'>
                    <CalendarDaysIcon className='h-4 w-4  text-black' />
                    <span>{date} </span>
                </p>
                <p className='flex items-center gap-2'>
                    <span>
                        <ShoppingBagIcon className='h-4 w-4  text-black' />
                    </span>
                    <span>{totalProducts}</span>
                    <span>articles</span>
                </p>
            </p>
            <p className='flex items-center gap-2'>
                <span className='font-bold text-lg' >${totalPrice}</span>
                <ArrowRightIcon className='h-4 w-4 cursor-pointer text-black' />
            </p>
        </div>
    )
}