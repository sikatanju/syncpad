/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ButtonCard from "@/components/ButtonCard/ButtonCard";
import React from "react";

interface Note {
    id: number;
    title?: string;
    description?: string;
}

const page = () => {
    const notes: Note[] = [
        {
            id: 1,
            title: "Note 1",
            description: "Description 1",
        },
        {
            id: 2,
            title: "Note 2",
            description: "Description 2",
        },
        {
            id: 3,
            title: "Note 3",
            description: "Description 3",
        },
        {
            id: 4,
            title: "Note 4",
            description: "Description 4",
        },
    ];
    notes.push();
    return (
        <div className="bg-amber-100">
            <div className="md:px-5">
                <div className="p-4 flex justify-center md:justify-start items-center gap-6">
                    <ButtonCard>All Notes</ButtonCard>
                    <ButtonCard>Shared With Me</ButtonCard>
                </div>
                <div className="md:px-5 text-black">
                    <ul>
                        {notes.map((note) => (
                            <li key={note.id}>
                                {note.title} -- {note.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;
