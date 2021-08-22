function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100
    rounded-xl transition duration-200 ease-out 
    active:scale-90 active:border-blue-500 group"
    >
      <Icon
        className={`text-center text-gray-500 h-5 sm:h-7 mx-auto group-hover:text-blue-500 
        ${active && "text-blue-500"}`}
      />
    </div>
  );
}

export default HeaderIcon;
