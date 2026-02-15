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
                ("Website") uses cookies and similar tracking technologies.
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
                Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to website operators.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. How We Use Cookies</h2>
              <p>This Website may use the following types of cookies:</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">A. Essential Cookies</h3>
              <p>These cookies are necessary for the Website to function properly. They enable basic features such as page navigation and secure access. The Website cannot function properly without these cookies.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">B. Analytics Cookies</h3>
              <p>These cookies help us understand how visitors interact with the Website by collecting and reporting information anonymously. This helps us improve the Website experience.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">C. Functional Cookies</h3>
              <p>These cookies allow the Website to remember choices you make (such as your preferred language or region) and provide enhanced, more personalised features.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Third-Party Cookies</h2>
              <p>Some cookies may be set by third-party services that appear on our pages. These include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Analytics providers (e.g. Google Analytics)</li>
                <li>Social media sharing tools</li>
                <li>Fundraising platform embeds</li>
              </ul>
              <p className="mt-3">We do not control the cookies set by third parties. Please refer to their respective privacy and cookie policies for more information.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Managing Your Cookie Preferences</h2>
              <p>You can manage your cookie preferences at any time through the cookie consent tool provided on this Website.</p>
              <p className="mt-3">You can also control cookies through your browser settings. Most browsers allow you to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-3">Please note that blocking or deleting cookies may affect the functionality of this Website.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">6. Consent</h2>
              <p>When you first visit our Website, you will be asked to consent to the use of non-essential cookies. You may withdraw your consent at any time by adjusting your cookie preferences or browser settings.</p>
              <p className="mt-3">Essential cookies do not require your consent as they are strictly necessary for the Website to function.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">7. Changes to This Cookie Policy</h2>
              <p>We may update this Cookie Policy from time to time. Changes will be published on this page with a revised "Last Updated" date.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Cookie Policy, please contact:</p>
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
