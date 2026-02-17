import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const GOFUNDME_URL = "https://www.gofundme.com/f/support-emily-roses-family-with-time-together";

const TheTrust = () => {
  useFadeInOnScroll();

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto fade-in-on-scroll">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 text-center text-balance">
            About the Emily Rose Trust
          </h1>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              The Emily Rose Trust has been established to ensure that all funds raised are used solely to support Emily Rose and her family.
            </p>
            <p>
              It exists to provide financial stability, cover essential living costs and allow Stephen and Karyn the time and freedom to focus entirely on Emily Rose during this period, while also supporting improvements to the family's quality of life.
            </p>
            <p>
              The Trust has been established to ensure funds are used solely to support Emily Rose and to give her parents the financial freedom to focus fully on her during this time.
            </p>
            <p>
              We are committed to transparency and accountability in how funds are managed and distributed.
            </p>
            <p>
              Upon her passing any surplus funds will be distributed by the Emily Rose Trust to The Children's Heart Centre Crumlin, Cliona's Kids and Cian's Kennels.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={GOFUNDME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="donate" size="lg" className="min-w-[200px]">
                Donate via GoFundMe
              </Button>
            </a>
            <Link to="/support-emily-rose">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Other Ways to Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTrust;
