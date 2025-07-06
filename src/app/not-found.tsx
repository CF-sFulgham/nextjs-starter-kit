import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#e9e9e9]">
        <div className="flex flex-col gap-2 z-10 text-center">
            <div>
                <Image
                    src="/cfLogoFull.svg"
                    alt="Creation Foundation Logo"
                    fill={true}
                    className="filter hidden md:block md:-left-28! md:-top-10! brightness-125 max-w-[1373px] m-auto!"
                />
            </div>
            <div className="mt-30">
                <p className="mt-4 text-lg text-red-500 font-bold">Page Not Found</p>
                <p className="text-gray-900">The page you are looking for does not exist.</p>
            </div>
        </div>
    </div>
  );
}