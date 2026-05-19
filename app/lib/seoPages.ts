/* ── Geo-targeted SEO landing pages for Toronto keywords ── */

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "toronto-weed-dispensary",
    title: "Toronto Weed Dispensary — Always Lit Cannabis | Queen St W",
    metaDescription: "Always Lit Cannabis is a premium Toronto weed dispensary at 644 Queen St W. 200+ strains, THC up to 39%, edibles, vapes, and more. Open daily 10AM–3AM.",
    h1: "Toronto Weed Dispensary — Always Lit Cannabis",
    icon: "🔥",
    heroTagline: "Premium Cannabis on Queen St W · Open 10 AM – 3 AM",
    sections: [
      {
        heading: "Toronto's Most Fire Dispensary",
        body: "Always Lit Cannabis is a premium cannabis dispensary located at 644 Queen St W in the heart of Toronto's vibrant Queen West neighbourhood. We carry over 200 hand-picked cannabis strains across five quality tiers — from ultra-rare Exotic genetics with THC up to 39% to affordable Budget flower starting at just $3/g. Whether you're a connoisseur seeking the rarest strains or a daily smoker looking for reliable value, Always Lit has the perfect flower for you.",
      },
      {
        heading: "Six Tiers of Quality Cannabis",
        body: "Our unique tier system ensures transparent pricing and quality grading. Exotic ($20/g) features top-shelf genetics with THC 35-39%. Premium ($15/g) offers connoisseur-grade strains at THC 32-34%. AAA+ ($10/g) delivers heavy hitters at THC 30-32%. AA ($5/g) provides quality daily drivers at THC 27-29%. Budget ($3/g) has value ounces from $40. Plus our Buy 2g Get 1g FREE and Buy 3g Get 3g FREE promotions make every tier even more affordable.",
      },
      {
        heading: "More Than Just Flower",
        body: "Beyond our extensive flower menu, Always Lit Cannabis carries a full selection of cannabis edibles, gummies, vape pens, disposable vapes, concentrates (shatter, wax, hash, live resin), pre-rolls, magic mushrooms, native cigarettes, and accessories. Our live digital menu is updated in real time so you always know what's in stock before you visit.",
      },
      {
        heading: "Visit Always Lit Cannabis Today",
        body: "We're located at 644 Queen St W, near Queen West and Bathurst — one of Toronto's most accessible neighbourhoods. Open daily from 10 AM to 3 AM, no appointment needed. Our knowledgeable budtenders are here to help you find exactly what you're looking for. Walk in, browse our selection, and discover why Toronto trusts Always Lit.",
      },
    ],
    faqs: [
      { q: "Where is Always Lit Cannabis located?", a: "We are located at 644 Queen St W, Toronto, ON M6J 1E4 — in the Queen West neighbourhood near Bathurst." },
      { q: "What are the hours for Always Lit Cannabis?", a: "We are open daily from 10 AM to 3 AM — 7 days a week, no appointment needed." },
      { q: "What cannabis products does Always Lit carry?", a: "We carry 200+ strains of cannabis flower across 5 tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles, vapes, concentrates, pre-rolls, magic mushrooms, native cigarettes, and accessories." },
      { q: "What is the cheapest weed at Always Lit?", a: "Our Budget tier starts at $3/g with value ounces from $40. AAA+ starts at $10/g with our Buy 3g Get 3g FREE deal bringing it down to $5/g." },
      { q: "Does Always Lit have a live menu?", a: "Yes! Our online menu updates in real time. Check what's in stock before you visit at always-lit.vercel.app." },
    ],
  },

  {
    slug: "cheap-weed-toronto",
    title: "Cheap Weed Toronto — Budget Cannabis Deals at Always Lit",
    metaDescription: "Looking for cheap weed in Toronto? Always Lit Cannabis has budget flower from $3/g, ounces from $40, and Buy 2g Get 1g FREE promos. 644 Queen St W.",
    h1: "Cheap Weed Toronto — Budget Cannabis Deals",
    icon: "💰",
    heroTagline: "Budget Flower From $3/g · Ounces From $40",
    sections: [
      {
        heading: "Affordable Cannabis in Toronto",
        body: "Looking for cheap weed in Toronto without sacrificing quality? Always Lit Cannabis offers some of the best cannabis prices in the city. Our Budget tier starts at just $3/g with value ounces from $40. Our AA tier ($5/g) and AAA+ tier ($10/g) also deliver incredible value with THC levels from 27% to 32%.",
      },
      {
        heading: "Unbeatable Promotions",
        body: "Every tier at Always Lit Cannabis comes with our Buy 2g Get 1g FREE promotion — meaning you always get a free gram with every purchase. Our top three tiers (Exotic, Premium, AAA+) also offer Buy 3g Get 3g FREE, doubling your order. This makes our already competitive prices even better. For example, AAA+ at $10/g drops to just $5.00/g with the 6g deal.",
      },
      {
        heading: "Quality Guaranteed at Every Price Point",
        body: "Cheap doesn't mean low quality at Always Lit. Every strain in our Budget and AA tiers delivers reliable potency (THC 24-29%) from trusted Canadian growers. We rotate our inventory frequently to ensure freshness and maintain our quality standards across all price points.",
      },
    ],
    faqs: [
      { q: "What is the cheapest weed at Always Lit Cannabis?", a: "Our Budget tier starts at $3/g with value ounces from $40. These are quality strains at Toronto's most competitive prices." },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with excellent quality and freshness guaranteed." },
      { q: "Is cheap weed still good quality?", a: "Yes! Our Budget flower still delivers THC 24-27%. We never compromise on quality — every product is sourced from trusted Canadian growers." },
      { q: "Where can I buy cheap weed in Toronto?", a: "Always Lit Cannabis at 644 Queen St W, Toronto. Open daily 10 AM to 3 AM. Walk in, no appointment needed." },
    ],
  },

  {
    slug: "native-cigarettes-toronto",
    title: "Native Cigarettes Toronto — Discount Tobacco at Always Lit",
    metaDescription: "Buy native cigarettes in Toronto at Always Lit Cannabis. Wide selection of premium and value tobacco brands at discount prices. 644 Queen St W, Queen West.",
    h1: "Native Cigarettes Toronto — Discount Tobacco",
    icon: "🏷️",
    heroTagline: "Premium & Value Brands · Best Prices in Queen West",
    sections: [
      {
        heading: "Affordable Native Cigarettes in Toronto",
        body: "Always Lit Cannabis carries a wide selection of native cigarettes at competitive prices in Toronto. Whether you prefer premium brands or value options, we have something for every smoker. Our cigarette selection is one of the most comprehensive in the Queen West area.",
      },
      {
        heading: "Why Buy Cigarettes at Always Lit?",
        body: "We offer some of the best cigarette prices in Toronto's Queen West neighbourhood. Our selection includes both premium and economy native cigarette brands. With our convenient location at 644 Queen St W and extended hours (10 AM to 3 AM daily), we're always accessible when you need to restock.",
      },
      {
        heading: "Visit Us for the Full Selection",
        body: "Our cigarette inventory changes regularly. Visit us at 644 Queen St W to see our full in-store selection and current pricing. Our friendly staff can help you find the right brand and pack size for your preferences.",
      },
    ],
    faqs: [
      { q: "Does Always Lit sell cigarettes?", a: "Yes! We carry a wide selection of native cigarette brands at competitive prices." },
      { q: "What cigarette brands do you carry?", a: "We stock a variety of premium and value native cigarette brands. Visit us to see our full in-store selection." },
      { q: "Where can I buy cheap cigarettes in Toronto?", a: "Always Lit Cannabis at 644 Queen St W offers some of the best cigarette prices in the Queen West area. Open daily 10 AM to 3 AM." },
    ],
  },

  {
    slug: "weed-store-queen-west",
    title: "Weed Store Queen West — Cannabis Near Bathurst & Queen",
    metaDescription: "Looking for a weed store in Queen West, Toronto? Always Lit Cannabis at 644 Queen St W has 200+ strains, edibles, vapes & more. Near Bathurst. Open 10AM–3AM.",
    h1: "Weed Store Queen West — Cannabis Near Bathurst",
    icon: "📍",
    heroTagline: "644 Queen St W · Near Queen & Bathurst",
    sections: [
      {
        heading: "Your Neighbourhood Cannabis Store",
        body: "Always Lit Cannabis is Queen West's go-to cannabis dispensary, located at 644 Queen St W near the intersection of Queen and Bathurst. Whether you're a local resident, visiting the neighbourhood's galleries and shops, or grabbing a late-night bite on Queen West, we're conveniently located and open until 3 AM daily.",
      },
      {
        heading: "Full Menu, Fair Prices",
        body: "We carry over 200 cannabis strains across five quality tiers, plus edibles, vapes, concentrates, pre-rolls, native cigarettes, and accessories. Our transparent tier-based pricing system means you always know exactly what you're paying — from Exotic at $20/g down to Budget at $3/g. Every tier includes our Buy 2g Get 1g FREE promotion.",
      },
      {
        heading: "Easy to Find, Easy to Visit",
        body: "We're a short walk from the Queen St West streetcar stop and easily accessible from Bathurst Station (TTC). Street parking is available on Queen St W and surrounding side streets. No appointment needed — just walk in and browse.",
      },
    ],
    faqs: [
      { q: "Where exactly is Always Lit Cannabis?", a: "644 Queen St W, Toronto, ON M6J 1E4 — between Bathurst and Euclid on Queen St West." },
      { q: "Is there parking near Always Lit?", a: "Street parking is available on Queen St W and surrounding side streets. We're also close to TTC streetcar stops and Bathurst Station." },
      { q: "What are the hours?", a: "We're open daily from 10 AM to 3 AM — 7 days a week." },
    ],
  },

  {
    slug: "cannabis-dispensary-near-me",
    title: "Cannabis Dispensary Near Me — Always Lit, Queen St W Toronto",
    metaDescription: "Find a cannabis dispensary near you in Toronto. Always Lit Cannabis at 644 Queen St W has 200+ strains from $3/g. Open 10AM–3AM daily. Walk in anytime.",
    h1: "Cannabis Dispensary Near Me — Toronto",
    icon: "🗺️",
    heroTagline: "Walk-In Welcome · Open 10 AM – 3 AM Daily",
    sections: [
      {
        heading: "Find Premium Cannabis Near You in Toronto",
        body: "If you're searching for a cannabis dispensary near you in Toronto, Always Lit Cannabis is conveniently located at 644 Queen St W — in the heart of the Queen West neighbourhood. We serve customers from across Toronto including Trinity Bellwoods, Kensington Market, Little Italy, Dundas West, Ossington, and beyond.",
      },
      {
        heading: "Why Choose Always Lit Over Other Dispensaries?",
        body: "What sets Always Lit apart is our transparent, tier-based pricing system. Instead of confusing markups, we grade every strain into clear quality tiers — Exotic, Premium, AAA+, AA, and Budget — each with a published per-gram price. Plus, our Buy 2g Get 1g FREE promotion applies to every tier, giving you a free gram with every purchase.",
      },
      {
        heading: "Areas We Serve",
        body: "Always Lit Cannabis is accessible from Queen West, Trinity Bellwoods, Kensington Market, Dundas West, Ossington, Parkdale, Little Italy, Harbord Village, and downtown Toronto. We're near the Queen St West streetcar line and a short walk from Bathurst TTC station.",
      },
    ],
    faqs: [
      { q: "Where is the closest dispensary in Queen West?", a: "Always Lit Cannabis at 644 Queen St W is conveniently located in the heart of Queen West, near Bathurst." },
      { q: "Is Always Lit Cannabis walk-in friendly?", a: "Absolutely! No appointment needed. Walk in anytime between 10 AM and 3 AM, 7 days a week." },
      { q: "What neighbourhoods does Always Lit serve?", a: "We serve Queen West, Trinity Bellwoods, Kensington Market, Dundas West, Ossington, Parkdale, Little Italy, and all of downtown Toronto." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
