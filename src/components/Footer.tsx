import logo from "@/assets/kitchen-hub-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kitchen Hub" className="h-16 w-auto" />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm text-accent hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-accent hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-accent hover:text-primary transition-colors">
              Terms
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-accent/70">
            © {currentYear} Kitchen Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;