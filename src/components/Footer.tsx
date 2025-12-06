
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from "@/assets/kitchen-hub-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={24} />, href: '#' },
    { icon: <Instagram size={24} />, href: '#' },
    { icon: <Twitter size={24} />, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 sm:py-16">
      <div className="container-custom px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Logo & Socials */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="Kitchen Hub Logo" className="w-12 h-12" />
              <span className="font-display text-2xl text-secondary-foreground tracking-wider">KITCHEN HUB</span>
            </div>
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xl text-primary mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a>
              <a href="#locations" className="text-secondary-foreground/80 hover:text-primary transition-colors">Locations</a>
              <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a>
              <a href="#careers" className="text-secondary-foreground/80 hover:text-primary transition-colors">Careers</a>
            </nav>
          </div>

          {/* Legal */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-xl text-primary mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-secondary-foreground/60 pt-10 mt-10 border-t border-secondary-foreground/20">
          <p>© {currentYear} Kitchen Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
