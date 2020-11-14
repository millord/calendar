


function Year({value, setValue}){
  
  function currentYearName(){
    return value.format('YYYY')
  } 

  function prevYear(){
    return value.clone().subtract(1, 'year')
  } 

  function nextYear(){
    return value.clone().add(1, 'year')
  } 

  // function thisYear(){
  //   return value.isSame(new Date(), "year")
  // }
  
  
  return(
    <div>
    <div className="previous" 
      onClick={() =>  setValue(prevYear())}
      >{ String.fromCharCode(171)}</div>
      <div className="current">{currentYearName()}</div>
          <div className="next"
          onClick={() =>setValue(nextYear())}
          >{String.fromCharCode(187)}</div>
          </div>
  )
}

export default Year;