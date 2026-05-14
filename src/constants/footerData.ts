import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export const FOOTER_DATA = {
  company: {
    name: "PBD INFRA",
    description:
      "Building the future of infrastructure with excellence and innovation. We specialize in large-scale construction, urban development, and sustainable engineering solutions.",
    logoIcon: "Building2", // Reference to the icon name
  },
  quickLinks: [
    { title: "Home", path: "/" },
    { title: "Our Journey", path: "/journey" },
    { title: "What We Offer", path: "/offer" },
    { title: "Project Gallery", path: "/gallery" },
    { title: "Contact Us", path: "/contact" },
  ],
  services: [
    { title: "Infrastructure Design", path: "/offer" },
    { title: "Urban Planning", path: "/offer" },
    { title: "Construction Management", path: "/offer" },
    { title: "Sustainable Building", path: "/offer" },
  ],
  contact: [
    { icon: Phone, text: "+91 98765 43210", label: "Phone" },
    { icon: Mail, text: "info@pbdinfra.com", label: "Email" },
    {
      icon: MapPin,
      text: "123 Business Hub, Cyber City, India",
      label: "Address",
    },
  ],
  socials: [
    { name: "Facebook", icon: FaFacebookF, path: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, path: "https://instagram.com" },
    { name: "Twitter", icon: FaTwitter, path: "https://twitter.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, path: "https://linkedin.com" },
  ],
  policies: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Use", path: "/terms-of-use" },
    { title: "Refund Policy", path: "/refund-policy" },
  ],
};
