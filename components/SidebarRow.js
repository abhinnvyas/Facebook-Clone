import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div
      className="flex items-center space-x-3 p-4 
    hover:bg-gray-200 rounded-xl active:bg-gray-400 cursor-pointer
    transition ease-out"
    >
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
          objectFit="contain"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}

      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
