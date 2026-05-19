import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              ALWAYS<span className={styles.fire}>🔥</span>LIT
            </div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 644 Queen St W, Toronto. Visit
              Always Lit Cannabis For Premium Flower, Edibles, Vapes &amp; More.
              Open Daily 10 AM – 3 AM.
            </p>
            <div className={styles.buttons}>
              <a
                href="tel:+14161234567"
                className={styles.btnPrimary}
              >
                Call Now
              </a>
              <a
                href="https://maps.app.goo.gl/YFPDuRCjwiuZL4J86"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>644 Queen St W</span>
              <span>Toronto, ON M6J 1E4</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span>Open Daily</span>
              <span className={styles.highlight}>10 AM – 3 AM</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/games">Games Arcade</Link>
              <Link href="/info/toronto-weed-dispensary">Toronto Dispensary</Link>
              <Link href="/info/cheap-weed-toronto">Cheap Weed Toronto</Link>
              <Link href="/info/native-cigarettes-toronto">Native Cigarettes</Link>
              <Link href="/info/weed-store-queen-west">Weed Store Queen West</Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://maps.app.goo.gl/YFPDuRCjwiuZL4J86"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Always Lit Cannabis. Must be 19+ to
            enter. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
