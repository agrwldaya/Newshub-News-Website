import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Fetchitem from "./Components/FetechItems"
import { useSelector } from "react-redux"
import Spinner from "./Components/Spinner"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const fetchStatus = useSelector((store)=>store.fatchStatus)
  const newscategory = useSelector((store)=>store.route)
  const BgData = useSelector((store) => store.BgStatus);
  // console.log(BgData)


  return (
    <>
      <Header/> 
      
      <div  style={{backgroundColor:`${BgData.color}`}}>
      <Fetchitem/>
      <div style={{color:`${BgData.bgColor}`}} className="tophading"><h2 className="hading" style={{borderBottom:`2px solid ${BgData.bgColor}`}}  > Newshub: Top {capitalizeFirstLetter(newscategory.category)} Headlines</h2></div>
      {fetchStatus.fetching ? <Spinner/> : <Outlet/>}
      </div>
    </>
  )
}

export default App
