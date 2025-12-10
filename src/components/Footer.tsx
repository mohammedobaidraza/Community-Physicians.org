import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Printer, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Community Physicians" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-lg font-heading italic mb-4">
              The Gold-Standard in Post-Acute Care
            </p>
            <p className="text-sm opacity-80">
              Patient-Centered. Physician-Driven. Results-Focused.
            </p>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="opacity-80 hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/community-physicians" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:630.320.6871" className="opacity-80 hover:opacity-100 transition-opacity">
                  630.320.6871
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Printer size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-80">
                  Fax: 630.385.0026
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@cphysicians.org" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@cphysicians.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-primary-foreground/20">
            {/* Emergency Disclaimer */}
            <div className="mb-6 text-center">
                <p className="text-sm font-medium opacity-90">
                    Cphysicians.org does not provide emergency medical services. If this is an emergency, please dial 911.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
                <p>© {new Date().getFullYear()} Community Physicians. All Rights Reserved.</p>
                <div className="flex gap-6">
                <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                    Privacy Policy
                </Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;