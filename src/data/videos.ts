export interface TranscriptBlock {
  type: "paragraph" | "heading" | "quote";
  text: string;
}

export interface Video {
  slug: string;
  youtubeId?: string;
  instagramUrl?: string;
  featured?: boolean;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  durationSec?: number;
  orientation?: "vertical" | "horizontal";
  transcript?: TranscriptBlock[];
  relatedBlogSlug?: string;
}

export const VIDEO_TAGS = [
  "Anxiety",
  "Parenting",
  "Relationships",
  "Marriage",
  "Humor",
  "Boundaries",
  "Grief",
  "Addiction",
  "Self-Growth",
  "Therapy",
  "Emotions",
] as const;

export const videos: Video[] = [
  // REVIEW: Confirm title/summary/tags after viewing each Reel.
  // Cross-check YouTube channel first — prefer youtubeId over instagramUrl for SEO.
  {
    slug: "viral-reel-1m-dbpfsbse1qc",
    instagramUrl: "https://www.instagram.com/reel/DBPfSbES1QC/",
    featured: true,
    title: "1M+ Views — [REVIEW: confirm title after viewing Reel]",
    date: "2024",
    summary: "[REVIEW: add 1-2 sentence summary after viewing Reel at https://www.instagram.com/reel/DBPfSbES1QC/]",
    tags: ["Therapy", "Self-Growth"],
    orientation: "vertical",
  },
  {
    slug: "viral-reel-841k-c-f6o80pxnj",
    instagramUrl: "https://www.instagram.com/reel/C-f6O80PXNj/",
    featured: true,
    title: "841K Views — [REVIEW: confirm title after viewing Reel]",
    date: "2024",
    summary: "[REVIEW: add 1-2 sentence summary after viewing Reel at https://www.instagram.com/reel/C-f6O80PXNj/]",
    tags: ["Therapy", "Self-Growth"],
    orientation: "vertical",
  },
  {
    slug: "viral-reel-335k-c-i8ig6vhot",
    instagramUrl: "https://www.instagram.com/reel/C_i8Ig6vHOt/",
    featured: true,
    title: "335K Views — [REVIEW: confirm title after viewing Reel]",
    date: "2024",
    summary: "[REVIEW: add 1-2 sentence summary after viewing Reel at https://www.instagram.com/reel/C_i8Ig6vHOt/]",
    tags: ["Therapy", "Self-Growth"],
    orientation: "vertical",
  },
  {
    slug: "modern-parenting-nailing-it-or-failing-it",
    youtubeId: "gVvfnKY2Pss",
    title: "Modern Parenting: Nailing It or Failing It?",
    date: "2025",
    summary:
      "When we do too much for our kids, we tell them we think they're fragile, incompetent, and needy. They respond by acting fragile, incompetent, and needy.",
    tags: ["Parenting", "Self-Growth"],
    transcript: [
      {
        type: "paragraph",
        text: "I had another mom who used to wake her kids up gently in the morning. Gently get the kid's eyes open and say, honey, what would you like for breakfast? The kid would put in the order for room service. She would then run and wake up the second kid and get the order. She'd go make the breakfast, two different breakfasts, and bring them to the kids.",
      },
      {
        type: "paragraph",
        text: "I said to her, what if there's a snooze alarm? What if the kid says, mom, give me five more minutes? She goes, I would allow that. I go, what if it was a second snooze alarm? She goes, I'd be okay with that as long as we aren't late for school.",
      },
      {
        type: "paragraph",
        text: "My kids? They have an alarm clock. The alarm goes off, they get up. I haven't woken up either of my two youngest kids ever. I take that back — maybe five times. Kids that sleep through alarms have been trained to sleep through alarms. Kids that wake up when the alarm goes off, I would call that raised properly.",
      },
      {
        type: "quote",
        text: "When we do too much for our kids, we communicate to them that we think they're fragile, incompetent, needy. And they respond by acting fragile, incompetent, and needy.",
      },
    ],
  },
  {
    slug: "what-are-feelings",
    youtubeId: "0TDvH37seI4",
    title: "What Are Feelings?",
    date: "2025",
    summary:
      "A walkthrough of the eight primary feelings — the four you're born with, the ones that emerge, and the critical difference between shame and guilt.",
    tags: ["Emotions", "Therapy", "Self-Growth"],
    transcript: [
      {
        type: "paragraph",
        text: "Today I'm going to talk about feelings. Therapists are known to really enjoy talking about feelings. A lot of therapists are known to look at their clients and say, so how does that make you feel? And for some people, that's their only move. I have more moves than that.",
      },
      {
        type: "paragraph",
        text: "Feelings for me are the place I want to zoom in on. When I'm doing therapy, a lot of movement up here toward cognitive therapy, cognitive behavioral therapy, DBT — not a huge fan of that. I don't think attacking people's thoughts are the way to go. I'd rather go a little deeper into the feeling level.",
      },
      {
        type: "heading",
        text: "The first four feelings",
      },
      {
        type: "paragraph",
        text: "The first four emotions are anger, sad, happy, scared. Mad, sad, glad, and scared. Show me a baby and I can show you a mad baby, a happy baby, a sad baby, and a scared baby. I could show you a baby in Africa and you could recognize their feelings. I could show you a baby in Europe and we could all recognize that baby's feelings. I could show you a puppy or a kitten and we could put some of those same feelings to how a newborn kitten or puppy is behaving. Those four primary feelings we're born with.",
      },
      {
        type: "heading",
        text: "Alone and connected",
      },
      {
        type: "paragraph",
        text: "The next two feelings that emerge are aloneness and connection. When a baby's born, you hold the baby in your arms, the baby looks at you, you look at the baby, and the baby has no idea where he or she begins and mom or dad ends. Babies think the whole world is them. Then one day they're in their crib and they're hungry and they cry and nobody comes. They cry louder and nobody comes. Baby looks around and says, oh, I get it — I'm all alone. The baby doesn't like that. Alone becomes a feeling they become aware of. And then connected also becomes a feeling they're aware of.",
      },
      {
        type: "heading",
        text: "Shame versus guilt",
      },
      {
        type: "paragraph",
        text: "The last two primary feelings to emerge are shame and guilt, and for me this was huge. No baby is born feeling shame or guilt. Never in the history of Northside Hospital has a baby sat there in a crib looking at the baby next to them saying, oh my god, listen to that kid cry. I'm not a good crier. I need to be a better crier. Babies begin to feel shame and guilt when a grownup looks at them and says, you ought to be ashamed of yourself — you drew on the walls, you missed the potty, you ought to be ashamed of yourself. That's a gift given to us by others.",
      },
      {
        type: "paragraph",
        text: "Yesterday, hypothetically, I was at Office Depot. I saw this pen, I liked this pen, I stole this pen. I walked out without paying for it. I feel guilty about that. I broke a rule, I did something wrong, I stole this pen. Shame is: yesterday I was at Office Depot, I saw this pen, I liked this pen, I stole this pen — and shame says, there's something wrong with me. I'm no good.",
      },
      {
        type: "quote",
        text: "Guilt is I broke a rule. Shame is I'm broken.",
      },
      {
        type: "paragraph",
        text: "Shame is a much deeper feeling. Brené Brown writes about shame for hundreds of pages. Shame corrodes your soul. Shame takes away all your goodness, all the essence inside of you that enjoys a good life. A little bit of shame? Too much shame will tear away at your life. It'll prevent you from feeling happy and healthy. A tiny bit of shame is okay — it stops me from walking around Kroger naked. Too much shame prevents happiness.",
      },
    ],
  },
  {
    slug: "why-we-have-lousy-relationships",
    youtubeId: "zzyAsudQtlE",
    title: "Why We Have Lousy Relationships",
    date: "2025",
    summary:
      "We end up with people about as healthy as we are. If your marriage is falling apart, the honest question is: what's your role in it?",
    tags: ["Relationships", "Marriage", "Self-Growth"],
    transcript: [
      {
        type: "paragraph",
        text: "Today I want to talk about relationships. How to do relationships, how to be good at relationships, what happens when we get better at relationships.",
      },
      {
        type: "paragraph",
        text: "Something hypothetical. I invent the questionnaire. It has 422 questions on it. I give it to 10,000 people. The questionnaire taps into: how emotionally healthy are you? I put people into three categories. Super healthy, average, not that healthy. Then I make another test, ability to do relationships. 396 questions. Same three groups. How much overlap will there be? If you score really well in emotional health, you're going to score really well in ability to do relationships. If you're not that good in emotional health, you're not going to do relationships really well.",
      },
      {
        type: "paragraph",
        text: "Now a third test — capacity for intimacy. The ability to do relationships deeply, honestly, authentically. Same three groups. Tons of overlap. If you're in the bottom here, you're going to be in the bottom for all three. I'm isolating a factor — how good you'd do in relationships. Another way to put it: do you have your act together?",
      },
      {
        type: "paragraph",
        text: "So in my practice, people come in complaining about their partner. My partner is not doing this, not giving enough, not present enough. They want me to side with them. I'll do that for a session or two, I'm a nice guy. But eventually I'm going to turn the focus back and say, what's your role in all this?",
      },
      {
        type: "paragraph",
        text: "Because here's my experience. We end up with the kind of people that are in our exact same level. If I'm in the low category, there are only three kinds of women I'm going to end up with. If I meet someone in the middle, I may get her to go out with me three times or six times. But eventually, even if I have a nice car, a great job, I'm incredibly good-looking, I'm a great dancer — I cannot give her what I don't have. She's going to be lonely and she's going to say adios.",
      },
      {
        type: "paragraph",
        text: "I recently ran across a woman. She said, me and Johnny are getting divorced. I said, you poor thing, that's terrible. She said, yeah, I know. And I said, you know he wasn't that great a husband to you, was he? She said, no, absolutely not. And then she said, you actually told me that. I said, I forgot I said that.",
      },
      {
        type: "paragraph",
        text: "I once said to a therapist, I got this new theory. I explained the whole thing. He said, oh, I have a similar theory. I said, what's your theory? He said, if you want to know how healthy you are, look across the dinner table. I said — yours is much simpler than mine.",
      },
    ],
  },
  {
    slug: "what-do-kids-actually-care-about",
    youtubeId: "lVoaUojXffM",
    title: "What Kids Actually Care About",
    date: "2026-04",
    summary:
      "Ask your kid after a sleepover what the parents did for a living. They don't know. They don't care. Here's what they actually care about.",
    tags: ["Parenting"],
    transcript: [
      {
        type: "paragraph",
        text: "What is the most important thing to a kid?",
      },
      {
        type: "paragraph",
        text: "Ask one of your children after they do a playdate at someone else's house or after a sleepover. Ask them, so, what do the parents do for a living? Or what type of countertops do they have? Were they quartz? You'll see — kids don't know that. They don't care about what parents do for a living.",
      },
      {
        type: "quote",
        text: "Ask them — did the parents play with you? Were they nice? Did you have fun? That's what kids care about.",
      },
    ],
  },
  {
    slug: "boys-are-different-than-girls",
    youtubeId: "cn2g9NxAS3I",
    title: "Boys Are Different Than Girls",
    date: "2026-04",
    summary:
      "Boys touch. Boys move. Boys learn by engaging with objects. Why telling a kid \"no touching\" at Home Depot is the wrong move — and what to do instead.",
    tags: ["Parenting"],
    transcript: [
      {
        type: "paragraph",
        text: "I'm supposed to start out videos with saying something that'll grab you. You ready? Boys are different than girls. What do you think of that?",
      },
      {
        type: "paragraph",
        text: "I was in Home Depot. This dad's pushing the boy in the cart and the boy leans over to grab something and the dad says, no touching. I wanted to interrupt and say, excuse me, sir. That's how boys are. They like to touch things. They learn by engaging with objects. Boys touch. Boys move. Boys are more violent. Boys enjoy interacting with their environment in a way that girls don't.",
      },
      {
        type: "paragraph",
        text: "Here's a tip for parents, especially dads. Show up for lunch at elementary school. Surprise your kid. They love that. When they get to middle and high school, those days are over. You're not allowed to eat lunch with them anymore. But do it while they're young and they actually get excited when they see you.",
      },
      {
        type: "paragraph",
        text: "I used to show up at my daughter's school, at my son's school, and I'd be waiting to surprise them. I'd watch the kids line up like little soldiers. They're definitely in school — there's a demand that you wait in line well. These kids would be waiting in line and one day I saw these two boys turn around and they engaged in what I can only describe as a slow-motion karate match dance thing. They literally went like this, at this speed. And then the boy would block at this speed and then come back. They were having fun. They weren't in any way trying to hurt each other.",
      },
      {
        type: "paragraph",
        text: "I said to myself, I bet you they're going to get told to stop. Sure enough, as soon as the teacher saw the boys doing that, she said, stop. Boys need to be able to do that. The best gift we could give our kids is roughhousing with them and allowing them to figure out what is okay to do activity-wise and what is not okay.",
      },
      {
        type: "paragraph",
        text: "And I said this before — girls like to roughhouse as much as boys. Dads, please throw your daughters around too, just like you throw your sons around. They love it. It'll help everybody.",
      },
    ],
  },
  {
    slug: "nice-only-when-bags-are-packed",
    youtubeId: "-Y_fu3keLSg",
    title: "Only Nice When My Bags Are Packed",
    date: "2026-03",
    summary:
      "A couple who only comes to therapy in crisis. Her question to me: why is he only nice to me when my bags are packed and at the door?",
    tags: ["Marriage", "Relationships", "Therapy"],
    transcript: [
      {
        type: "paragraph",
        text: "Couples therapy video 2,687. I treated a couple on and off for years. They'd only show up in crisis. And I promise you, today they're not in crisis, because I haven't heard from them. But they'll show up again. They only want to put fires out. They don't want to deal with the foundation, with the beginning of the problem.",
      },
      {
        type: "paragraph",
        text: "At one point this woman said to me, and I quote, why is he only nice to me when my bags are packed and at the door? I said, that's a great sentence. Did you make that up? She said, no, why? I said, I've never heard it put that way.",
      },
      {
        type: "quote",
        text: "Why is he only nice to me when my bags are packed and at the door?",
      },
      {
        type: "paragraph",
        text: "The answer is: lady, because you have trained him to not treat you right. And then you in turn train him that if you don't get your act together, husband, I'm out of here. Then he steps up his game. And there's a dance, and it's a horrible dance.",
      },
      {
        type: "paragraph",
        text: "So, if your husband or your wife only treats you right when you threaten to leave, I'd say you need a third party to help you fix that.",
      },
    ],
  },
  {
    slug: "depressed-people-live-in-the-past",
    youtubeId: "wyb6CPxcLQs",
    title: "Depressed People Live in the Past",
    date: "2026-03",
    summary:
      "Depression and anxiety are the top two mental health concerns in America. There's a cliché about them that I actually find useful.",
    tags: ["Anxiety", "Therapy", "Self-Growth"],
    transcript: [
      {
        type: "paragraph",
        text: "I'm a generalist, and I'm proud of being a generalist. A lot of people don't want to be a generalist, but I am. I treat all kinds of people. The two number one groups that show up in my office are depressed people and anxious people. Why? Because that's the number one and two mental health concerns in America today. Sadness and anxiety. Depression and fear.",
      },
      {
        type: "paragraph",
        text: "There's a cliché that I wanted to share with you because it may have some resonance, may have some meaning — which is: depressed people tend to live in the past. Anxious people tend to live in the future. That's helpful to me.",
      },
      {
        type: "quote",
        text: "That second split second between those two claps — the moment — that's where life exists.",
      },
      {
        type: "paragraph",
        text: "So my goal with therapy is to get people to live right now, in the moment. It's hard to be depressed in the moment. It's hard to be anxious in the moment. So try that. Again, easier said than done. That's why we therapists sometimes need to charge people.",
      },
    ],
  },
  {
    slug: "individual-therapy-hazardous-to-marriage",
    youtubeId: "9XojsKxah8g",
    title: "Individual Therapy Can Be Hazardous to Your Marriage",
    date: "2025",
    summary:
      "The sign I should have over my office door. When one partner grows and the other refuses to move, the marriage is in jeopardy.",
    tags: ["Marriage", "Therapy", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "I don't do much couples therapy anymore. I don't enjoy it. I do a lot of individual therapy, and I should have a sign over my office door. I don't, but I should. The sign should say: caution — individual therapy may be hazardous to your marriage.",
      },
      {
        type: "paragraph",
        text: "Why? Because if I'm going to change and my partner's not going to change, we're going to grow more apart, not closer. If I'm going to change and my partner's going to change and we change in the same direction, we're going to be a much better couple. Sometimes I change and go that way, and she changes and goes that way, and we drift apart. That's not the end of the world if we want to reconnect.",
      },
      {
        type: "quote",
        text: "But when one person changes and is in therapy and working on their own stuff, and the other person sits there and refuses to move an inch, the marriage is in jeopardy.",
      },
    ],
  },
  {
    slug: "silent-household-angry-household",
    youtubeId: "EBQVhT_5x_k",
    title: "Silent Household = Angry Household",
    date: "2025",
    summary:
      "A couple came in after a week of silence and called it no big deal. I said bullshit. Silence between two people living together is venom.",
    tags: ["Marriage", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "Couples therapy video, 591. I was seeing this couple weekly. They came in on a Tuesday. They had not spoken one word to each other since the previous Tuesday night, when they had an argument after one of our sessions.",
      },
      {
        type: "paragraph",
        text: "I said, what has it been like for you two to be in the same house and not talking? And they both said, eh, you know, no big deal. I said, bullshit.",
      },
      {
        type: "quote",
        text: "You show me a silent household, I'll show you an angry household.",
      },
      {
        type: "paragraph",
        text: "When two people live in angry silence, the silence equals venom, yuckiness, anger.",
      },
    ],
  },
  {
    slug: "couples-it-is-healthy-to-fight",
    youtubeId: "nTQMCqzYAWE",
    title: "Couples, It Is Healthy to Fight",
    date: "2025",
    summary:
      "The couples who never fight? I don't trust them. Fighting fair is fine. Having the same fight on repeat — that's as dysfunctional as it gets.",
    tags: ["Marriage", "Relationships", "Humor"],
    transcript: [
      {
        type: "paragraph",
        text: "Hello. This is couples therapy video number 1,627. Couples fight. If they don't fight, I don't get it. I don't understand those couples that never fight.",
      },
      {
        type: "paragraph",
        text: "What that tells me — those are two people devoted to never changing. Never changing a thing in their relationship, never changing a thing in themselves. It's good they don't try to change their partner, but I see relationships and life as more entropy, more disorder. You want to grow, you want to change, you want a little bit of turmoil, a little bit of chaos. Two people that never fight literally have an agreement: we're not going to ever push each other on anything.",
      },
      {
        type: "paragraph",
        text: "For the other 99% of couples that have fights, I say bravo. Good for you. Fights are okay. A: fight fair. B: resolve the fight. I don't like couples that have the same fight over and over and over and over and over again. They end up in my office and then they sit in my office and what do they do? They have the same fight over and over and over again. They refuse to change. That's as dysfunctional as it gets.",
      },
      {
        type: "quote",
        text: "Couples, please have fights. Couples, please don't have the same fight over and over again.",
      },
    ],
  },
  {
    slug: "my-favorite-clients",
    youtubeId: "CwGzZ5PDD2Q",
    title: "My Favorite Clients",
    date: "2025",
    summary:
      "The clients who start out saying my family's great, I'm the mess. Then over time realize the family's the mess and decide they're done fixing it.",
    tags: ["Therapy", "Self-Growth", "Boundaries"],
    transcript: [
      {
        type: "paragraph",
        text: "At least five times a year, one of my clients looks at me and says, am I your favorite client? And I usually say, yes. I usually make a joke like, you're my favorite 2 p.m. on a Tuesday client.",
      },
      {
        type: "paragraph",
        text: "My real favorite clients, don't tell anybody, are the ones that come in and say, I'm a mess, my family's wonderful, everybody's doing great, I'm doing terribly. I work with them for a little bit and they come in one day and they say, you know, I'm getting a little better. My family's still wonderful, but I'm starting to see some tension — like my mom blah blah blah or my sister blah blah blah.",
      },
      {
        type: "paragraph",
        text: "They come back again a few sessions later and say, I'm doing really well, and I'm really noticing in my family we're not nice to each other, we gossip behind each other's backs, we manipulate, we promise and don't deliver. My family's still, you know, pretty okay. They come back again, they say, I'm doing really well. And you know what? My family's kind of falling apart. Dad's not talking to my brother. My mom was mad at my sister.",
      },
      {
        type: "paragraph",
        text: "And then one day they come in and say, you know what? I think my family's kind of a mess. I'm doing better and I'm seeing a lot of dysfunction. And then one day they come in and they say, my family's kind of a mess, I'm doing better, and I'm done. I'm not taking care of them anymore. I'm getting out of the helping-my-family business. I'm just going to focus on me and getting my life together.",
      },
      {
        type: "quote",
        text: "Those are my favorites.",
      },
    ],
  },
  {
    slug: "prepare-child-for-the-path",
    youtubeId: "5H_2TiqtIiM",
    title: "Prepare the Child for the Path, Not the Path for the Child",
    date: "2025",
    summary:
      "Watch curling at the Olympics. Parents chasing after the stone with brushes to smooth the ice. That's what modern parents do with their kids.",
    tags: ["Parenting", "Humor"],
    transcript: [
      {
        type: "quote",
        text: "Prepare your child for the path. Do not prepare the path for your child.",
      },
      {
        type: "paragraph",
        text: "That's what parents do today. They try and smooth things over, make the path easy for children to navigate. We need to have our kids be able to overcome obstacles and be resilient. We need to launch them and let them figure out their own way. That's not what we do today.",
      },
      {
        type: "paragraph",
        text: "Watching the Olympics. They had curling. Big curling fan. I have no idea what the rules are, but they let this gentle rock go and they launch it into the world. And instead of just watching it, these parents come up with the brushes and they try and smooth the path for the curling stone.",
      },
      {
        type: "paragraph",
        text: "That's what we do with our kids. We need to let them go and stop brushing the road for them. This has been an Olympic moment.",
      },
    ],
  },
  {
    slug: "dont-buy-your-kids-girl-scout-cookies",
    youtubeId: "Pa3a514hP4M",
    title: "Don't Over-Function as a Parent",
    date: "2025",
    summary:
      "A friend sent me the Girl Scout cookie order form for his daughter. I said — no. Have her call me. That's the whole point of Girl Scout cookies.",
    tags: ["Parenting", "Boundaries"],
    transcript: [
      {
        type: "paragraph",
        text: "A friend of mine who should know better just out of the clear blue sent me a link for Girl Scout cookies. Now, I know he's got a six-year-old girl, seven-year-old girl. I said, why are you doing this? He said, what do you mean? I said, she needs to learn how to sell. That's the purpose of Girl Scout cookies. Have her call me.",
      },
      {
        type: "paragraph",
        text: "Kid called me. She told me about the different cookies. She learned something about how to be present for an adult and look them in the eye and have a real conversation.",
      },
      {
        type: "paragraph",
        text: "Anybody comes to work with a checklist for, you know, you buy Girl Scout cookies or a form for you to buy Boy Scout popcorn — not only are they over-functioning as a parent, but they're hurting their kids by cheating them out of the opportunity to learn how to look an adult in the eye and say, hey, would you like to buy something? That's a pretty good skill to learn when you're young.",
      },
    ],
  },
  {
    slug: "ill-be-posting-again",
    youtubeId: "z1Brs6wKPZ8",
    title: "I'll Be Posting Again",
    date: "2025",
    summary:
      "A quick update. Back to posting videos. Not as frequently — maybe once a week.",
    tags: ["Humor"],
    transcript: [
      {
        type: "paragraph",
        text: "Hello. I'm back. I'm going to be posting videos again. Not as frequently. Maybe once a week would be a good goal for me.",
      },
    ],
  },
  {
    slug: "slowness-passivity-my-secret-combo",
    youtubeId: "ll6iif2_dps",
    title: "Slowness and Passivity — My Secret Combo",
    date: "2025",
    summary:
      "Captain of my high school team. Record: one win a year, two years running. I had a particular gift.",
    tags: ["Humor"],
    transcript: [
      {
        type: "paragraph",
        text: "In honor of football season, I'd like to share with you that I was captain of my team in high school. Believe it or not, we won one game as juniors and one game as seniors. We were not as good as our record indicated. I combined slowness and passivity and being timid into one package.",
      },
      {
        type: "paragraph",
        text: "Anyhow — the key to getting your children to enjoy watching football with you is third downs. You have to pause the TV and explain to the kid why this is important. Once they get third downs, they will start wanting to watch football more. Trust me.",
      },
    ],
  },
  {
    slug: "therapists-not-living-what-they-teach",
    youtubeId: "ZjVoaBcnGhQ",
    title: "Some Therapists Aren't Living What They Teach",
    date: "2025",
    summary:
      "A 30,000-person list-serve of Atlanta therapists. One asked: is it okay that I don't return calls? The chorus said yes, take care of yourself. I wrote back: bullshit.",
    tags: ["Therapy", "Boundaries"],
    transcript: [
      {
        type: "paragraph",
        text: "I'm not a big fan of a lot of therapists. Some therapists are not very healthy. Some therapists don't know how to live. Some therapists don't have a good life, and they're coaching other people to have a good life.",
      },
      {
        type: "paragraph",
        text: "Where I live in Atlanta, there's a 30,000-person listserv of therapists. And one therapist wrote, hey, I'm having trouble returning people's calls. I get a lot of calls. I don't call everybody back. Is that okay? And a bunch of therapists wrote back, yes, you need to take care of yourself.",
      },
      {
        type: "paragraph",
        text: "I wrote back: bullshit. If someone has the desperation, the need to call you and ask for a therapy session and you can't see them, you owe it to them to call them back. Not within a week, not within two days — that day. Call them back. Say, hey, I'm full, I can't help you, but my buddy here has openings. Or, hey, I can't help you, but where you live in Gwinnett, there's this kind of therapist.",
      },
      {
        type: "quote",
        text: "If you don't have the ability to call people back and you're a therapist coaching people how to lead a life of balance, you're not doing your job.",
      },
    ],
  },
  {
    slug: "best-gift-you-can-give-your-kids",
    youtubeId: "Ow3PNTphTx4",
    title: "The Best Gift You Can Give Your Kids",
    date: "2025",
    summary:
      "A kid in the back seat watching his friend's parents slide together on a bench seat. He'd never seen affection between adults before. He thought a fight was starting.",
    tags: ["Parenting", "Marriage", "Relationships"],
    transcript: [
      {
        type: "quote",
        text: "You want to give your kids a nice gift? Show affection to your spouse.",
      },
      {
        type: "paragraph",
        text: "Let them grow up seeing two parents who have no problems hugging each other, kissing each other, showing each other affection.",
      },
      {
        type: "paragraph",
        text: "I had a client once. I love this story. He's going with his best friend to camp, and the deal was his best friend's parents were going to take the two of them to camp, and then his parents were going to pick him up and bring him back.",
      },
      {
        type: "paragraph",
        text: "They're going to camp. They're all excited. They're in the back seat. Mom and dad are in the front seat. Bench front seat. You guys know what a bench seat is? It's not two individual seats. It's one long seat. These kids in the back, they're messing around. All of a sudden, this kid's looking forward out of the windshield and he sees the mother slide over to the father. And this patient of mine doesn't know what the hell's happening. He thinks it's about to get violent. His friend's talking to him. He's not listening.",
      },
      {
        type: "paragraph",
        text: "The mother slides over to the father. The father's driving. The mother reaches up and strokes the dad's hair. And this kid's never seen that in his life. He's watching this. Then he watches the dad put his arm around his wife. He's watching the wife lean into the dad. This kid has never seen this before. He thought a fight was about to break out. He was amazed that he saw two parents laughing and touching and being warm and fuzzy with each other.",
      },
      {
        type: "paragraph",
        text: "I highly recommend that.",
      },
    ],
  },
  {
    slug: "before-you-apologize-learn-this",
    youtubeId: "g2rr68A_Yhg",
    title: "Before You Apologize, Learn This First",
    date: "2025",
    summary:
      "There's a technology to apologizing. Three steps. Most people skip the first one, which is the hardest.",
    tags: ["Relationships", "Self-Growth", "Marriage"],
    transcript: [
      {
        type: "paragraph",
        text: "What did I not learn when I was a kid? One of the things I did not learn is how to apologize. In order to apologize, the first thing I needed to learn was to admit when I was wrong.",
      },
      {
        type: "paragraph",
        text: "So I didn't learn that when I was a kid. It takes intelligence and health and honesty and just willingness to look at my own darkness, my own bad moves, to say, hey, I'm sorry.",
      },
      {
        type: "heading",
        text: "The three steps",
      },
      {
        type: "paragraph",
        text: "There's a technology to apologizing. First, I have to realize I have to apologize, and then I need to actually apologize. Step one: admit I made a mistake, acknowledge my role. Step two: once I admit responsibility, express regret. Say I'm sorry. Not a weak I'm sorry. A legit I'm sorry. I regret what I did. Step three: commit to being a better person.",
      },
      {
        type: "quote",
        text: "I'm sorry. I made a mistake. It was my fault. And I'm going to do better next time. And then you actually have to do better.",
      },
      {
        type: "paragraph",
        text: "Relationships tend to grow from that. They don't end because you made a mistake.",
      },
    ],
  },
  {
    slug: "humblebrags-disguised-as-complaints",
    youtubeId: "Rogx7Rz21gw",
    title: "Humblebrags Disguised as Complaints",
    date: "2025",
    summary:
      "Sometimes complaining is just bragging. Oh, I'm so busy. Oh, this technology is so complicated. Keep your eyes open for this.",
    tags: ["Humor", "Self-Growth"],
    transcript: [
      {
        type: "paragraph",
        text: "Sometimes complaining is actually bragging. For example, someone asked me how I'm doing. Oh, I'm so busy. Oh, I'm just overflowing with patients. I had to work eight hours yesterday. Am I complaining, or am I bragging?",
      },
      {
        type: "paragraph",
        text: "One of my smart patients taught me this. In his world — technology — people will sit around and complain about how the technology is so complicated. He goes, that's they're just bragging that they're able to master this technology.",
      },
      {
        type: "quote",
        text: "Keep your eyes and ears open to this. Sometimes when people are complaining, they're just trying to show you how important they are.",
      },
    ],
  },
  {
    slug: "loyalty-bind-dont-put-kids-between-rock-and-hard-place",
    youtubeId: "ITKXW9XKMpE",
    title: "Loyalty Bind — Don't Put Kids Between a Rock and a Hard Place",
    date: "2025",
    summary:
      "A kid comes home from dad's with a story about a kind stepmom. Mom frowns. Now the kid knows not to tell mom good things about stepmom. That's a loyalty bind.",
    tags: ["Parenting", "Boundaries", "Emotions"],
    transcript: [
      {
        type: "paragraph",
        text: "What's a loyalty bind? A loyalty bind is when a kid is not allowed to have his or her full expression of feelings.",
      },
      {
        type: "paragraph",
        text: "For example: mom and dad get divorced. My mom hates my dad. My dad remarries — the wicked stepmother. I visit with dad. I come home. Mom says, how was your weekend? I say, it was great. What'd you do? Did this, did this, did this. And then I tell my mom a story about my new stepmom being nice to me. My mom frowns. I can tell my mom doesn't want to hear that.",
      },
      {
        type: "paragraph",
        text: "So I don't tell my mom stories about my stepmom being nice to me. I'm in a loyalty bind. If I like my stepmom, my mom feels distraught, like I'm abandoning her, like I'm not being a good son.",
      },
      {
        type: "quote",
        text: "Don't do that to your kids. Give your kids permission to have the full range of feelings, even if you don't like them.",
      },
    ],
  },
  {
    slug: "trying-to-pray-is-praying",
    youtubeId: "y8FpCX_i9qY",
    title: "Trying to Pray Is Praying",
    date: "2025",
    summary:
      "How do I be a better father? Point your head at your kids and start trying. That's it. The doing is the how.",
    tags: ["Self-Growth", "Parenting"],
    transcript: [
      {
        type: "paragraph",
        text: "How do I be a better father? You point your head at your kids and you start trying. How do I be a better mother? Point your head at the kids and start trying to be a better mother.",
      },
      {
        type: "paragraph",
        text: "Something I get asked a lot is about prayer and meditation. How do I do it? The answer is: do it.",
      },
      {
        type: "quote",
        text: "Trying to pray is praying. Trying to meditate is meditating. Trying to be there for your partner is being there for your partner.",
      },
      {
        type: "paragraph",
        text: "Don't overthink it. Just put it into action.",
      },
    ],
  },
  {
    slug: "familiar-pain",
    youtubeId: "4HL53nmQlt4",
    title: "Familiar Pain",
    date: "2025",
    summary:
      "Something I heard 33 years ago that I don't hear a lot today. People from dysfunctional families seek out familiar pain.",
    tags: ["Relationships", "Self-Growth", "Emotions"],
    transcript: [
      {
        type: "paragraph",
        text: "I heard this 33 years ago. You don't hear it a lot.",
      },
      {
        type: "quote",
        text: "People from dysfunctional families seek out familiar pain.",
      },
      {
        type: "paragraph",
        text: "If you grew up with a certain kind of trauma, or a way to do relationships, or a way to not get your needs met, you tend to marry people who continue that. You tend to marry people who continue to not meet your needs. You tend to surround yourself with friends who treat you the same way.",
      },
      {
        type: "paragraph",
        text: "People from dysfunctional families seek out familiar pain.",
      },
    ],
  },
  {
    slug: "write-thank-you-notes",
    youtubeId: "PQM3KKX8nwc",
    title: "Don't Be a Lazy Parent — Teach Thank You Notes",
    date: "2025",
    summary:
      "How can the same parent spend five and a half hours planning a lunch for friends and still be lazy as a parent? They don't put their energy into what matters.",
    tags: ["Parenting"],
    transcript: [
      {
        type: "paragraph",
        text: "How can the same parent spend five and a half hours planning a lunch for her friends and their children but still be a lazy parent? They don't put their energy into what is important.",
      },
      {
        type: "paragraph",
        text: "We just gave a whole bunch of graduation gifts and one of the moms said, oh yeah, thank you, we got it. And my wife kind of paused and then she said, he's going to send you a thank-you note. He's only written like three his whole life.",
      },
      {
        type: "paragraph",
        text: "That shouldn't be a skill you learn at 18. Easiest thing in the world to do is to have your kid text thank you — or you just say thank you. Teach your kid to write handwritten thank-you notes. It's going to help them forever.",
      },
      {
        type: "quote",
        text: "Don't be lazy. Make them learn how to write thank-you notes. It's very simple.",
      },
    ],
  },
  {
    slug: "stop-taking-crumbs",
    youtubeId: "GBIPLCdQpZ4",
    title: "Don't Be a Crumb-Taker",
    date: "2025",
    summary:
      "A woman who said she had a sign tattooed on her forehead — I'll take whatever crumbs you give me. She did the work. Now she gets full meals.",
    tags: ["Relationships", "Self-Growth", "Boundaries"],
    transcript: [
      {
        type: "paragraph",
        text: "This woman I knew could not have healthy relationships. And I heard her say,",
      },
      {
        type: "quote",
        text: "It's like I have a sign tattooed on my head that says, I will take whatever crumbs you send me.",
      },
      {
        type: "paragraph",
        text: "She worked on it and she worked on it. Now she has a real-life relationship where she gets full meals, not just crumbs. Takes work.",
      },
    ],
  },
  {
    slug: "buy-your-partners-chairs",
    youtubeId: "wdeCk001jw4",
    title: "Buy Your Partner's Chairs",
    date: "2025",
    summary:
      "A 1996 John Travolta movie. He secretly buys all her ugly chairs because he wants to make her happy. Do you do that for your partner?",
    tags: ["Marriage", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "1996, a movie comes out. I'm going to spoil it if you haven't seen it. Name of the movie is Phenomenon starring John Travolta. He's in love with Kyra Sedgwick. Kyra doesn't want to give him the time of day.",
      },
      {
        type: "paragraph",
        text: "Kyra builds these ugly chairs and she tries to sell them. He, unbeknownst to her, was buying her chairs. They finally go out. She agrees to go out with him and they end up having a relationship. And she goes over to his house and she looks in his garage and she sees dozens of her chairs that he's been buying. She gets furious at him. How could you buy those chairs? That's so dishonest. He goes, why am I being dishonest? I want to make you happy.",
      },
      {
        type: "quote",
        text: "Do you buy your partner's chairs? Do you do something just for the sheer act of giving them pleasure?",
      },
      {
        type: "paragraph",
        text: "It's okay to do that. It's necessary to do that. You do that, you stay out of my couples office.",
      },
    ],
  },
  {
    slug: "what-i-wish-id-been-taught-as-a-kid",
    youtubeId: "r-2FsyI7i6k",
    title: "What I Wish I'd Been Taught as a Kid",
    date: "2025",
    summary:
      "Love songs talk about falling in love. They don't teach you how to recognize a bad relationship, or how to get out of one.",
    tags: ["Relationships", "Self-Growth"],
    transcript: [
      {
        type: "paragraph",
        text: "Ask yourself this question: what did you not learn as a kid that you wish you had learned? I love that question.",
      },
      {
        type: "paragraph",
        text: "When I was asked that question, one of my first responses was: I wish I learned how to get out of bad relationships. The flip side of that is, I wish I learned how to recognize the difference between a good relationship and a bad relationship.",
      },
      {
        type: "paragraph",
        text: "When you're a kid, they don't teach you that. Love songs talk about falling in love. They don't talk to you about how to break up.",
      },
      {
        type: "paragraph",
        text: "There's a difference today when they talk about toxic relationships. I'm not talking about that. In order to be in a toxic relationship, you have to be pretty dysfunctional to stay in one. But just normal day-to-day living, there are good relationships and there are bad ones, and you don't need to be in a bad one.",
      },
      {
        type: "quote",
        text: "I wish somebody taught me what is a bad relationship. And how you exit out of a bad relationship.",
      },
    ],
  },
  {
    slug: "intensity-is-not-intimacy",
    youtubeId: "jaleeXmD2BQ",
    title: "Intensity Is Not Intimacy",
    date: "2025",
    summary:
      "A guy crouched behind a car in the driveway while his wife fires bullets from the third floor. He thought: she must love me. That's not love.",
    tags: ["Marriage", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "What is love? I'll tell you what love is not.",
      },
      {
        type: "paragraph",
        text: "I had a friend — kind of crazy. Married a woman, kind of crazy. Believe it or not, their relationship was kind of crazy.",
      },
      {
        type: "paragraph",
        text: "He tells a story. She's in their house that they live together in. She's on the third floor. He's crouched down behind their car in the driveway. She's firing bullets at him and he's crouched down behind the car, and his bullets are whizzing over his head. And he looks at her and she's firing at him and he says, god, that woman must love me. God, she's crazy about me. I'm just crazy about her. I can't wait for her to run out of bullets and we're going to fix this fight. We're going to live happily ever after.",
      },
      {
        type: "quote",
        text: "That's not love. That's mistaking intensity for intimacy.",
      },
      {
        type: "paragraph",
        text: "You want a good marriage? Sometimes you've got to sacrifice some of the roller-coaster ride for a little stability. Stability is good.",
      },
    ],
  },
  {
    slug: "a-fancy-kitchen-wont-fix-a-broken-marriage",
    youtubeId: "Vr8aHjw1cvA",
    title: "A Fancy Kitchen Won't Fix a Broken Marriage",
    date: "2025",
    summary:
      "A friend who does high-end kitchens calls his old clients when business is slow. Most of them answer, we don't live there anymore — we got divorced.",
    tags: ["Marriage", "Humor", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "Here's a hilarious story about divorce. I had a friend that used to do high-end kitchens. Today you pay him 80, 100, 120 grand and he'd give you a brand-new kitchen. Tear everything out, rebuild everything, beautiful new kitchen. Very popular. People in my neighborhood love to get new kitchens.",
      },
      {
        type: "paragraph",
        text: "What he used to do when things were slow is he'd go in his Rolodex. If you don't know what a Rolodex is, look it up. And he would call someone up and say, hey, remember me? I did your kitchen. I'm in your neighborhood. Perhaps you need a bathroom done. You want me to come over and give you a quote?",
      },
      {
        type: "paragraph",
        text: "I said, how did that work? He said, it would work rarely. I go, what? What do you mean? He goes, usually I'd call them up and they would say, oh, we don't live there anymore. We got divorced five years ago or eight years ago. Really?",
      },
      {
        type: "paragraph",
        text: "Think about that. You have a shitty marriage and instead of fixing your marriage, you renovate the kitchen.",
      },
      {
        type: "quote",
        text: "A new kitchen looks good. But it's not going to fix a broken marriage. The best dishwasher in the world is not going to fix a lack of communication skills. A Sub-Zero refrigerator is not going to warm up two cold hearts.",
      },
    ],
  },
  {
    slug: "advice-i-gave-a-hollywood-director",
    youtubeId: "h54qMhtgL5c",
    title: "The Advice I Gave a Hollywood Director",
    date: "2025",
    summary:
      "A famous director yelled at his AD. Didn't want to, but couldn't stop. I told him — have a drink the night before and just say you want to make this better.",
    tags: ["Relationships", "Therapy"],
    transcript: [
      {
        type: "paragraph",
        text: "I treated a famous Hollywood director once and he said to me, I'm very concerned. I got this text. I said, what's up? He said, so, I'm going to LA. We're starting filming on Friday. I got a text from my assistant director. He said, let's meet for a drink Thursday night before you start yelling at me on Friday.",
      },
      {
        type: "paragraph",
        text: "I said, do you yell at him a lot? He said, I do. I said, why? He goes, because the guy has a lot of potential. I really think he could do something and I want him to be coached up. I said, are you okay yelling at him? He said, no, I'm not. I said, all right, well, why don't you have a drink with him the night before and talk to him?",
      },
      {
        type: "paragraph",
        text: "And the director said, what should I say? I said, tell him that you don't want to yell at him. And the director takes out a pen and paper. He goes, okay, I'm going to tell him I don't want to yell at him. I said, why do you yell at him? He goes, because I think he has a lot of potential. I said, tell him you think he has a lot of potential. He goes, then what should I say? I said, tell him you want to communicate better with him so you don't have to yell.",
      },
      {
        type: "paragraph",
        text: "He goes, then what? I said, no, you know what to say. I go, the most important thing is you show up and you look at the guy and say, I want to make this better.",
      },
      {
        type: "quote",
        text: "Once you look at him and say, I want to make this better, you've won. Anything comes out of your mouth after that is going to work.",
      },
      {
        type: "paragraph",
        text: "Point of the story. It's about showing up and pointing your head in the right direction. That tends to solve most problems.",
      },
    ],
  },
  {
    slug: "dont-be-a-guest-in-your-own-life",
    youtubeId: "auKMDm_DqVY",
    title: "Don't Be a Guest in Your Own Life",
    date: "2025",
    summary:
      "Bob Earl spent 30 years in Hollywood and never enjoyed it. His friend showed up for six hours and had a better time than Bob ever did.",
    tags: ["Self-Growth", "Humor"],
    transcript: [
      {
        type: "paragraph",
        text: "I'm a big fan of Bob Earl. He's passed away, but he was a very big AA speaker in the 80s. He got famous because he talked about childhood trauma and being wounded when he was young and how people in AA need to deal with those wounds.",
      },
      {
        type: "paragraph",
        text: "Bob had a career in Hollywood. He tells a story where a friend of his — a normal friend, a healthy friend — came to visit him on set. Bob said, when you visit, look what I do. Look where I look. Don't talk to anybody. Don't make any sounds. Just try and be invisible.",
      },
      {
        type: "paragraph",
        text: "This friend, again, is healthy. He's sitting there watching. They film a car chase. Director says, action. Boom, boom, boom. Explosions. This friend turns to Bob Earl. He goes, that was amazing, how did they do that? Bob's like, I don't know. The guy walks up to the director. Bob's like, no, don't bother the director. This friend who's healthy walks up to the director and says, excuse me, how do you do that? Director says, oh, well, we have this trip wire here. Once the car goes there, boom, this explosion, and this camera is... and he starts explaining everything about how to film a car chase.",
      },
      {
        type: "quote",
        text: "Bob Earl said: I learned more in the three-minute discussion between my friend and the director about how to film a car chase than I had in my 20 years as a Hollywood writer.",
      },
      {
        type: "paragraph",
        text: "Then they go to lunch. They take a break. They go to the commissary and this guy sees a table filled with Alan Alda and all the stars from MASH. And he goes, oh, it's my favorite show. And Bob Earl says, do not bother them, no one talks to them. This guy walks up, says, oh, I love you guys. And next thing you know, he's sitting there having lunch with the people from MASH.",
      },
      {
        type: "paragraph",
        text: "Bob Earl's horrified. He stands away. Lunch is over. They go back. Same thing over and over again. Then the conclusion of the story — Bob Earl says, that guy, my friend, had more enjoyment out of my career in six hours on set than I had had for 30 years in Hollywood.",
      },
      {
        type: "quote",
        text: "Don't be like that. Enjoy what you got. Ask questions. Be comfortable in your own skin.",
      },
    ],
  },
  {
    slug: "steve-jobs-and-his-kids",
    youtubeId: "isxN0N8DJ-Y",
    title: "The Heartbreaking Thing Steve Jobs Said",
    date: "2025",
    summary:
      "Walter Isaacson asked Jobs why he was giving him total access to write the biography. His answer is the saddest thing I've ever heard.",
    tags: ["Parenting", "Grief"],
    transcript: [
      {
        type: "paragraph",
        text: "Can I look at a billionaire and feel really sorry for him? Yes, I can.",
      },
      {
        type: "paragraph",
        text: "Steve Jobs was dying. Pancreatic cancer. He hired Walter Isaacson to write his biography. Walter Isaacson trailed him around for months and months, every minute of every day.",
      },
      {
        type: "paragraph",
        text: "At one point, they had some downtime waiting for something to happen. Walter Isaacson said to Steve Jobs, let me ask you a question. I've been following you for a while now. It's very clear to me you are intensely private. It's very clear to me you hate giving interviews. Why are you giving me access? Why are you letting me in on everything?",
      },
      {
        type: "paragraph",
        text: "And Steve Jobs said the saddest thing I've ever heard in my life.",
      },
      {
        type: "quote",
        text: "Steve Jobs said to Walter Isaacson: I'm doing it for my children. I want them to get to know me.",
      },
      {
        type: "paragraph",
        text: "Isn't that sad? All Steve Jobs needed to do was spend time with his kids. Let them get to know him. But no — he'd rather have somebody who's a great writer write a book about him than spend time with his kids.",
      },
    ],
  },
  {
    slug: "worst-kind-of-boss-and-parent",
    youtubeId: "JMvlZsc8rZ8",
    title: "The Worst Kind of Boss (and Parent)",
    date: "2025",
    summary:
      "A study of bosses found people would rather work for a bad boss than an inconsistent one. At least with a bad boss, you know what you're getting.",
    tags: ["Parenting", "Boundaries"],
    transcript: [
      {
        type: "paragraph",
        text: "Let me tell you the worst kind of boss you could have. They did a study once. They had underlings rank their bosses. They put the bosses into three categories. Bosses that were good, bosses that were bad, bosses that were inconsistent — bosses that they couldn't put in the category of good or bad.",
      },
      {
        type: "paragraph",
        text: "Which type of those three bosses did most people want to work for? The good boss. Obviously, that was the first choice. What was number two? Was it the bad boss? Was it the inconsistent boss? Number two was the bad boss. I'd rather work for a bad boss because at least I know what I'm going to get.",
      },
      {
        type: "paragraph",
        text: "Third, last place — the inconsistent boss. Why? Because you never knew what you were going to get. Without predictability, your life kind of stunk.",
      },
      {
        type: "quote",
        text: "Moral of the story: don't be that third kind of parent. Be consistent.",
      },
      {
        type: "paragraph",
        text: "Let your kids know when you're there, what the rules are, how you are going to treat them. No matter what kind of day you're having, be consistent with the kids as best you can.",
      },
    ],
  },
  {
    slug: "europe-but-not-her-grandchild",
    youtubeId: "BpFdNturLFw",
    title: "Europe, but Not Her Grandchild",
    date: "2025",
    summary:
      "Bob Earl's mom had an excuse every time he invited her to meet her new grandchild. Then she called to say she was going to Europe with the girls from church.",
    tags: ["Grief", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "Bob Earl had a kid late in life. Bob Earl called his mother up and said, mom, come meet your new granddaughter. Mom said, I can't wait to come. I can't wait to meet her. But my hip's bothering me. Bob said, okay, I'll call you in a couple weeks.",
      },
      {
        type: "paragraph",
        text: "Couple weeks later, Bob said, how's your hip? Hip's better. Why don't you come meet your granddaughter? Mother says, I really want to. I can't wait to meet her. But I'm very busy at church right now. Give me a little bit of time.",
      },
      {
        type: "paragraph",
        text: "Bob waits a month. Calls her up. Mom, come see her. Oh, Bob, I can't wait to meet her. Just the idea of getting on a plane and flying two hours to see you, and then we have to drive an hour — it just feels like too much for me. Three months goes by. Six months goes by. Every time Bob would say, mom, you want to meet your granddaughter, the mother would have another excuse.",
      },
      {
        type: "paragraph",
        text: "Then one day, the mother calls up and says, oh, Bobby, Bobby, I'm so excited. Bob's like, what's up, mom? Mother says, me and the girls from church, we just signed up. We're going to Europe. We're going to see seven cities in 10 days. We're so excited.",
      },
      {
        type: "paragraph",
        text: "Bob Earl said, that's great, mom. And he hung up. And that's when he realized his mother really doesn't want to see her new granddaughter.",
      },
      {
        type: "quote",
        text: "The moral of the story: look at what people do, not what they say.",
      },
    ],
  },
  {
    slug: "all-ponds-are-perfect",
    youtubeId: "zp57h4yj4DU",
    title: "All Ponds Are Perfect",
    date: "2025",
    summary:
      "A client with explosive anger finally got it. A pebble makes ripples. A boulder makes a splash. Ponds always respond perfectly. We don't — because we bring our history into it.",
    tags: ["Emotions", "Self-Growth", "Therapy"],
    transcript: [
      {
        type: "paragraph",
        text: "One of the reasons I love my job is clients teach me a lot, and they pay me for it.",
      },
      {
        type: "paragraph",
        text: "I had this guy. We're dealing with his anger issues. He was exploding. Exploding at work, exploding at home, exploding with his kids. Ton of built-up childhood trauma. He wasn't able to release it. He was a mess.",
      },
      {
        type: "paragraph",
        text: "He shows up one day in my office. He said, you wouldn't believe it. We had a training at work. I said, what happened? He said, it worked. This consultant said, all ponds are perfect. I said, I don't know what that means. He said, if you walk up to a pond and you throw a pebble in the pond, the pond's going to have little ripples. You go up to a pond, you take a big rock, you throw a big rock, it's going to be a huge splash. Never in the history of ponds has someone thrown a little pebble and had a huge splash. Never in the history of ponds has somebody thrown a big boulder and had mild ripples.",
      },
      {
        type: "quote",
        text: "Ponds always respond perfectly. We don't — because we bring our history into it.",
      },
      {
        type: "paragraph",
        text: "I said, that's what I've been telling you for months. He said, yeah, but I didn't understand it till today. Then I fired him. No, I'm only kidding.",
      },
    ],
  },
  {
    slug: "parenting-with-love-and-boundaries",
    youtubeId: "Tpr0ZOwzahk",
    title: "Parenting with Love and Boundaries",
    date: "2025",
    summary:
      "Parents think I don't understand. I don't care what's wrong with your kid. He needs to listen. I'm not into abusing them or critiquing them. I'm into parenting them.",
    tags: ["Parenting", "Boundaries"],
    transcript: [
      {
        type: "paragraph",
        text: "Why do parents think I don't understand them? Because I don't buy into the idea that their kid is special, or their kid is a highly feeling child, or their kid is a highly energetic child, or their kid has auditory processing disorder.",
      },
      {
        type: "quote",
        text: "I don't care what's wrong with your kid. He needs to listen. She needs to listen. And you've got to be in charge, no matter what.",
      },
      {
        type: "paragraph",
        text: "I'm not into abusing them. I'm not into critiquing them. I'm into parenting them. I don't want to traumatize children. I want to nurture them.",
      },
      {
        type: "paragraph",
        text: "Pia Mellody says trauma is when a child receives anything less than fully nurturing behavior from the parent. I want to fully nurture the kid. I just don't want to kiss their butt.",
      },
    ],
  },
  {
    slug: "be-a-good-dad-when-nobody-is-looking",
    youtubeId: "2EMG9UN8Nho",
    title: "Be a Good Dad When Nobody's Looking",
    date: "2025",
    summary:
      "A dad who's great in public — drop-off, dinners out. At home with the blinds drawn, he couldn't care less about his kids. Be good when no one's watching.",
    tags: ["Parenting"],
    transcript: [
      {
        type: "paragraph",
        text: "I had a friend who was very, very successful and was not a good dad. It wasn't easy for him. He'd rather work than be at home. Pretty obvious to me. He had a dad himself, but he never learned how to be a better dad.",
      },
      {
        type: "paragraph",
        text: "At one point I said to his wife, how's he doing as a dad? And she said, well, he does great when it's public. I said, what does that mean? She said, he loves bringing the kids to school. I said, why? Everybody gets to see him being a dad. He likes taking them out to restaurants. But when we're home and the doors are closed and the blinds are drawn and no one's looking, he could care less about them.",
      },
      {
        type: "paragraph",
        text: "I said, really? She said, yeah. I go, that's sad. She goes, I know.",
      },
      {
        type: "quote",
        text: "If you're one of those dads that lights up when people are looking — cut that out. Be a good dad when nobody is looking. That's when it matters.",
      },
    ],
  },
  {
    slug: "no-10-day-birthdays",
    youtubeId: "yYSSEF2AeTE",
    title: "Kids Don't Need 10-Day Birthdays",
    date: "2025",
    summary:
      "Saw an Instagram post — we celebrated so-and-so's fourth birthday for 10 days. I'm exhausted but exhilarated. I'm going on record — outlaw half birthdays too.",
    tags: ["Parenting", "Humor"],
    transcript: [
      {
        type: "paragraph",
        text: "Sometimes Instagram annoys the hell out of me. I saw a post and it said, oh, what a great 10 days. We celebrated so-and-so's fourth birthday. I'm exhausted but exhilarated.",
      },
      {
        type: "paragraph",
        text: "What? A 10-day celebration for a four-year-old? People think I'm curmudgeonly. I love children. I think their birthdays should be fun. But give them one birthday, not a 10-day celebration.",
      },
      {
        type: "paragraph",
        text: "And then — I'm going on record as saying I think it should be outlawed to celebrate half birthdays. Especially if you're a kid whose parents tend to ignore you and don't pay attention to you, and 90% of the time when you're with the kid you're on your phone doing something. Then you celebrate their birthday and you throw in an extra half birthday, and you think you're nailing it.",
      },
      {
        type: "quote",
        text: "No. Get off your phone. Pay attention to your kids. One day. Birthday. Birthdays is not a word. Birthday.",
      },
    ],
  },
  {
    slug: "grandma-with-the-pool-house",
    youtubeId: "uvPZUB7-uqA",
    title: "The Grandma with the Pool House",
    date: "2025",
    summary:
      "A legendary grandma with a pool house and bunks. The rule to sleep out there: you had to be able to swim two laps. Kids couldn't wait to earn it.",
    tags: ["Parenting", "Relationships"],
    transcript: [
      {
        type: "paragraph",
        text: "Do you know what the greatest thing in the whole world is? I hear it's being a grandparent. I can't wait.",
      },
      {
        type: "paragraph",
        text: "Let me tell you about a legendary grandparent I met once. They had a big house with a pool and she wanted to be a destination for her kids to bring their kids. She wanted to be a fun grandma house. It was a pool house. In the pool house were bunks.",
      },
      {
        type: "paragraph",
        text: "In order to be old enough to qualify to live in the bunkhouse and not live in the main house, a kid had to be old enough to swim back and forth — two laps unaided. Then they were big enough to sleep in the bunk beds in the pool house.",
      },
      {
        type: "paragraph",
        text: "So these grandkids would show up and the big kids would be there and the little kids couldn't wait to learn how to swim — to be independent enough to go sleep in the bunkhouse with the big kids. It was a rite of passage.",
      },
      {
        type: "quote",
        text: "Isn't that a lovely metaphor? Doesn't that sound like a cool grandma? I wish I had one like that.",
      },
    ],
  },
];

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((video) => video.slug === slug);
}

export function getRelatedVideos(video: Video, limit = 4): Video[] {
  const others = videos.filter((v) => v.slug !== video.slug);
  const scored = others.map((v) => ({
    video: v,
    shared: v.tags.filter((tag) => video.tags.includes(tag)).length,
  }));
  scored.sort((a, b) => b.shared - a.shared);
  return scored.slice(0, limit).map((s) => s.video);
}

export function getAllUsedTags(): string[] {
  const seen = new Set<string>();
  for (const video of videos) {
    for (const tag of video.tags) seen.add(tag);
  }
  return Array.from(seen).sort();
}
