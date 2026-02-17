import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const GOFUNDME_URL = "https://www.gofundme.com/f/support-emily-roses-family-with-time-together";

const EmilysStory = () => {
  useFadeInOnScroll();

  return (
    <>
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto fade-in-on-scroll">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 text-center text-balance">
              Emily Rose's Story
            </h1>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Emily Rose is a beautiful, brave little girl who has been fighting complex heart and lung conditions since birth. Despite countless surgeries and long hospital stays, she continues to bring light and love to everyone around her.
              </p>
              <p>
                After years of treatment, her parents, Stephen and Karyn, have now been told there are no further curative options. Stephen, Karyn and Emily Rose Fagan live in Boyle, Co. Roscommon, where they are surrounded by a caring and supportive community. Emily Rose's condition is deteriorating rapidly and the focus has shifted to comfort, care and making the most of the time they have together. Time has suddenly become their most precious and fragile resource.
              </p>
              <p>
                This fundraiser is about giving Emily Rose's parents the financial breathing space to step back from work and spend uninterrupted time with their daughter. Funds will help cover lost income and daily living costs, allowing them to focus fully on Emily Rose and create meaningful memories in the months ahead.
              </p>
              <p>
                Over the years, Stephen has been fortunate to work with and support many people across the animation and business communities. If friends, colleagues or connections feel moved to help or share Emily Rose's story, it would mean more than we can express.
              </p>
              <p>
                All funds raised will go directly into the Emily Rose Trust, which is currently being finalised. The Trust has been established to ensure funds are used solely to support Emily Rose and to give her parents the financial freedom to focus fully on her during this time.
              </p>
              <p>
                Upon her passing any surplus funds will be distributed by the Emily Rose Trust to The Children's Heart Centre Crumlin, Cliona's Kids and Cian's Kennels.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="donate" size="lg" className="min-w-[200px]">
                  Donate Now
                </Button>
              </a>
              <Link to="/the-trust">
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  About the Trust
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmilysStory;
