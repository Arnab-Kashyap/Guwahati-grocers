const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(96, 165, 250, 1)" }} className="text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Guwahati Grocers</h2>
          <p className="text-blue-100">
            Fresh, organic, and premium-quality groceries delivered right to
            your doorstep. Made with love in Assam, India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-blue-100 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-100 hover:text-white transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-100 hover:text-white transition-colors">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-blue-100 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2 text-blue-100">
            <p>Email: support@guwahatiGrocers.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Guwahati, Assam</p>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-300 text-center py-4 text-sm text-blue-100">
        &copy; {new Date().getFullYear()} Guwahati Grocers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;