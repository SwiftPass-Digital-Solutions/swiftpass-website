'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { MenuIcon } from '../ui/icons';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `px-3 py-2 text-sm font-medium transition-colors ${
      isActive 
        ? 'text-dark-900' 
        : 'text-dark-100 hover:text-dark-900'
    }`;
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive 
        ? 'text-dark-900 bg-gray-50' 
        : 'text-dark-100 hover:text-dark-900 hover:bg-gray-50'
    }`;
  };

  return (
    <nav className="fixed py-4 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button - Left */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>

          {/* Logo - Center on mobile, Left on desktop */}
          <div className="flex items-center md:order-first order-2">
            <Link href="/" className="text-gray-900 hover:text-gray-700 transition">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={getLinkClasses("/")}
            >
              Home
            </Link>
            <Link 
              href="/individuals" 
              className={getLinkClasses("/individuals")}
            >
              For Individuals
            </Link>
            <Link 
              href="/business" 
              className={getLinkClasses("/business")}
            >
              For Business
            </Link>
          </div>

          {/* Desktop Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Button
              isLink
              linkUrl="https://swiftpass-web.vercel.app/register"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile placeholder for layout balance */}
          <div className="md:hidden w-10"></div>
        </div>

        {/* Mobile Menu - Shows/hides based on state */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className={getMobileLinkClasses("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/individuals" 
                className={getMobileLinkClasses("/individuals")}
                onClick={() => setIsMenuOpen(false)}
              >
                For Individuals
              </Link>
              <Link 
                href="/business" 
                className={getMobileLinkClasses("/business")}
                onClick={() => setIsMenuOpen(false)}
              >
                For Business
              </Link>
              <div className="pt-2">
                <Button>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
