import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Terms = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="pt-12 pb-20">
      <div className="container">
        <div className="flex justify-start items-center gap-4 py-12">
          <Link to="/" className="text-neutral-400">
            Home
          </Link>
          <span>/</span>
          <span>Terms</span>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <h1 className="text-2xl font-bold">Terms and Conditions</h1>

          <h3 className="text-lg font-semibold pb-4">
            Last Updated: November 12, 2023.
          </h3>
          <h2 className="text-lg font-semibold text-gajjar">
            Acceptance of Terms
          </h2>
          <p>
            By using Exclusive Ecommerce ("the Website") and its services, you
            agree to be bound by these terms and conditions.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">Privacy Policy</h2>
          <p>
            Our Privacy Policy explains how we collect, use, and protect your
            personal information. By using the Website, you also agree to our
            Privacy Policy.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">User Accounts</h2>
          <p>
            You may be required to create an account to access certain features.
            You are responsible for maintaining the confidentiality of your
            account information.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Ordering and Payment
          </h2>
          <p>
            All orders are subject to availability and our pricing terms.
            Payment methods and refund policies are outlined on our Payment and
            Refund page.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Shipping and Returns
          </h2>
          <p>
            Information regarding shipping and returns can be found on our
            Shipping and Returns page.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Copyright and Trademarks
          </h2>
          <p>
            The content on this Website is protected by copyright and trademark
            laws. You may not use our content without our permission.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Limitation of Liability
          </h2>
          <p>
            We are not responsible for any damages or losses resulting from your
            use of the Website or its services.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Termination of Services
          </h2>
          <p>
            We reserve the right to terminate or suspend services at our
            discretion.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Changes to Terms
          </h2>
          <p>
            We may update these terms from time to time. It's your
            responsibility to review them periodically.
          </p>

          <h2 className="text-lg font-semibold text-gajjar">
            Contact Information
          </h2>
          <p>
            If you have any questions or concerns, please contact us at
            contact@exclusiveecommerce.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
