import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, FileText, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2024",
    image: "/Certificates/Microsoft_Learn.pdf",
  },
  {
    title: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University",
    year: "2024",
    image: "/Certificates/CS50.pdf",
  },
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    year: "2025",
    image: "/Certificates/freecodecamp_ml.pdf",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI — Coursera",
    year: "2025",
    image: "/Certificates/Coursera.pdf",
  },
  {
    title: "AI Mastery: Unlocking the Power of Artificial Intelligence",
    issuer: "NEC Corporation India / Edulateral Foundation",
    year: "2024",
    image: "/Certificates/nec.pdf",
  },
  {
    title: "Responsive Web Design Developer Certification",
    issuer: "freeCodeCamp",
    year: "2023",
    image: "/Certificates/ResponsiveWebDesign.pdf",
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">Credentials & qualifications</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <motion.button
              type="button"
              key={cert.title}
              onClick={() => setSelected(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full text-left p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg">{cert.title}</h3>
                <p className="text-primary font-medium mt-1">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.year}</p>
              </div>
              <div className="flex-shrink-0 self-center text-muted-foreground group-hover:text-primary transition-colors">
                <FileText className="w-5 h-5" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="bg-muted/30">
                <iframe
                  src={selected.image}
                  title={selected.title}
                  className="w-full h-[60vh] border-0"
                />
              </div>

              <div className="p-6 border-t border-border/50">
                <h3 className="font-display font-semibold text-xl">{selected.title}</h3>
                <p className="text-primary font-medium mt-1">{selected.issuer}</p>
                <p className="text-sm text-muted-foreground mt-1">{selected.year}</p>
                <a
                  href={selected.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline"
                >
                  Open in new tab <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;