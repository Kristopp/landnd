import Image from "next/image";
import headerLogo from "public/icons/main_icon_blue.png";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-100 grid grid-cols-3 p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto w-[160px]">
        <Image src={headerLogo} fill={true} alt="Landnd" />
      </div>
        {/*middle => search*/}
        <div className="flex items-center border-2 rounded-full py-2">
            <input type="text" placeholder="Search here"/>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-blue-800 text-black rounded-full p-1"/>
        </div>
      <div></div>
      {/*right*/}
      <div></div>
    </header>
  );
}

export default Header;
