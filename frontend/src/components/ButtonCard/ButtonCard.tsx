/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import "./style.css";

interface Props {
    children: ReactNode;
}

const ButtonCard = ({ children }: Props) => {
    return <button>{children}</button>;
};

export default ButtonCard;
