import { RouterProvider, createBrowserRouter } from "react-router-dom"


import Home from "./ui/Home"
import Menu, { menuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, { action as CreateOrderAction } from "./features/order/CreateOrder"
import Order, { OrderLoader } from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"


const router=createBrowserRouter([

  {
   element: <AppLayout />,
   errorElement:<Error/>,
   children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/menu",
      element:<Menu />,
      loader: menuLoader,
      errorElement:<Error />
    },
    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:"/order/new",
      element:<CreateOrder />,
      action:CreateOrderAction
    },
    {
      path:"order/:orderId",
      element:<Order />,
      loader:OrderLoader,
      errorElement:<Error />


    }
   ]

  }
  
])


export default function App() {
  
 return <RouterProvider router={router} />
}
