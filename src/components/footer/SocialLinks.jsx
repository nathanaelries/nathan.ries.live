import React from 'react';
import { FaGithub, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiRumble } from 'react-icons/si';
import TruthSocialIcon from '../icons/TruthSocialIcon';

function SocialLinks() {
  const socialLinks = [
    {
      href: 'https://github.com/nathanaelries',
      icon: FaGithub,
      label: 'GitHub'
    },
    {
      href: 'https://youtube.com/@nathanaelries',
      icon: FaYoutube,
      label: 'YouTube'
    },
    {
      href: 'https://rumble.com/c/c-7075805',
      icon: SiRumble,
      label: 'Rumble'
    },
    {
      href: 'https://x.com/nathanaelr95036',
      icon: FaXTwitter,
      label: 'X (Twitter)'
    },
    {
      href: 'https://truthsocial.com/@nathanaelries',
      icon: TruthSocialIcon,
      label: 'Truth Social'
    }
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;