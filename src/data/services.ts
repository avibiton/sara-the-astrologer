import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'birth-chart',
    name: 'Natal Chart Reading',
    slug: 'birth-chart',
    icon: '☽',
    tagline: 'Your cosmic blueprint, fully explored.',
    description:
      'A deep dive into your natal chart — the unique map of the sky at the exact moment you were born. Together we explore your core patterns, strengths, recurring themes, and the areas of life calling for your attention.',
    duration: '1 hour',
    price: '$234',
    format: 'Online via video call',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
    forWhom:
      'Anyone looking to understand their fundamental nature, recurring patterns, and the unique strengths and challenges written into their chart.',
    questions: [
      'Why do I keep experiencing the same patterns in relationships?',
      'What are my natural strengths and gifts?',
      'Where do I tend to struggle, and why?',
      'What does my chart reveal about my purpose or calling?',
      'How do my early experiences shape who I am today?',
    ],
    whatToPrepare: [
      'Your birth date',
      'Your birth time (as precise as possible)',
      'Your birth city and country',
      'Any specific questions or areas of focus',
    ],
    whatSaraNeed: [
      'Accurate birth date, time, and location',
      'A brief description of what you\'d like to explore',
    ],
    faqs: [
      {
        q: 'What if I don\'t know my exact birth time?',
        a: 'We can still do a great deal with your chart. Sara will work with what\'s available and note which placements may shift. Knowing your birth time is helpful but not always required.',
      },
      {
        q: 'Is this session recorded?',
        a: 'Sessions are not recorded. If you would like to take notes during your reading, you are welcome to do so.',
      },
    ],
  },
  {
    id: 'relationship',
    name: 'Partnership (Synastry) Reading',
    slug: 'relationship',
    icon: '♀',
    tagline: 'Understand the patterns between you.',
    description:
      'Explore the astrological dynamics at play between you and another person — whether a partner, family member, or close friend. A relationship reading can illuminate why you connect the way you do, where friction arises, and how to navigate it with more awareness.',
    duration: '45 minutes',
    price: '$180',
    format: 'Online via video call',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
    forWhom:
      'Anyone wanting deeper understanding of the dynamics in an important relationship — romantic partnerships, family relationships, close friendships, or professional partnerships.',
    questions: [
      'Why does this relationship feel the way it does?',
      'What do our charts reveal about our connection?',
      'Where do we naturally support each other?',
      'What are the most common friction points — and why?',
      'How can I show up more effectively in this relationship?',
    ],
    whatToPrepare: [
      'Your birth date, time, and place',
      'The other person\'s birth date, time, and place (if available)',
      'The nature of the relationship',
      'Specific dynamics you\'d like to explore',
    ],
    whatSaraNeed: [
      'Birth data for both individuals',
      'A description of the relationship and your questions',
    ],
    faqs: [
      {
        q: 'Does the other person need to be present?',
        a: 'No — this session focuses on your understanding of the relationship dynamic. The other person\'s presence is not required.',
      },
    ],
  },
  {
    id: 'transit',
    name: 'Transit Reading',
    slug: 'transit',
    icon: '♃',
    tagline: 'What\'s moving in your life right now.',
    description:
      'A transit reading looks at how current and upcoming planetary movements are interacting with your natal chart. This is a session about timing — understanding what\'s being activated in your life and how to work with it rather than against it.',
    duration: '30 minutes',
    price: '$111',
    format: 'Online via video call',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
    forWhom:
      'Anyone navigating a significant life transition, feeling like something is shifting, or wanting to understand the astrological context of what they\'re experiencing right now.',
    questions: [
      'Why does this period feel so significant?',
      'What are the current planetary themes in my chart?',
      'What\'s coming up in the next few months?',
      'How can I make the most of this timing?',
      'What areas of my life are being most activated right now?',
    ],
    whatToPrepare: [
      'Your birth date, time, and place',
      'A description of what\'s currently happening in your life',
      'Your questions about timing and upcoming shifts',
    ],
    whatSaraNeed: [
      'Your birth data',
      'Context about what you\'re navigating and what you want to understand',
    ],
    faqs: [],
  },
  {
    id: 'year-ahead',
    name: 'Year Ahead Reading',
    slug: 'year-ahead',
    icon: '☉',
    tagline: 'A clear view of what\'s unfolding.',
    description:
      'This reading uses your progressed chart, Solar Return chart, and Annual Profections to explore the themes and timing of your year ahead. Rather than making fixed predictions, I use traditional timing techniques to understand the overall "weather" of the year and the key themes likely to emerge.',
    duration: '45 minutes',
    price: '$198',
    format: 'Online via video call',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
    forWhom:
      'Anyone entering a new year, a new chapter, or a significant transition who wants a clear-eyed astrological overview of what\'s ahead.',
    questions: [
      'What are the major astrological themes of my year ahead?',
      'When are the most significant timing windows?',
      'What areas of life will be most activated?',
      'What should I be paying attention to?',
      'How can I best prepare for what\'s coming?',
    ],
    whatToPrepare: [
      'Your birth date, time, and place',
      'Areas of life you\'d like the session to focus on',
      'Any key dates or events already scheduled',
    ],
    whatSaraNeed: ['Your birth data', 'Your intention for the session'],
    faqs: [],
  },
  {
    id: 'follow-up',
    name: 'Follow-Up Session',
    slug: 'follow-up',
    icon: '✦',
    tagline: 'Continue the conversation.',
    description:
      'For returning clients who want to revisit their chart, check in on current transits, or explore a specific question that has emerged since their last reading. A focused, shorter session designed for ongoing astrological support.',
    duration: '30 minutes',
    price: '$111',
    format: 'Online via video call',
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
    forWhom: 'Returning clients who have already had an initial reading with Sara.',
    questions: [
      'What\'s changed in my chart since we last spoke?',
      'How are current transits showing up for me?',
      'Can we go deeper into a specific area we touched on?',
    ],
    whatToPrepare: [
      'Notes from your previous session',
      'Specific questions or updates to share',
    ],
    whatSaraNeed: ['A brief update on what\'s happened since your last session'],
    faqs: [],
  },
];
