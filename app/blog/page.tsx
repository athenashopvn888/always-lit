import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog — Always Lit Cannabis | Toronto Cannabis Guides & News",
  description:
    "Read the latest cannabis guides, strain reviews, dispensary news and Toronto weed culture from Always Lit Cannabis. Expert insights from 644 Queen St W.",
  openGraph: {
    title: "Always Lit Cannabis Blog — Toronto Cannabis Guides",
    description:
      "Expert cannabis guides, strain reviews, and dispensary tips from Toronto's most fire dispensary.",
  },
};

/* ── Blog Posts (static for now, can move to CMS later) ── */
const POSTS = [
  {
    slug: "indica-vs-sativa-vs-hybrid",
    title: "Indica vs Sativa vs Hybrid — What's the Difference?",
    excerpt:
      "Not sure which type to pick? We break down the effects, best uses, and top strains for each category so you can shop with confidence.",
    date: "2026-05-10",
    category: "Guides",
    emoji: "🌿",
    readTime: "5 min",
  },
  {
    slug: "how-to-choose-thc-level",
    title: "How to Choose the Right THC Level for You",
    excerpt:
      "From 24% budget strains to 39% exotic fire — here's how to pick the THC percentage that matches your tolerance and desired experience.",
    date: "2026-05-08",
    category: "Guides",
    emoji: "🔬",
    readTime: "4 min",
  },
  {
    slug: "edibles-dosing-guide",
    title: "Edibles Dosing Guide — Start Low, Go Slow",
    excerpt:
      "First time trying edibles? Our dosing chart covers everything from 5mg micro-doses to 100mg+ for experienced users. Don't make rookie mistakes.",
    date: "2026-05-05",
    category: "Guides",
    emoji: "🍬",
    readTime: "6 min",
  },
  {
    slug: "best-dispensary-queen-west",
    title: "Why Always Lit is Queen West's Best Dispensary",
    excerpt:
      "200+ strains, transparent pricing from $3/g, lab-tested products, and open until 3AM. Here's what makes us different from every other shop on Queen St.",
    date: "2026-05-03",
    category: "News",
    emoji: "🔥",
    readTime: "3 min",
  },
  {
    slug: "vape-pen-vs-flower",
    title: "Vape Pen vs Flower — Which Should You Choose?",
    excerpt:
      "Convenience vs tradition. We compare effects, cost, discretion, and flavor to help you decide between vaping and smoking.",
    date: "2026-04-28",
    category: "Guides",
    emoji: "💨",
    readTime: "5 min",
  },
  {
    slug: "toronto-cannabis-laws-2026",
    title: "Toronto Cannabis Laws in 2026 — What You Need to Know",
    excerpt:
      "Age limits, public consumption rules, possession limits, and where you can legally smoke in Toronto. Stay informed, stay compliant.",
    date: "2026-04-25",
    category: "News",
    emoji: "⚖️",
    readTime: "4 min",
  },
];

/* ── Google Reviews (pulled from GBP) ── */
const REVIEWS = [
  {
    name: "Mike R.",
    rating: 5,
    text: "Best dispensary in the Queen West area. Staff is super knowledgeable and the exotic strains are legit fire. Prices are fair too.",
    date: "2 weeks ago",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "Love that they're open until 3AM. The selection is insane — over 200 strains. My go-to spot for premium flower.",
    date: "1 month ago",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Tried the Buy 2g Get 1g Free deal on the AAA+ and it was incredible value. $20 for 3 grams of quality flower.",
    date: "3 weeks ago",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "Clean store, friendly staff, great edible selection. The gummies are perfectly dosed. Will definitely be back!",
    date: "1 week ago",
  },
  {
    name: "Alex D.",
    rating: 5,
    text: "Finally a dispensary that lists everything with actual THC percentages and per-gram pricing. No guessing games. Respect.",
    date: "2 weeks ago",
  },
];

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroH1}>
            📝 Always Lit <span className={styles.heroAccent}>Blog</span>
          </h1>
          <p className={styles.heroSub}>
            Cannabis guides, strain reviews, and dispensary news from Toronto&apos;s
            most fire dispensary.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.reviewsTitle}>
              ⭐ What Our Customers Say
            </h2>
            <div className={styles.reviewsRating}>
              <span className={styles.reviewsStars}>★★★★★</span>
              <span className={styles.reviewsScore}>5.0</span>
              <span className={styles.reviewsCount}>on Google</span>
            </div>
          </div>
          <div className={styles.reviewsGrid}>
            {REVIEWS.map((r, i) => (
              <div key={i} className={styles.reviewCard}>
                <div className={styles.reviewTop}>
                  <div className={styles.reviewAvatar}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.reviewDate}>{r.date}</div>
                  </div>
                  <div className={styles.reviewStars}>
                    {"★".repeat(r.rating)}
                  </div>
                </div>
                <p className={styles.reviewText}>{r.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.reviewsCta}>
            <a
              href="https://maps.app.goo.gl/YFPDuRCjwiuZL4J86"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewsBtn}
            >
              📍 See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <div className={styles.postsGrid}>
            {POSTS.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postEmoji}>{post.emoji}</div>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDot}>·</span>
                  <span className={styles.postTime}>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postDate}>
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to Shop?</h2>
          <p className={styles.ctaSub}>
            200+ strains · Exotic to Budget · Open daily 10AM–3AM
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/exotic" className={styles.ctaBtn}>
              Browse Menu
            </Link>
            <Link href="/contact" className={styles.ctaBtnSecondary}>
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
