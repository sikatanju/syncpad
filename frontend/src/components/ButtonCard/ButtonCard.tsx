import React, { ReactNode } from "react";
import "./style.css";

interface Props {
    children: ReactNode;
}

const Card = ({ children }: Props) => {
    return <button>{children}</button>;
};

export default Card;
