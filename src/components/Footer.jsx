const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Customer Support Zone
          </h2>
          <p className="text-sm opacity-90">
            A simple customer ticket management system built with React.
            Track tickets, manage tasks, and resolve customer issues
            efficiently.
          </p>
        </div>
        {/* MIDDLE LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Dashboard</li>
            <li className="hover:underline cursor-pointer">Tickets</li>
            <li className="hover:underline cursor-pointer">Support</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm">support@customersupport.com</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <div className="flex gap-4 mt-4">
            <span className="cursor-pointer hover:scale-110 transition">
            </span>
            <span className="cursor-pointer hover:scale-110 transition">    
            </span>
            <span className="cursor-pointer hover:scale-110 transition">
            </span>
          </div>
        </div>
      </div>
      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © 2026 Customer Support Zone — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;