import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../../context';
import Card from '../components/card'
import Layout from '../components/Layout'
import { ProductDetail } from '../components/productDetail';



function Home(props) {
  // eslint-disable-next-line react/prop-types
  const { categoryName = '' } = props;
  const context = useContext(ShoppingCartContext);

  console.log({ categoryName });
  

  useEffect(() => {
    context.setSearchToCategory(categoryName);
  }, [categoryName, context])

  return (
    <Layout className='bg-neutral-900 text-slate-400'> 
      <div className='flex flex-col pb-4 items-center'>
        <span className='text-lg font-medium'>Exclusive Products</span>
        <input 
          type="text"
          placeholder='Search Product'
          className='border rounded-lg border-black h-9 w-80 p-4  focus:outline-none'
          onChange={(e) => context.setSearchToProduct(e.target.value)} />
      </div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.products.map( product => (
            <Card key={product.id} data={product}/>
          ))
          }
      </div>
      <ProductDetail/>
    </Layout>
  );
}

  export default Home