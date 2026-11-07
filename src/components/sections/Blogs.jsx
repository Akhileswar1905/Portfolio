import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock3, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const USERNAME = "akhileswar1905";
const PAGE_SIZE = 9;

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function ArticleCard({ article, index }) {
  return (
    <motion.article
      variants={rise}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Read ${article.title} on DEV Community`}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
      >
        {article.cover_image ? (
          <img
            src={article.cover_image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-muted">
            <BookOpen className="size-10 text-primary/50" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/85 px-3 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
          <span>{formatDate(article.published_at || article.created_at)}</span>
          <span className="flex items-center gap-1">
            <Clock3 className="size-3" /> {article.reading_time_minutes || 1} min read
          </span>
        </div>

        <a href={article.url} target="_blank" rel="noreferrer" className="group/title">
          <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover/title:text-primary">
            {article.title}
          </h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {article.description || "A note from my learning and building journey."}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {(article.tag_list || []).slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full text-[10px] font-mono">
              #{tag}
            </Badge>
          ))}
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold transition-colors hover:text-primary"
        >
          Read article <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Blogs() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadArticles() {
      try {
        const collected = [];
        for (let page = 1; page <= 10; page += 1) {
          const response = await fetch(
            `https://dev.to/api/articles?username=${USERNAME}&per_page=100&page=${page}`
          );
          if (!response.ok) throw new Error("Unable to load articles from DEV.to.");
          const batch = await response.json();
          if (!Array.isArray(batch)) throw new Error("Unexpected response from DEV.to.");
          collected.push(...batch);
          if (batch.length < 100) break;
        }

        if (!cancelled) {
          const unique = Array.from(new Map(collected.map((article) => [article.id, article])).values());
          unique.sort(
            (a, b) =>
              new Date(b.published_at || b.created_at).getTime() -
              new Date(a.published_at || a.created_at).getTime()
          );
          setArticles(unique);
          setStatus("success");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    loadArticles();
    return () => {
      cancelled = true;
    };
  }, []);

  const tags = useMemo(() => {
    const counts = new Map();
    articles.forEach((article) => {
      (article.tag_list || []).forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
    });
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesTag = activeTag === "all" || (article.tag_list || []).includes(activeTag);
      const searchable = [article.title, article.description, ...(article.tag_list || [])]
        .join(" ")
        .toLowerCase();
      return matchesTag && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [articles, query, activeTag]);

  const shownArticles = filteredArticles.slice(0, visibleCount);

  return (
    <section className="relative py-28">
      <span className="section-number">04</span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-10"
      >
        <motion.div variants={rise} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs text-primary">04 / Writing</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Notes from the build</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Ideas, experiments, and lessons from building software and exploring AI — pulled straight from my DEV.to publications.
            </p>
          </div>
          <a
            href={`https://dev.to/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors hover:text-primary"
          >
            Follow on DEV.to <ArrowUpRight className="size-4" />
          </a>
        </motion.div>

        <motion.div variants={rise} className="flex flex-col gap-3 sm:flex-row">
          <label className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="h-11 w-full rounded-lg border border-border bg-card pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
            />
          </label>
          <label className="relative flex h-11 w-full items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm sm:w-52">
            <SlidersHorizontal className="size-4 shrink-0 text-muted-foreground" />
            <span className="sr-only">Filter by topic</span>
            <select
              value={activeTag}
              onChange={(event) => {
                setActiveTag(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              aria-label="Filter articles by topic"
              className="h-full min-w-0 flex-1 appearance-none bg-transparent pr-5 text-sm outline-none"
            >
              <option value="all">All topics</option>
              {tags.map((tag) => <option key={tag} value={tag}>#{tag}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 text-muted-foreground">⌄</span>
          </label>
        </motion.div>

        {status === "loading" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="h-[390px] animate-pulse rounded-xl border border-border bg-card" />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl border border-border bg-card px-6 py-10 text-center">
            <p className="font-semibold">Articles couldn't be loaded right now.</p>
            <p className="mt-2 text-sm text-muted-foreground">You can still browse every post on my DEV.to profile.</p>
            <Button asChild className="mt-5 rounded-full">
              <a href={`https://dev.to/${USERNAME}`} target="_blank" rel="noreferrer">Visit DEV.to</a>
            </Button>
          </div>
        )}

        {status === "success" && (
          <>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}</span>
              <span className="font-mono">DEV.to / {USERNAME}</span>
            </div>

            {shownArticles.length > 0 ? (
              <>
                <div className="md:hidden">
                  <div
                    data-article-carousel
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    onScroll={(event) => {
                      const carousel = event.currentTarget;
                      const slides = carousel.querySelectorAll("[data-article-slide]");
                      const center = carousel.scrollLeft + carousel.clientWidth / 2;
                      let closest = 0;
                      let distance = Number.POSITIVE_INFINITY;
                      slides.forEach((slide, index) => {
                        const nextDistance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
                        if (nextDistance < distance) {
                          distance = nextDistance;
                          closest = index;
                        }
                      });
                      setMobileIndex(closest);
                    }}
                  >
                    {shownArticles.map((article, index) => (
                      <div
                        key={article.id}
                        data-article-slide
                        className="w-[85vw] max-w-[420px] shrink-0 snap-center"
                      >
                        <ArticleCard article={article} index={index} />
                      </div>
                    ))}
                  </div>
                  {shownArticles.length > 1 && (
                    <div className="mt-4 flex justify-center gap-2">
                      {shownArticles.map((article, index) => (
                        <button
                          key={`${article.id}-dot`}
                          type="button"
                          aria-label={`View article ${index + 1}: ${article.title}`}
                          onClick={() => {
                            const carousel = document.querySelector("[data-article-carousel]");
                            const slide = carousel?.querySelectorAll("[data-article-slide]")[index];
                            if (carousel && slide) {
                              carousel.scrollTo({
                                left: slide.offsetLeft - carousel.offsetLeft,
                                behavior: "smooth",
                              });
                              setMobileIndex(index);
                            }
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${index === mobileIndex ? "w-6 bg-primary" : "w-2 bg-foreground/25"}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <motion.div layout className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
                  {shownArticles.map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} />
                  ))}
                </motion.div>
              </>
            ) : (
              <div className="rounded-xl border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground">
                No articles match that search. Try another keyword or topic.
              </div>
            )}

            {visibleCount < filteredArticles.length && (
              <div className="flex justify-center pt-2">
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="rounded-full px-6"
                >
                  Load more articles
                </Button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
}
