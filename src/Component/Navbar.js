import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
    const navRef = useRef(null);
    const lastScrollTop = useRef(0);

    const currThemeIcon =
        theme === "light" ? "/night-mode.png" : "/light-mode.png";

    function handleThemeChange() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        const onScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop.current && currentScroll > 50) {
                navRef.current.classList.add("collapsed");
            } else {
                navRef.current.classList.remove("collapsed");
            }

            lastScrollTop.current = Math.max(0, currentScroll);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            id="navmenu"
            className={`navbar fixed-top navbar-expand-lg py-1 bg-${theme}`}
            data-bs-theme={theme}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    NewsApp
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {[
                            ["Home", "/"],
                            ["Business", "/business"],
                            ["Entertainment", "/entertainment"],
                            ["Health", "/health"],
                            ["Science", "/science"],
                            ["Sports", "/sports"],
                            ["Technology", "/technology"],
                        ].map(([name, path]) => (
                            <li className="nav-item" key={path}>
                                <Link className="nav-link" to={path}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        id = "themeToggleBtn"
                        className={`btn btn-outline-secondary ms-auto bg-light`}
                        onClick={handleThemeChange}
                    >
                        <img
                            src={currThemeIcon}
                            alt="theme toggle"
                            style={{ width: 20, height: 20 }}
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
}
