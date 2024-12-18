import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../../context/index';
import { routePaths } from '../../../routes/route-paths';


const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)

    return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 top-0 px-8 text-sm font-light bg-white'>
        <ul className='flex items-center gap-3 '>
            <li className="font-semibold text-lg">
                <NavLink to='/'>
                Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to={routePaths.clothes}
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to={routePaths.electronics}
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to={routePaths.furnitures}
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                Furniture
                </NavLink>
            </li>            
            <li>
                <NavLink 
                to={routePaths.toys}
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to={routePaths.others}
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                <NavLink 
                to='/correo@gmail.com'
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                correo@gmail.com
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/My-Orders'
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/My-Account'
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/Sign-In'
                className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                }
                >
                Sign In
                </NavLink>
            </li>            
            <li className='flex items-center'>
                <ShoppingCartIcon className='size-6 text-black'></ShoppingCartIcon>
                <div>{context.shoppingCart.length}</div>
            </li>
        </ul>
    </nav>
    )
}


export default Navbar