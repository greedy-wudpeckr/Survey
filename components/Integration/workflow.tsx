import React from 'react';

interface Integration {
  id: string;
  name: string;
  logo: React.ReactNode;
  available: boolean;
}

const integrations: Integration[] = [
  // Top row - Available integrations
  {
    id: 'salesforce',
    name: 'Salesforce',
    available: true,
    logo: (
      <div className='p-8'><img src="sf.png" alt="" /></div>
    ),
  },
  {
    id: 'slack',
    name: 'Slack',
    available: true,
    logo: (
      <div className='p-6'><img src="slack.png" alt="" /></div>
    ),
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    available: true,
    logo: (
      <div className='p-6'><img src="hb.png" alt="" /></div>
    ),
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    available: true,
    logo: (
      <div className='p-6'><img src="znd.png" alt="" /></div>
    ),
  },
];

const comingSoonIntegrations: Integration[] = [
  {
    id: 'zoho',
    name: 'Zohoz',
    available: false,
    logo: (
      <div className='p-6'><img src="zho.png" alt="" /></div>
    ),
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    available: false,
    logo: (
      <div className='p-6'><img src="mcp.png" alt="" /></div>
    ),
  },
  {
    id: 'calendly',
    name: 'Calendly',
    available: false,
    logo: (
      <div className='p-6'><img src="clndr.png" alt="" /></div>
    ),
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    available: false,
    logo: (
      <div className='p-6'><img src="dpx.png" alt="" /></div>
    ),
  },
  {
    id: 'zapier',
    name: 'Zapier',
    available: false,
    logo: (
      <div className='p-6'><img src="zpir.png" alt="" /></div>
    ),
  },
];

export default function IntegrationsComponent() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-1xl lg:text-3xl text-gray-900 leading-tight">
          Connect with your
          <br />
          <span className="text-gray-800">workflow tools</span>
        </h1>
      </div>

      {/* Available Integrations */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex justify-center bg-white items-center p-8 min-w-48 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer group"
            >
              <div className="transition-opacity group-hover:opacity-80">
                {integration.logo}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Divider */}
      <div className="flex items-center justify-center my-8">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm font-medium uppercase tracking-wider">
          Coming soon
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Coming Soon Integrations */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 bg-white rounded-lg lg:gap-10">
          {comingSoonIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="flex justify-center items-center p-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              {integration.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}