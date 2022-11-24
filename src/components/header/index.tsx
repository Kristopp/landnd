import Image from "next/image";
import headerLogo from "public/icons/main_icon_blue.png";
import { MagnifyingGlassIcon, GlobeAltIcon, UserCircleIcon, Bars3Icon  } from '@heroicons/react/24/solid'


function Index(): JSX.Element {
  return (
    <header className="sticky top-0 z-100 grid grid-cols-3 p-5 md:px-10 bg-black border-b-2 border-b-blue-700 md:drop-shadow-xl shadow-blue-400">
      <div className="relative flex items-center h-10 cursor-pointer my-auto w-[160px]">
        <Image src={headerLogo} fill={true} alt="Landnd" />
      </div>
        {/*middle => search*/}
        <div className="flex items-center bg-blue-200 md:border-4 border-blue-800 rounded-full">
            <input className="flex-grow pl-5 bg-transparent outline-none text-black placeholder:text-black placeholder:text-sm" type="text" placeholder="Search here..."/>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-transparent text-black rounded-full p-1 cursor-pointer md:mx-2"/>
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
    </header>
  );
}

export default Index;
