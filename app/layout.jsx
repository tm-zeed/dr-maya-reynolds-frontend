// import { Playfair_Display, Inter } from 'next/font/google';
// import { siteMeta } from '@/data/siteMeta';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
// import './globals.css';

// // Load fonts and assign them to CSS variables
// const serif = Playfair_Display({ 
//   subsets: ['latin'], 
//   variable: '--font-serif',
//   display: 'swap',
// });

// const sans = Inter({ 
//   subsets: ['latin'], 
//   variable: '--font-sans',
//   display: 'swap',
// });

// // This replaces hardcoded strings with data from siteMeta.js
// export const metadata = {
//   title: {
//     default: siteMeta.title,
//     template: `%s | ${siteMeta.title}`, 
//   },
//   description: siteMeta.description,
//   keywords: siteMeta.keywords,
//   metadataBase: new URL(siteMeta.url),
//   openGraph: {
//     title: siteMeta.title,
//     description: siteMeta.description,
//     url: siteMeta.url,
//     siteName: 'Dr. Maya Reynolds',
//     locale: 'en_US',
//     type: 'website',
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${serif.variable} ${sans.variable}`}>
//       <body className="bg-sand-bg font-sans text-charcoal antialiased">
//         <Navbar />
//         {/* The min-h-screen ensures the footer stays at the bottom on short pages */}
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }




import { Playfair_Display, Inter } from 'next/font/google';
import { siteMeta } from '@/data/siteMeta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const serif = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.title}`, 
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  metadataBase: new URL(siteMeta.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-pt-24`}> 
      {/* scroll-pt-24 ensures that when you link to a section, it accounts for the Navbar height */}
      <body className="bg-sand-bg font-sans text-charcoal antialiased flex flex-col min-h-screen">
        <Navbar />
        
        {/* 
          FIX: Added 'flex-grow' so footer stays down.
          Note: We DON'T add padding here because the Homepage Hero needs to touch the top,
          but our Service Detail page WILL have its own padding.
        */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}