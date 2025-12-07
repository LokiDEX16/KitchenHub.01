import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import kitchenHubLogo from "@/assets/kitchen-hub-logo.png";
import OrderNowPopup from "@/components/OrderNowPopup";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderNowPopupOpen, setOrderNowPopupOpen] = useState(false);

  const navLinks = [
    { name: "Locations", href: "#locations" },
    { name: "Contact", href: "#contact" },
  ];

  const handleOrderNowClick = () => {
    setMobileMenuOpen(false); // Close mobile menu if open
    setOrderNowPopupOpen(true);
  };

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50 bg-neutral-white/95 backdrop-blur-md border border-border rounded-full shadow-lg animate-slide-in-top">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4 lg:px-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img src={kitchenHubLogo} alt='Kitchen Hub Logo' className='h-14 w-auto' />
              <span className="font-display text-2xl font-bold text-secondary animate-fade-in-delay">Kitchen Hub</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="hero"
                size="lg"
                className="animate-pulse-glow"
                onClick={handleOrderNowClick}
              >
                Order Online
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 right-0 bg-neutral-white border-b border-border animate-fade-up">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider py-2 text-secondary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="hero"
                size="lg"
                className="mt-2"
                onClick={handleOrderNowClick}
              >
                Order Online
              </Button>
            </nav>
          </div>
        )}
      </header>

      {orderNowPopupOpen && <OrderNowPopup onClose={() => setOrderNowPopupOpen(false)} />}
    </>
  );
};

export default Header;
