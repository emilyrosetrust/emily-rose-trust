import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/ShareButtons";
import FaqSection from "@/components/FaqSection";
import LottieIcon from "@/components/LottieIcon";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import lottieHeart from "@/assets/lottie-heart.json";
import lottieShield from "@/assets/lottie-shield.json";
import lottieLeaf from "@/assets/lottie-leaf.json";

const GOFUNDME_URL = "https://www.gofundme.com/f/support-emily-roses-family-with-time-together";

const Index = () => {
  useFadeInOnScroll();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src="/emily-rose-trust-support-cover-section-roscommon.jpg"
          alt="Scenic view of Roscommon landscape with lakes and rolling hills"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 section-container py-20 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Time Matters Most.
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Supporting Emily Rose and giving her parents the freedom to be fully present with her.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero-primary" size="lg" className="min-w-[180px]">
                Donate Now
              </Button>
            </a>
            <Link to="/emily-roses-story">
              <Button variant="hero-secondary" size="lg" className="min-w-[180px] border-white text-white hover:bg-white/10">
                Read Emily Rose's Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Emily Rose */}
      <section className="section-padding">
        <div className="section-container fade-in-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center">
            About Emily Rose
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Emily Rose is a beautiful, brave little girl who has been fighting complex heart and lung conditions since birth. Despite countless surgeries and long hospital stays, she continues to bring light and love to everyone around her.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              After years of treatment, her parents, Stephen and Karyn, have now been told there are no further curative options. Emily Rose's condition is deteriorating rapidly and the focus has shifted to comfort, care and making the most of the time they have together. Time has suddenly become their most precious and fragile resource.
            </p>
            <div className="text-center">
              <Link to="/emily-roses-story">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Support Does */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center fade-in-on-scroll">
            What Your Support Makes Possible
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                animation: lottieHeart,
                title: "Time Together",
                text: "Your support gives Emily Rose's parents the financial freedom to step back from work and spend uninterrupted time with her.",
              },
              {
                animation: lottieShield,
                title: "Stability & Security",
                text: "Funds help cover lost income and essential living costs so the family can focus fully on Emily Rose without added financial pressure.",
              },
              {
                animation: lottieLeaf,
                title: "Meaningful Moments",
                text: "Support may allow small, meaningful experiences together, moments away from hospital routines centred simply on love, presence and being together as a family.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-in-on-scroll text-center p-8 rounded-lg bg-background border border-border"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-5">
                  <LottieIcon animationData={item.animation} size={40} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding">
        <div className="section-container text-center fade-in-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Support Emily Rose
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Every contribution goes directly into the Emily Rose Trust and is used solely to support Emily Rose and her family during this time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="donate" size="lg" className="min-w-[220px]">
                Donate via GoFundMe
              </Button>
            </a>
            <Link to="/support-emily-rose">
              <Button variant="outline" size="lg" className="min-w-[220px]">
                Donate to the Trust
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            All funds raised are directed to the Emily Rose Trust.
          </p>
        </div>
      </section>

      {/* Share Section */}
      <section className="section-padding section-alt">
        <div className="section-container text-center fade-in-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Share Emily Rose's Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            If you feel moved to help, one of the most powerful things you can do is share Emily Rose's story with others. Your voice helps extend care, support and awareness.
          </p>
          <ShareButtons />
        </div>
      </section>

      {/* Updates Preview */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center fade-in-on-scroll">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Grateful for the Outpouring of Support",
                text: "We are deeply grateful for the kindness and generosity shown so far. Every message, donation and share has reminded Stephen and Karyn that they are not walking this road alone.",
              },
              {
                title: "Trust Formation Progress",
                text: "The Emily Rose Trust legal structure is currently being finalised. We are committed to full transparency and will share updates as everything becomes officially active.",
              },
              {
                title: "Thank You to the Creative Community",
                text: "Friends and colleagues from the animation and business communities have begun reaching out with incredible support. It means more than words can express.",
              },
            ].map((update, i) => (
              <article
                key={i}
                className="fade-in-on-scroll bg-background border border-border rounded-lg p-6 md:p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {update.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{update.text}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/updates">
              <Button variant="outline" size="lg">
                View All Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="section-alt">
        <FaqSection />
      </div>
    </>
  );
};

export default Index;
