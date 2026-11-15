import { useState } from "react";
import {
  Headphones,
  Hash,
  ArrowUpRight,
  Mic,
  Mountain,
  CalendarDays,
  MessageCircle,
  Sparkles,
  Check,
} from "lucide-react";

const rooms = [
  {
    id: "ride-planning",
    name: "Ride planning",
    icon: Hash,
    subtitle: "Good ideas become great rides.",
  },
  {
    id: "garage-talk",
    name: "Garage talk",
    icon: MessageCircle,
    subtitle: "Every build has a story.",
  },
  {
    id: "voice-lounge",
    name: "Voice lounge",
    icon: Headphones,
    subtitle: "Pull up a chair. Talk two wheels.",
  },
] as const;
export function ClubhousePreview() {
  const [room, setRoom] = useState(0);
  const [joined, setJoined] = useState(false);
  const [reaction, setReaction] = useState(false);
  const selected = rooms[room];
  return (
    <section className="ms-section clubhouse-section" id="community">
      <div className="clubhouse-intro">
        <span className="ms-eyebrow">A PLACE TO BELONG</span>
        <h2>
          Your people.
          <br />
          <em>Always in the loop.</em>
        </h2>
        <p>
          Big trips start in small conversations. Give your club a space for
          every plan, every build, and everyone who rides.
        </p>
      </div>
      <div className="clubhouse-shell">
        <div className="clubhouse-toolbar">
          <span className="clubhouse-logo">
            <Mountain size={20} />
          </span>
          <div>
            <strong>The Open Road Collective</strong>
            <small>A sample MotoSync community</small>
          </div>
          <span className="clubhouse-demo">INTERACTIVE CONCEPT</span>
        </div>
        <div className="clubhouse-layout">
          <aside className="clubhouse-sidebar">
            <span className="clubhouse-label">YOUR SPACES</span>
            {rooms.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setRoom(i)}
                aria-pressed={room === i}
              >
                <r.icon size={17} />
                {r.name}
                <span>↗</span>
              </button>
            ))}
            <div className="clubhouse-sidebar-note">
              <Sparkles size={20} />
              <strong>One club. Many conversations.</strong>
              <p>Make room for the things your riders care about.</p>
            </div>
            <div className="clubhouse-profile">
              <span>Y</span>
              <div>
                You<small>Exploring the demo</small>
              </div>
            </div>
          </aside>
          <div className="clubhouse-room" aria-live="polite">
            <header>
              <selected.icon size={22} />
              <div>
                <h3>{selected.name}</h3>
                <p>{selected.subtitle}</p>
              </div>
            </header>
            {room === 2 ? (
              <div className="voice-room">
                <span className="voice-orbit" aria-hidden="true" />
                <span className="clubhouse-label">THE ENGINE-OFF HANGOUT</span>
                <h4>
                  Good company.
                  <br />
                  No destination needed.
                </h4>
                <div className="voice-members">
                  {["Aman", "Kiran", "Rehan"].map((n, i) => (
                    <div key={n}>
                      <span className={`member-${i}`}>
                        {n[0]}
                        <Mic size={12} />
                      </span>
                      <small>{n}</small>
                    </div>
                  ))}
                </div>
                <button
                  className="ms-button"
                  onClick={() => setJoined(!joined)}
                >
                  <Headphones size={16} />
                  {joined ? "Leave preview room" : "Try the lounge preview"}
                </button>
                <p role="status">
                  {joined
                    ? "You joined the visual preview. No microphone or audio connection is active."
                    : "Planned voice rooms · sample members · no live audio"}
                </p>
              </div>
            ) : (
              <div className="clubhouse-thread">
                <div className="club-message">
                  <span className="club-avatar">A</span>
                  <div>
                    <strong>
                      Aman <small>Road captain · sample message</small>
                    </strong>
                    <p>
                      {room === 0
                        ? "A little altitude. A lot of open road. Who’s in for our next escape?"
                        : "The best part of a build? Seeing what everyone does differently. What’s next for your bike?"}
                    </p>
                  </div>
                </div>
                {room === 0 ? (
                  <div className="club-ride-card">
                    <div className="club-ride-art">
                      <Mountain size={90} strokeWidth={0.7} />
                      <span>
                        TAKE THE
                        <br />
                        <em>LONG WAY.</em>
                      </span>
                      <small>CLUB RIDE CONCEPT</small>
                    </div>
                    <div className="club-ride-info">
                      <strong>The mountain escape</strong>
                      <span>
                        <CalendarDays size={14} /> 2 days · dates to be decided
                      </span>
                      <span>
                        <Mountain size={14} /> Scenic roads / relaxed pace
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="garage-poll">
                    <span className="clubhouse-label">NEXT GARAGE SESSION</span>
                    <h4>What should we talk about?</h4>
                    {[
                      "Touring setups",
                      "Weekend maintenance",
                      "Your dream build",
                    ].map((topic, i) => (
                      <button key={topic} onClick={() => setReaction(true)}>
                        <span>0{i + 1}</span>
                        {topic}
                        <ArrowUpRight size={16} />
                      </button>
                    ))}
                  </div>
                )}
                <div className="club-message">
                  <span className="club-avatar avatar-coral">K</span>
                  <div>
                    <strong>
                      Kiran <small>Sample member</small>
                    </strong>
                    <p>
                      {room === 0
                        ? "I’m in. Let’s keep a stop for coffee and a few photos along the way."
                        : "Touring setups for me. Always room for one more good idea."}
                    </p>
                  </div>
                </div>
                <button
                  className="club-reaction"
                  aria-pressed={reaction}
                  onClick={() => setReaction(!reaction)}
                >
                  {reaction ? <Check size={14} /> : <Sparkles size={14} />}{" "}
                  {reaction
                    ? "Your reaction added · demo"
                    : "Count me in · try reacting"}
                </button>
              </div>
            )}
          </div>
          <aside className="clubhouse-context">
            <span className="clubhouse-label">MADE FOR YOUR PACK</span>
            <div>
              <Hash />
              <h4>Find your conversation</h4>
              <p>
                Dedicated spaces for plans, photos, and everything in between.
              </p>
            </div>
            <div>
              <Headphones />
              <h4>Bring everyone closer</h4>
              <p>Voice lounges are part of the community vision.</p>
            </div>
            <a href="#experience">
              Try more experiences <ArrowUpRight size={15} />
            </a>
          </aside>
        </div>
      </div>
      <div className="clubhouse-caption">
        <span>COMMUNITY, WITHOUT THE CLUTTER</span>
        <p>Concept preview. Conversations and reactions are local examples.</p>
      </div>
    </section>
  );
}
