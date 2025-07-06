
import { useData } from '@/context/DataContext';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const { footerData, isLoading } = useData();

  if (isLoading || !footerData) {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-48 mb-8"></div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <Instagram size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Facebook': return <Facebook size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{footerData.companyName}</h3>
            <p className="text-gray-300 mb-4">{footerData.description}</p>
            <div className="flex space-x-4">
              {footerData.socialLinks?.map((social: any, index: number) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.quickLinks?.map((link: any, index: number) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerData.services?.map((service: any, index: number) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              {footerData.contact?.email && (
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${footerData.contact.email}`} className="hover:text-white transition-colors">
                    {footerData.contact.email}
                  </a>
                </div>
              )}
              {footerData.contact?.phone && (
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-2" />
                  <a href={`tel:${footerData.contact.phone}`} className="hover:text-white transition-colors">
                    {footerData.contact.phone}
                  </a>
                </div>
              )}
              {footerData.contact?.address && (
                <div className="flex items-start text-gray-300">
                  <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                  <span>{footerData.contact.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {footerData.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;