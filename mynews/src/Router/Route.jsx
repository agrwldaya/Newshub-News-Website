
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import News from '../Components/news'

const router  = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
    {path:"/",element:<News/>},
    {path:"/sports",element:<News/>},
    {path:"/health",element:<News/>},
    {path:"/entertainment",element:<News/>},
    {path:"/science",element:<News/>},
    {path:"/technology",element:<News/>},
    {path:"/home",element:<News/>},
    {path:"/business",element:<News/>},
    
    ]
  }])
  export default router