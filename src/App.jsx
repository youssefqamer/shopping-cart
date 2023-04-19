import './App.css';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import {createHashRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout/MasterLayout';

function App() {
    let routes=createHashRouter([
      {path:'',element:<MasterLayout/>,children:[
        {index:true ,element:<Products/>},
        {path:'cart',element:<Cart/>},
      ]}
    ])
    return (
      <>
    <RouterProvider router={routes} />


</>
  );
}
export default App
