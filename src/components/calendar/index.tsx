import React, {useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface Props {
    startDate: Date;
    endDate: Date;
}
const Calendar = (): JSX.Element => {
    const [date, setDate] = useState<Props>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleDateChange = (date: Date) => {
        setDate(date);
    }
    return (
        <div>
            <Datepicker
                startDate={date.startDate}
                endDate={date.endDate}
                onChange={handleDateChange}
                />
        </div>
    )
};

export default Calendar;