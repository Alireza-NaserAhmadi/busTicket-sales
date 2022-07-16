/** @format */

import "../App.css"
import AppDownload from "../components/AppDownload"
import BilitInfo from "../components/BilitInfo"
import Bilit from "../components/BilitInfo"
import CancelInfo from "../components/CancelInfo"
// import Masir from '../components/Masir.js';
import Info from "../components/Info"
import KharidInfo from "../components/KharidInfo"
import Question from "../components/Question"
import RezervInfo from "../components/RezervInfo"
import Shans from "../components/Shans"
import VipInfo from "../components/VipInfo"
import Footer from "../components/Footer"
import EndFooter from "../components/EndFooter"
import Header from "../components/Header"
import Buy from "../components/Buy"
import Motarareqe from "../components/Motarareqe"
import Video from "../components/Video"
import Responsive from "../components/Test "
import Slick from "../components/Slick"
import { Provider } from "react-redux"
import store from "../redux/store"
import DatePiker from "../components/Datepiker"
// import { Apps } from "../components/printer"
import Example from "../components/index"

// import ClassComponentText from "../components/Datepiker"

const Home = () => {
  return (
    <>
      <Header />
      <Buy />
      <Info />
      <Shans />
      {/* <Example /> */}
      {/* <Motarareqe />
            <AppDownload /> */}
      <Slick />
      <Video />
      <Question />
      <BilitInfo />
      <KharidInfo />
      <CancelInfo />
      <RezervInfo />
      <VipInfo />
      <Footer />
      <EndFooter />
    </>
  )
}

export default Home
