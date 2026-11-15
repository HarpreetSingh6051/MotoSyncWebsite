import { ArrowUpRight, Smartphone, ShieldCheck, Radio, Download, Route, Users, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { MotoSyncLogo } from "./MotoSyncLogo";
import { QrCode } from "./widgets/QrCode";

export function ImpressiveFooter() {
  return (
    <footer className="ms-footer-grand" role="contentinfo" aria-label="Site footer">
      {/* 1. Pack App Access & QR Code Hub */}
      <div className="ms-footer-qr-card">
        <div className="ms-footer-qr-left">
          <div className="ms-footer-pill">
            <span className="ms-pulse-dot" />
            <span>PACK RADAR NETWORK ACTIVE · 60HZ TELEMETRY</span>
          </div>
          <h2 className="ms-footer-cta-title">
            Your next ride starts
            <br />
            <em>in your pocket.</em>
          </h2>
          <p className="ms-footer-cta-desc">
            Connect with your crew, share real-time waypoint radar, and settle
            gas and breakfast bills with a single tap. Open directly on web or
            install as a mobile app.
          </p>

          <div className="ms-footer-actions">
            <a
              className="ms-button ms-footer-btn-primary"
              href={site.riderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Rider App <ArrowUpRight size={18} />
            </a>
            {site.apkUrl && (
              <a
                className="ms-button-secondary ms-footer-btn-apk"
                href={site.apkUrl}
                download
              >
                <Download size={16} /> Download APK (Android)
              </a>
            )}
          </div>

          <div className="ms-footer-badges">
            <span className="ms-badge-item">
              <ShieldCheck size={14} className="text-[var(--ms-lime,#d6f66f)]" />
              End-to-End Encrypted
            </span>
            <span className="ms-badge-item">
              <Radio size={14} className="text-[var(--ms-cyan,#7de0e2)]" />
              Low-Bandwidth Mode
            </span>
            <span className="ms-badge-item">
              <Smartphone size={14} className="text-[var(--ms-coral,#ff8a68)]" />
              iOS & Android
            </span>
          </div>
        </div>

        <div className="ms-footer-qr-right">
          <div className="ms-qr-wrapper">
            <div className="ms-qr-badge">
              <Smartphone size={15} /> SCAN WITH CAMERA
            </div>
            <div className="ms-qr-inner">
              <QrCode />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Brand & Navigation Columns */}
      <div className="ms-footer-main">
        <div className="ms-footer-col ms-footer-brand-col">
          <a href="#" className="ms-footer-brand" aria-label="MotoSync home">
            <MotoSyncLogo size={36} showWordmark={true} />
          </a>
          <p className="ms-footer-bio">
            The connected riding-pack ecosystem. Bringing riders together across
            routes, intercom channels, live radar, and shared road memories.
          </p>
          <div className="ms-footer-contact-link">
            <a href={`mailto:${site.contactEmail}`}>
              <span>Direct dispatch:</span> {site.contactEmail} <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="ms-footer-col">
          <h4 className="ms-footer-col-title">EXPERIENCE</h4>
          <ul className="ms-footer-links">
            <li><a href="#experience">The Vision</a></li>
            <li><a href="#features">Feature Grid</a></li>
            <li><a href="#community">Pack Community</a></li>
            <li><a href="#plans">Rider Plans</a></li>
            <li><a href="#questions">FAQ & Answers</a></li>
          </ul>
        </div>

        <div className="ms-footer-col">
          <h4 className="ms-footer-col-title">PACK TOOLS</h4>
          <ul className="ms-footer-links">
            <li><a href={site.riderUrl}>Live Radar HUD</a></li>
            <li><a href={site.riderUrl}>Voice Intercom</a></li>
            <li><a href={site.riderUrl}>Fuel & Split Ledger</a></li>
            <li><a href={site.riderUrl}>Club Roster</a></li>
            <li><a href={site.riderUrl}>Hazard Pings</a></li>
          </ul>
        </div>

        <div className="ms-footer-col">
          <h4 className="ms-footer-col-title">TRUST & TECH</h4>
          <ul className="ms-footer-links">
            <li><span className="ms-status-indicator"><span className="ms-status-dot" /> All Systems Live</span></li>
            <li><a href="#questions">Privacy & GPS Policy</a></li>
            <li><a href="#questions">No Data Reselling</a></li>
            <li><a href="#questions">Road Captain Verified</a></li>
            <li><a href={`mailto:${site.contactEmail}`}>Report a Bug</a></li>
          </ul>
        </div>
      </div>

      {/* 3. Sub-footer Bar */}
      <div className="ms-footer-bottom">
        <div className="ms-footer-copy">
          © {new Date().getFullYear()} MotoSync. Engineered for the pack, by riders.
        </div>
        <div className="ms-footer-legal">
          <span>v3.0 Production</span>
          <span className="ms-dot-sep">·</span>
          <span>Zero Ads</span>
          <span className="ms-dot-sep">·</span>
          <span>100% Rider Owned</span>
        </div>
      </div>
    </footer>
  );
}
