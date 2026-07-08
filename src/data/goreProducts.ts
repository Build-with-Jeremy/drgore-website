export type ProductCategory =
  | 'Relationships'
  | 'Parenting'
  | 'Self-Help'
  | 'Wellness';

export interface GoreProduct {
  slug: string;
  title: string;
  price: string;
  priceValue: number;
  image: string;
  description: string;
  category: ProductCategory;
  tag?: 'NEW' | 'LIMITED' | 'BESTSELLER';
  featured?: boolean;
  extras?: string;
  soldResponse: string;
}

// The Gore Store lineup, per Dr. Gore's revised store document (July 2026).
// Ordered exactly as Dave numbered them 1-20. Copy is his; punctuation lightly
// normalized. Items he dropped from the prior lineup (weight-loss DVD, the Jewish
// and Catholic in-laws CD variants, defense spray, spark enzymes) are removed.
export const goreProducts: GoreProduct[] = [
  {
    slug: 'adult-child-fumigator',
    title: '“Empty Nest in a Can” Whole House Fogger',
    price: '$75.95',
    priceValue: 75.95,
    image: '/assets/store/adult-child-fumigator.jpg',
    description:
      "He's 34, plays video games all night and sleeps all day. He can't get a job because nobody has yet to recognize his unique gifts. He has a bad back, worse allergies, and a deep aversion to the laundry room. Want to get him out? Activate the fogger and begin evacuation immediately. Your “Golden Child” will be independent in a matter of hours…",
    category: 'Parenting',
    tag: 'LIMITED',
    featured: true,
    soldResponse: 'Back Order',
  },
  {
    slug: 'room-deodorant',
    title: '“Keep Your Adult Children From Moving Back In” Room Deodorant',
    price: '$25.95',
    priceValue: 25.95,
    image: '/assets/store/room-deodorant.jpg',
    description:
      "Has your adult child started using phrases like “between apartments,” “just for a few weeks,” or “I'm really trying to simplify my life right now”? Try this specially formulated room deodorant! This bespoke spray will make even the most determined kid want to stay independent and “make their own way” in life.",
    category: 'Parenting',
    soldResponse: 'Out of stock',
  },
  {
    slug: 'ex-boyfriend-lotion',
    title: '“Don\'t Call That No Good Ex-Boyfriend” Lotion',
    price: '$19.95',
    priceValue: 19.95,
    image: '/assets/store/ex-boyfriend-lotion.jpg',
    description:
      "You're lonely. You are thinking about him a lot. He wasn't really that bad, was he? Your friends never REALLY got to know him, did they? What harm can one phone call do? How about just a quick, casual text? STOP! Grab this Doctor-Approved fragrance instead. Resist the urge to call that No-Good Bum. A quick spritz will help end the urge to re-engage with him.",
    category: 'Relationships',
    tag: 'NEW',
    featured: true,
    soldResponse: 'Back Order',
  },
  {
    slug: 'ex-girlfriend-cream',
    title: '“Don\'t Call That Lousy Ex-Girlfriend” Cologne',
    price: '$19.95',
    priceValue: 19.95,
    image: '/assets/store/ex-girlfriend-cream.jpg',
    description:
      "Sure, she had some quirks. Intense quirks. Documented quirks. Are you thinking, “So what?” Are you wondering if you should reach out to her…again? Maybe this time it will be different, right? WRONG! DON'T CALL HER! Dab on some of my Clinically Proven fragrance on your wrist and massage it in. This Psychologist-Approved potion will directly feed your pre-frontal cortex what it needs to resist the urge to rekindle something. Something that shouldn't be near a flame.",
    category: 'Relationships',
    tag: 'NEW',
    soldResponse: 'Out of stock',
  },
  {
    slug: 'anti-whining',
    title: '“Anti-Whining” Drops',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/anti-whining.jpg',
    description:
      'Are your kids whining? Do they complain when you ask them to do something? Do they ask, “How much longer?” every five minutes? Do they make “Mom” into a six-syllable word? These new drops, when placed on their tongue, will cause instant compliance and good cheer in even the most defiant child.',
    category: 'Parenting',
    featured: true,
    extras:
      'Act Now and Get This Free Bonus Gift: Fast-Acting Nose Spray for that annoying nasal whining that drives parents crazy! Two squirts in each nostril and your children’s voice will sound sweet and non-demanding.',
    soldResponse: 'Out of stock',
  },
  {
    slug: 'serenity-gel',
    title: '“Serenity Now” Hair Gel',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/serenity-gel.jpg',
    description:
      'We have all heard the truism: Would you rather be right or be happy? Now, putting that into practice has never been easier. When you feel that urge to let your partner know you are right…even though you know it will ruin the evening…even though you know it will put a damper on your vacation…then grab my new Hair Gel infused with Space-Age Polymers, just rub it into your thick skull and watch your desire to be “RIGHT” lessen, and your happiness level will rise to new heights.',
    category: 'Self-Help',
    featured: true,
    soldResponse: 'Coming Soon',
  },
  {
    slug: 'breathspray',
    title: '“How To Get Your Man to Finally Open Up” Breath Spray',
    price: '$25.95',
    priceValue: 25.95,
    image: '/assets/store/breathspray.jpg',
    description:
      "Does your husband not communicate well? Is it tough to get information out of your boyfriend? Do his stories lack the important details you are seeking? Does he grunt a lot? Have him try my new Esther Perel-Approved Breath Spray, which, when used twice a day, will get your man to open up and share his deepest thoughts and innermost secrets with you. You will never feel alone when you are with him…ever again.",
    category: 'Relationships',
    tag: 'NEW',
    soldResponse: 'Back Order',
  },
  {
    slug: 'volunteering-flakes',
    title: '“Stop Signing Up” Flakes',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/volunteering-flakes.jpg',
    description:
      'Is your wife over-committed with all her volunteering? Try these “Stop Signing Up” Flakes. These gluten-free flakes can be mixed into her coffee or her wine. These Stop Signing Up Flakes are clinically proven to stop her urge to be on more committees and decrease her desire to be Room Mom. Try them sprinkled onto steel-cut oatmeal, avocado toast, or whatever highly productive people eat.',
    category: 'Wellness',
    soldResponse: 'Back Order',
  },
  {
    slug: 'drinking-pill',
    title: 'Super-Hyped Pill to Help Problem Drinkers Become Successful Drinkers',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/drinking-pill.jpg',
    description:
      'Willpower not working? Is AA too religious? Is your therapist avoiding the topic? Are you wanting to “just slow down” and aren\'t considering stopping? Simply take this brand new, FDA-approved pill and your alcoholism will instantly change to moderate, sane and happy drinking. NO EFFORT REQUIRED.',
    category: 'Wellness',
    soldResponse: 'Out of stock',
  },
  {
    slug: 'no-interrupt-figure',
    title: '“Man Who Doesn\'t Interrupt” Action Figure',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/no-interrupt-figure.jpg',
    description:
      'Does your man not know how to listen? Does he try to be helpful by problem-solving? Does he never understand you just want to tell him about your day, with all the necessary details and the occasional detour? Buy my new Action Figure and get that feeling of being understood, truly heard and accepted.',
    category: 'Relationships',
    soldResponse: 'Coming Soon',
  },
  {
    slug: 'no-advice-figure',
    title: '“Man Who Doesn\'t Give Advice” Action Figure',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/no-advice-figure.jpg',
    description:
      'Does your man not understand you just want to tell him what happened with Katie and you? Does he try to be helpful by problem-solving? Does he give unsolicited advice? Buy my new Action Figure and get that feeling of just being “listened to.”',
    category: 'Relationships',
    soldResponse: 'Sold Out!',
  },
  {
    slug: 'texting-handbook',
    title: '“How to Stop Your Teenager from Looking at the Phone” Handbook',
    price: '$9.95',
    priceValue: 9.95,
    image: '/assets/store/texting-handbook.jpg',
    description:
      'Tired of your teen texting while you are talking to them? Is his thumb bigger than it should be? Is her ability to carry on a conversation impaired? Is scrolling more important than making eye contact with you? Buy this handbook now and learn how to get your teenager to look at you AND speak to you while you are both in the same room! Teach ’em that your love is more important than their “likes.”',
    category: 'Parenting',
    soldResponse: 'Sold Out!',
  },
  {
    slug: 'childhood-album',
    title: '“See? My Childhood Wasn\'t That Bad” Photo Album and Software',
    price: '$59.95',
    priceValue: 59.95,
    image: '/assets/store/childhood-album.jpg',
    description:
      'Does your therapist keep circling back to your parents? Does your spouse use phrases like “your family did a number on you”? Run your old photos through our proprietary PhotoShopDenial™ software: easily reframe, retouch, and reconstruct a childhood that looks, all things considered, pretty fine. Crop out the tension. Erase a bad haircut. Brighten the holidays. Add a dog or two you never had. Because the goal isn\'t healing. The goal is convincing your therapist, your partner, and yourself that everything\'s fine, and always was. Have the family you always wanted at one low, low price…',
    category: 'Self-Help',
    soldResponse: 'Coming Soon',
  },
  {
    slug: 'inlaws-cd',
    title: 'Get Along With Overly Critical In-Laws Meditation CD (Non-Denominational Version)',
    price: '$9.95',
    priceValue: 9.95,
    image: '/assets/store/inlaws-cd.jpg',
    description:
      "Not feeling good enough for your partner's family? Your mother-in-law likes to point out your flaws? Your father-in-law looks at you funny, like you're not worthy of joining his family? Do they still have your husband's pictures with his old girlfriend on their mantle? Do they still invite your wife's ex-fiancé to Thanksgiving and let him carve the turkey? This new meditation CD will teach you to accept that you will never measure up, no matter what you do…",
    category: 'Relationships',
    soldResponse: 'Sold Out!',
  },
  {
    slug: 'internet-scams-guide',
    title: 'A Psychological Guide to Avoiding Internet Scams',
    price: '$495.00',
    priceValue: 495,
    image: '/assets/store/internet-scams-guide.jpg',
    description:
      "Tired of being ripped off by phony Internet products? Do people take advantage of your trusting nature? Do you want to stop being a victim and start taking charge of your life? To learn more, please send your credit card number, Social Security Number, mother's maiden name, and, just out of curiosity, what was the name of your first pet?",
    category: 'Self-Help',
    extras:
      'Plus $125 shipping and handling for Georgia, $175 for other states.',
    soldResponse: 'Payment Processing…',
  },
  {
    slug: 'athlete-pill',
    title: 'Travel Team in a Bottle',
    price: '$39.95',
    priceValue: 39.95,
    image: '/assets/store/athlete-pill.jpg',
    description:
      'Is your child not getting enough playing time? Is he a little too slow? Is she a little uncoordinated? Try my new “Be A Great Little Athlete” Pill. Just give your future D-1 star only three doses a day for three weeks, and your kid will not only be starting and playing most of the game…they will also be invited to all the “travel teams” and become a star! Guaranteed to improve your self-image as a parent!',
    category: 'Parenting',
    extras: 'Warning: Side effects may include a minivan and lots of folding chairs.',
    soldResponse: 'Coming Soon',
  },
  {
    slug: 'narcissist-app',
    title: 'Narcissist Detector App',
    price: '$49.95',
    priceValue: 49.95,
    image: '/assets/store/narcissist-app.jpg',
    description:
      'Point your phone at any difficult person and get an instant answer: are they selfish, annoying, emotionally immature, and self-involved, or a genuine narcissist? It works on exes, bosses, parents, siblings, neighbors, coworkers, and in-laws. This doctor-approved app is the Shazam for Personality Disorders!',
    category: 'Self-Help',
    tag: 'NEW',
    extras: 'Warning: May occasionally identify the person holding the phone as the narcissist.',
    soldResponse: 'Coming Soon',
  },
  {
    slug: 'webmd-blocker',
    title: 'WebMD Blocking Software',
    price: '$6.95/mo',
    priceValue: 6.95,
    image: '/assets/store/webmd-blocker.jpg',
    description:
      'Do you or someone you know constantly search the Web to self-diagnose their symptoms? Does this search usually result in them having a terminal condition and just a few months left to live? Do you want to prevent this person from “going down the rabbit hole”? Then try our new browser extension…',
    category: 'Wellness',
    soldResponse: 'Waiting for download',
  },
  {
    slug: 'mind-reader-readers',
    title: 'Mind Reader Readers',
    price: '$49.95',
    priceValue: 49.95,
    image: '/assets/store/mind-reader-readers.jpg',
    description:
      "Tired of guessing what your spouse, teenager, boss, or mother-in-law is really thinking? Simply put on our Mind Reader Glasses and instantly know what they mean, want, feel, and aren't saying. No more mind-reading. No more overthinking and guessing required.",
    category: 'Relationships',
    tag: 'NEW',
    featured: true,
    extras:
      '$49.95 for Single Vision (just your partner’s thoughts). $89.95 for Bifocals (your partner’s thoughts plus one other person of your choice). Warning: May reveal that asking direct questions actually works better.',
    soldResponse: 'Back Order',
  },
  {
    slug: 'bambian',
    title: 'BAmbian! — Not FDA Approved. Yet.',
    price: '$99.50/dose',
    priceValue: 99.5,
    image: '/assets/store/bambian.jpg',
    description:
      "Does getting your baby to sleep create too much anxiety in you? Can the baby's cries be minimized so you don't feel bad? Try our new BAmbian! Instant Infant Sleep Formula! Now available in Airplane Strength: Flight Attendant-Approved! Comes with an Extra-Strength Dose, yet with a scientifically shortened duration. Knock the little one out for the trip, but not for Grandma! Now available in both two-hour flight strength and four-hour flight strength.",
    category: 'Parenting',
    soldResponse: 'Out of Stock',
  },
];

export const productCategories: ProductCategory[] = [
  'Relationships',
  'Parenting',
  'Self-Help',
  'Wellness',
];

export function getProductBySlug(slug: string): GoreProduct | undefined {
  return goreProducts.find((p) => p.slug === slug);
}
