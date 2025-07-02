"use client"
import { useState } from 'react';
import Data from './Data.json';
import Card from './Card';

export function Listing() {
    const [filter, setFilter] = useState('');

    return (
        <section id="listing">
            <div className="w-[85%] mx-auto tablet:w-[90%] pt-[5vw] tablet:pt-[10vw] pb-[10vw]">
                <div className="flex w-full items-center gap-2 mb-12 tablet:mb-16 mobile:mb-12">
                    <p className="text-2xl font-medium tablet:text-3xl mobile:text-lg">Seacrh by term :</p>
                    <input
                        aria-label="search by term"
                        className="!bg-transparent border-b focus:outline-none text-xl px-2 tablet:text-2xl mobile:text-xl"
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder=""
                    />
                </div>
                <div className="grid grid-cols-4 gap-[2.5vw] tablet:grid-cols-2 tablet:gap-[4.5vw] mobile:grid-cols-1 mobile:gap-[8vw]">
                    {Data.terms
                        .filter((term) => term.name.toLowerCase().startsWith(filter.toLowerCase()))
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((term) => (
                            <Card key={term.id} term={term} />
                        ))}
                </div>
            </div>
        </section>
    )
}