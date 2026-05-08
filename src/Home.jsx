// // src/pages/Home.jsx
// import { Smartphone, CreditCard, Wallet, ShieldCheck } from "lucide-react";
// import Logo from "./assets/img/esewa_logo.png";

// import './App.css'

// function Feature({ icon: Icon, title, desc }) {
//   return (
//     <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
//       <Icon className="w-10 h-10 text-green-600 mb-3" />
//       <h3 className="text-lg font-semibold mb-1">{title}</h3>
//       <p className="text-sm text-gray-600">{desc}</p>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Navbar */}
//      <header>
//       {/* Top Bar */}
//       <div className="bg-[#1E252E] flex items-center justify-between px-6 py-3">
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-2">
//           <span className="text-green-500 font-bold text-2xl">e</span>
//           <span className="text-white font-semibold text-2xl">Sewa</span>
//         </div>

//         {/* Center: Search */}
//         <div className="flex-1 mx-6">
//           <input
//             type="text"
//             placeholder="Search services/merchant by tags (e.g. adsl)"
//             className="w-full max-w-md px-3 py-2 rounded bg-[#2A323D] text-sm text-gray-300 placeholder-gray-400 focus:outline-none"
//           />
//         </div>

//         {/* Right: Login/Register */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder="eSewa ID"
//             className="px-3 py-2 rounded bg-[#2A323D] text-sm text-gray-300 placeholder-gray-400 focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="px-3 py-2 rounded bg-[#2A323D] text-sm text-gray-300 placeholder-gray-400 focus:outline-none"
//           />
//           <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//             Login
//           </button>
//           <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-600 hover:text-white">
//             Register
//           </button>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <nav className="bg-[#61B847] flex space-x-6 px-6 py-2 text-white text-sm font-medium">
//         <a href="#" className="hover:underline">Top Up</a>
//         <a href="#" className="hover:underline">Airlines</a>
//         <a href="#" className="hover:underline">Internet Bill</a>
//         <a href="#" className="hover:underline">Load Fund</a>
//       </nav>
//     </header>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-green-50">
//         <div className="max-w-lg">
//           <h2 className="text-4xl font-bold text-green-700 mb-4">
//             The Smarter Way to Pay & Get Paid
//           </h2>
//           <p className="text-gray-700 mb-6">
//             eSewa makes your daily payments simple, secure, and fast.
//             Send money, load wallet, and pay bills — all in one place.
//           </p>
//           <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700">
//             Get Started
//           </button>
//         </div>
//         <img
//           src="https://esewa.com.np/common/images/esewa_logo.png"
//           alt="eSewa Illustration"
//           className="w-80 mt-10 md:mt-0"
//         />
//       </section>

//       {/* Features */}
//       <section className="px-8 md:px-16 py-16">
//         <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">
//           Why Choose eSewa?
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           <Feature
//             icon={Smartphone}
//             title="Easy Top-Up"
//             desc="Recharge your mobile anytime, anywhere with just a few taps."
//           />
//           <Feature
//             icon={CreditCard}
//             title="Bill Payments"
//             desc="Pay electricity, water, and internet bills without hassle."
//           />
//           <Feature
//             icon={Wallet}
//             title="Secure Wallet"
//             desc="Keep your money safe and access it instantly when needed."
//           />
//           <Feature
//             icon={ShieldCheck}
//             title="Trusted & Secure"
//             desc="Your transactions are encrypted and highly secure."
//           />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-auto bg-gray-800 text-white py-8 px-8 md:px-16">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p>&copy; {new Date().getFullYear()} eSewa Clone. All rights reserved.</p>
//           <div className="space-x-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-green-400">Privacy</a>
//             <a href="#" className="hover:text-green-400">Terms</a>
//             <a href="#" className="hover:text-green-400">Support</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
