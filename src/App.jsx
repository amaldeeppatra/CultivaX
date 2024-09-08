import './App.css'
import './index.css'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import AnalysisResults from './pages/analysisResults/AnalysisResults'
import PastAnalyses from './pages/pastAnalyses/PastAnalyses'
import Weather from './pages/weather/Weather'


const App=()=>{
  return(
      <>
      <Outlet />
      </>
     
  )
}

const appRouter=createBrowserRouter(
  [
      {
          path:"/",
          element:<App />,
          children:[
              {
                path:"/",
                element:[<Login/>]
              },
              {
                path:"/signup",
                element:[<Signup/>]
              },
              {
                path:"/dashboard",
                element:[<Dashboard/>]
              },
              {
                path:"/results",
                element:[<AnalysisResults/>]
              },
              {
                path:"/past-analyses",
                element:[<PastAnalyses/>]
              },
              {
                path:"/weather",
                element:[<Weather/>]
              }
          ]
      }
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);