import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Privacy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="pt-12 pb-20 bg-neutral-100">
      <div className="container">
        <div className="flex justify-start items-center gap-4 py-12">
          <Link to="/" className="text-neutral-400">
            Home
          </Link>
          <span>/</span>
          <span>Privacy</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold pb-4">Privacy Policy</h3>
          <h4 className="text-lg font-semibold pb-4">
            Last Updated: November 12, 2023.
          </h4>
          <div className="flex flex-col justify-start items-start gap-4">
            <p>
              Welcome to Exclusive, an online e-commerce platform dedicated to
              delivering exceptional shopping experiences and high-quality
              products. At Exclusive, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy is
              designed to inform you about our data practices and how we
              collect, use, and safeguard your personal information. By using
              our website and services, you agree to the practices outlined in
              this policy.
            </p>
            <h5 className="text-lg font-semibold text-gajjar">
              Information We Collect
            </h5>
            <p>
              We collect various types of information to provide you with the
              best possible shopping experience and improve our services. The
              information we collect may include, but is not limited to:
            </p>

            <ul className="py-3 px-6 flex flex-col justify-start items-start gap-3">
              <li>
                <span className="font-semibold">Personal Information:</span>{" "}
                When you create an account, make a purchase, or contact us for
                customer support, we may collect personal information such as
                your name, email address, phone number, shipping address, and
                payment information.
              </li>
              <li>
                <span className="font-semibold">Usage Information:</span> We may
                collect information about how you interact with our website,
                including your IP address, browser type, operating system, and
                device information. This information is used to improve our
                website's performance and security.
              </li>
              <li>
                <span className="font-semibold">
                  Cookies and Tracking Technologies:
                </span>{" "}
                We use cookies and similar tracking technologies to collect
                information about your browsing behavior and preferences. You
                can manage your cookie preferences through your browser
                settings.
              </li>
              <li>
                <span className="font-semibold">Location Information:</span> We
                may collect your location information if you grant us access to
                your device's location settings. This information helps us
                provide location-based services like localized content and
                shipping options.
              </li>
              <li>
                <span className="font-semibold">Communications:</span> We may
                monitor and record your communications with us, such as emails,
                chats, and phone calls, for quality assurance and customer
                support purposes.
              </li>
            </ul>
            <h5 className="text-lg font-semibold text-gajjar">
              How We Use Your Information
            </h5>
            <p>We use your personal information for the following purposes:</p>
            <ul className="py-3 px-6 flex flex-col justify-start items-start gap-3">
              <li>
                <span className="font-semibold">Providing Services:</span> We
                use your information to process your orders, deliver products,
                and provide customer support.
              </li>
              <li>
                <span className="font-semibold">Personalization:</span> We use
                your information to personalize your shopping experience,
                including showing you relevant products, offers, and
                recommendations.
              </li>
              <li>
                <span className="font-semibold">Communication:</span> We may
                contact you with updates, order confirmations, and promotional
                offers based on your preferences. You can opt out of promotional
                communications at any time.
              </li>
              <li>
                <span className="font-semibold">
                  Analytics and Improvement:
                </span>
                We use data analytics to improve our website, products, and
                services, and to better understand your preferences and
                behavior.
              </li>
              <li>
                <span className="font-semibold">Legal Compliance:</span> We may
                use your information to comply with legal obligations, resolve
                disputes, and enforce our terms and policies.
              </li>
            </ul>
            <h5 className="text-lg font-semibold text-gajjar">
              Sharing Your Information
            </h5>
            <p>
              We do not sell your personal information to third parties.
              However, we may share your information with:
            </p>
            <ul className="py-3 px-6 flex flex-col justify-start items-start gap-3">
              <li>
                <span className="font-semibold">Service Providers:</span> We
                share your data with trusted service providers that help us with
                order processing, payment processing, shipping, and other
                essential services.
              </li>
              <li>
                <span className="font-semibold">Legal Compliance:</span> We may
                disclose information in response to legal requests, court
                orders, or government investigations.
              </li>
              <li>
                <span className="font-semibold">Business Transfers:</span> If
                Exclusive undergoes a merger, acquisition, or sale of assets,
                your information may be transferred to the acquiring entity.
              </li>
            </ul>
            <h5 className="text-lg font-semibold text-gajjar">
              Your Privacy Choices
            </h5>
            <p>
              You have the right to access, correct, update, or delete your
              personal information. You can also manage your communication
              preferences by adjusting your account settings or contacting us.
              Please note that some information may be retained for legal or
              operational purposes.
            </p>
            <h5 className="text-lg font-semibold text-gajjar">Security</h5>
            <p>
              We take data security seriously and employ industry-standard
              measures to protect your information. However, no method of
              transmission over the internet or electronic storage is entirely
              secure, and we cannot guarantee absolute security.
            </p>
            <p>
              Changes to this Privacy Policy We may update this Privacy Policy
              as needed to reflect changes in our data practices. We will notify
              you of any significant changes, and the updated policy will be
              posted on our website.
            </p>
            <h5 className="text-lg font-semibold text-gajjar">Contact Us</h5>
            <p>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
              <Link
                to="/contact"
                className="text-gajjar font-bold"
                aria-label="Contact"
              >
                Here
              </Link>
              .
              <br />
              <br />
              By using Exclusive, you agree to the terms outlined in this
              Privacy Policy. We are committed to protecting your privacy and
              providing you with a secure and enjoyable shopping experience.
              Thank you for choosing Exclusive.
              <br />
              <br />
              <ul className="flex flex-col justify-start items-start gap-3 font-bold">
                <li>Exclusive</li>
                <li>IUB, Rahim Yar Khan, Pakistan</li>
                <li>example@gmail.com</li>
                <li>+92300 1234567</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
