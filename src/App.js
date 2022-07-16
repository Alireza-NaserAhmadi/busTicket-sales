/** @format */

// import logo from './logo.svg';
import "./App.css"
import AppDownload from "./components/AppDownload"
import BilitInfo from "./components/BilitInfo"
import Bilit from "./components/BilitInfo"
import CancelInfo from "./components/CancelInfo"
// import Masir from './components/Masir.js';
import Info from "./components/Info"
import KharidInfo from "./components/KharidInfo"
import Question from "./components/Question"
import RezervInfo from "./components/RezervInfo"
import Shans from "./components/Shans"
import VipInfo from "./components/VipInfo"
import Footer from "./components/Footer"
import EndFooter from "./components/EndFooter"
import Header from "./components/Header"
import Buy from "./components/Buy"
import Motarareqe from "./components/Motarareqe"
import Video from "./components/Video"
import Responsive from "./components/Test "
import Slick from "./components/Slick"
import { Provider } from "react-redux"
import store from "./redux/store"
import DatePiker from "./components/Datepiker"
import Home from "./pages/Home"

import Filter from "./pages/Filter"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/filter" element={<Filter />}></Route>
          </Routes>

          {/* <Header />
          
        <Buy />
        <Info />
        <Shans /> */}
          {/* <Motarareqe />
        <AppDownload /> */}
          {/* <Slick />
        <Video />
        <Question />
        <BilitInfo />
        <KharidInfo />
        <CancelInfo />
        <RezervInfo />
        <VipInfo />
        <Footer />
        <EndFooter /> */}
        </Provider>
      </BrowserRouter>
      {/* <DatePiker /> */}
    </>
  )
}

export default App
