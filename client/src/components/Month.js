import React from 'react';

function Month({ value, setValue }) {

  function currentMonthName() {
    return value.format('MMMM')
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month')
  }

  function nextMonth() {
    return value.clone().add(1, 'month')
  }

  return (
    <div>
      <div className="previous"
        onClick={() => setValue(prevMonth())}
      >{String.fromCharCode(171)}</div>
      <div className="current">{currentMonthName()}</div>
      <div className="next"
        onClick={() => setValue(nextMonth())}
      ><span>{String.fromCharCode(187)}</span></div>
    </div>
  )


}


export default Month;