
import Image from "next/image";
import NavbarImage from "@/assets/logo-icon.png"
import DateDisplay from "./DisplayDate";

export default function Navbar() {

    return (
        <nav className="container mx-auto mt-4 px-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">

                <div className="flex min-w-0 items-center gap-2">
                    <div className="shrink-0 rounded-2xl bg-[var(--primary)] p-3 sm:p-4">
                        <Image src={NavbarImage} width={20} height={20} alt="Navbar logo" />
                    </div>

                    <div className="min-w-0">
                        <h1 className="truncate text-lg font-bold sm:text-xl">বাজার দর</h1>
                        <DateDisplay />
                    </div>
                </div>

                <div className="flex shrink-0 items-center">
                    <button className="cursor-pointer px-2 py-3 text-sm font-bold sm:mx-2 sm:py-4 sm:text-base">সাইন ইন</button>
                    <button className="cursor-pointer rounded px-3 py-2 text-sm font-bold text-white shadow-sm shadow-green-600 bg-[var(--primary)] sm:px-4 sm:text-base">সাইন আপ</button>
                </div>

            </div>
        </nav>
    )
}