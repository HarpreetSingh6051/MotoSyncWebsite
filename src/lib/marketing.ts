export const journeys = [
  {
    id: "invite",
    label: "01 / Plan",
    title: "The best rides start with a simple yes.",
    copy: "A meeting point. A time. Your favourite people. Bring the whole plan into one shared invitation.",
    hint: "Accept the sample ride invitation.",
  },
  {
    id: "radar",
    label: "02 / Connect",
    title: "Different bikes. One moving pack.",
    copy: "Explore a shared pack view, where the meetup and the people matter more than another dropped pin.",
    hint: "Simulated riders and locations. No tracking is active.",
  },
  {
    id: "intercom",
    label: "03 / Ride",
    title: "Keep the conversation moving.",
    copy: "A glimpse of our planned pack voice experience. More connection, from the first turn to the last.",
    hint: "Hold to talk for a visual demo. No microphone is used.",
  },
  {
    id: "split",
    label: "04 / Split",
    title: "Share the chai. Skip the maths.",
    copy: "Make the roadside stop part of the good memories. See a sample bill become clear, equal shares.",
    hint: "Settle the sample bill. No money moves.",
  },
  {
    id: "chat",
    label: "05 / Repeat",
    title: "The ride ends. The stories don’t.",
    copy: "A place for the photos, the next route, and that one friend already planning the next adventure.",
    hint: "Send a demo message or vote. Changes stay in this preview.",
  },
] as const;
export const offers = [
  {
    name: "Rider",
    audience: "For your life on two wheels",
    features: [
      "Ride and club discovery",
      "Shared ride planning",
      "Pack conversation",
    ],
    status: "Core experience preview",
  },
  {
    name: "Road Captain",
    audience: "For the one who brings everyone together",
    features: [
      "Advanced pack tools",
      "AI receipt assistance",
      "Ride media and exports",
    ],
    status: "Paid plan · coming later",
  },
  {
    name: "Clubs",
    audience: "For a community that keeps growing",
    features: ["Club management", "Member roles", "Community tools"],
    status: "Club plan · coming later",
  },
];
export const questions = [
  [
    "Can I try MotoSync now?",
    "Explore the app opens the current web experience. The examples on this page are demos; some product features are still being developed.",
  ],
  [
    "Are these riders and locations live?",
    "No. These previews use sample riders and simulated data. They do not track you, use your microphone, send real messages, or move money.",
  ],
  [
    "Can I buy a subscription?",
    "Not from this website yet. Prices and confirmed inclusions will be published before paid subscriptions launch.",
  ],
  [
    "Do I need to install anything?",
    "The web experience opens in your browser. Native download options will be provided as releases are verified.",
  ],
  [
    "How can my club get involved?",
    "Email hello@motosync.app and tell us about your pack and the tools your captains need.",
  ],
] as const;
