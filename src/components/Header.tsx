import { useRef, useState } from 'react';
import farmLogo from '../../public/farmLogo.png';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navReference = useRef(null);

    const onToggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const onCloseMenu = (): void => {
        setIsMenuOpen(false);
    };

    return (
        <header className='sticky top-0 z-10 flex h-24 items-center bg-slate-100 px-8 md:h-36 lg:px-12 w-full'>
            <a href='/#top' className='flex items-center'>
                <img
                    alt='Cotter Farm logo with farm name written under handdrawn basket filled with vegetables'
                    className='h-24 w-auto md:h-36'
                    src={farmLogo}
                />
                <span className='sr-only'>Cotter Farm</span>
            </a>
            <button
                onClick={onToggleMenu}
                className='md:hidden p-2 ml-auto'
                aria-controls='navbar-default'
                aria-expanded={isMenuOpen}
                aria-label='Toggle navigation'
                type='button'
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className={`absolute w-full inset-x-0 ${isMenuOpen ? 'block top-[100%] w-screen' : 'hidden'} bg-slate-100 md:bg-transparent md:relative md:block`} ref={navReference} >
                <nav>
                    <ul className='flex flex-col md:flex-row md:space-x-8 md:justify-end text-md ml-auto gap-4 font-medium underline-offset-4 sm:gap-6 p-4'>
                        <li >
                            <a href='/#contact' className='block py-2 pr-4 pl-3 hover:bg-gray-200 text-gray-900 rounded md:hover:underline md:hover:bg-transparent md:border-0 md:p-0' onClick={onCloseMenu}>Sign Up</a>
                        </li>
                        <li>
                            <a href='/#csa' className='block py-2 pr-4 pl-3 hover:bg-gray-200 text-gray-900 rounded md:hover:underline md:hover:bg-transparent md:border-0 md:p-0' onClick={onCloseMenu}>CSA Info</a>
                        </li>
                        <li>
                            <a href='/#about' className='block py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-200 rounded md:hover:underline md:hover:bg-transparent md.border-0 md:p-0 ' onClick={onCloseMenu}>About Us</a>
                        </li>
                        <li >
                            <a href='/#contact' className='block py-2 pr-4 pl-3 hover:bg-gray-200 text-gray-900 rounded md:hover:underline md:hover:bg-transparent md.border-0 md:p-0 ' onClick={onCloseMenu}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
