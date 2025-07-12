/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayoutPage = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
};

export default DashboardLayoutPage;
