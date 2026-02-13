import { Link } from "react-router-dom";
import useFadeInOnScroll from "@/hooks/useFadeInOnScroll";

const updates = [
  {
    slug: "grateful-for-support",
    title: "Grateful for the Outpouring of Support",
    date: "February 2026",
    text: "We are deeply grateful for the kindness and generosity shown so far. Every message, donation and share has reminded Stephen and Karyn that they are not walking this road alone.",
  },
  {
    slug: "trust-formation-progress",
    title: "Trust Formation Progress",
    date: "February 2026",
    text: "The Emily Rose Trust legal structure is currently being finalised. We are committed to full transparency and will share updates as everything becomes officially active.",
  },
  {
    slug: "thank-you-creative-community",
    title: "Thank You to the Creative Community",
    date: "February 2026",
    text: "Friends and colleagues from the animation and business communities have begun reaching out with incredible support. It means more than words can express.",
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
