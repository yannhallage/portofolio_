import { useEffect, useRef } from 'react';
import './Header.css'; 

const Header = () => {
    const navMenuRef = useRef(null);
    const navToggleRef = useRef(null);
    const navCloseRef = useRef(null);

    // Toggle menu visibility
    const handleToggleMenu = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.toggle('show-menu');
        }
    };

    // Close menu
    const handleCloseMenu = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.remove('show-menu');
        }
    };

    // Handle link clicks to close menu
    const handleLinkClick = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.remove('show-menu');
        }
    };

    // Set up event listeners
    useEffect(() => {
        const navToggle = navToggleRef.current;
        const navClose = navCloseRef.current;
        const navLinks = document.querySelectorAll('.nav__link');

        if (navToggle) {
            navToggle.addEventListener('click', handleToggleMenu);
        }

        if (navClose) {
            navClose.addEventListener('click', handleCloseMenu);
        }

        navLinks.forEach((link) => {
            link.addEventListener('click', handleLinkClick);
        });

        // Cleanup event listeners on component unmount
        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', handleToggleMenu);
            }
            if (navClose) {
                navClose.removeEventListener('click', handleCloseMenu);
            }
            navLinks.forEach((link) => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    XCOMPANY
                </a>

                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link" onClick={handleLinkClick}>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link" onClick={handleLinkClick}>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link" onClick={handleLinkClick}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="nav__close" id="nav-close" ref={navCloseRef}>
                        <i className="bx bx-x"></i>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle" ref={navToggleRef}>
                    <i className="bx bx-grid-alt"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;