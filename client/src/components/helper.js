

export default function createCalendar(value){
  const startDate = value.clone().startOf('month').startOf('isoWeek')
  const endDate = value.clone().endOf('month').endOf('isoWeek')
  
  const day = startDate.clone().subtract(1, 'day')
  const calendar = [];
  while(day.isBefore(endDate, 'day')){
    calendar.push(
      Array(7).fill(0).map(() => day.add(1, 'day').clone())
    )
  }

  return calendar;

}