import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";
import LottieIcon from "@/components/LottieIcon";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";
import lottieHeart from "@/assets/lottie-heart.json";
import lottieLoveCare from "@/assets/lottie-love-care.json";
import lottieShare from "@/assets/lottie-share.json";
import lottieBuildings from "@/assets/lottie-buildings.json";

const GOFUNDME_URL = "https://www.gofundme.com/f/support-emily-roses-family-with-time-together";

const SupportEmilyRose = () => {
  useFadeInOnScroll();

  const options = [
    {
      animation: lottieHeart,
      title: "Donate via GoFundMe",
      text: "Make a direct contribution through the official GoFundMe campaign.",
      action: (
        <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="donate" className="gap-2">
            Go to GoFundMe <ExternalLink size={16} />
          </Button>
        </a>
      ),
    },
    {
      animation: lottieLoveCare,
      title: "Donate to the Trust",
      text: "Donate directly to the Emily Rose Trust. Details will be shared once the Trust is fully finalised.",
      action: (
        <Button variant="outline" disabled>
          Coming Soon
        </Button>
      ),
    },
    {
      animation: lottieShare,
      title: "Share the Website",
      text: "Sharing Emily Rose's story is one of the most powerful ways you can help.",
      action: <ShareButtons />,
    },
    {
      animation: lottieBuildings,
      title: "Corporate Support",
      text: "Businesses and organisations wishing to contribute or partner can reach out directly.",
      action: (
        <Link to="/contact">
          <Button variant="outline">Get in Touch</Button>
        </Link>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance fade-in-on-scroll">
          Support Emily Rose
        </h1>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12 fade-in-on-scroll">
          There are several ways you can support Emily Rose and her family. Every action, no matter how small, makes a meaningful difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {options.map((opt, i) => (
            <div
              key={i}
              className="fade-in-on-scroll border border-border rounded-lg p-8 bg-background flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-5">
                <LottieIcon animationData={opt.animation} size={36} />
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">{opt.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{opt.text}</p>
              <div>{opt.action}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportEmilyRose;
