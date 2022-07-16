import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker,{utils} from "react-modern-calendar-datepicker";



const DatePiker=()=>{
    const [selectedDay, setSelectedDay]=React.useState(null);

    const renderCustomInput = ({ ref }) => (
    
        <input
        //   readOnly
          ref={ref} // necessary
        //   placeholder='تاریخ مبدا'
        value={selectedDay ? `✅: ${selectedDay.day}` : ''}
        //   style={{
        //     outline:'none',
        //     border:'none',
        //     backgroundColor:'#eeeeee',
        //     padding:'3px 10px 3px 0px',
        //     width:'100%',
        //     borderLeft:' 1px solid',
            
        //     // marginTop:'4px',
        //     borderRadius:'0px 8px 8px 0px'
        //   }}
          />)



    return(
        <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        minimumDate={utils('fa').getToday()}
        renderInput={renderCustomInput}
        shouldHighlightWeekends
        locale="fa"
      />
    )
}

export default DatePiker;