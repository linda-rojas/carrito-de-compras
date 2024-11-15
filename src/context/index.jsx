import { createContext, useState, useEffect, useCallback, useMemo } from 'react';

const ShoppingCartContext = createContext()

// eslint-disable-next-line
export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])
  const [order, setOrder] = useState([])
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false)
  const [showDetail, setShowDetail] = useState({})
  const [products, setProducts] = useState([])
  const [searchToCategory, setSearchToCategory] = useState('');
  // get products by title
  const [searchToProduct, setSearchToProduct] = useState('')
  // const [ filteredProducts, setFilteredProducts] = useState([])
  // const [filteredProductsClothes, setFilteredProductsClothes] = useState([])


  const OpenProductDetail = () => {
    return (setisProductDetailOpen(true))
  }

  const ClosedProductDetail = () => {
    return (setisProductDetailOpen(false))
  }
  const OpenCheckoutSideMenu = () => (setisCheckoutSideMenuOpen(true))

  const ClosedCheckoutSideMenu = () => (setisCheckoutSideMenuOpen(false))

  // const filteredItemsByTitle = () => {
  //   return products.filter(
  //     product => product.title.toLowerCase().includes(searchToProduct.toLowerCase())
  //   )
  // }

  const filteredProductsByTitle = useCallback(
    (products, searchToProduct) => {
      const titleToSearch = searchToProduct.toLowerCase();
      return products.filter(
        product => product.title.toLowerCase().includes(titleToSearch)
      );
    },
    []
  );

  const filteredProductsByCategory = useCallback(
    (products, searchTocategory) => {
      const categoryToSearch = searchTocategory.toLowerCase();
      return products.filter(
        product => product.category.name.toLowerCase().includes(categoryToSearch.toLowerCase())
      );
    },
    []
  );

  const filteredProductsWithMemo = useMemo(

    () => {
      let productsFiltered = products;

      if (searchToCategory) {
        productsFiltered = filteredProductsByCategory(productsFiltered, searchToCategory);
      }

      if (searchToProduct) {
        productsFiltered = filteredProductsByTitle(productsFiltered, searchToProduct)
      }

      return productsFiltered;
    },
    [products, searchToProduct, searchToCategory, filteredProductsByCategory, filteredProductsByTitle]
  );
  

  useEffect( () => {
    fetch('https://api.escuelajs.co/api/v1/products/')
    .then( response => response.json())
    .then( data => setProducts(data))
  }, []);


  // useEffect(() => {
  //   setFilteredProducts(
  //     searchToProduct
  //       ? filteredProductsByTitle(products, searchToProduct)
  //       : products
  //   );
  // }, [products, searchToProduct, filteredProductsByTitle])

    return (
        <ShoppingCartContext.Provider
            value={{
                count, 
                setCount,
                OpenProductDetail,
                ClosedProductDetail,
                isProductDetailOpen,
                isCheckoutSideMenuOpen,
                setisCheckoutSideMenuOpen,
                OpenCheckoutSideMenu,
                ClosedCheckoutSideMenu,
                showDetail,
                setShowDetail,
                shoppingCart,
                setShoppingCart,
                order,
                setOrder,
                products: filteredProductsWithMemo,
                searchToProduct,
                setSearchToProduct,
                setSearchToCategory,
            }}
            >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext }