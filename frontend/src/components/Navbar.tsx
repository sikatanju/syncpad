/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ThemeButton from "./Theme/ThemeButton";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ButtonCard from "./ButtonCard/ButtonCard";

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <div className="font-bold text-3xl">Syncpad</div>
            <div className="invisible">
                <ButtonCard>Menu</ButtonCard>
            </div>
            <div className="flex justify-between gap-3 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
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
