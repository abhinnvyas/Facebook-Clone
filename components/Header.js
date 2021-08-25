import Image from "next/image";
import {
  SearchIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <div
      className="flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5
    shadow-md"
    >
      {/* Left */}
      <div className="flex items-center">
        <Image
          className="cursor-pointer"
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600 cursor-pointer" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500
            flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active={true} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Picture */}
        <Image
          className="rounded-full cursor-pointer"
          onClick={signOut}
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap pr-3 font-semibold">
          {session.user.name}
        </p>{" "}
        {/* User's Name */}
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
