'use client'
import { useState, useEffect } from "react";
import { RedirectButton } from "../RedirectButton"
import { Menu, X } from "lucide-react"

import "../../styles/sections/NavBar.scss"

const navLinks = [
    { id: 1, title: "Products", href: "#products" },
    { id: 2, title: "Resources", href: "#resources" },
    { id: 3, title: "About", href: "#about" },
    { id: 4, title: "Pricing", href: "#pricing" }
]

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled? "scrolled": "unscrolled"}`}>
            {/* Logo */}
            <img src="/image 1.png" alt="logo" className="logo" />

            {/* Mobile Menu button */}
            <button className="menu-btn" onClick={() => setOpen(!open)}>
                {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Nav Links */}
            <nav className={`nav-links ${open ? "open" : "closed"}`}>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="auth-buttons">
                    <a href="/">Login</a>

                    <RedirectButton href={"/"}>Get started</RedirectButton>
                </div>
            </nav>
        </header>
    )
}
