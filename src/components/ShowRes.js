/** @format */

import Image from "../images/Reas.png"
import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { Checkbox } from "antd"
import { useSelector } from "react-redux"
import moment from "jalali-moment"

const ShowRes = () => {
  const [showEmpty, setShowEmpty] = useState(false)
  const [tarikh, setTarikh] = useState(new Date())
  const [showBorder1, setShowBorder1] = useState(false)
  const [showBorder2, setShowBorder2] = useState(false)
  const filt = useSelector((state) => state.filt.filt)

  // console.log(tarikh);
  const options = {
    weekday: "long",
  }
  const opis = {
    month: "long",
  }

  // const tasi = new Date();
  // setTarikh(tasi);
  // console.log(tarikh);

  const mas = moment(tarikh, "YYYY-MM-DD").format("jD")
  // console.log(mas);
  const alir = new Date(tarikh).toLocaleDateString("fa-IR", options)
  const mon = new Date(tarikh).toLocaleDateString("fa-IR", opis)
  // console.log(alir);
  // console.log(mon);

  const m1 = tarikh.setDate(tarikh.getDate() + 1)
  const v1 = new Date(m1)
  const t1 = moment(v1, "YYYY-MM-DD").format("jD")
  const alir1 = new Date(v1).toLocaleDateString("fa-IR", options)
  const mon1 = new Date(v1).toLocaleDateString("fa-IR", opis)

  const m2 = tarikh.setDate(tarikh.getDate() + 1)
  const v2 = new Date(m2)
  const t2 = moment(v2, "YYYY-MM-DD").format("jD")
  const alir2 = new Date(v2).toLocaleDateString("fa-IR", options)
  const mon2 = new Date(v2).toLocaleDateString("fa-IR", opis)

  const m3 = tarikh.setDate(tarikh.getDate() + 1)
  const v3 = new Date(m3)
  const t3 = moment(v3, "YYYY-MM-DD").format("jD")
  const alir3 = new Date(v3).toLocaleDateString("fa-IR", options)
  const mon3 = new Date(v3).toLocaleDateString("fa-IR", opis)

  const m4 = tarikh.setDate(tarikh.getDate() + 1)
  const v4 = new Date(m4)
  const t4 = moment(v4, "YYYY-MM-DD").format("jD")
  const alir4 = new Date(v4).toLocaleDateString("fa-IR", options)
  const mon4 = new Date(v4).toLocaleDateString("fa-IR", opis)

  // const m2 = moment(t2, "YYYY-MM-DD").format("jYYYY/jM/jD");
  // console.lod(m2);

  const mp = tarikh.setDate(tarikh.getDate() - 9)
  const vp = new Date(mp)
  const handlePrev = () => {
    setTarikh(vp)
  }

  const mn = tarikh.setDate(tarikh.getDate() + 10)
  const vn = new Date(mn)
  const handleNext = () => {
    setTarikh(vn)
  }

  // console.log("ccccccccccccccccc", tarikh);
  console.log("tttttttttttttttttttt", filt.monthe)
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }

  const showBo = () => {
    setShowBorder1(true)
    setShowBorder2(false)
  }
  const showBo1 = () => {
    setShowBorder2(true)
    setShowBorder1(false)
  }

  return (
    <>
      <div className="container my-4">
        <div className="row d-flex justify-content-between">
          <div
            style={{ backgroundColor: "#fff", borderRadius: "12px" }}
            className="col-3"
          >
            <div className="row mt-4">
              <p>زمان حرکت</p>
            </div>
            <div className="row">
              <Box style={{ width: "100%" }}>
                <Slider
                  size="small"
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div className="row">
              <p>زمان رسیدن</p>
            </div>
            <div className="row">
              <Box width={300}>
                <Slider
                  size="small"
                  defaultValue={35}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div className="row">
              <p>نوع اتوبوس</p>
            </div>
            <div className="row">
              <Checkbox onChange={onChange}>با تخفیف</Checkbox>
            </div>
          </div>
          <div
            style={{
              borderRadius: "12px",
              flexDirection: "column",
            }}
            className="col-lg-8 d-flex justify-content-center h-auto"
          >
            <div
              style={{
                border: "1px solid #d9d9d9",
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
              className="row w-100"
            >
              <div className="col-1 d-flex align-items-center">
                <i
                  style={{ cursor: "pointer" }}
                  onClick={handlePrev}
                  className="bi bi-caret-right-fill"
                ></i>
              </div>
              {showBorder1 ? (
                <div style={{ borderBottom: "1px solid" }} className="col-2">
                  {/* <p style={{ margin: "5px" }}>{filt.daily}</p> */}
                  <button
                    // onClick={showBo}
                    style={{
                      margin: "5px",
                      border: "none",
                      backgroundColor: "#fff",
                    }}
                  >
                    {alir}
                    <br />
                    {mas}
                    {mon}{" "}
                  </button>
                </div>
              ) : (
                <div id="p2" className="col-2">
                  {/* <p style={{ margin: "5px" }}>{filt.daily}</p> */}
                  <button
                    onClick={showBo}
                    // onClick={showBorder}
                    style={{
                      margin: "5px",
                      border: "none",
                      backgroundColor: "#fff",
                    }}
                  >
                    {alir}
                    <br />
                    {mas}
                    {mon}{" "}
                  </button>
                </div>
              )}
              {showBorder2 ? (
                <div style={{ borderBottom: "1px solid" }} className="col-2">
                  {/* <p style={{ margin: "5px" }}>پنجشنبه</p> */}
                  <button
                    // onClick={showBo1}
                    style={{
                      margin: "5px",
                      border: "none",
                      backgroundColor: "#fff",
                    }}
                  >
                    {alir1}
                    <br />
                    {t1}
                    {mon1}{" "}
                  </button>
                </div>
              ) : (
                <div id="p3" className="col-2">
                  {/* <p style={{ margin: "5px" }}>پنجشنبه</p> */}
                  <button
                    onClick={showBo1}
                    style={{
                      margin: "5px",
                      border: "none",
                      backgroundColor: "#fff",
                    }}
                  >
                    {alir1}
                    <br />
                    {t1}
                    {mon1}{" "}
                  </button>
                </div>
              )}
              <div className="col-2">
                {/* <p style={{ margin: "5px" }}>جمعه</p> */}
                <button
                  style={{
                    margin: "5px",
                    border: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  {alir2}
                  <br />
                  {t2}
                  {mon2}{" "}
                </button>
              </div>
              <div className="col-2">
                {/* <p style={{ margin: "5px" }}>شنبه</p> */}
                <button
                  style={{
                    margin: "5px",
                    border: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  {alir3}
                  <br />
                  {t3}
                  {mon3}{" "}
                </button>
              </div>
              <div className="col-2">
                {/* <p style={{ margin: "5px" }}>یکشنبه</p> */}
                <button
                  style={{
                    margin: "5px",
                    border: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  {alir4}
                  <br />
                  {t4}
                  {mon4}{" "}
                </button>
              </div>
              <div className="col-1 d-flex justify-content-end align-items-center">
                <i
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                  className="bi bi-caret-left-fill"
                ></i>
              </div>
              {/* <div className="col-2">
                <p style={{ margin: "5px" }}>دوشنبه</p>
                <p style={{ margin: "5px" }}>1 فروردین</p>
              </div> */}
            </div>
            <div
              style={{
                backgroundColor: "#e7e7e7",
                borderRadius: "12px",
                border: "1px solid #d9d9d9",
              }}
              className="row w-100 d-flex justify-content-between my-4"
            >
              <div className="col-4 d-flex align-items-center">
                <p style={{ margin: "5px" }}>ساعت حرکت</p>
                <i className="bi bi-sort-down-alt"></i>
              </div>
              <div className="col-4 d-flex justify-content-end my-2">
                <p style={{ margin: "5px" }}>قیمت</p>
                <i className="bi bi-sort-down-alt mt-1"></i>
              </div>
            </div>
            {showEmpty ? (
              <div className="row w-100">
                <div
                  style={{ borderRadius: "12px", backgroundColor: "#fff" }}
                  className="col-12 d-flex"
                >
                  <div
                    style={{ flexDirection: "column" }}
                    className="col-9 d-flex align-items-center"
                  >
                    <div className="row w-100">
                      <div className="col-2 text-center p-0">
                        <p style={{ margin: "5px 0px 0px 0px" }}>14:15</p>
                        <p>ترمینال رشت</p>
                      </div>
                      <div className="col-8">
                        <p
                          style={{ height: "25px", borderBottom: "1px solid" }}
                        ></p>
                      </div>
                      <div className="col-2 text-center p-0">
                        <p style={{ margin: "5px 0px 0px 0px" }}>18:25</p>
                        <p>ترمینال تهران</p>
                      </div>
                    </div>
                    <div className="row w-100 d-flex justify-content-between mt-5">
                      <div className="col-4">
                        <a
                          href="/"
                          style={{
                            textDecoration: "none",
                            color: "gray",
                            textAlign: "center",
                          }}
                        >
                          نقشه صندلی
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="/"
                          style={{
                            textDecoration: "none",
                            color: "gray",
                            textAlign: "center",
                          }}
                        >
                          جزئیات مسیر
                        </a>
                      </div>
                      <div className="col-4">
                        <a
                          href="/"
                          style={{
                            textDecoration: "none",
                            color: "gray",
                            textAlign: "center",
                          }}
                        >
                          قوانین جریمه و استرداد
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="col-12 d-flex justify-content-center mt-2 mb-5">
                      <span style={{ fontWeight: "600" }}>1000</span> ریال
                    </div>
                    <div
                      style={{ fontSize: "12px" }}
                      className="col-12 d-flex justify-content-center mt-5 mb-1sss"
                    >
                      ظرفیت موجود :24
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-2 mb-3">
                      <button
                        style={{
                          backgroundColor: "rgb(61, 195, 110)",
                          border: "none",
                          color: "#fff",
                          padding: "8px 0px",
                          width: "80%",
                          borderRadius: "12px",
                        }}
                      >
                        انتخاب صندلی
                      </button>
                    </div>
                  </div>
                </div>
                {/* <img src={Image} alt="" /> */}
              </div>
            ) : (
              <>
                <div className="row">
                  <img src={Image} alt="" />
                </div>
                <div className="row">
                  <p style={{ textAlign: "center" }}>
                    متاسفانه اتوبوسی یافت نشد
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowRes
