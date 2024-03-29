import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8 pl-10"
      >
        <span>© 2024 <strong>Amirhossein Mirshahi</strong>. All rights reserved.</span>
        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
