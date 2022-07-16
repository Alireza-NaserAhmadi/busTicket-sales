/** @format */

import Image from "../images/Group.jpg"
import React, { useRef, useState } from "react"
// import { Modal, Button } from 'antd';
import Modal from "react-bootstrap/Modal"
import ModalDialog from "react-bootstrap/ModalDialog"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalTitle from "react-bootstrap/ModalTitle"
import ModalBody from "react-bootstrap/ModalBody"
import ModalFooter from "react-bootstrap/ModalFooter"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { sentPhoneLogin, sendCode, deletItem } from "../redux/login/LoginAction"
import { Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"

const Header = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const inpRef = useRef(null)
  const inputRef = useRef(null)

  const hide = (e) => {
    inputRef.current.style.display = "none"
    setShowCode(true)
    const data = {
      phone: e.inputValue,
    }
    sentPhoneLogin(data)
    //
    // axios.post('https://ebus.ir/service/api/v1/auth/loginWithMobile',e)
    //     .then(res=>dispatch(sentPhoneLogin(e)))
  }
  const closebtn = () => {
    setModalShow(false)
    showCode(false)
  }
  const codeHide = () => {
    inpRef.current.style.display = "none"
    setShowCode(false)
    setModalShow(false)
  }
  const postPhone = (e) => {
    setInputValue(e)
    // axios.post('https://ebus.ir/service/api/v1/auth/loginWithMobile',e)
    //     .then(res=> dispatch(sentPhoneLogin()))
  }
  const calldispatch = (res) => {
    dispatch(sendCode(res.data.data))
    setShowName(false)
    setShowCode(false)
    setModalShow(false)
  }

  const postCode = (e) => {
    const data = {
      phone: e.inputValue,
      code: e.codeValue,
    }
    axios
      .post("https://ebus.ir/develop/api/v1/auth/verifyLogin", data)
      .then((res) => {
        res.status === 200 ? calldispatch(res) : alert("code is Incorrect")
      })
      .catch((err) => console.log(err))
  }
  const exit = () => {
    dispatch(deletItem())
    setShowName(true)
  }

  const [modalShow, setModalShow] = React.useState(false)
  const [signUp, setsignUp] = React.useState(false)
  const [showCode, setShowCode] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  const [codeValue, setCodeValue] = useState("")
  const [showName, setShowName] = useState(true)

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          پروفایل
        </a>
      </Menu.Item>

      <Menu.Item onClick={exit} danger>
        خروج{" "}
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <div className="container-fluid mb-4">
        <div className="row">
          <img
            style={{ maxHeight: "300px", padding: "0px" }}
            src={Image}
            alt=""
          />
          <div
            className="d-flex justify-content-end"
            style={{ position: "absolute", padding: "0px" }}
          >
            {showName ? (
              <>
                <button
                  onClick={() => setModalShow(true)}
                  style={{ background: "none", border: "none", color: "#fff" }}
                >
                  ورود
                </button>
                <button
                  onClick={() => setModalShow(true)}
                  style={{ background: "none", border: "none", color: "#fff" }}
                >
                  عضویت
                </button>
              </>
            ) : (
              <Dropdown overlay={menu}>
                <a
                  style={{
                    color: "#fff",
                    marginLeft: "40px",
                    textDecoration: "none",
                  }}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {user.user.firstName}
                  <DownOutlined />
                </a>
              </Dropdown>
              // <button style={{background:'none',border:'none',color:'#fff',marginLeft:"40px"}}>{user.user.firstName}</button>
            )}

            {/* <a style={{color:'#fff',textDecoration:'none'}} className="ms-2" href="">ورود</a>
                    <a style={{marginLeft:'16px',color:'#fff',textDecoration:'none'}} href="">عضویت</a> */}
          </div>

          {modalShow ? (
            <Modal
              show={modalShow}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <ModalBody ref={inputRef}>
                <i
                  onClick={() => setModalShow(false)}
                  style={{
                    fontSize: "31px",
                    color: "#4cba61",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                  className="bi bi-x"
                ></i>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  ورود
                </p>
                <p style={{ textAlign: "center" }}>
                  برای ادامه شماره موبایل خود را وارد کنید
                </p>
                <span
                  style={{
                    borderRadius: "12px",
                    margin: "40px auto",
                    border: "1px solid #e7e7e7",
                    width: "60%",
                    display: "flex",
                  }}
                >
                  <input
                    onChange={(e) => postPhone(e.target.value)}
                    placeholder="شماره تلفن"
                    type="phone"
                    style={{
                      textAlign: "center",
                      margin: "0px 10px 0px 0px",
                      width: "80%",
                      border: "none",
                      outline: "none",
                    }}
                  ></input>
                  <p
                    style={{
                      width: "17%",
                      margin: "10px 0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "3px solid #4cba61",
                    }}
                  >
                    +98
                  </p>
                </span>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => hide({ inputValue })}
                    style={{
                      margin: "5px 0px",
                      padding: "11px 0px",
                      width: "60%",
                      backgroundColor: "#4cba61",
                      border: "none",
                      borderRadius: "12px",
                    }}
                  >
                    تایید و دریافت کد
                  </button>
                </div>
              </ModalBody>
              {showCode ? (
                <ModalBody ref={inpRef}>
                  <i
                    onClick={codeHide}
                    style={{
                      fontSize: "31px",
                      color: "#4cba61",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                    className="bi bi-x"
                  ></i>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    کد ار وارد کنید
                  </p>
                  <p style={{ textAlign: "center" }}>
                    کد شش رقمی به شماره {inputValue} ارسال شد
                  </p>
                  <span
                    style={{
                      borderRadius: "12px",
                      margin: "40px auto",
                      border: "1px solid #e7e7e7",
                      width: "60%",
                      display: "flex",
                    }}
                  >
                    <input
                      onChange={(e) => setCodeValue(e.target.value)}
                      placeholder="کد"
                      type="phone"
                      style={{
                        padding: "10px 0px",
                        textAlign: "center",
                        margin: "0px 10px 0px 10px",
                        width: "100%",
                        border: "none",
                        outline: "none",
                      }}
                    ></input>
                  </span>
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={() => postCode({ inputValue, codeValue })}
                      style={{
                        margin: "5px 0px",
                        padding: "11px 0px",
                        width: "60%",
                        backgroundColor: "#4cba61",
                        border: "none",
                        borderRadius: "12px",
                      }}
                    >
                      تایید
                    </button>
                  </div>
                </ModalBody>
              ) : null}
            </Modal>
          ) : null}
        </div>
      </div>
    </>
  )
}

// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//        show={modalShow}
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <ModalHeader closeButton>
//           <ModalTitle id="contained-modal-title-vcenter">
//             Modal heading
//           </ModalTitle>
//         </ModalHeader>
//         <ModalBody>
//           <h4>Centered Modal</h4>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//         </ModalBody>
//         <ModalFooter>
//           <Button onClick={props.onHide}>Close</Button>
//         </ModalFooter>
//       </Modal>
//     );
//   }

export default Header
