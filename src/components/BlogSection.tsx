import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Tratamento de feridas: como a tecnologia acelera a cicatrização",
    excerpt: "Entenda como curativos avançados, laserterapia e ozonioterapia podem reduzir o tempo de cicatrização e prevenir complicações.",
    date: "20 Mar 2026",
    readTime: "5 min",
    category: "Tratamento de Feridas",
  },
  {
    title: "Pé diabético: prevenção e cuidados essenciais no dia a dia",
    excerpt: "Saiba como prevenir lesões, identificar sinais de alerta e quando buscar atendimento especializado para o pé diabético.",
    date: "15 Mar 2026",
    readTime: "4 min",
    category: "Pé Diabético",
  },
  {
    title: "LEDterapia e PRF: terapias inovadoras na cicatrização de feridas",
    excerpt: "Conheça como a fototerapia com LED e a fibrina rica em plaquetas estão revolucionando o tratamento de feridas crônicas.",
    date: "10 Mar 2026",
    readTime: "6 min",
    category: "Terapias Avançadas",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog Saúde</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            Dicas e informações para sua saúde
          </h2>
          <p className="text-muted-foreground">
            Conteúdo de qualidade produzido pela nossa equipe para manter você informado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
