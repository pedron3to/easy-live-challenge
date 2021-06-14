import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  const handleColor = time => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        console.log(date);
      }}
      dateFormat="d MMMM, yyyy h:mm aa"
      timeFormat="p"
      locale="pt-BR"
      timeClassName={handleColor}
    />
  );
}
