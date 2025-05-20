"use client";

import ThemeButton from "../../public/components/Theme/ThemeButton";

export default function Home() {
    return (
        <div className="">
            <nav className="p-4 flex justify-between items-center">
                <div className="font-bold text-3xl">Syncpad</div>
                <div>
                    <ThemeButton />
                </div>
            </nav>
            <div className="mt-5"></div>
        </div>
    );
}
