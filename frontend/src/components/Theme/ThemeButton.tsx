"use client";

import React from "react";
import { useTheme } from "next-themes";

import "./style.css";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    return (
        <label className="switch">
            <input
                className="toggle"
                type="checkbox"
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
            />
            <span className="slider"></span>
            <span className="card-side"></span>
        </label>
    );
};

export default ThemeButton;
