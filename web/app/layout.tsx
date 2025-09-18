// app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css' // your Tailwind build; remove the CDN script from the HTML

export const metadata: Metadata = {
  title: 'Smart Call Decline - Never Miss a Lead While on the Job',
  description:
    'Auto-reply SMS and job booking automation for contractors. Save time on site, capture more leads, and book jobs faster with no-app scheduling.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-clip">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BB98ED4WSE"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-BB98ED4WSE');
          `}
        </Script>

        {/* Google Ads (if you want it on every page) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17391803655"
          strategy="afterInteractive"
        />
        <Script id="ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-17391803655');
          `}
        </Script>

        {/* Hotjar */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6487405,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
