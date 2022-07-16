/** @format */
// import "./printer.css"
// /** @format */
// import React, { useRef } from "react"
// import { useReactToPrint } from "react-to-print"
// import ComponentToPrint from "./ComponentToPrint"

// const Printer = () => {
//   const componentRef = useRef()
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   })
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div
//             style={{ display: "none" }} // This make ComponentToPrint show   only while printing
//           >
//             {/* <ComponentToPrint ref={componentRef} /> */}
//           </div>
//           <button
//             onClick={handlePrint}
//             style={{ backgroundColor: "red" }}
//             className="btn"
//           >
//             {" "}
//             Print Resume{" "}
//           </button>
//           <ComponentToPrint ref={componentRef} />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Printer

// import * as React from "react"
// import ReactToPrint from "react-to-print"

// class TextComponent extends React.PureComponent {
//   render() {
//     return (
//       <>
//         <div>
//           <p
//             className="print"
//             // fontStyle="normal"
//             style={
//               {
//                 // fontWeight: "normal",
//                 // fontSize: "25px",
//                 // fontFamily: "Anton",
//               }
//             }
//           >
//             ایباس
//           </p>
//         </div>
//       </>
//     )
//   }
// }

// class ClassComponentText extends React.PureComponent {
//   componentRef = null

//   constructor(props) {
//     super(props)

//     this.state = {
//       isLoading: false,
//       text: "old boring text",
//     }
//   }

//   setComponentRef = (ref) => {
//     this.componentRef = ref
//   }

//   reactToPrintContent = () => {
//     return this.componentRef
//   }

//   reactToPrintTrigger = () => {
//     // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//     // to the root node of the returned component as it will be overwritten.

//     // Bad: the `onClick` here will be overwritten by `react-to-print`
//     // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

//     // Good
//     return <button>چاپ</button>
//   }

//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           content={this.reactToPrintContent}
//           documentTitle="AwesomeFileName"
//           removeAfterPrint
//           trigger={this.reactToPrintTrigger}
//         />

//         {this.state.isLoading && (
//           <p className="indicator">onBeforeGetContent: Loading...</p>
//         )}
//         <TextComponent ref={this.setComponentRef} />
//       </div>
//     )
//   }
// }

// export default ClassComponentText

// import * as React from "react"
// import { useRef } from "react"
// import ReactToPrint from "react-to-print"

// const ComponentToPrint = React.forwardRef((props, ref) => {
//   const { value } = props
//   return (
//     <div className="print-source" ref={ref}>
//       Number {value}
//     </div>
//   )
// })

// function Apps() {
//   const componentRef = useRef()

//   const numbers = [1, 2, 3, 4, 5]

//   return (
//     <>
//       {numbers.map(function (item, index) {
//         return (
//           <div style={{ display: "flex" }}>
//             <li key={index}>{item}</li>
//             <ReactToPrint
//               trigger={() => <button type="primary">Print</button>}
//               content={() => componentRef.current}
//             />
//             <ComponentToPrint ref={componentRef} value={item} />
//           </div>
//         )
//       })}
//     </>
//   )

//   export default App
// }

// import * as React from "react"
// import ReactToPrint from "react-to-print"

// const Test = () => {
//   return (
//     <>
//       <p>heloo</p>
//       <button onclick="window.print()">Print this page</button>
//     </>
//   )
// }

// export default Test

// class TextComponent extends React.PureComponent {
//   render() {
//     return (
//       <p style={{ fontSize: "25px", fontFamily: "Anton" }}>This is bare text</p>
//     )
//   }
// }

// export class ClassComponentText extends React.PureComponent {
//   componentRef = null

//   constructor(props) {
//     super(props)

//     this.state = {
//       isLoading: false,
//       text: "old boring text",
//     }
//   }

//   setComponentRef = (ref) => {
//     this.componentRef = ref
//   }

//   reactToPrintContent = () => {
//     return this.componentRef
//   }

//   reactToPrintTrigger = () => {
//     // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//     // to the root node of the returned component as it will be overwritten.

//     // Bad: the `onClick` here will be overwritten by `react-to-print`
//     // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

//     // Good
//     return <button>Print pure text using a Class Component</button>
//   }

//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           content={this.reactToPrintContent}
//           documentTitle="AwesomeFileName"
//           removeAfterPrint
//           trigger={this.reactToPrintTrigger}
//         />
//         {this.state.isLoading && (
//           <p className="indicator">onBeforeGetContent: Loading...</p>
//         )}
//         <TextComponent ref={this.setComponentRef} />
//       </div>
//     )
//   }
// }

// import React, { useRef } from "react"
// import { useReactToPrint } from "react-to-print"

// // import { ComponentToPrint } from "./ComponentToPrint"

// const ComponentToPrint = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} style={{ fontFamily: "Anton", fontSize: "25px" }}>
//       My cool content here!
//     </div>
//   )
// })

// export const Example = () => {
//   const componentRef = useRef()
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   })

//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   )
// }

import React from "react"
import { render } from "react-dom"
import Example from "./index"

// render(<Example />, document.getElementById("app-root"))
