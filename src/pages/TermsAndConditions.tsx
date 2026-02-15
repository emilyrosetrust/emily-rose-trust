import { Link } from "react-router-dom";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const TermsAndConditions = () => {
  useFadeInOnScroll();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto fade-in-on-scroll">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance">
            Terms &amp; Conditions
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Emily Rose Trust Website · Last Updated: 15/02/2026
          </p>

          <div className="space-y-10 text-muted-foreground text-lg leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                Welcome to{" "}
                <a href="https://www.emilyrosetrust.com" className="text-primary underline">www.emilyrosetrust.com</a>{" "}
                ("Website").
              </p>
              <p className="mt-3">
                This Website has been created to share the story of Emily Rose and to provide information about the Emily Rose Trust and related fundraising efforts.
              </p>
              <p className="mt-3">
                By accessing or using this Website, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use the Website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. Purpose of the Website</h2>
              <p>The purpose of this Website is:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To share information about Emily Rose and her family</li>
                <li>To provide updates regarding the Emily Rose Trust</li>
                <li>To direct visitors to third-party fundraising platforms (including GoFundMe)</li>
                <li>To provide contact information for general enquiries</li>
              </ul>
              <p className="mt-3">This Website does not directly process donations unless otherwise stated.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. Donations</h2>
              <p>Donations may be made through:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Third-party platforms such as GoFundMe</li>
                <li>Direct contributions to the Emily Rose Trust (where applicable)</li>
              </ul>
              <p className="mt-3">
                All third-party donations are subject to the terms and policies of the respective platform. The Website owner is not responsible for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Payment processing</li>
                <li>Platform fees</li>
                <li>Technical issues related to third-party platforms</li>
                <li>Refund processes governed by those platforms</li>
              </ul>
              <p className="mt-3">
                Where funds are directed to the Emily Rose Trust, they are intended solely for the support of Emily Rose and her family.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. No Financial or Legal Advice</h2>
              <p>The content on this Website is provided for informational purposes only.</p>
              <p className="mt-3">Nothing on this Website constitutes financial, legal, medical, or professional advice.</p>
              <p className="mt-3">Visitors should seek independent advice where appropriate.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Accuracy of Information</h2>
              <p>We make every reasonable effort to ensure that the information on this Website is accurate and up to date. However:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Information may change over time</li>
                <li>Circumstances may evolve</li>
                <li>Updates may not be immediate</li>
              </ul>
              <p className="mt-3">We do not guarantee completeness or absolute accuracy at all times.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">6. Use of Website Content</h2>
              <p>All content on this Website, including text, images, graphics, logo (when added), and design elements, is either owned by the Website operator or used with permission.</p>
              <p className="mt-3 font-medium text-foreground">You may:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Share links to the Website</li>
                <li>Share content for awareness purposes (non-commercial use)</li>
              </ul>
              <p className="mt-3 font-medium text-foreground">You may not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Copy, reproduce, or republish content for commercial purposes without written permission</li>
                <li>Modify content in a misleading way</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">7. Community Conduct</h2>
              <p>When using contact forms or communicating via the Website, you agree:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Not to submit abusive, defamatory, or unlawful content</li>
                <li>Not to misuse the Website for fraudulent or malicious purposes</li>
              </ul>
              <p className="mt-3">We reserve the right to restrict access if misuse occurs.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">8. External Links</h2>
              <p>This Website may contain links to third-party websites, including fundraising platforms and social media sites.</p>
              <p className="mt-3">We are not responsible for the content of external websites, their privacy practices, or their terms and conditions.</p>
              <p className="mt-3">Users access third-party websites at their own risk.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
              <p>To the fullest extent permitted under Irish law, the Website operator shall not be liable for any direct or indirect loss arising from use of this Website, technical interruptions, errors or omissions, or reliance on Website content.</p>
              <p className="mt-3">Nothing in these Terms excludes liability that cannot legally be excluded under Irish law.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">10. Privacy</h2>
              <p>
                Your use of this Website is also governed by our{" "}
                <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">Privacy Policy</Link>{" "}
                and{" "}
                <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80 transition-colors">Cookie Policy</Link>,
                which explain how personal data is handled in accordance with Irish and EU data protection laws (including GDPR).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">11. Changes to These Terms</h2>
              <p>We reserve the right to update these Terms &amp; Conditions at any time.</p>
              <p className="mt-3">Any changes will be posted on this page with a revised "Last Updated" date.</p>
              <p className="mt-3">Continued use of the Website constitutes acceptance of any changes.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">12. Governing Law</h2>
              <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of Ireland.</p>
              <p className="mt-3">Any disputes arising in connection with this Website shall be subject to the jurisdiction of the Irish courts.</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">13. Contact Information</h2>
              <p>For any questions regarding these Terms &amp; Conditions, please contact:</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:info@emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">
                  info@emilyrosetrust.com
                </a>
              </p>
              <p className="mt-1">
                Website:{" "}
                <a href="https://www.emilyrosetrust.com" className="text-primary underline hover:text-primary/80 transition-colors">
                  www.emilyrosetrust.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
