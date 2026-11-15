import { CommunityVision } from "./ProductVision";
import {
  Users,
  MessageCircle,
  Radio,
  Route,
  Sparkles,
  Image,
  MapPin,
  Wallet,
  ArrowUpRight,
} from "lucide-react";
const features = [
  {
    icon: Users,
    title: "Find your riding circle",
    copy: "Local crews, touring clubs, and riders who share your kind of road.",
    tag: "Community vision",
  },
  {
    icon: MessageCircle,
    title: "A home for every conversation",
    copy: "Club spaces, topic channels, group chats, and direct conversations.",
    tag: "Chat preview + planned channels",
  },
  {
    icon: Radio,
    title: "Drop into the voice lounge",
    copy: "Hang out before the ride. Talk through the plan. Keep your community connected.",
    tag: "Planned",
  },
  {
    icon: Route,
    title: "Turn “let’s go” into a ride",
    copy: "Meetup points, invitations, riders, and a plan everyone can follow.",
    tag: "Interactive preview",
  },
  {
    icon: Sparkles,
    title: "An AI co-rider for the planning",
    copy: "Describe your time, terrain, and riding style. Get a proposed itinerary to make your own.",
    tag: "Planned",
  },
  {
    icon: Image,
    title: "Create something worth sharing",
    copy: "AI-generated ride banners, club visuals, and images for your next announcement.",
    tag: "Planned",
  },
  {
    icon: MapPin,
    title: "Keep the pack in sight",
    copy: "A shared location view, rider formation, and useful pack updates.",
    tag: "Simulated preview",
  },
  {
    icon: Wallet,
    title: "Keep shared expenses simple",
    copy: "Fuel, food, and stays. Make who paid and who owes easy to understand.",
    tag: "Interactive preview",
  },
];
export function CommunityFeatures() {
  return (
    <>
      <section className="ms-section community-features" id="features">
        <div className="ms-section-heading">
          <div>
            <span className="ms-eyebrow">THE BIKER COMMUNITY, CONNECTED</span>
            <h2>
              Everything around
              <br />
              <em>your life on two wheels.</em>
            </h2>
          </div>
          <p>
            Meet your people. Make plans. Stay in the conversation. A community
            that stays with you long after the engine stops.
          </p>
        </div>
        <div className="community-grid">
          {features.map((f) => (
            <article key={f.title}>
              <f.icon size={25} />
              <span>{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CommunityVision />
    </>
  );
}
