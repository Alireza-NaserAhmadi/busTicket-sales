/** @format */

import { Select } from "antd"
import "react-modern-calendar-datepicker/lib/DatePicker.css"
import DatePicker, { utils } from "react-modern-calendar-datepicker"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { giveCity } from "../redux/givecity/GiveCityAction"
import ClickAwayListener from "@mui/base/ClickAwayListener"
import moment from "jalali-moment"
import { Link } from "react-router-dom"
import { showTiket } from "../redux/showTiket/ShowTiketAction"
import { selDay } from "../redux/sendDay/SendDayAction"

const { Option, OptGroup } = Select

const Buy = () => {
  const city = useSelector((state) => state.city.city)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://ebus.ir/develop/api/v1/township/list/cities")
      .then((res) => console.log("eeeeeeee", res))

    // dispatch(giveCity(res.data.data))
  }, [dispatch])

  const [selectedDay, setSelectedDay] = useState(null)
  const [rselectedDay, setRselectedDay] = useState(null)
  const [isOneWay, setIsOneWay] = useState(true)
  const [showSize, setShowSize] = useState(false)
  const [count, setCount] = useState(1)
  const [kidCount, setKidCount] = useState(0)
  const [open, setOpen] = React.useState(false)
  const [mabda, setMabda] = useState("")
  const [maqsad, setMaqsad] = useState("")
  const [date, setDate] = useState("")

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="تاریخ مبدا"
      value={
        selectedDay
          ? ` ${selectedDay.day} /${selectedDay.month} / ${selectedDay.year}`
          : ""
      }
      style={{
        outline: "none",
        border: "none",
        backgroundColor: "#eeeeee",
        padding: "3px 10px 3px 0px",
        width: "100%",
        borderLeft: " 1px solid",

        // marginTop:'4px',
        borderRadius: "0px 8px 8px 0px",
      }}
    />
  )

  // if (selectedDay != null) {
  //   setDate(
  //     moment(
  //       `${selectedDay.year} /${selectedDay.month} / ${selectedDay.day}`,
  //       "jYYYY/jM/jD"
  //     ).format("YYYY-MM-DD")
  //   );
  // } else {
  // }

  const CustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="تاریخ مقصد"
      value={
        rselectedDay
          ? ` ${rselectedDay.day} /${rselectedDay.month} / ${rselectedDay.year}`
          : ""
      }
      style={{
        outline: "none",
        border: "none",
        backgroundColor: "#eeeeee",
        padding: "3px 8px 3px 0px",
        width: "100%",
        // marginTop:'4px',

        borderRadius: "8px 0px 0px 8px",
      }}
    />
  )

  const inCreament = () => {
    setCount(count + 1)
  }
  const deCreament = () => {
    if (count > 1) {
      setCount(count - 1)
    } else {
      setCount(count)
    }
  }
  const kidInCreament = () => {
    setKidCount(kidCount + 1)
  }
  const kidDeCreament = () => {
    if (kidCount > 0) {
      setKidCount(kidCount - 1)
    } else {
      setKidCount(kidCount)
    }
  }

  const handleMabda = (e) => {
    setMabda(e)
  }
  const handleMaqsad = (e) => {
    setMaqsad(e)
  }
  const handleSearch = () => {
    const miladi = moment(
      `${selectedDay.year} /${selectedDay.month} / ${selectedDay.day}`,
      "jYYYY/jM/jD"
    ).format("YYYY-MM-DD")

    const options = {
      weekday: "long",
    }
    const opis = {
      month: "long",
    }

    const daily = new Date(miladi).toLocaleDateString("fa-IR", options)
    const monthe = new Date(miladi).toLocaleDateString("fa-IR", opis)
    // console.log(monthe);
    // console.log(daily);
    let filt = {
      mabda: mabda,
      maqsad: maqsad,
      date: miladi,
      daily: daily,
      monthe: monthe,
      roz: selectedDay.day,
      mah: selectedDay.month,
      sal: selectedDay.year,
    }
    dispatch(selDay(filt))
    axios
      .get(
        `https://ebus.ir/develop/api/v1/travel/index/search?sourceTownshipId=${mabda}&destTownshipId=${maqsad}&travelDate=${miladi}`
      )
      .then((res) => dispatch(showTiket(res.data)))
      .catch((err) => console.log(err))
    console.log(filt)
  }

  return (
    <>
      <div style={{ borderRadius: "12px" }} className="container bg-white">
        <div className="row row-cols-md-3 d-flex align-items-center">
          <div
            style={{ margin: "15px 0px 15px 0px" }}
            className="d-flex align-items-center"
          >
            <a
              href=""
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "#666666",
                padding: "10px 0px",
                borderBottom: "2px solid #52b676",
              }}
            >
              یکطرفه
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "#b4b4b4",
                padding: "10px 0px",
              }}
            >
              رفت و برگشت
            </a>
          </div>
        </div>
        <div className="row h-75 d-flex align-items-center">
          <div
            style={{ marginTop: "10px" }}
            className="row row-cols-md-auto mtb mtbs d-flex align-items-center"
            style={{ margin: "15px 0px 30px 0px" }}
          >
            <div className="col-md-3 col-lg-2 mt-3">
              <Select
                style={{ width: "100%" }}
                menuItemSelectedIcon={() => {
                  return null
                }}
                showSearch
                placeholder="مبدا"
                optionFilterProp="children"
                onChange={(e) => handleMabda(e)}
                // onSearch={onSearch}
                // filterOption={(input, option) =>
                // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                //     }
              >
                {/* when i was Api     */}
                {/* {city.length > 0
                  ? city.map((data) => (
                      <OptGroup key={data.id} label={data.title}>
                        {data.Townships.map((res) => (
                          <Option key={res.code}>{res.title}</Option>
                        ))}
                      </OptGroup>
                    ))
                  : []} */}

                <OptGroup label="شهر ها">
                  <Option key="1">تهران</Option>
                  <Option key="2">زنجان</Option>
                  <Option key="3">تبریز</Option>
                  <Option key="4">اصفهان</Option>
                  <Option key="5">مشهد</Option>
                  <Option key="6">شیراز</Option>
                  <Option key="7">اهواز</Option>
                </OptGroup>
              </Select>
            </div>
            <div className="col-md-3 col-lg-2 mt-3">
              <Select
                style={{
                  width: "100%",
                  backgroundColor: "#eeeeee",
                  borderRadius: "10px",
                }}
                removeIcon={() => {
                  return null
                }}
                clearIcon={() => {
                  return null
                }}
                menuItemSelectedIcon={() => {
                  return null
                }}
                showSearch
                placeholder="مقصد"
                // optionFilterProp="children"
                onChange={(city) => handleMaqsad(city)}
              >
                {/* when i was api */}
                {/* {city.length > 0
                  ? city.map((data) => (
                      <OptGroup key={data.id} label={data.title}>
                        {data.Townships.map((res) => (
                          <Option key={res.code}>{res.title}</Option>
                        ))}
                      </OptGroup>
                    ))
                  : []} */}
                <OptGroup label="شهر ها">
                  <Option key="1">تهران</Option>
                  <Option key="2">زنجان</Option>
                  <Option key="3">تبریز</Option>
                  <Option key="4">اصفهان</Option>
                  <Option key="5">مشهد</Option>
                  <Option key="6">شیراز</Option>
                  <Option key="7">اهواز</Option>
                </OptGroup>
              </Select>
            </div>
            <div className="col-md-5 col-lg-3 mt-3">
              {isOneWay ? (
                <div>
                  <DatePicker
                    style={{ backgroundColor: "red" }}
                    colorPrimary=""
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                    minimumDate={utils("fa").getToday()}
                    renderInput={renderCustomInput}
                    locale="fa"
                  />

                  <input
                    disabled
                    className="bilit-input"
                    type="text"
                    placeholder="تاریخ برگشت"
                  />
                </div>
              ) : (
                <div>
                  <DatePicker
                    minimumDate={utils("fa").getToday()}
                    renderInput={renderCustomInput}
                    locale="fa"
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                  />

                  <DatePicker
                    style={{ backgroundColor: "blue" }}
                    className="DatePicker__input.-ltr"
                    value={rselectedDay}
                    onChange={setRselectedDay}
                    shouldHighlightWeekends
                    renderInput={CustomInput}
                    locale="fa"
                  />
                </div>
              )}
            </div>
            <ClickAwayListener onClickAway={handleClickAway}>
              <div
                style={{ position: "relative" }}
                className="col-md-6 col-lg-2 mt-3"
              >
                <input
                  onClick={handleClick}
                  className="count-mosafer"
                  type="text"
                  placeholder="تعداد مسافر"
                />

                {open ? (
                  <div style={{ position: "absolute", width: "92%" }}>
                    <ul
                      style={{
                        borderRadius: "12px",
                        listStyle: "none",
                        padding: "0px 14px",
                        backgroundColor: "#fff",
                        border: "1px solid #e7e7e7",
                      }}
                    >
                      <div className="row">
                        <li
                          style={{ borderBottom: "1px solid", padding: "5px" }}
                          className="d-flex"
                        >
                          <div className="col-6">بزرگسال</div>
                          <div className="col-6 d-flex">
                            <i
                              onClick={deCreament}
                              style={{
                                margin: "auto",
                                backgroundColor: "aliceblue",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                              className="bi bi-dash ms-1"
                            ></i>
                            <p
                              style={{
                                display: "inline-block",
                                margin: "auto",
                              }}
                            >
                              {count}
                            </p>
                            <i
                              onClick={inCreament}
                              style={{
                                margin: "auto",
                                backgroundColor: "aliceblue",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                              className="bi bi-plus-lg"
                            ></i>
                          </div>
                        </li>
                      </div>
                      <div className="row">
                        <li style={{ padding: "5px" }} className="d-flex">
                          <div className="col-6">کودک</div>
                          <div className="col-6 d-flex">
                            <i
                              onClick={kidDeCreament}
                              style={{
                                margin: "auto",
                                backgroundColor: "aliceblue",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                              className="bi bi-dash ms-1"
                            ></i>
                            <p
                              style={{
                                display: "inline-block",
                                margin: "auto",
                              }}
                            >
                              {kidCount}
                            </p>
                            <i
                              onClick={kidInCreament}
                              style={{
                                margin: "auto",
                                backgroundColor: "aliceblue",
                                borderRadius: "15px",
                                cursor: "pointer",
                              }}
                              className="bi bi-plus-lg"
                            ></i>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>
            {/* <ClickAwayListener onClickAway={handleClickAway}>  
                          <input onClick={handleClick} className="count-mosafer" type="text" placeholder="تعداد مسافر" />

                          {open ? 
                         ( <div style={{position:"absolute",width:"92%"}}>
                            <ul style={{borderRadius:"12px",listStyle:"none",padding:"0px 14px",backgroundColor:"#fff",border:"1px solid #e7e7e7"}}>
                              <div className="row">
                                <li style={{borderBottom:"1px solid",padding:"5px"}} className="d-flex">
                                  <div className="col-6">
                                    بزرگسال
                                  </div>
                                  <div className="col-6 d-flex">
                                  <i onClick={deCreament} style={{margin:"auto",backgroundColor:'aliceblue',borderRadius:"15px",cursor:"pointer"}} class="bi bi-dash ms-1"></i>
                                  <p style={{display:"inline-block",margin:"auto"}}>{count}</p>
                                  <i onClick={inCreament} style={{margin:"auto",backgroundColor:'aliceblue',borderRadius:"15px",cursor:"pointer"}} class="bi bi-plus-lg"></i>
                                  </div>
                                </li>
                              </div>
                              <div className="row">
                                <li style={{padding:"5px"}} className="d-flex">
                                  <div className="col-6">
                                    کودک
                                  </div>
                                  <div className="col-6 d-flex">
                                  <i onClick={kidDeCreament} style={{margin:"auto",backgroundColor:'aliceblue',borderRadius:"15px",cursor:"pointer"}} class="bi bi-dash ms-1"></i>
                                  <p style={{display:"inline-block",margin:"auto"}}>{kidCount}</p>
                                  <i onClick={kidInCreament} style={{margin:"auto",backgroundColor:'aliceblue',borderRadius:"15px",cursor:"pointer"}} class="bi bi-plus-lg"></i>
                                  </div>
                                </li>
                              </div>
                            </ul>
                          </div>) :
                          null
}
                          </ClickAwayListener> */}
            <div className="col-md-5 col-lg-2 mt-3 ">
              <Link to="/filter">
                <button
                  onClick={handleSearch}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9px",
                    backgroundColor: "#3dc36e",
                    color: "#fff",
                    border: "none",
                    padding: "5px 0px",
                  }}
                >
                  جست و جو
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy
