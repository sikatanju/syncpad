/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ButtonCard from "@/components/ButtonCard/ButtonCard";
import Navbar from "@/components/Navbar";

const Home = () => {
    return (
        <div className="">
            <Navbar active={null} />
            <div className="mt-5">
                <div className="p-4 flex justify-center items-center gap-6">
                    <ButtonCard>All Notes</ButtonCard>
                    <ButtonCard>Shared With Me</ButtonCard>
                </div>
                <div className="">
                    <ul></ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
