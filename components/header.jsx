import Link from 'next/link';
import { Logo } from './logo';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Services', href: '/services' },
    { linkText: 'Formats', href: '/formats' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
                <Logo />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-auto">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.href} 
                                className="inline-flex px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-800 rounded transition-colors"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
