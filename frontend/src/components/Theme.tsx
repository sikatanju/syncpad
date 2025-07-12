/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useTheme } from "next-themes";

const theme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <label className="switch-button" htmlFor="switch">
                <div className="switch-outer">
                    <input
                        id="switch"
                        type="checkbox"
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                    />
                    <div className="button">
                        <span className="button-toggle"></span>
                        <span className="button-indicator"></span>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default theme;
