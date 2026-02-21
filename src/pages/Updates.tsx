import { Link } from "react-router-dom";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const updates = [
  {
    slug: "gofundme-campaign",
    title: "GoFundMe Campaign",
    date: "February 2026",
    text: "We are eternally grateful for the incredible support shown to Emily Rose and the Emily Rose Trust. The generosity over the last few days has been more than we ever could have hoped for. Thank you for every donation and every share. As mentioned, all funds are overseen by the Emily Rose Trust and any surplus funds will be distributed to The Children's Heart Centre Crumlin, Cliona's Kids and Cian's Kennels.",
  },
  {
    slug: "trust-formation-progress",
    title: "Trust Formation Progress",
    date: "February 2026",
    text: "The Emily Rose Trust legal structure is currently being finalised. We are committed to full transparency and will share updates as everything becomes officially active.",
  },
];

const Updates = () => {
  useFadeInOnScroll();

  return (
    <section className="section-padding">
      <div className="section-container">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-10 text-center fade-in-on-scroll">
          Updates
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {updates.map((update, i) => (
            <article
              key={update.slug}
              className="fade-in-on-scroll border border-border rounded-lg p-6 md:p-8 bg-background"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-sm text-muted-foreground mb-2">{update.date}</p>
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                <Link to={`/updates/${update.slug}`} className="hover:text-primary transition-colors">
                  {update.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{update.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;

export { updates };
