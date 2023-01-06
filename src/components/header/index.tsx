import { useState } from "react";
import Image from "next/image";
import headerLogo from "public/icons/main_icon_blue.png";
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon  } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function NavBar(): JSX.Element {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
  return (
    <header className="relative sticky top-0 z-10 grid grid-cols-3 p-5 md:px-10 bg-neutral-900 border-b-2 border-b-blue-700 md:drop-shadow-xl shadow-blue-400">
      <div className="relative flex items-center h-10 cursor-pointer my-auto w-[160px]">
        <Image src={headerLogo} fill={true} alt="Landnd" />
      </div>
        {/*middle => search*/}
        <div className="flex items-center md:border-2 border-blue-800 rounded-full text-blue-500 bg-gray-900">
            <input className="flex-grow pl-5 bg-transparent outline-none placeholder:text-blue-500 placeholder:text-sm"
                   type="text" placeholder="Search here..."
                   value={searchInput}
                   onChange={(e) => setSearchInput(e.target.value)} />
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-transparent rounded-full p-1 cursor-pointer md:mx-2"/>
        </div>
      {/*right*/}
      <div className="flex items-center space-x-4 justify-end text-blue-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6" />
          <div className="flex items-center space-x-2 border-2 border-blue-500 p-2 rounded-full">
                <Bars3Icon className="h-6" />
                <UserCircleIcon className="h-6" />
          </div>
      </div>
        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto">
                {/*date values will be passed from navbar*/}
                <DateRangePicker ranges={[selectionRange]}
                                 key={selectionRange.key}

                />
            </div>
        )}
        <DateRangePicker ranges={[selectionRange]} minDate={new Date()} onChange={handleSelect}  />
    </header>
  );
}

export default NavBar;
