import { useState } from 'react';

interface Product {
  title: string;
  price: string;
  tag?: string;
  image: string;
  description: string;
  extras?: string;
  soldResponse?: string;
}

const products: Product[] = [
  {
    title: '"A Psychological Guide To Avoiding Internet Scams"',
    price: "$1,199.95 (CD) / $1,299.95 (DVD) / $1,499.95 (Blu-Ray)",
    image: "/assets/store/internet-scams-guide.jpg",
    description: "Tired of being ripped off by phony Internet products? Do people take advantage of your trusting nature? Do you want to stop being a \"victim\" and start taking charge of your life? To learn more, please send a certified bank check, or cash, to my PO Box today...",
    extras: "Plus $59.00 S&H. Call for Blu-Ray+ pricing.",
    soldResponse: "Sold Out!",
  },
  {
    title: '"How To Stop Your Teenager From Texting" Handbook',
    price: "$9.95",
    image: "/assets/store/teenager-texting-handbook.jpg",
    description: "Tired of your teen texting while you are talking to him or her? Is his thumb bigger than it should be? Is her ability to carry on a conversation impaired? Buy the handbook now, and learn how to get your teenager to look at you and speak while you are both in the same room!",
    soldResponse: "Sold Out!",
  },
  {
    title: '"Don\'t Call That No Good Ex-Boyfriend" Lotion',
    price: "$19.95",
    tag: "NEW",
    image: "/assets/store/ex-boyfriend-lotion.jpg",
    description: "It's late. You're lonely. He wasn't really that bad, was he? Your friends never REALLY got to know him, did they? What harm can one phone call do? How about just a casual text? STOP! Grab this lotion instead. Resist the urge to call that no good ex-boyfriend.",
    soldResponse: "Back Order",
  },
  {
    title: '"Don\'t Call That Lousy Ex-Girlfriend" Cream',
    price: "$19.95",
    tag: "NEW",
    image: "/assets/store/ex-girlfriend-cream.jpg",
    description: "Help you resist the urge to rekindle something that shouldn't be near a flame.",
    soldResponse: "Out of stock",
  },
  {
    title: '"How To Lose Weight WITHOUT Exercise and Eat Whatever You Want" DVD',
    price: "$19.95",
    tag: "NEW",
    image: "/assets/store/weight-loss-dvd.jpg",
    description: "Sit back and buy this revolutionary new weight loss guide.",
    soldResponse: "Coming Soon",
  },
  {
    title: '"How To Get Your Man To Share His Inner World With You" Breathspray',
    price: "$25.95",
    tag: "NEW",
    image: "/assets/store/breathspray.jpg",
    description: "Does he grunt a lot? Have him try my new Breathspray, which, when used twice a day, will get your man to open up and share his deepest thoughts and innermost secrets with you.",
    soldResponse: "Back Order",
  },
  {
    title: '"Anti-Whining" Drops',
    price: "$39.95",
    image: "/assets/store/anti-whining.jpg",
    description: 'Are your kids whining? Do they complain when you ask them to do something? Do they ask "How much longer?" every five minutes? Do they make "Mom" into a six syllable word? These new drops, when placed on their tongue, will help.',
    extras: "BONUS GIFT: A Nose Spray for that annoying nasal whining that drives you crazy.",
    soldResponse: "Out of stock",
  },
  {
    title: '"Man Who Doesn\'t Interrupt" Action Figure',
    price: "$39.95",
    image: "/assets/store/no-interrupt-figure.jpg",
    description: "Does your man not know how to listen? Does he give unsolicited advice? Does he try to be helpful by problem-solving? Buy my new Action Figure and get that feeling of being understood and accepted.",
    soldResponse: "Coming Soon",
  },
  {
    title: '"Man Who Doesn\'t Give Advice" Action Figure',
    price: "$39.95",
    image: "/assets/store/no-advice-figure.jpg",
    description: "Does your man give unsolicited advice? Does he try to be helpful by problem-solving? Buy my new Action Figure and get that feeling of being understood and accepted.",
    soldResponse: "Sold Out!",
  },
  {
    title: '"Stop Volunteering" Flakes',
    price: "$39.95",
    image: "/assets/store/volunteering-flakes.jpg",
    description: 'Is your wife over-committed with her volunteering? These gluten-free flakes can be mixed into her coffee or her wine when she is not looking. Clinically proven to stop the urge to be on committees.',
    soldResponse: "Back Order",
  },
  {
    title: "Super-Hyped Pill To Help Problem Drinkers To Drink Normally",
    price: "$39.95",
    image: "/assets/store/drinking-pill.jpg",
    description: "Willpower not working? Is AA too religious? Is your therapist avoiding the topic? Just take this brand new pill and your alcoholism will instantly change to moderate, sane and happy drinking. NO EFFORT REQUIRED.",
    soldResponse: "Out of stock",
  },
  {
    title: '"See? My Childhood Wasn\'t That Bad" Photo Album and Software',
    price: "$59.95",
    image: "/assets/store/childhood-album.jpg",
    description: 'Does your therapist think you have issues? Does your spouse think your parents were "less than perfect"? Do you need to convince someone that you grew up in a healthy family and that your Parents Did The Best They Could? Use my special Photo Album along with my unique PhotoShopDenial program to minimize any pain and maximize both of the good times you had growing up.',
    soldResponse: "Coming Soon",
  },
  {
    title: "Get Along With Overly Critical In-Laws Meditation CD",
    price: "$9.95",
    image: "/assets/store/inlaws-cd.jpg",
    description: "Do they make you crazy? Do they still have your husband's pictures with his old girlfriend on their mantle? Do they still invite your wife's ex-fiancé to Thanksgiving and let him carve the turkey? This new meditation CD will teach you to accept that you will never measure up, no matter what you do.",
    soldResponse: "Sold Out!",
  },
  {
    title: "Get Along With Overly Critical In-Laws Meditation CD — Jewish Version",
    price: "$9.95",
    image: "/assets/store/inlaws-jewish.jpg",
    description: "Everything from the original, plus special guided meditations for surviving the holidays, managing guilt, and accepting that her brisket will always be better than yours.",
    soldResponse: "Back Order",
  },
  {
    title: "Get Along With Overly Critical In-Laws Meditation CD — Catholic Version",
    price: "$9.95",
    image: "/assets/store/inlaws-catholic.jpg",
    description: "Everything from the original, plus special guided meditations for surviving the holidays, managing guilt, and accepting that you will never be quite good enough.",
    soldResponse: "Out of stock",
  },
  {
    title: "Serenity Solution Hair Gel",
    price: "$39.95",
    image: "/assets/store/serenity-gel.jpg",
    description: 'Have you heard the truism: Would you rather be right or be happy? Grab my new Hair Gel infused with Space-Age Polymers, just rub it in and let serenity take over. Rub this gel in and you will magically lose the urge to win arguments but lose connection.',
    soldResponse: "Coming Soon",
  },
  {
    title: "Stop Acting Like a Victim Defense Spray",
    price: "$19.95",
    image: "/assets/store/defense-spray.jpg",
    description: 'Nothing makes me more miffed than when I get bullied by someone. After I stand up for myself, and "push back"...the bully starts crying and says that "I am the bully!" Simply whip this spray out and two spritzes later the bully stops acting like an innocent victim.',
    soldResponse: "Sold Out!",
  },
  {
    title: "Get Your Adult Children To Move Out Whole House Fogger",
    price: "$75.95",
    image: "/assets/store/move-out-fogger.jpg",
    description: "He's 34, plays video games all night and sleeps all day. He can't get a job because nobody has driven over to your house and offered him a position worthy of his talents. He doesn't pay rent, or clean up after himself. He doesn't know where the laundry room is and can't help with the lawn because he has a bad back and even worse allergies. Time for the Fogger.",
    soldResponse: "Back Order",
  },
  {
    title: '"Keep Your Adult Children From Moving Back In" Room Deodorant',
    price: "$25.95",
    image: "/assets/store/room-deodorant.jpg",
    description: 'Is your grown child hinting about "reducing his living expenses?" Is she making references to trying to pay down her maxed-out credit card debt? Is he starting to sleep over more and more? Try this room deodorant! My special formula will make even the most determined kid want to stay independent.',
    soldResponse: "Out of stock",
  },
  {
    title: '"Be A Great Little Athlete" Antispasmodic',
    price: "$39.95",
    image: "/assets/store/athlete-pill.jpg",
    description: 'Is your child not getting enough playing time? Is he a little slow? Is she a little uncoordinated? Just take three doses a day for three weeks and your kid will be starting and playing lots. Guaranteed to improve your self-image as a parent!',
    soldResponse: "Coming Soon",
  },
  {
    title: 'Single? Not "Feeling that Spark?" Try our "Spark Adder Enzymes"',
    price: "$49.95",
    image: "/assets/store/spark-enzymes.jpg",
    description: "Are you going out on dates and just not getting that spark? That feeling in the pit of your stomach… the one that says \"Danger!\" mixed with \"They are amazing!\" Take this natural supplement the morning after the \"meh\" date, and the next thing you know you'll be looking forward to that exciting, thrilling second date.",
    soldResponse: "Supply chain issues",
  },
  {
    title: "WebMD Blocking Software",
    price: "$6.95/mo",
    image: "/assets/store/webmd-blocker.jpg",
    description: 'Do you or someone you know constantly search on the Web to understand their physical symptoms? Does this search usually end up concluding that they have a terminal condition? Do you want to prevent this "going down the rabbit hole"? Then try our new software…',
    soldResponse: "Waiting for download",
  },
  {
    title: "BAmbian! — Not FDA Approved. Yet.",
    price: "$99.50/dose",
    image: "/assets/store/bambian.jpg",
    description: "Does getting your baby to sleep create too much anxiety in you? Can the baby's cries be minimized so you don't feel bad? Try our new BAmbian! — Infant Strength formula. Now available in two Airplane Strengths! Comes in a Two Hour Flight strength and a Four Hour Flight strength.",
    soldResponse: "Out of Stock",
  },
];

export default function GoreStore() {
  const [toast, setToast] = useState<{ title: string; response: string } | null>(null);

  const handleBuy = (product: Product) => {
    setToast({ title: product.title, response: product.soldResponse ?? "Sold Out!" });
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div
          className="fixed bottom-6 right-6 z-50 bg-foreground text-background px-5 py-3 rounded-lg shadow-xl max-w-xs animate-fade-in"
          role="alert"
        >
          <p className="font-semibold text-lg mb-0.5">{toast.response}</p>
          <p className="text-xs opacity-80 line-clamp-2">"{toast.title}"</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.title} className="flex flex-col overflow-hidden border rounded-lg bg-card">
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              {product.tag && (
                <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-display text-lg font-bold text-foreground leading-snug mb-2">
                {product.title}
              </h2>
              <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {product.description}
              </p>
              {product.extras && (
                <p className="text-xs text-muted-foreground/70 italic mt-2">{product.extras}</p>
              )}
              <button
                onClick={() => handleBuy(product)}
                className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
