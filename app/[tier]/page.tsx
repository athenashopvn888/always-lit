import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import {
  getFlowersByTier,
  getTierFromSlug,
  TIER_CONFIG,
  type FlowerProduct,
} from "../lib/products";
import styles from "./tier.module.css";

/* -- Generate all tier pages at build -- */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}

/* -- Dynamic SEO metadata -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const flowers = getFlowersByTier(tierInfo.key);

  return {
    title: `${tierInfo.config.name} Cannabis Flower — ${flowers.length} Strains | $${tierInfo.config.unitPrice}/g`,
    description: `Shop ${flowers.length} ${tierInfo.config.name.toLowerCase()} cannabis strains at Always Lit Cannabis. ${tierInfo.config.tagline}. Starting at $${tierInfo.config.unitPrice}/g. Toronto's most fire dispensary.`,
    openGraph: {
      title: `${tierInfo.config.name} Flower | Always Lit Cannabis`,
      description: `${flowers.length} curated ${tierInfo.config.name.toLowerCase()} strains in stock now. From $${tierInfo.config.unitPrice}/g.`,
    },
  };
}

/* Top 3 tiers get 6g label */
const TOP_TIERS = ["EXOTIC", "PREMIUM", "AAA+"];

/* -- Page component -- */
export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) notFound();

  const flowers = getFlowersByTier(tierInfo.key);
  const { config } = tierInfo;

  // Separate sale items
  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const hotFlowers = flowers.filter((f) => f.isHot);

  return (
    <main className={styles.main}>
      <Navbar />

      {/* -- Hero banner -- */}
      <section
        className={styles.hero}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroBannerWrap}>
          <img
            src={config.banner}
            alt={`${config.name} Cannabis Flower — ${config.tagline}`}
            className={styles.heroBannerImg}
          />
          <div className={styles.heroBannerOverlay} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroIcon}>{config.icon}</span>
          <h1 className={styles.heroTitle}>{config.name}</h1>
          <p className={styles.heroTagline}>{config.tagline}</p>
          <div className={styles.heroUnitPrice}>${config.unitPrice}/g</div>

          {/* Deal boxes */}
          <div className={styles.dealRow}>
            <div className={styles.dealBox}>
              <div className={styles.dealLabel}>{config.deal3g.label}</div>
              <div className={styles.dealPrice}>
                = <span className={styles.dealAmount}>${config.deal3g.price}</span> / {config.deal3g.total}
              </div>
            </div>
            {config.deal6g && (
              <div className={styles.dealBox}>
                <div className={styles.dealLabel}>{config.deal6g.label}</div>
                <div className={styles.dealPrice}>
                  = <span className={styles.dealAmount}>${config.deal6g.price}</span> / {config.deal6g.total}
                </div>
              </div>
            )}
          </div>

          <div className={styles.heroStats}>
            <span className={styles.stat}>
              <strong>{flowers.length}</strong> strains
            </span>
            {saleFlowers.length > 0 && (
              <span className={styles.statSale}>
                🔥 {saleFlowers.length} on sale
              </span>
            )}
            {hotFlowers.length > 0 && (
              <span className={styles.statHot}>
                ⚡ {hotFlowers.length} hot picks
              </span>
            )}
          </div>
        </div>
      </section>

      {/* -- Product grid -- */}
      <section className={styles.products}>
        <div className={styles.container}>
          {/* Sale section */}
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                🔥 <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierColor={config.color}
                    tierKey={tierInfo.key}
                  />
                ))}
              </div>
            </>
          )}

          {/* All strains */}
          <h2 className={styles.sectionTitle}>
            All{" "}
            <span style={{ color: config.color }}>{config.name}</span>{" "}
            Strains
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierColor={config.color}
                tierKey={tierInfo.key}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* -- Flower Card component -- */
function FlowerCard({
  flower,
  tierColor,
  tierKey,
}: {
  flower: FlowerProduct;
  tierColor: string;
  tierKey: string;
}) {
  const typeLabel = flower.type === "indica" ? "Indica" : flower.type === "sativa" ? "Sativa" : "Hybrid";
  const typeClass = flower.type === "indica" ? styles.indica : flower.type === "sativa" ? styles.sativa : styles.hybrid;

  // Top 3 tiers get 6g label
  const isTopTier = TOP_TIERS.includes(flower.tier);
  const fiveGLabel = isTopTier ? "6g" : "5g";
  const fiveGGrams = isTopTier ? 6 : 5;

  // Build weight/price list
  const weights = [
    { label: "3g", grams: 3, p: flower.price3g },
    { label: fiveGLabel, grams: fiveGGrams, p: flower.price5g },
    { label: "14g", grams: 14, p: flower.price14g },
    { label: "28g", grams: 28, p: flower.price28g },
  ].filter((x) => x.p !== null);

  // Find lowest effective price for main display
  const mainWeight = weights[0];
  const effectivePrice = mainWeight?.p ? (mainWeight.p.sale ?? mainWeight.p.regular) : 0;

  // Best per-gram value
  const perGrams = weights.map(({ grams, p }) => {
    if (!p) return 99;
    return (p.sale ?? p.regular) / grams;
  });
  const bestPerG = Math.min(...perGrams);

  return (
    <Link
      href={`/flower/${flower.slug}`}
      className={styles.card}
      style={{ "--tier-color": tierColor } as React.CSSProperties}
    >
      <div className={styles.cardMedia}>
        {flower.image ? (
          <img src={flower.image} alt={flower.name} loading="lazy" className={styles.cardImg} />
        ) : (
          <div className={styles.cardPlaceholder}>{flower.name[0]}</div>
        )}

        <div className={styles.cardBadges}>
          <span className={styles.badgeThc}>THC {flower.thc}</span>
          {flower.isSale && <span className={styles.badgeSale}>SALE</span>}
          {flower.isHot && <span className={styles.badgeHot}>HOT 🔥</span>}
        </div>
      </div>

      <div className={styles.cardBody}>
        <span className={`${styles.typeTag} ${typeClass}`}>{typeLabel}</span>
        <h3 className={styles.cardName}>{flower.name}</h3>

        <div className={styles.cardPricing}>
          {mainWeight && mainWeight.p && (
            <>
              {mainWeight.p.sale !== null ? (
                <div className={styles.salePrice}>
                  <span className={styles.priceOld}>${mainWeight.p.regular}</span>
                  <span className={styles.priceNew}>${mainWeight.p.sale}</span>
                </div>
              ) : (
                <div className={styles.regularPrice}>
                  <span className={styles.price}>${mainWeight.p.regular}</span>
                </div>
              )}
            </>
          )}
          <span className={styles.pricePerG}>From ${bestPerG.toFixed(2)}/g</span>
        </div>

        {/* Weight pills with prices */}
        <div className={styles.weights}>
          {weights.map(({ label, p }) => {
            const price = p ? (p.sale ?? p.regular) : 0;
            return (
              <span key={label} className={styles.weightPill}>
                <span className={styles.weightLabel}>{label}</span>
                <span className={styles.weightPrice}>${price}</span>
              </span>
            );
          })}
        </div>

        <div className={styles.cardCta}>View Strain →</div>
      </div>
    </Link>
  );
}
