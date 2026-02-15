import { Link } from "react-router-dom";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const CookiePolicy = () => {
  useFadeInOnScroll();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto fade-in-on-scroll">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance">
            Cookie Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Emily Rose Trust Website — Last Updated: 15/02/2026
          </p>

          <div className="space-y-10 text-muted-foreground text-lg leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                This Cookie Policy explains how{" "}
                <a href="https://www.emilyrosetrust.com" className="text-primary underline">www.emilyrosetrust.com</a>{" "}
                ("Website") uses cookies and similar technologies in accordance with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The ePrivacy Regulations (SI 336/2011)</li>
                <li>The General Data Protection Regulation (GDPR)</li>
                <li>The Irish Data Protection Act 2018</li>
              </ul>
              <p className="mt-3">
                This Website uses a cookie consent management tool provided by{" "}
                <a href="https://concord.tech" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Concord.tech</a>,
                allowing visitors to control non-essential cookies.
              </p>
              <p className="mt-3">
                This policy should be read alongside our{" "}
                <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">Privacy Policy</Link>{" "}
                and{" "}
                <Link to="/terms-and-conditions" className="text-primary underline hover:text-primary/80 transition-colors">Terms &amp; Conditions</Link>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience.
              </p>
              <p className="mt-3">Cookies can be:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Session cookies</strong> — deleted when you close your browser</li>
                <li><strong className="text-foreground">Persistent cookies</strong> — remain until they expire or are deleted</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. Types of Cookies We Use</h2>

              <h3 className="font-serif text-xl font-medium text-foreground mt-6 mb-2">3.1 Strictly Necessary Cookies</h3>
              <p>These cookies are essential for the Website to function. They enable:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Page navigation</li>
                <li>Security features</li>
                <li>Form submission functionality</li>
                <li>Cookie consent preferences</li>
              </ul>
              <p className="mt-3">These cookies do not require consent under Irish law.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-6 mb-2">3.2 Analytics Cookies (Optional — Consent Required)</h3>
              <p>We may use analytics tools (such as Google Analytics or similar services) to collect anonymised information about:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Pages visited</li>
                <li>Time spent on the site</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>General geographic location</li>
              </ul>
              <p className="mt-3">These cookies help us improve performance, understand visitor behaviour and optimise user experience.</p>
              <p className="mt-3">Analytics cookies are only activated if you provide consent via the Concord.tech cookie banner.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-6 mb-2">3.3 Social Media &amp; Sharing Cookies (Optional — Consent Required)</h3>
              <p>
                If you use social sharing buttons (e.g., WhatsApp, Facebook, LinkedIn, X, Instagram), those platforms may set cookies or collect data according to their own policies.
              </p>
              <p className="mt-3">We do not control these third-party cookies. They are subject to the respective platform's privacy policy.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-6 mb-2">3.4 Embedded Third-Party Content</h3>
              <p>If we embed content (e.g., GoFundMe widget, video content, or external tools), those providers may place cookies on your device. We do not control those cookies.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Cookie Consent Management</h2>
              <p>This Website uses <strong className="text-foreground">Concord.tech</strong> to manage cookie consent.</p>
              <p className="mt-3">When you first visit the Website, you will see a cookie banner allowing you to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customise preferences</li>
              </ul>
              <p className="mt-3">You may change your preferences at any time via the cookie settings link provided in the footer.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Legal Basis for Using Cookies</h2>
              <p>Under Irish ePrivacy rules and GDPR:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Strictly necessary cookies</strong> are used based on legitimate interest.</li>
                <li><strong className="text-foreground">Analytics and marketing cookies</strong> are used only with your consent.</li>
              </ul>
              <p className="mt-3">You may withdraw consent at any time.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">6. Managing Cookies in Your Browser</h2>
              <p>You can also manage or delete cookies through your browser settings.</p>
              <p className="mt-3">Please note: disabling strictly necessary cookies may affect Website functionality.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">7. Data Collected Through Cookies</h2>
              <p>Depending on your consent settings, cookies may collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>IP address (partially anonymised where possible)</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Pages viewed</li>
                <li>Referring website</li>
                <li>Date and time of access</li>
              </ul>
              <p className="mt-3">We do not use cookies to collect sensitive personal data.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">8. Third-Party Platforms</h2>
              <p>If you click links to GoFundMe, social media platforms, or external websites, those websites operate under their own cookie policies.</p>
              <p className="mt-3">We recommend reviewing their policies directly.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">9. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in law or technology. Any updates will be published on this page with a revised "Last Updated" date.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">10. Contact Information</h2>
              <p>If you have questions regarding this Cookie Policy, please contact:</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:info@emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">info@emilyrosetrust.com</a>
              </p>
              <p className="mt-1">
                Website:{" "}
                <a href="https://www.emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">www.emilyrosetrust.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
