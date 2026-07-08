// Dr. Gore's FAQ content (July 2026). Split into two parts:
//   Part 1 — about Dr. Gore and the practice — renders on /faqs
//   Part 2 — parenting and life questions — renders on the standalone /faqs/more
//            page (its own URL so we get a Google Analytics pageview each time
//            someone clicks through to read more).
// The out-of-network insurance answer opens a reimbursement popup on /faqs.
export type Faq = { q: string; a: string; kind?: 'insurance'; footnote?: string };

export const faqsPart1: Faq[] = [
  { q: "Do you watch the show “Shrinking”?", a: "Yes, I think it’s sweet how these people genuinely support one another." },
  { q: "Do you like how therapists are portrayed?", a: "No. It leans hard into the “therapists are a mess” trope. While it is true that most mental health professionals have been through their own pain-filled journeys, the good ones have done their own work to ensure they can show up and actually be helpful to others. Harrison Ford’s character needs Parkinson’s to finally connect with his daughter? Gaby can’t commit to her boyfriend? Some therapists are a mess. Most of the good ones have done their work. The show makes dysfunctional therapists look universal." },
  { q: "Are you messed up?", a: "Not anymore." },
  { q: "Were you messed up?", a: "Yes." },
  { q: "Really?", a: "Yep. Then I spent decades fixing what needed fixing. Therapy, supervision, training, recovery, healthy living, difficult conversations, painful lessons. My clients deserve a therapist who has done his own work and is still doing his own work. And my (current) wife deserves a medal." },
  { q: "Did you see the episode on Shrinking where Jimmy asks his patient to…", a: "Enough about Shrinking. Not everybody has Apple TV." },
  { q: "Why did you become a psychologist?", a: "You know I am not just a psychologist; I am also a family therapist." },
  { q: "Why did you become a psychologist and a family therapist?", a: "I help people, it’s fun, it’s extremely challenging, and it is never boring. Forty years later, I still look forward to Monday morning. A famous writer once said, “I am going to be an even better novelist in my fifties than I am in my forties, and I will be an even better writer in my sixties than in my fifties.” The same is true with being a psychotherapist. As of this moment, I ain’t ever retiring." },
  { q: "What is your therapeutic approach?", a: "Whatever works. After forty years, I’ve stopped being territorial about it. I’m trained in most of the major frameworks (structural, cognitive-behavioral, psychodynamic, experiential, systemic) and I use whichever one is actually going to help you move. I’m not married to a method. I’m married to results." },
  { q: "Are you married?", a: "Yes. To a saint. She’s a professor who studies recovery from strokes. She sings, she raises chickens, and she fantasizes about getting an EV pickup truck that gets over 600 miles per charge." },
  { q: "Do you take insurance?", a: "Not for decades. I used to take insurance, but then the MBAs at UnitedHealthcare and Blue Cross started telling me what to do, and how often I can do it. So, I left." },
  { q: "Was it hard to walk away from accepting insurance?", a: "It was difficult. And risky. And worth it. Every year insurance companies make the lives of providers increasingly difficult. My loyalty is to you, not their claims department." },
  { q: "Will I receive therapy directly from you?", a: "Yes. My practice is a solo, fee-for-service practice, and I treat my clients as I would want my own family members treated. And some of them needed a lot of treatment." },
  { q: "What are your fees?", a: "I currently charge $415.00 for individual sessions (50-minute sessions). Longer individual appointments and family therapy sessions are $500.00 (60-minute sessions)." },
  { q: "I have questions about getting insurance reimbursement for you on an “out-of-network” basis. How do I get this information?", a: "", kind: 'insurance' },
  { q: "What makes your practice so unique?", a: "I return calls until midnight. I respond to emergencies personally. There are no receptionists, no practice managers, no overseas call centers. The buck stops with me, which means when something matters, you’re not waiting for someone to pass a message. The treatment is direct, the results come faster than you’d expect, and I don’t consider “a few years from now” an acceptable timeline." },
  { q: "How long will it take for us/me to see results?", a: "Sooner than your last therapist got around to it. I’m directive by nature and I don’t believe in spending the first three months “establishing rapport.” We’ll establish rapport by doing useful work together. Most people leave the first session with something they didn’t have when they walked in: a reframe, a decision, a direction. That’s not an accident." },
  { q: "Are you always right?", a: "Not even close. But I’m usually wrong faster than most people. If I have a theory about what’s happening, I’ll tell you. If the evidence changes, I’ll change my mind." },
  { q: "How do I reach you?", a: "Call me at 404-237-4300. You will get a callback that day." },
];

export const faqsPart2: Faq[] = [
  { q: "I hate my job… Can I continue to work at this company and be happy?", a: "Probably not." },
  { q: "Why not?", a: "Most people eventually discover that misery has a carrying cost. You can change the job, change your attitude, or change both. But pretending your work life doesn’t affect your happiness rarely works." },
  { q: "I am in a lousy relationship… Can I stay in this relationship and be happy?", a: "Probably not." },
  { q: "Why not?", a: "Your primary relationship affects almost every corner of your life. Most people can tolerate disconnection for a while. Few people thrive in it." },
  { q: "What does “falling in love” and “being in love” have in common?", a: "Nothing." },
  { q: "Huh?", a: "These are two totally different processes. Falling in love is effortless. Staying in love takes effort. That’s why you don’t marry someone on the third date. Or get matching tattoos on your first vacation." },
  { q: "What is the best gift I can give my child?", a: "A good marriage." },
  { q: "What is the sound of one hand clapping?", a: "…" },
  { q: "I am successful. Why am I still unhappy?", a: "Because success solves different problems than most people think it does. Money can buy comfort. Achievement can buy status. Neither guarantees a close marriage, a meaningful life, or peace of mind. I spend a lot of time helping successful people build the parts of life their careers couldn’t build for them. That’s some of my favorite work." },
  { q: "My child is turning sixteen soon… should I get Chase a new car?", a: "No. Give Chase something to look forward to. Please. And make him or her work a little bit and financially contribute to the purchase of this first, used, safe car. Kids that help pay for cars take more pride in the car’s appearance, take better care of the car, and drive more safely." },
  { q: "They really drive more safely?", a: "No, I just made that part up. They do take better care of the car when they make a significant financial contribution. Please, don’t just hand your kid a new car." },
  { q: "My eight-year-old son is having trouble at school. I have two other children, and they all play soccer, basketball, baseball, and tennis. There are also tutors and piano lessons. I would have difficulty finding a time for us all to meet, and besides, my spouse works all the time. Can I just bring one son to you, run a few errands, and pick him up after your session?", a: "No." },
  { q: "Why not?", a: "Family therapy is vital to resolving any school problem. If a therapist wants to treat an eight-year-old without working with the family, I would have a bunch of questions. And you should stop overscheduling your family. Slow down. Kids need downtime. Adults need downtime. Teens need downtime." },
  { q: "My twelve-year-old plays video games every chance he gets. If we let him, he will play for over ten hours a day on the weekends. What should we do?", a: "Don’t let him play ten hours a day. Parenting is not complicated nearly as often as it is difficult." },
  { q: "My two-year-old is not eating, and, when she eats, she eats only sweets or canned ravioli. What should we do?", a: "Provide a healthy assortment of food, and don’t make a battle out of it. A child can go for three minutes without air, three days without water, and three weeks without food. A parent’s job is to provide a healthy assortment of food, not to get the child to eat a healthy assortment of food." },
  {
    q: "What are the two mistakes most parents make today?",
    a: "Both come from the same root problem. One: most parents are reluctant to be in charge of their own families. They want a democracy instead of a kingdom, unwilling to accept that there’s a clear hierarchy in the house. Two: kids don’t do chores. Specifically, they’re never trained to do chores without being asked or reminded. And I don’t mean putting away their own laundry, they should do that regardless. I mean a task that benefits the whole household. A three- or four-year-old can sweep the floor or set the table. As they get older, the chores get bigger and harder. Do this right, and a kid will actually look forward to taking over the chores an older sibling used to do.",
    footnote: "You’ve probably seen the claim that a famous 80-year Harvard study proves chores predict adult success. It doesn’t exist. What actually happened: a former Stanford dean said this in a TED Talk, people liked it, and the internet has been laundering it as “Harvard research” ever since, somewhat ironic given the topic. The real study is out of the University of Minnesota, it’s less quotable, and nobody’s made a viral graphic out of it. But it says the same thing: kids who start doing chores young turn out better. You don’t need Harvard’s name on it. You need your kid to sweep (or mop) the floor.",
  },
  { q: "Timeouts don’t seem to work with my six-year-old. What should I do?", a: "Timeouts work 99% of the time when done right. The room should have zero distractions, and the timeout should be lengthened until it’s boring enough that your child starts trying to avoid earning one. Basically, you want to bore them to tears. I’m working on a video on doing timeouts correctly. It’ll be in my real store, not the fake one." },
  { q: "When I punish my child, he gets really, really unhappy. What am I doing wrong?", a: "Nothing. Consequences are supposed to be unpleasant. That’s how consequences work. Your child’s disappointment is not evidence that you’re doing something wrong." },
  { q: "What are your specialties?", a: "I am a general practitioner. I work with young children, adolescents, and adults of all ages, diapers to diapers. I care more about helping people change than assigning diagnoses. That said, here are my “unique” specialty niches:\n1. Whole families, two or three generations at a time.\n2. Addicts and alcoholics, both adults and teenagers.\n3. Pregnancy and postpartum mood disorders, and individual and family therapy for maternal mental health concerns.\n4. Super successful men and women who are not super happy, and whose families aren’t, either.\n5. Little kids, ages 3 to 10. I don’t do “play therapy.” I’ll see them alone for brief intervals, but I treat young children only with the whole family involved.\n6. Teens. Sad ones, angry ones, rebellious ones, screen-addicted ones, lonely ones." },
  { q: "What do you mean by therapy for “the whole family?”", a: "At least the mom, dad, and the children." },
  { q: "What if they are divorced?", a: "Especially if they are divorced." },
  { q: "What if one parent refuses to participate?", a: "I would be proud to say that a seventh specialty of mine is getting uninvolved members more involved in the lives of the “patient.” No matter the age of this identified “patient.”" },
  { q: "Given your specialties, is it true that most of your clientele is composed of adult individual clients?", a: "Yes. Most people seeking therapy are individual adults, so that naturally makes up the largest part of my practice." },
  { q: "You seem to talk about kids a lot on this website. Are you sure you’re good at helping adults?", a: "Absolutely. I work with children, teens, families, and adults. While the issues may look different on the surface, the process of helping people make meaningful, lasting changes is remarkably similar. After more than 40 years as a psychologist, helping people change and get “unstuck” is what I do." },
  { q: "Are you worried about AI taking your job away?", a: "I think AI can be a “below-average” therapist today. In a couple of years, it may become an “average” therapist. But AI will not become a “great” therapist in the next decade or two." },
  { q: "Who is your favorite character in Shrinking?", a: "I am done with you." },
  { q: "How do I reach you?", a: "Call me at 404-237-4300. You will get a callback that day." },
];

export const insuranceSchemaText =
  "If you wish to use your insurance, you will need to find out from them what is covered and what is not. " +
  "Some plans pay out-of-network benefits and some pay nothing. Ask your insurer about procedure code 90837, " +
  "your deductible, the maximum reimbursement per session, precertification, and the dollar amount they consider " +
  "“customary and reasonable” for a 90837 session. You will need a diagnosis to receive reimbursement. " +
  "For questions, text my Billing Manager Alyssa at (404) 444-6228.";

// Build FAQPage JSON-LD from a list of FAQs (skips the empty insurance stub answer,
// substituting the reimbursement summary text instead).
export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs
      .filter((f) => f.a || f.kind === 'insurance')
      .map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.kind === 'insurance' ? insuranceSchemaText : f.a },
      })),
  };
}
