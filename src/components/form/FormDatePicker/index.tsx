import React from 'react';
import { Datepicker } from 'flowbite-react';
import moment from 'moment';

interface DatePickerComponentProps {
  value: string;
  onDateChange: (date: string) => void;
  inline?: boolean;
  maxDate?: Date;
  label: string;
  language?: string;
  showTodayButton: boolean;
  showClearButton: boolean;
  title: string
}

const FormDatePicker: React.FC<DatePickerComponentProps> = (
  {
    value,
    onDateChange,
    inline = false,
    maxDate =
    new Date(),
    label = "",
    language = "",
    showClearButton,
    showTodayButton,
    title = ""
  }
) => {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      onDateChange(moment(date).format()); // Usa el formato que necesites
    }
  };

  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="">{label}</label>
      <Datepicker
        value={moment(value).format("DD-MM-YYYY")}
        onSelectedDateChanged={handleDateChange}
        maxDate={maxDate}
        inline={inline}
        language={language}
        showTodayButton={showTodayButton}
        showClearButton={showClearButton}
        title={title}
      />
    </>
  );
};

export default FormDatePicker;
