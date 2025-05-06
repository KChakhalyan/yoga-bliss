'use client';

import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    return (
        <nav className="w-full flex justify-end items-center px-6 py-4 sticky top-0 z-40">
            <LanguageSwitcher />
        </nav>
    );
};

export default Navbar;
