/** @format */

import Header from "../components/Header"
import Buy from "../components/Buy"
import { Link } from "react-router-dom"
import ShowRes from "../components/ShowRes"
import Footer from "../components/Footer"
import EndFooter from "../components/EndFooter"

const Filter = () => {
  return (
    <>
      <Header />
      <Buy />
      {/* <Link to="/">
        <button>Home</button>
      </Link> */}
      <ShowRes />
      <Footer />
      <EndFooter />
    </>
  )
}

export default Filter
