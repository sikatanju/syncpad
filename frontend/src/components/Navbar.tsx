/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ThemeButton from "../../public/components/Theme/ThemeButton";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Props {
    active: string[] | null | undefined;
}

const Navbar = ({ active }: Props) => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <div className="font-bold text-3xl">Syncpad</div>
            <div className="flex justify-between gap-3 items-center">
                {active?.map((ac) => (
                    <div key={ac}>{ac}</div>
                ))}
                <ThemeButton />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <ThemeButton />
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
