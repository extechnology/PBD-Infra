import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FOOTER_DATA } from "../../constants/footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-gray-300 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex mb-0 items-center space-x-2 group pb-5">
              <img src="/logos/logo2.png" alt="" className="w-28 h-auto object-contain" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              {FOOTER_DATA.company.description}
            </p>
            <div className="flex space-x-4">
              {FOOTER_DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-2 rounded-lg hover:bg-gold-500 hover:text-black transition-all duration-300 group text-gray-400"
                  aria-label={social.name}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Offerings */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Expertise</h3>
            <ul className="space-y-4">
              {FOOTER_DATA.services.map((service) => (
                <li key={service.title}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-6">
              {FOOTER_DATA.contact.map((item) => (
                <li key={item.label} className="flex items-start space-x-3">
                  <div className="mt-1 bg-white/5 p-1.5 rounded text-gold-500">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm text-gray-300 leading-tight">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-300">PBD Infra</span>. All rights reserved.
          </p>
          <div >
            <p className="text-gray-400 text-xs">powered by <Link to="https://extechnology.in" className="text-gold-400">extechnology</Link></p>
          </div>
          <div className="flex space-x-8">
            {FOOTER_DATA.policies.map((policy) => (
              <Link
                key={policy.title}
                to={policy.path}
                className="text-gray-500 hover:text-white text-xs transition-colors duration-300"
              >
                {policy.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
