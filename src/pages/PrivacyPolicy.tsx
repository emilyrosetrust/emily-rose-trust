import { Link } from "react-router-dom";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const PrivacyPolicy = () => {
  useFadeInOnScroll();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto fade-in-on-scroll">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance">
            Privacy Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Emily Rose Trust Website — Last Updated: 15/02/2026
          </p>

          <div className="space-y-10 text-muted-foreground text-lg leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy explains how{" "}
                <a href="https://www.emilyrosetrust.com" className="text-primary underline">www.emilyrosetrust.com</a>{" "}
                ("Website") collects, uses, and protects personal data in accordance with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The General Data Protection Regulation (EU) 2016/679 (GDPR)</li>
                <li>The Irish Data Protection Act 2018</li>
              </ul>
              <p className="mt-3">We are committed to protecting your privacy and handling your personal data transparently and responsibly.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. Data Controller</h2>
              <p>For the purposes of GDPR, the data controller is:</p>
              <p className="mt-3 font-medium text-foreground">Emily Rose Trust</p>
              <p>
                Email:{" "}
                <a href="mailto:info@emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">info@emilyrosetrust.com</a>
              </p>
              <p>
                Website:{" "}
                <a href="https://www.emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">www.emilyrosetrust.com</a>
              </p>
              <p className="mt-3">If you have any questions regarding this Privacy Policy or your data, please contact us at the above email address.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. What Personal Data We Collect</h2>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">A. Contact Form Submissions</h3>
              <p>When you use the contact form, we may collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>
              <p className="mt-2">This information is provided voluntarily by you.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">B. Email Communications</h3>
              <p>If you contact us directly via email, we will collect your email address, the content of your message, and any information you choose to provide.</p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">C. Website Usage Data</h3>
              <p>We may collect limited technical information automatically, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Time spent on the Website</li>
              </ul>
              <p className="mt-2">
                This data may be collected via analytics tools and cookies (see{" "}
                <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80 transition-colors">Cookie Policy</Link>).
              </p>

              <h3 className="font-serif text-xl font-medium text-foreground mt-4 mb-2">D. Donations</h3>
              <p>We do not process donations directly on this Website unless explicitly stated. If you donate via GoFundMe or other third-party platforms, your personal data is processed under their privacy policies. We do not control their data processing practices.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Lawful Basis for Processing</h2>
              <p>Under GDPR, we process personal data based on the following lawful grounds:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><span className="font-medium text-foreground">Consent</span> — Where you submit information voluntarily (e.g. contact form, email).</li>
                <li><span className="font-medium text-foreground">Legitimate Interest</span> — To respond to enquiries, improve the Website, and maintain security.</li>
                <li><span className="font-medium text-foreground">Legal Obligation</span> — Where required by Irish law.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to enquiries</li>
                <li>Provide updates where requested</li>
                <li>Improve Website functionality</li>
                <li>Ensure Website security</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or trade personal data to third parties.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">6. Data Sharing</h2>
              <p>We may share limited data with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Website hosting providers</li>
                <li>Email service providers</li>
                <li>Analytics providers</li>
              </ul>
              <p className="mt-3">All service providers are required to handle data in compliance with GDPR. We do not share personal data for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">7. Data Retention</h2>
              <p>We retain personal data only for as long as necessary:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact form submissions: retained only as long as required to respond</li>
                <li>Email communications: retained for administrative purposes</li>
                <li>Technical data: retained in accordance with analytics retention settings</li>
              </ul>
              <p className="mt-3">We will securely delete or anonymise data when no longer required.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">8. Your Rights Under GDPR</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact:{" "}
                <a href="mailto:info@emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">info@emilyrosetrust.com</a>
              </p>
              <p className="mt-3">
                If you believe your data has been handled improperly, you may lodge a complaint with the{" "}
                <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">
                  Data Protection Commission (Ireland)
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">9. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect personal data, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Secure hosting</li>
                <li>SSL encryption (HTTPS)</li>
                <li>Limited administrative access</li>
              </ul>
              <p className="mt-3">However, no system can be guaranteed 100% secure.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">10. International Transfers</h2>
              <p>Where third-party services are used (such as analytics providers), data may be processed outside Ireland or the European Economic Area. Where this occurs, appropriate safeguards will be in place in accordance with GDPR requirements.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">11. Cookies and Tracking Technologies</h2>
              <p>
                This Website uses cookies and similar technologies. Full details are provided in our{" "}
                <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80 transition-colors">Cookie Policy</Link>.
              </p>
              <p className="mt-3">You can manage your cookie preferences via the cookie consent tool provided on the Website.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">12. Third-Party Links</h2>
              <p>This Website contains links to external platforms, including fundraising platforms and social media sites. We are not responsible for the privacy practices of third-party websites. Please review their privacy policies before submitting personal data.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">13. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be published on this page with a revised "Last Updated" date.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">14. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or your personal data, please contact:</p>
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

export default PrivacyPolicy;
