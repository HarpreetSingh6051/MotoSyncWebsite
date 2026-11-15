import { useState } from "react";
import {
  ArrowUpRight,
  Headphones,
  MessageCircle,
  Mountain,
  Sparkles,
  Users,
  Route,
  Camera,
  Compass,
  Flag,
  Image,
  Heart,
} from "lucide-react";

const connections = [
  {
    label: "Find your people",
    word: "BELONG.",
    headline: "Different stories. A shared obsession.",
    copy: "A first bike. A lifelong passion. A crew that gets it. We’re building a place where every kind of rider can find their people.",
    details: [
      "Discover riding communities",
      "Build a home for your club",
      "Meet beyond your usual circle",
    ],
    icons: [Users, Heart, Compass, Mountain, Flag, Route],
  },
  {
    label: "Keep talking",
    word: "CONNECT.",
    headline: "The engine stops. The connection doesn’t.",
    copy: "The late-night bike talk, the ride that starts with a message, the friends a voice away. Your community should always feel close.",
    details: [
      "Conversations for every interest",
      "Club channels and direct messages",
      "A vision for drop-in voice spaces",
    ],
    icons: [MessageCircle, Headphones, Users, Heart, MessageCircle, Headphones],
  },
  {
    label: "Make it yours",
    word: "BECOME.",
    headline: "More than joining a community. Shaping one.",
    copy: "Give your club its own identity. Share the stories, create the traditions, and welcome the next rider into something worth belonging to.",
    details: [
      "A distinct identity for your club",
      "Shared stories and ride memories",
      "Tools that grow with your community",
    ],
    icons: [Flag, Camera, Sparkles, Users, Image, Heart],
  },
] as const;

export function CommunityVision() {
  const [active, setActive] = useState(0);
  const item = connections[active];
  return (
    <section
      className="vision-community"
      id="community"
      aria-labelledby="community-vision-title"
    >
      <div className="vision-container">
        <div className="vision-kicker">
          <span className="ms-eyebrow">01 / BUILT AROUND BELONGING</span>
          <span>THE MOTOSYNC VISION</span>
        </div>
        <h2 id="community-vision-title">
          A million different roads.
          <br />
          <em>One shared feeling.</em>
        </h2>
        <div className="connection-composition">
          <div
            className={`connection-universe connection-mode-${active}`}
            aria-hidden="true"
          >
            <div className="connection-ring ring-a" />
            <div className="connection-ring ring-b" />
            <div className="connection-ring ring-c" />
            <div className="connection-core">
              <span>MOTO</span>
              <strong>SYNC</strong>
              <small>FIND YOUR FREQUENCY</small>
            </div>
            {item.icons.map((Icon, i) => (
              <span
                key={`${active}-${i}`}
                className={`connection-node node-${i}`}
              >
                <Icon strokeWidth={1.3} />
              </span>
            ))}
            <span className="universe-word">{item.word}</span>
            <span className="connection-caption">
              SAME PASSION. ENDLESS POSSIBILITIES.
            </span>
          </div>
          <div className="connection-story">
            <div
              className="vision-choices"
              aria-label="Explore the community vision"
            >
              {connections.map((c, i) => (
                <button
                  key={c.label}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <span>0{i + 1}</span>
                  {c.label}
                  <ArrowUpRight size={17} />
                </button>
              ))}
            </div>
            <div
              className="connection-story-content"
              key={active}
              aria-live="polite"
            >
              <h3>{item.headline}</h3>
              <p>{item.copy}</p>
              <ul>
                {item.details.map((d) => (
                  <li key={d}>
                    <span /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="vision-bottom-line">
          <span>YOUR PEOPLE. YOUR PASSION. YOUR PLACE.</span>
          <p>
            Community discovery, club spaces, and voice are part of the
            experience we’re building.
          </p>
        </div>
      </div>
    </section>
  );
}

const possibilities = [
  {
    label: "Imagine the ride",
    title: "“Somewhere new.",
    accent: "With my kind of people.”",
    copy: "Tell your AI co-rider what you’re dreaming of. The time you have. The roads you love. A little inspiration becomes a plan your whole crew can shape.",
    capabilities: [
      "AI-assisted itineraries",
      "Collaborative ride planning",
      "Meetups & invitations",
    ],
    note: "Product vision · AI planning is in development",
    theme: "explore",
  },
  {
    label: "Create the feeling",
    title: "An idea deserves",
    accent: "an identity.",
    copy: "A mountain escape. A midnight meetup. Your club’s next big chapter. Imagine turning a few words into a ride banner, a shared image, or something entirely your own.",
    capabilities: [
      "AI-generated ride banners",
      "Community imagery",
      "Personal club identity",
    ],
    note: "Product vision · AI creation is planned",
    theme: "create",
  },
  {
    label: "Live the story",
    title: "Out on the road.",
    accent: "Still in sync.",
    copy: "Bring the people, the plan, and the little details together. Stay connected on the journey and keep the memories long after you get home.",
    capabilities: [
      "Pack location sharing",
      "Shared ride expenses",
      "Photos & conversations",
    ],
    note: "Product vision · live services are still being developed",
    theme: "ride",
  },
] as const;

function JourneyArtwork({ mode }: { mode: number }) {
  return (
    <div className={`journey-art journey-art-${mode}`} aria-hidden="true">
      <div className="journey-sun" />
      <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="visionMountain" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="var(--ms-cyan)" stopOpacity=".5" />
            <stop offset="1" stopColor="var(--ms-night)" />
          </linearGradient>
          <linearGradient id="visionRoad">
            <stop stopColor="var(--ms-lime)" />
            <stop offset="1" stopColor="var(--ms-coral)" />
          </linearGradient>
        </defs>
        <path
          d="M-100 560 230 125 400 350 590 85 1000 540Z"
          fill="url(#visionMountain)"
        />
        <path
          d="m-100 560 330-435 170 225L590 85l410 455M230 125l65 280 105-55M590 85l-35 310 140-80"
          fill="none"
          stroke="var(--ms-cyan)"
          strokeOpacity=".4"
        />
        <path
          d="M-100 630 100 360 310 500 470 275 760 610 920 340 1100 620"
          fill="var(--ms-night)"
          stroke="var(--ms-line)"
        />
        <path
          d="M560 650C800 480 340 510 460 400S540 330 520 300"
          fill="none"
          stroke="url(#visionRoad)"
          strokeWidth="5"
        />
        {mode === 2 && (
          <g fill="var(--ms-lime)">
            <circle cx="543" cy="581" r="9" />
            <circle cx="574" cy="538" r="7" />
            <circle cx="520" cy="482" r="6" />
          </g>
        )}
      </svg>
      {mode === 0 ? (
        <>
          <span className="journey-floating idea-one">
            <Sparkles /> A little more adventure.
          </span>
          <span className="journey-floating idea-two">
            <Compass /> A route that feels like us.
          </span>
          <div className="journey-art-title">
            WHAT IF
            <br />
            <em>WE JUST GO?</em>
          </div>
        </>
      ) : mode === 1 ? (
        <>
          <div className="vision-poster poster-back">
            <small>YOUR CREW / YOUR STORY</small>
            <strong>
              AFTER
              <br />
              HOURS.
            </strong>
            <span>THE CITY IS OURS.</span>
          </div>
          <div className="vision-poster poster-front">
            <small>MOTOSYNC / CONCEPT ARTWORK</small>
            <Mountain size={95} strokeWidth={0.6} />
            <strong>
              CHASE
              <br />
              <em>THE UNKNOWN.</em>
            </strong>
            <span>A NEW CHAPTER STARTS HERE ↗</span>
          </div>
          <span className="poster-spark">
            <Sparkles />
          </span>
        </>
      ) : (
        <>
          <div className="journey-art-title">
            GO FAR.
            <br />
            <em>STAY CLOSE.</em>
          </div>
          <span className="journey-floating idea-one">
            <Users /> Everyone has a place.
          </span>
          <span className="journey-floating idea-two">
            <Camera /> Every ride has a story.
          </span>
        </>
      )}
    </div>
  );
}

export function PossibilityVision() {
  const [active, setActive] = useState(0);
  const item = possibilities[active];
  return (
    <section
      className="possibility-section"
      id="experience"
      aria-labelledby="possibility-title"
    >
      <div className="vision-container">
        <div className="vision-kicker">
          <span className="ms-eyebrow">
            02 / FROM A SPARK TO SOMETHING BIGGER
          </span>
          <Sparkles size={20} />
        </div>
        <div className="possibility-heading">
          <h2 id="possibility-title">
            You bring the spark.
            <br />
            <em>Imagine what comes next.</em>
          </h2>
          <p>
            A conversation becomes a plan.
            <br />A plan becomes an adventure.
            <br />
            An adventure becomes part of who you are.
          </p>
        </div>
        <div
          className="possibility-choices"
          aria-label="Explore product possibilities"
        >
          {possibilities.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span>0{i + 1}</span>
              {p.label}
              <ArrowUpRight size={17} />
            </button>
          ))}
        </div>
      </div>
      <div className={`possibility-stage possibility-${item.theme}`}>
        <div className="vision-container possibility-content">
          <div className="possibility-copy" key={active} aria-live="polite">
            <span className="possibility-index">
              0{active + 1} / POSSIBILITY
            </span>
            <h3>
              {item.title}
              <br />
              <em>{item.accent}</em>
            </h3>
            <p>{item.copy}</p>
            <ul>
              {item.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <small>{item.note}</small>
          </div>
          <JourneyArtwork mode={active} />
        </div>
      </div>
      <div className="vision-container possibility-foot">
        <span>DESIGNED FOR THE LIFE AROUND THE RIDE.</span>
        <p>
          Illustrated concepts, not generated results or live product screens.
        </p>
      </div>
    </section>
  );
}
