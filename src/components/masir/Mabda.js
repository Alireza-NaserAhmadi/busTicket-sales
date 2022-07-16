import './Mabda.css'
import WindowedSelect from "react-windowed-select";
import { components, createFilter } from 'react-windowed-select';
import React, { useEffect } from "react";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

// const options = [{labale:'زنجان' , value:'1'},
// {labale:'تبریز' , value:'2'},
// {labale:'رشت' , value:'3'}
// ];
// const options = [];

// options.push({
//     label: "tehran",
//     value: "1"
//   });
//   options.push({
//     label: "tabriz",
//     value: "2"
//   });
//   options.push({
//     label: "zanjan",
//     value: "3"
//   });
 

// for (let i = 0; i < 10000; i += 1) {
//   options.push({
//     label: `Option ${i}`,
//     value: i
//   });
// } 






const Mabda =()=>{

  
   
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    
                    {/* <WindowedSelect options={options} /> */}
                    {/* <input type="search" /> */}
                    
                    <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />;
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mabda;