import React from 'react';

// TypeScript interfaces for the footer component
export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationColumn {
  title: string;
  links: NavigationLink[];
}

export interface FooterData {
  logo: {
    text: string;
    accentText: string;
  };
  description: string;
  newsletter: {
    title: string;
    emailLabel: string;
    buttonText: string;
  };
  navigation: NavigationColumn[];
  legal: {
    copyright: string;
    links: NavigationLink[];
  };
}

// Default footer data matching the screenshot
export const defaultFooterData: FooterData = {
  logo: {
    text: 'THEY',
    accentText: 'SAID'
  },
  description: 'TheySaid recommends questions, delivers via your existing channels, engages your audience, and summarizes results through AI surveys.',
  newsletter: {
    title: 'Join Newsletter',
    emailLabel: 'Email*',
    buttonText: 'Get your copy'
  },
  navigation: [
    {
      title: 'Product',
      links: [
        { label: 'Product Overview', href: '#' },
        { label: 'Integration Videos', href: '#' },
        { label: 'Win / Loss Analysis', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Videos', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'NRR Whitepaper', href: '#' }
      ]
    },
    {
      title: 'Pages',
      links: [
        { label: 'Pricing', href: '#' },
        { label: 'Sign In', href: '#' },
        { label: 'Sign Up', href: '#' }
      ]
    }
  ],
  legal: {
    copyright: 'Copyright © 2025 TheySaid',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'DPA', href: '#' }
    ]
  }
};

// Alternative footer component using the data structure
interface FooterComponentProps {
  data?: FooterData;
  onNewsletterSubmit?: (email: string) => void;
  className?: string;
}

const FooterComponent: React.FC<FooterComponentProps> = ({ 
  data = defaultFooterData,
  onNewsletterSubmit,
  className = '' 
}) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNewsletterSubmit) {
      onNewsletterSubmit(email);
    } else {
      console.log('Newsletter signup:', email);
    }
    setEmail('');
  };

  return (
    <footer className={`bg-white py-16 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-black">{data.logo.text}</span>
              <span className="text-2xl font-bold text-pink-500">{data.logo.accentText}</span>
              <div className="w-0 h-0 border-l-8 border-l-pink-500 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {data.description}
            </p>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">{data.newsletter.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="newsletter-email" className="block text-sm text-gray-700 mb-1">
                    {data.newsletter.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200"
                >
                  {data.newsletter.buttonText}
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.navigation.map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-black mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-start gap-6 text-sm text-gray-500">
            <span>{data.legal.copyright}</span>
            {data.legal.links.map((link, index) => (
              <React.Fragment key={index}>
                <span className="text-gray-300">|</span>
                <a 
                  href={link.href} 
                  className="hover:text-gray-700 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;