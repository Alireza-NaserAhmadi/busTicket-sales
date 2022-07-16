/** @format */

import axios from "axios"

export const SEND_INFO = "SEND_INFO"
export const DELETE = "DELETE"

// const phone=[{
//     phone:'09393971086'
// }]

export const sentPhoneLogin = (data) => {
  console.log(data)
  axios
    .post("https://ebus.ir/develop/api/v1/auth/loginWithMobile", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  //data = {
  //     phone : '09196231231'
  // }
  // axios.post(url,data)

  //     sentPhoneLogin(data).then(response =>{
  // })
  // return{
  //     type:SENDPHONE,
  //     payload:data
  // }
}

export const sendCode = (res) => {
  return {
    type: SEND_INFO,
    payload: res,
  }
}

export const deletItem = () => {
  return {
    type: DELETE,
  }
}
