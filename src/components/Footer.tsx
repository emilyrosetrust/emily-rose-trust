import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-3">Emily Rose Trust</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Supporting Emily Rose and giving her parents the freedom to be fully present with her.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/emilys-story" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Emily's Story</Link>
              <Link to="/the-trust" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">The Trust</Link>
              <Link to="/support-emily-rose" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Support Emily Rose</Link>
              <Link to="/updates" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Updates</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Legal
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Legal navigation">
              <Link to="/terms-and-conditions" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms &amp; Conditions</Link>
              <Link to="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cookie Policy</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/70">
              Contact
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Contact options">
              <a
                href="mailto:info@emilyrosetrust.com?subject=Emily Rose Trust Website Contact"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                info@emilyrosetrust.com
              </a>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Form</Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Emily Rose Trust. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 flex items-center gap-1">
              Made with <Heart size={12} className="text-primary-foreground/80" /> for Emily Rose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
