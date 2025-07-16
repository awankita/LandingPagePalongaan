"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 1000); // Show button after scrolling 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[#C8A445] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#806725] transition duration-300"
                    aria-label="Scroll to Top"
                >
                    ↑
                </button>
            )}
        </>
    );
}