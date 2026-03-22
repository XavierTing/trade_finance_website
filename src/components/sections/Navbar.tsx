import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '../../data/navigation';
import useScrollSpy from '../../hooks/useScrollSpy';
import type { NavItem } from '../../types/Product';

const sectionIds = navItems.map((item) => item.id);

interface DropdownProps {
  item: NavItem;
  isActive: boolean;
}

const NavDropdown = ({ item, isActive }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-text-primary font-semibold'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-1 min-w-[240px] rounded-xl border border-text-primary/[0.06] bg-bg-primary/95 p-2 shadow-lg backdrop-blur-lg"
          >
            {item.children?.map((child) => (
              <a
                key={child.label}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-text-primary/[0.04] hover:text-text-primary"
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="text-lg font-bold text-text-primary transition-colors duration-200">
          Trade Finance 101
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.id} item={item} isActive={activeId === item.id} />
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeId === item.id
                    ? 'text-text-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-text-primary/[0.06] bg-bg-primary/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.id}
                  item={item}
                  isActive={activeId === item.id}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface MobileNavItemProps {
  item: NavItem;
  isActive: boolean;
  onClose: () => void;
}

const MobileNavItem = ({ item, isActive, onClose }: MobileNavItemProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <a
        href={item.href}
        onClick={onClose}
        className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
          isActive
            ? 'text-text-primary font-semibold'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
          isActive
            ? 'text-text-primary font-semibold'
            : 'text-text-secondary hover:text-text-primary'
        }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            {item.children.map((child) => (
              <a
                key={child.label}
                href={child.href}
                onClick={onClose}
                className="block rounded-lg px-8 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {child.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
