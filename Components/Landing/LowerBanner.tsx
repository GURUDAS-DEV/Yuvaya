import React from 'react'

const items = [
    {
        label: "Free Delivery",
        icon: (
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="6" width="15" height="12" rx="1" />
                <path d="M16 10h4l3 3v5h-7V10z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
    },
    {
        label: "Packed with Care",
        icon: (
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
    {
        label: "48hr Dispatch",
        icon: (
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
]

const LowerBanner = () => {
    return (
        <div className="flex w-full mt-6 flex-row flex-wrap items-center justify-center gap-6 bg-[#34803c] px-4 py-4 sm:mt-8 sm:justify-evenly sm:gap-0 sm:px-[50px] sm:py-5">
            {items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 text-[#fffdf2] sm:gap-2">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 [&>svg]:w-full [&>svg]:h-full">
                        {item.icon}
                    </div>
                    <span className="font-cormorant text-[16px] font-semibold tracking-wide text-[#fffdf2] sm:text-2xl">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default LowerBanner