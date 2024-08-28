import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Script
        src="https://app.easycart.pl/login.js?type=block&id=prod_QkLJWPiiztHE4P"
        strategy="beforeInteractive" // Ładowanie skryptu przed interaktywnością strony
      />

      {/* Skrypt inline w sekcji head */}
      <Script id="easycart-redirect-script" strategy="beforeInteractive">
        {`!window._EC_HASH_8c817de8a8fe287f0a650048efd4b605 && (location.href = "https://app.easycart.pl/r/prod_QkLJWPiiztHE4P");`}
      </Script>

      {/* Noscript element w sekcji head */}
      <noscript>
        <meta
          httpEquiv="refresh"
          content="0;url=https://app.easycart.pl/r/prod_QkLJWPiiztHE4P"
        />
      </noscript>
      <div>ACCESS AFTER PAYMENT</div>
    </div>
  );
};

export default page;
