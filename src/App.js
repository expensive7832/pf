import React, {Suspense, lazy, Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Spinner } from 'reactstrap'


const Home = lazy(() => import("./Pages/Home"))
const About = lazy(() => import("./Pages/About"))

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner className="spinner" type='grow' size={"lg"} color={"success"}/>}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter> 
      </Suspense>    
    )
  }
}


{
  /*

<div>
        <ComponentA />
        <a href="">Home</a>
        <ComponentA age={20} name="soji"/>
        <ComponentA age={21} name="laide"/>
        <ComponentA age={30} name="prince"/>
        <FunctionComponent/>
      </div>
  */
}
export default App