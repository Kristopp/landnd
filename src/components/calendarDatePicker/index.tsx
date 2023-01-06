import * as React from 'react';

interface CalendarDatePickerProps {
    value: Date;
    onChange: (date: Date) => void;
}

const CalendarDatePicker: React.FC<CalendarDatePickerProps> = ({ value, onChange }) => {
    const [currentMonth, setCurrentMonth] = React.useState(value.getMonth());
    const [currentYear, setCurrentYear] = React.useState(value.getFullYear());
    const [selectedDate, setSelectedDate] = React.useState(value);

    return (
        <div className="relative border-white ">
            {/* Render the calendar header here */}
            <div className="flex justify-between items-center border-b border-white">
                <button
                    className="text-white text-2xl font-bold"
                    onClick={() => {
                        setCurrentMonth(currentMonth - 1);

                    }
                    }
                >
                    {'<'}
                </button>
                <span className="text-white text-2xl font-bold">
                    {currentMonth + 1}/{currentYear}
                </span>
                <button
                    className="text-white text-2xl font-bold"
                    onClick={() => {
                        setCurrentMonth(currentMonth + 1);
                    }
                    }
                >
                    {'>'}
                </button>
            </div>
            {/* Render the calendar body here */}
        </div>
    );
}

export default CalendarDatePicker;