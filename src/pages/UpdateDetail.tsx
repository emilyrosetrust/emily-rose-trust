import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { updates } from "./Updates";

const UpdateDetail = () => {
  const { slug } = useParams();
  const update = updates.find((u) => u.slug === slug);

  if (!update) return <Navigate to="/updates" replace />;

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <Link to="/updates" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Updates
          </Link>
          <p className="text-sm text-muted-foreground mb-3">{update.date}</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {update.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">{update.text}</p>

          <div className="mt-12 text-center">
            <a href="https://www.gofundme.com/f/support-emily-roses-family-with-time-together" target="_blank" rel="noopener noreferrer">
              <Button variant="donate" size="lg">
                Support Emily Rose
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateDetail;
