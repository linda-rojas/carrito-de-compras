import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context'; 
import Home from '../Home/index';
import MyAccount from '../MyAccount/index';
import MyOrder from '../MyOrder/index';
import MyOrders from '../MyOrders/index';
import NotFound from '../NotFound/index';
import SignIn from '../SignIn/index';
import './App.css'
import Navbar from '../components/Navbar';
import { CheckoutSideMenu } from '../components/CheckoutSideMenu';
import { routePaths } from '../../routes/route-paths';
import { CategoryNames } from "../../constants/category-names";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/clothes', element: <Home categoryName={CategoryNames.clothes} />}, 
    { path: '/electronics', element: <Home categoryName={CategoryNames.electronics} />}, 
    { path: routePaths.furnitures, element: <Home categoryName={CategoryNames.furnitures} />}, 
    { path: '/toys', element: <Home categoryName={CategoryNames.toys} />}, 
    { path: '/others', element: <Home categoryName={CategoryNames.others} />}, 
    { path: '/My-Account', element: <MyAccount/>},
    { path: '/My-Order', element: <MyOrder />},
    { path: '/My-Orders', element: <MyOrders />}, 
    { path: '/My-Orders/last', element: <MyOrder />}, 
    { path: '/My-Orders/:id', element: <MyOrder />}, 
    { path: '/Sign-In', element: <SignIn />},
    { path: '/*', element: <NotFound />}
  ])

  return routes
}

function App() {
  return (
  <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
          <Navbar/>
          <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>

  </>
  )
}

export default App
