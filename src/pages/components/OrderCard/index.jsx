import { TrashIcon } from '@heroicons/react/24/solid';


export const OrderCard = (props) => {
    const { id, title, imageUrl, price, handleDelete } = props

    let renderIcon;

    if (handleDelete) {
    renderIcon = <TrashIcon className='size-5 text-red-600 cursor-pointer' onClick={() => handleDelete(id)}></TrashIcon>
    }

    return (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img 
                    className='w-full h-full rounded-lg object-cover' 
                    src={imageUrl} 
                    alt={title} />
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderIcon}
            </div>
        </div>
    )
}