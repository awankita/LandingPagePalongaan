"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#fafafa] fixed top-0 left-0 w-full z-50">
            <div className="grid grid-cols-3 items-center px-4 py-3 w-full">
                {/* Kiri: Logo */}
                <div className="justify-self-start text-xl font-bold text-[#252524]">
                    Palongaan.go.id
                </div>

                {/* Tengah: Menu (desktop only) */}
                <nav className="justify-self-center hidden md:flex gap-6 text-sm text-[#252524] font-medium">
                    <Link href="#tentang" className="hover:text-green-700 transition">Tentang</Link>
                    <Link href="#agenda" className="hover:text-green-700 transition">Agenda</Link>
                    <Link href="#peta" className="hover:text-green-700 transition">Peta</Link>
                    <Link href="#cctv" className="hover:text-green-700 transition">CCTV</Link>
                </nav>

                {/* Tengah dummy (mobile) */}
                <div className="block md:hidden" />

                {/* Kanan: Burger menu */}
                <div className="justify-self-end md:hidden">
                    <button
                        className="text-green-800"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-inner">
                    <nav className="flex flex-col items-start px-4 py-2 gap-2 border-t">
                        <Link href="#tentang" className="w-full py-2" onClick={() => setIsOpen(false)}>Tentang</Link>
                        <Link href="#agenda" className="w-full py-2" onClick={() => setIsOpen(false)}>Agenda</Link>
                        <Link href="#peta" className="w-full py-2" onClick={() => setIsOpen(false)}>Peta</Link>
                        <Link href="#cctv" className="w-full py-2" onClick={() => setIsOpen(false)}>CCTV</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
