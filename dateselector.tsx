import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Date_SelectorProps = {
  onDateChange: (startDate: Date, endDate: Date) => void;
};

const DateSelector: React.FC<DateSelectorProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleFilter = () => {
    if (startDate && endDate) {command:typescript.selectTypeScriptVersion
      onDateChange(startDate, endDate);
    }
  };

  return (
    <div>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default DateSelector;
