import { PossibilityVision } from "./ProductVision";
import { Atmosphere } from "./Atmosphere";
import { CommunityHelmet } from "./CommunityHelmet";
import { CommunityFeatures } from "./CommunityFeatures";
import { useState } from "react";

import {
  ArrowUpRight,
  ArrowRight,
  Route,
  Radio,
  Users,
  Check,
  Menu,
  X,
  Mountain,
  Coffee,
} from "lucide-react";

import { offers, questions } from "@/lib/marketing";
import { site } from "@/lib/site";

export function LandingExperience() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="motosync-site">
      <Atmosphere />
      <a className="ms-skip" href="#main">
        Skip to content
      </a>
      <header className="ms-nav-header">
        <div className="ms-nav">
          <a href="#" className="ms-brand" aria-label="MotoSync home">
            <span className="ms-brand-mark">
              <Route size={23} />
            </span>
            MOTOSYNC<span className="ms-brand-dot">®</span>
          </a>
          <nav
            className={menu ? "ms-links is-open" : "ms-links"}
            id="main-links"
            aria-label="Main navigation"
          >
            {[
              ["Experience", "#experience"],
              ["Features", "#features"],
              ["Community", "#community"],
              ["Plans", "#plans"],
              ["Questions", "#questions"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="ms-button ms-nav-cta" href={site.riderUrl}>
            Explore the app <ArrowUpRight size={16} />
          </a>
          <button
            className="ms-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="main-links"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="ms-hero">
          <div className="ms-hero-copy">
            <div className="ms-eyebrow">
              <span /> BUILT FOR THE WAY WE RIDE
            </div>
            <h1>
              Your world.
              <br />
              Two wheels.
              <br />
              <em>Connected.</em>
            </h1>
            <p>
              A home for the biker community. Find your crew, plan your next
              ride, and keep the conversation going.
            </p>
            <div className="ms-actions">
              <a className="ms-button" href={site.riderUrl}>
                Explore MotoSync <ArrowUpRight size={19} />
              </a>
              <a className="ms-text-link" href="#experience">
                Explore the vision <ArrowRight size={17} />
              </a>
            </div>
            <div className="ms-hero-foot">
              <span>PLAN. RIDE. CONNECT.</span>
              <span>YOUR COMMUNITY STARTS HERE ↘</span>
            </div>
          </div>
          <CommunityHelmet />
        </section>
        <div className="ms-ribbon">
          <span>
            <Route />
            Less organising
          </span>
          <b>✳</b>
          <span>
            <Users />
            More belonging
          </span>
          <b>✳</b>
          <span>
            <Coffee />
            Shared adventures
          </span>
          <b>✳</b>
          <span>
            <Mountain />
            Further together
          </span>
        </div>
        <CommunityFeatures />
        <PossibilityVision />
        <section className="ms-about" id="about">
          <div className="ms-about-art" aria-hidden="true">
            <span className="ms-about-orbit" />
            <span className="ms-about-word">
              GO
              <br />
              <em>TOGETHER.</em>
            </span>
            <span className="ms-about-stamp">
              NO TWO RIDERS ALIKE.
              <br />
              ONE REASON TO RIDE.
            </span>
          </div>
          <div className="ms-about-copy">
            <span className="ms-eyebrow">02 / MORE THAN THE DESTINATION</span>
            <h2>
              Find your people.
              <br />
              Make it <em>a ritual.</em>
            </h2>
            <p>
              MotoSync is taking shape around a simple idea: the best part of a
              ride is the people beside you.
            </p>
            <div className="ms-principle">
              <Users />
              <div>
                <h3>A place for your pack</h3>
                <p>From a few friends to a growing riding club.</p>
              </div>
            </div>
            <div className="ms-principle">
              <Route />
              <div>
                <h3>The journey, in one place</h3>
                <p>Planning, connection, and the little moments in between.</p>
              </div>
            </div>
            <a className="ms-text-link" href={`mailto:${site.contactEmail}`}>
              Tell us what your pack needs <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="ms-section" id="plans">
          <div className="ms-section-heading">
            <div>
              <span className="ms-eyebrow">03 / ROOM TO GROW</span>
              <h2>
                Your ride.
                <br />
                <em>Your kind of plan.</em>
              </h2>
            </div>
            <p>
              Start with the experience. Grow with your pack. Here’s where we’re
              heading—paid plans aren’t on sale yet.
            </p>
          </div>
          <div className="ms-plan-grid">
            {offers.map((p, i) => (
              <article
                className={`ms-plan ${i === 1 ? "ms-plan-featured" : ""}`}
                key={p.name}
              >
                <span className="ms-plan-status">{p.status}</span>
                <h3>{p.name}</h3>
                <p>{p.audience}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="ms-plan-note">
                  Planned inclusions · availability to be confirmed
                </span>
              </article>
            ))}
          </div>
          <p className="ms-pricing-note">
            Pricing and confirmed features will be published before launch. No
            payment is collected here.
          </p>
        </section>
        <section className="ms-section ms-faq" id="questions">
          <div>
            <span className="ms-eyebrow">04 / BEFORE YOU ROLL</span>
            <h2>
              A few
              <br />
              <em>good answers.</em>
            </h2>
            <a className="ms-text-link" href={`mailto:${site.contactEmail}`}>
              Talk to us <ArrowUpRight size={17} />
            </a>
          </div>
          <div>
            {questions.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="ms-finale">
          <span className="ms-eyebrow">THE NEXT TURN IS YOURS</span>
          <h2>
            Make every ride
            <br />
            <em>a story.</em>
          </h2>
          <a className="ms-button" href={site.riderUrl}>
            Explore the app <ArrowUpRight size={20} />
          </a>
          <span className="ms-finale-note">
            A growing product. A shared love of the ride.
          </span>
        </section>
      </main>
      <footer className="ms-footer">
        <a className="ms-brand" href="#">
          MOTOSYNC
        </a>
        <span>Pack connected. Ride in sync.</span>
        <a href={`mailto:${site.contactEmail}`}>
          Say hello <ArrowUpRight size={14} />
        </a>
        <span>© {new Date().getFullYear()} MotoSync</span>
      </footer>
    </div>
  );
}
