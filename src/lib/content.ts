export type Rider = {
  id: string
  name: string
  handle: string
  avatar: string
  accent: string
}

export const RIDERS: Rider[] = [
  {
    id: 'arjun',
    name: 'Arjun',
    handle: 'rajasingh',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=160&h=160&q=80',
    accent: '#2563eb',
  },
  {
    id: 'neha',
    name: 'Neha',
    handle: 'neharides',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=160&h=160&q=80',
    accent: '#8b5cf6',
  },
  {
    id: 'vikram',
    name: 'Vikram',
    handle: 'vikramthrottle',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=160&h=160&q=80',
    accent: '#ea580c',
  },
  {
    id: 'kabir',
    name: 'Kabir',
    handle: 'kabirontheroad',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=160&h=160&q=80',
    accent: '#059669',
  },
]

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2400&q=85',
  invite:
    'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80',
  radar:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80',
  ride: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=2400&q=85',
  split:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80',
  chat: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2400&q=85',
} as const

export const CHAPTERS = [
  { id: 'hero', index: '01', label: 'The Call', nav: 'Start' },
  { id: 'invite', index: '02', label: 'The Invite', nav: 'Invite' },
  { id: 'radar', index: '03', label: 'The Meetup', nav: 'Radar' },
  { id: 'intercom', index: '04', label: 'The Ride', nav: 'Intercom' },
  { id: 'split', index: '05', label: 'The Settlement', nav: 'Split' },
  { id: 'chat', index: '06', label: 'The Aftermath', nav: 'Chat' },
  { id: 'finale', index: '07', label: 'The Finale', nav: 'Download' },
] as const

export type ChapterId = (typeof CHAPTERS)[number]['id']

export const BILL_ITEMS = [
  { label: '4 × Stuffed paratha', amount: 320 },
  { label: '4 × Masala chai', amount: 160 },
  { label: '4 × Curd & pickle', amount: 120 },
  { label: '2 × Extra butter', amount: 100 },
  { label: 'Parking & tip', amount: 500 },
] as const

export const BILL_TOTAL = BILL_ITEMS.reduce((sum, item) => sum + item.amount, 0)

export type ChatEntry = {
  id: string
  author: string
  avatar: string
  side: 'left' | 'right'
  text: string
  time: string
  accent: string
}

export const CHAT_MESSAGES: ChatEntry[] = [
  {
    id: 'm1',
    author: 'Neha',
    avatar: RIDERS[1].avatar,
    side: 'left',
    text: 'That climb after the dhaba? Unreal. My arms are still buzzing.',
    time: '6:58 PM',
    accent: '#8b5cf6',
  },
  {
    id: 'm2',
    author: 'Arjun',
    avatar: RIDERS[0].avatar,
    side: 'left',
    text: 'Same route next Sunday. I am in before anyone changes their mind.',
    time: '7:02 PM',
    accent: '#00f3ff',
  },
  {
    id: 'm3',
    author: 'You',
    avatar: RIDERS[2].avatar,
    side: 'right',
    text: 'Dropping the reel tonight. The sweep cam is gold.',
    time: '7:03 PM',
    accent: '#ff6b00',
  },
  {
    id: 'm4',
    author: 'Kabir',
    avatar: RIDERS[3].avatar,
    side: 'left',
    text: 'Voting yes. I need that sunrise and a second plate of parathas.',
    time: '7:05 PM',
    accent: '#10b981',
  },
]
