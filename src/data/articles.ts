export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  content: ArticleSection[];
}

export interface ArticleSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "quote" | "note" | "comparison" | "numbered-list";
  text?: string;
  items?: string[];
  columns?: { left: string[]; right: string[] };
}

// Thumbnail imports

export const articles: Article[] = [
  {
    slug: "attention-teenagers-and-parents",
    title: "Attention Teenagers and Parents",
    date: "",
    summary: "A humorous message for teenagers who think they know everything — and the parents who love them anyway.",
    thumbnail: "/assets/articles/teenagers-thumb.jpg",
    content: [
      { type: "paragraph", text: "____________________________________" },
      { type: "paragraph", text: "TEENAGERS!" },
      { type: "paragraph", text: "Tired of being hassled by" },
      { type: "paragraph", text: "your stupid parents?" },
      { type: "paragraph", text: "Act NOW" },
      { type: "paragraph", text: "Move out, get a job," },
      { type: "paragraph", text: "pay your own bills…." },
      { type: "paragraph", text: "Do it now while" },
      { type: "paragraph", text: "you still know" },
      { type: "paragraph", text: "EVERYTHING!" },
      { type: "heading", text: "____________________________________" },
      { type: "paragraph", text: "To view a copy of this that is ready to print and suitable for framing, please click here. I can’t guarantee that your teenagers will be grateful, but they will have a reaction." },
    ],
  },
  {
    slug: "overcoming-depression",
    title: "A Quick Primer on Overcoming Depression",
    date: "",
    summary: "Understanding the difference between sadness and depression, what you can do about it, and when to seek help.",
    thumbnail: "/assets/articles/depression-thumb.jpg",
    content: [
      { type: "heading", text: "Depression vs. Sadness Defined" },
      { type: "paragraph", text: "We all have bad days. It is normal to have bouts where we feel sad. Sometimes it lasts for a few minutes or a few hours. Sometimes it lasts for a few days." },
      { type: "paragraph", text: "When a person has a \"bad day,\" (a day with a lot of sadness) then wakes up the next day and has another bad day, he or she then makes a decision: \"I will not have another bad day.\" When this happens, when they try to \"snap out of it\" and do so successfully–this is called HEALTHY COPING. But when a person has several bad days in a row, tries to snap out of it, but cannot, then this is the beginning of what is defined as Depression." },
      { type: "subheading", text: "What Can We Do?" },
      { type: "paragraph", text: "Psychotherapy works really well with depression. Why? All kinds of reasons: it forces us to take responsibility for our feelings and behaviors; it helps us to \"own\" our own issues and to break away denial; it aids us in getting out of maladaptive patterns (ways of coping that don’t help us cope); it gives us a place where we become responsible to report our progress regarding making positive changes in our life. Therapy can focus on the past or on today. Depression responds better to therapy that focuses on present issues and concerns." },
      { type: "paragraph", text: "There is an old saying: \"When the only tool you have is a hammer, then everything you see is a nail.\" If you report feelings of sadness or depression to a medical doctor, they will probably see an immediate need for prescribing drugs.There are dozens of anti-depressant medications available, many very new and many very effective. They work, and they work well. Some people are easy to medicate, and others will require several different pills before a good \"fit\" exists." },
      { type: "paragraph", text: "Studies show that therapy and drugs are about equally effective, with the combination of both having the strongest results. Does everyone need therapy and/or drugs? No. Try some milder \"cures\" first." },
      { type: "subheading", text: "Cures" },
      { type: "list", items: [
        "Get moving. Exercise helps tremendously. Just walking a few minutes everyday will help a    lot. Increase the time spent walking until you are walking for a half an hour three to four    times a week. Start by parking far away from a store or restaurant.",
      ] },
      { type: "list", items: [
        "Get outside. Sun is good. A little sun is better than no sun.",
      ] },
      { type: "list", items: [
        "Monitor your thinking style. (See the next section)",
      ] },
      { type: "list", items: [
        "Connect with people. This is hard if you are truly depressed. Do it anyway. Call someone.    Get some support systems in place. Depression leads to isolation which leads to    depression which leads to isolation which leads..\"Problems shared are halved.\"",
      ] },
      { type: "list", items: [
        "Feel your feelings. Do you have any other feelings besides sadness? Any anger? This is a    big one for sad folk. Any fear? Any joy? Any loneliness? Feelings are real, feelings are    information, and feelings are OK. Learn to identify them and deal with them…",
      ] },
      { type: "list", items: [
        "Investigate gaining some spirituality in your life. Don’t do too much of this, because    experiencing a connection with a Higher Power can literally blow away feelings of sadness,    isolation, pessimism and depression.",
      ] },
      { type: "list", items: [
        "Do things that give you some feelings of accomplishment. Practice entering \"arenas of    competence.\"",
      ] },
      { type: "list", items: [
        "Read about depression. Self-help books actually can help, but only if you follow the action    plan outlined in the books. And, if you actually read them through to the end, where they    usually give you the \"solutions.\"",
      ] },
      { type: "subheading", text: "Thinking Styles" },
      { type: "paragraph", text: "A powerful way to attack sadness or depression is to change some common \"errors\" in thinking." },
      { type: "paragraph", text: "Time distortion" },
      { type: "paragraph", text: "We think that how we feel now will always be how we feel. We see no changes imminent in our future. We think that our current problems have been with us FOREVER and will be with us FOREVER. We think good times will be over in SECONDS." },
      { type: "paragraph", text: "Overgeneralization" },
      { type: "paragraph", text: "We have a problem with someone at the office. We think everyone in the office doesn’t like us." },
      { type: "paragraph", text: "Mud Filtering" },
      { type: "paragraph", text: "We see things as worse than they are, through \"mud-colored glasses.\" We take in negative information and screen out positive information." },
      { type: "paragraph", text: "Size Distortion" },
      { type: "paragraph", text: "We see negative events as huge, and positive events are trivialized. To \"dwell on the negative\" is an understatement." },
      { type: "paragraph", text: "Over-labeling" },
      { type: "paragraph", text: "We take an event and make it more real, bigger and more permanent. Our child says, \"I am angry at you.\" We hear, \"I am the world’s worst parent, ever.\"" },
      { type: "subheading", text: "Inertia" },
      { type: "paragraph", text: "Inertia is defined by: An object at rest tends to stay at rest; an object in motion tends to stay in motion. Inertia can be used to stay sad or to combat sadness." },
      { type: "paragraph", text: "Think of a huge boulder. It is tough to get it moving. It just wants to stay in one spot. Now, let’s say we get the boulder rolling, and soon the boulder is going at a good pace. If someone tries to stop the boulder from moving, they will not have much success. A boulder at rest wants to stay put, a rolling boulder will want to stay rolling." },
      { type: "paragraph", text: "If you are stuck, then start the \"boulder\" moving. Do some little things to get out of the rut. Just a little change here or there will multiply. Then do something slightly bigger to get out of the \"object at rest\" mentality." },
      { type: "paragraph", text: "Once you start moving, then the boulder will continue to roll, and nothing can stop this progression. Make inertia work for you." },
      { type: "paragraph", text: "Note:   Depression is a serious problem. If you remain depressed, you are at risk for increasing health problems. These recommendations are not a substitute for professional help. SEEK HELP IMMEDIATELY if you are feeling suicidal, or if you are feeling like hurting yourself or running away. If depression has been a factor in your life for many weeks, and nothing is working to get out of the depression, then seek some professional help. To paraphrase a popular TV commercial from the 90’s: \"Depressed? If you don’t call me, then call someone.\"" },
    ],
  },
  {
    slug: "intimate-vs-dysfunctional-relationships",
    title: "Relationships: Intimate vs. Dysfunctional",
    date: "January 25, 2015",
    summary: "A comparison of healthy intimate relationships versus dysfunctional patterns.",
    thumbnail: "/assets/articles/relationships-thumb.jpg",
    content: [
      { type: "paragraph", text: "From a handout of Onsite Workshops (www.onsiteworkshops.com), with additional information from Dr. Gore." },
      { type: "comparison", columns: {
        left: [
          "Peers.",
          "Mutuality.",
          "Choice.",
          "Freedom.",
          "Desire to share needs and feelings.",
          "Relationship always changing.",
          "I want to be there.",
          "I try to balance \"alone time\" with \"together time.\"",
          "I begin with me (self). I want. I feel. Initiator...",
          "I take care of me. I am solely responsible for figuring out what I need and communicate it to you.",
          "Sex is an important part of how two people connect.",
          "I will let you see all of me.",
          "Relationship deals with things as they come along.",
          "My dedication to you is based on my true interest in your spiritual path, even if it takes you away.",
          "Love is always an act of self-love.",
          "Relationship deals with reality.",
        ],
        right: [
          "Power differential.",
          "Imbalance.",
          "Loss of choice.",
          "Compulsion.",
          "\"No talk\" rule, especially if things are not working out.",
          "Relationship is always the same.",
          "I have to be there.",
          "I am with my partner all the time or we hardly see each other (and when we do we are involved in other activities).",
          "I begin with you. You change. You make me feel. Reactor...",
          "You will know what is right for me. You will fix it.",
          "Sex is almost non-existent or occurs without any true connection.",
          "I will only show you the parts of me I want you to see.",
          "Relationship uses denial to deal with things.",
          "Your spiritual growth doesn't count.",
          "Love is wanting someone to love me at all costs.",
          "Relationship is based on delusion, often on what \"could\" be.",
        ]
      } },
    ],
  },
  {
    slug: "the-invitation",
    title: "The Invitation",
    date: "",
    summary: "A beautiful poem by Oriah Mountain Dreamer about what an intimate relationship can be like.",
    thumbnail: "/assets/articles/invitation-thumb.jpg",
    content: [
      { type: "paragraph", text: "I offer this page to you because I feel it beautifully expresses the goals of" },
      { type: "paragraph", text: "a) what an intimate relationship can be like" },
      { type: "paragraph", text: "b) what may happen as a result of long-term, intensive psychotherapy" },
      { type: "paragraph", text: "c) simply living a good life, becoming more real, more true and more authentic" },
      { type: "paragraph", text: "It doesn’t interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart’s longing." },
      { type: "paragraph", text: "It doesn’t interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive." },
      { type: "paragraph", text: "It doesn’t interest me what planets are squaring your moon. I want to know if you have touched the center of your own sorrow, if you have been opened by life’s betrayals or have become shriveled and closed from fear of further pain! I want to know if you can sit with pain, mine or your own, without moving to hide it or fade it, or fix it." },
      { type: "paragraph", text: "I want to know if you can be with joy, mine or your own, if you can dance with wildness and let the ecstasy fill you to the tips of your fingers and toes without cautioning us to be careful, to be realistic, to remember the limitations of being human." },
      { type: "paragraph", text: "It doesn’t interest me if the story you are telling me is true. I want to know if you can disappoint another to be true to yourself; if you can bear the accusation of betrayal and not betray your own soul; if you can be faithless and therefore trustworthy." },
      { type: "paragraph", text: "I want to know if you can see beauty even when it’s not pretty, every day, and if you can source your own life from its presence." },
      { type: "paragraph", text: "I want to know if you can live with failure, yours and mine, and still stand on the edge of the lake and shout to the silver of the full moon, \"Yes!\"" },
      { type: "paragraph", text: "It doesn’t interest me to know where you live or how much money you have. I want to know if you can get up, after the night of grief and despair, weary and bruised to the bone, and do what needs to be done to feed the children." },
      { type: "paragraph", text: "It doesn’t interest me who you know or how you came to be here. I want to know if you will stand in the center of the fire with me and not shrink back." },
      { type: "paragraph", text: "It doesn’t interest me where or what or with whom you have studied. I want to know what sustains you, from the inside, when all else falls away." },
      { type: "paragraph", text: "I want to know if you can be alone with yourself and if you truly like the company you keep in the empty moments." },
      { type: "paragraph", text: "by" },
      { type: "paragraph", text: "Oriah Mountain Dreamer (Used with her permission)" },
    ],
  },
  {
    slug: "hitting-bottom-in-addiction",
    title: "Hitting Bottom In Addiction: The Only Way To Go Is Down",
    date: "",
    summary: "What does it mean to hit rock bottom? Understanding low-bottoms, high-bottoms, denial, and the path to recovery.",
    thumbnail: "/assets/articles/hitting-bottom-thumb.jpg",
    content: [
      { type: "paragraph", text: "What does it mean to hit rock bottom? When it comes to alcohol and drug addiction, \"hitting rock bottom\" means that the user comes to a place where he decides he does not wish to continue living the way he is living, and hopefully, is now ready to make changes." },
      { type: "paragraph", text: "Low-Bottoms/High-Bottoms" },
      { type: "paragraph", text: "Some addicts have devastatingly low bottoms while others have surprisingly high ones. Anyone can take a look at the Low-Bottom addict and clearly see these are the individuals who’ve lost all their \"stuff\": cars, homes, jobs, relationships, families." },
      { type: "paragraph", text: "The High-Bottom addicts, on the other hand, are those who haven’t lost their ‘stuff’ yet. These individuals have more than likely met with some incident which warrants a serious look at the consequences of their alcohol or drug use; in other words, something has happened which will not allow them to continue living in denial of the negative consequences affecting their lives. In talking with addicts who haven’t done drugs or alcohol for a number or years, i.e., the addict in recovery, one will find an interesting mixture of bottoms. Fortunately, there are those individuals (High-Bottom) who become willing to face the consequences of their addiction and get into recovery. There are also those who enter treatment centers and experience what I call a case of the \"Yets\", and go back out to continue using." },
      { type: "paragraph", text: "Denial and the \"Yets\"" },
      { type: "paragraph", text: "The disease of addiction is the only illness people can experience and yet remain oblivious to the fact that they have a serious ailment which requires immediate attention. Simple logic says if you break your arm, you have a problem which will require immediate attention; the body and mind work together to make it quite obvious to you that the limb will not work properly until it is treated. Addiction, on the other hand, works in just the opposite way; even as the physical symptoms begin to manifest themselves, the disease sabotages the message between body and mind in order to keep the addict captive to the whims of the illness. Denial is part and parcel of addiction and in fact, may be the hallmark of addiction; complete denial of the problem or denial that there is a problem ‘Yet’." },
      { type: "paragraph", text: "The \"Yets\" come into the picture when the addict’s attitude is such that he will not face the reality of the disease until something bad happens. Typical statements may include.. \"Well, I haven’t missed a mortgage payment Yet, have I?\" . or \"My drinking and driving haven’t been a problem Yet\". The \"yet\" attitude is just a part of the larger problem of addiction." },
      { type: "paragraph", text: "Bottoms and the Shovel Analogy" },
      { type: "paragraph", text: "A client once told me about his experiences with bottoms; how he continually ended up in jail, continually lost stuff, i.e.; cars, apartments, friends, family, etc.. I asked him why he kept hitting these bottoms and he replied, \"Dr. Gore, when you have no self-esteem to begin with, there are no limits to your bottoms.\" It was a brilliant, classic statement coming from a twenty-two year old addict. Essentially, the worse one feels about himself, the lower he will allow the disease to take him before choosing to get into recovery. Generally, people with healthier mental attitudes towards themselves get into recovery much more quickly than those who do not. When you don’t feel good about yourself, and you’re drinking and drugging, no matter what bottom you hit, you can always find a shovel and keep digging.." },
      { type: "paragraph", text: "I want to help you halt the downward spiral of addiction and provide assistance no matter how far down you’ve gone. High-Bottom or Low-Bottom, both can recover from the disease of addiction with the help of a strong support system." },
    ],
  },
  {
    slug: "addiction-defined",
    title: "Addiction Defined",
    date: "January 26, 2015",
    summary: "What is addiction? Understanding the disease, denial, and the official clinical definition of substance dependence.",
    thumbnail: "/assets/articles/addiction-defined-thumb.jpg",
    content: [
      { type: "paragraph", text: "What is addiction? Addiction and alcoholism are two terms which are used interchangeably and describe a condition of powerlessness over something. Addiction is when \"it\" has more control over you than you have over \"it\". The \"it\" can be alcohol, marijuana, heroin, sex, gambling, food, or any other drug or mood-altering behavior." },
      { type: "paragraph", text: "If you are reading this and you are wondering whether or not you have an addiction of some kind, you need to understand that everything you hear or see, you hear and see through an \"addiction filter.\" In other words, if you do have a problem with addiction, anything you perceive relating to whether or not you have a problem, you perceive through the filters that currently exist within your mind; within your thinking. These \"filters\" will often prevent you from seeing the truth about where you are in relationship to your drug of choice." },
      { type: "paragraph", text: "\"Drug of Choice\" is a term to describe your #1 favorite way to alter your state of consciousness. We all have drugs of choice which often shift over time. For example, in our teens, smoking marijuana may be our favorite activity; when we hit our 30’s, we become more invested in drinking beer and martinis than in smoking pot." },
      { type: "paragraph", text: "I consider addiction to be a disease. A disease which is Primary, Progressive and Chronic. Primary means that it must be treated as the most important aspect of someone getting better. For example, if someone is depressed and addicted to valium, that person must stop the valium use first, then deal with the depression. A lot of therapists and psychiatrist believe that if the depression improves, the need for valium will stop. This is not true. The depressed addict will continue to take the valium. Progressive means the disease gets worse over time. There may be instances where improvements occur, but these times of abstinence or \"moderate\" use will not last. Chronic means the disease does not go away. Ever." },
      { type: "paragraph", text: "And, by the way, addiction is fatal, too. It will kill you eventually. A little known fact, for example: alcohol abuse causes more heart disease every year than does cigarette smoking. But you won’t see that on beer commercials." },
      { type: "paragraph", text: "Another definition of addiction is: continued use of substances (or behaviors) even when confronted with the reality that negative consequences happen after using these substances or behaviors. In other words, this definition describes the person who keeps on doing the same behaviors over and over again with the same negative consequences occurring. Again, this is where denial serves the alcoholic very well." },
      { type: "paragraph", text: "I had a client once, a 26 year old mother of two who initially showed up in my office to deal with her older daughter’s behavior problem. It soon became obvious that the problem did not exist with the daughter but with the mother, and the therapy shifted to focus on her. After several sessions, the mother admitted she was smoking marijuana on a daily basis in addition to her sporadic abuse of other chemicals. Throughout the ongoing therapy and with much reluctance, she became fully honest with me and admitted she was in fact getting high 3 to 6 times a day. We began to look at the pattern of addiction in her life and after resistance, she agreed to try a program of abstinence. Her sobriety would last for varying time periods but she always returned back to the drugs. At one point, she said to me, \"I don’t know if I’m a pot addict or what, but I do know I have a rather bizarre relationship with pot.\" I replied to her, \"That is the best definition of addiction I have ever heard.\"" },
      { type: "paragraph", text: "Can you imagine having a \"bizarre relationship\" with heroin? Or a \"bizarre relationship\" with gambling or alcohol? For the record, most normal people do not have relationships of any kind with these chemicals or with these behaviors. Once you do get into a relationship with these things…these \"it’s,\" and the relationship becomes qualified as \"bizarre,\" at that point, almost anyone would say that you are in fact dealing with an active addiction." },
      { type: "paragraph", text: "This client has recently called me from New Jersey and insists I tell everyone that she now has been clean from all drugs and alcohol for over three years now. She is proud of herself, and rightly so." },
      { type: "paragraph", text: "THE \"OFFICIAL\" DEFINITION OF ADDICTION" },
      { type: "paragraph", text: "Criteria for Substance Dependence* – A maladaptive pattern of substance use, leading to clinically significant impairment or distress, as manifested by three (or more) of the following, occurring at any time in the same 12-month period:" },
      { type: "paragraph", text: "(1) Tolerance, as defined by either of the following:" },
      { type: "paragraph", text: "a. A need for markedly increased amounts of the substance to achieve intoxication or desired effect" },
      { type: "paragraph", text: "b. Markedly diminished effect with continued use of the same amount of the substance" },
      { type: "paragraph", text: "(2) Withdrawal, as manifested by either of the following:" },
      { type: "paragraph", text: "a. The characteristic withdrawal syndrome for the substance" },
      { type: "paragraph", text: "b. The same (or a closely related) substance is taken to relieve or avoid withdrawal symptoms" },
      { type: "paragraph", text: "(3) The substance is often taken in larger amounts or over a longer period than was intended" },
      { type: "paragraph", text: "(4) There is a persistent desire or effort to cut down or control substance use" },
      { type: "paragraph", text: "(5) A great deal of time is spent in activities necessary to obtain the substance (e.g., visiting multiple doctors or driving long distances)," },
      { type: "paragraph", text: "use the substance (e.g., chain smoking), or recover from its effects" },
      { type: "paragraph", text: "(6) Important social, occupational, or recreational activities are given up or reduced because of substance use" },
      { type: "paragraph", text: "(7) The substance use is continued despite knowledge of having persistent or recurrent physical or psychological problem that is likely to" },
      { type: "paragraph", text: "have been caused or exacerbated by the substance (e.g., current cocaine use despite recognition of cocaine-induced depression, or       continued drinking despite recognition that an ulcer was made worse by alcohol consumption)." },
      { type: "paragraph", text: "*Diagnostic And Statistical Manual Of Mental Disorders. 4th ed. Washington: American Psychiatric Association., 1994" },
    ],
  },
  {
    slug: "to-let-go",
    title: "To Let Go",
    date: "",
    summary: "A reflection on what it truly means to let go — not to stop caring, but to love more.",
    thumbnail: "/assets/articles/let-go-thumb.jpg",
    content: [
      { type: "paragraph", text: "Grant me the serenity to accept the things I cannot change (other people, places and things) , the courage to change the things I can (me), and the wisdom to know the difference. – Reinhold Niebuhr (italics by Dr. Gore)" },
      { type: "paragraph", text: "To \"let go\" does not mean to stop caring, it means I can’t do it for someone else." },
      { type: "paragraph", text: "To \"let go\" is not to cut myself off, it is the realization I can’t control another." },
      { type: "paragraph", text: "To \"let go\" is not to enable but to allow learning from natural consequences." },
      { type: "paragraph", text: "To \"let go\" is to admit powerlessness, which means the outcome is not in my hands." },
      { type: "paragraph", text: "To \"let go\" is not to try to change or blame another, it is to make the most of myself." },
      { type: "paragraph", text: "To \"let go\" is not to care for, but to care about." },
      { type: "paragraph", text: "To \"let go\" is not to fix, but to be supportive." },
      { type: "paragraph", text: "To \"let go\" is not to judge, but to allow another to be a human being." },
      { type: "paragraph", text: "To \"let go\" is not to be in the middle arranging all the outcomes, but to allow others to affect their own destinies." },
      { type: "paragraph", text: "To \"let go\" is not to be protective, it is to permit another to face reality." },
      { type: "paragraph", text: "To \"let go\" is not to deny, but to accept." },
      { type: "paragraph", text: "To \"let go\" is not to nag, scold, or argue, but instead to search out my own shortcomings and to correct them." },
      { type: "paragraph", text: "To \"let go\" is not to adjust everything to my desires, but to take each day as it comes, and to cherish myself in it." },
      { type: "paragraph", text: "To \"let go\" is not to criticize and regulate anybody, but to try to become what I dream I can be." },
      { type: "paragraph", text: "To \"let go\" is not to regret the past, but to grow and to live for the future." },
      { type: "paragraph", text: "To ‘let go\" is to fear less and to love more." },
      { type: "paragraph", text: "TO \"LET GO\"…..TAKES LOVE." },
      { type: "paragraph", text: "– Author Unknown" },
    ],
  },
  {
    slug: "what-is-perfection",
    title: "What is Perfection?",
    date: "January 22, 2014",
    summary: "Perfection vs. Excellence — a powerful comparison that reframes how we think about growth and achievement.",
    thumbnail: "/assets/articles/perfection-thumb.jpg",
    content: [
      { type: "paragraph", text: "Use what talents you possess: The woods would be very silent if no birds sang except those that sang best.– Henry Van Dyke" },
      { type: "paragraph", text: "Perfection is being right," },
      { type: "paragraph", text: "Excellence is willing to be wrong." },
      { type: "paragraph", text: "Perfection is fear," },
      { type: "paragraph", text: "Excellence is taking a risk." },
      { type: "paragraph", text: "Perfection is anger and frustration," },
      { type: "paragraph", text: "Excellence is powerful." },
      { type: "paragraph", text: "Perfection is control," },
      { type: "paragraph", text: "Excellence is spontaneous." },
      { type: "paragraph", text: "Perfection is judgment," },
      { type: "paragraph", text: "Excellence is accepting." },
      { type: "paragraph", text: "Perfection is taking," },
      { type: "paragraph", text: "Excellence is giving." },
      { type: "paragraph", text: "Perfection is doubt," },
      { type: "paragraph", text: "Excellence is confidence." },
      { type: "paragraph", text: "Perfection is pressure," },
      { type: "paragraph", text: "Excellence is natural." },
      { type: "paragraph", text: "Perfection is the destination," },
      { type: "paragraph", text: "Excellence is the journey." },
      { type: "paragraph", text: "– Anonymous" },
    ],
  },
  {
    slug: "how-to-raise-a-juvenile-delinquent",
    title: "How to Raise a Juvenile Delinquent",
    date: "January 29, 2015",
    summary: "A satirical guide from the Houston Police Department on exactly what NOT to do as a parent.",
    thumbnail: "/assets/articles/juvenile-delinquent-thumb.jpg",
    content: [
      { type: "paragraph", text: "from the Houston Police Department" },
      { type: "paragraph", text: "This handout gets a lot of reactions from people. It was written by policemen, not psychologists or psychiatrists. It appears to have been written in 1959. I like it because it addresses the \"Number One Problem\" facing families in the Metro Atlanta area: The reluctance of parents to be firmly in charge of their children." },
      { type: "numbered-list", items: [
        "Give the child everything he wants. In this way he will grow up believing the world owes him a living.",
      ] },
      { type: "numbered-list", items: [
        "When he picks up bad words, laugh at him. This will make him think he’s cute. It will also      encourage him to pick up cuter phrases that will blow off the top of your head later.",
      ] },
      { type: "numbered-list", items: [
        "Never give him any spiritual training. Wait until he’s 21 and let him decide for himself.",
      ] },
      { type: "numbered-list", items: [
        "Pick up everything he leaves lying around – books, shoes, clothing. Do everything for him so      he will be experienced in throwing all responsibility to others.",
      ] },
      { type: "numbered-list", items: [
        "Avoid the use of the word \"wrong.\" He may develop a guilt complex. This will condition him      to believe later, when he is arrested for stealing a car, that society is against him and he is      being persecuted.",
      ] },
      { type: "numbered-list", items: [
        "Let him read any printed matter he can get his hands on. Be careful that the silverware and      drinking glasses are sterilized, but let his mind feed on garbage.",
      ] },
      { type: "numbered-list", items: [
        "Quarrel frequently in the presence of your children. In this way they will not be too shocked      when the home is broken up later.",
      ] },
      { type: "numbered-list", items: [
        "Give a child all the spending money he wants.",
      ] },
      { type: "numbered-list", items: [
        "Satisfy his every craving for food, drink and comfort. See that every sensual desire is      gratified. Denial may lead to harmful frustration.",
      ] },
      { type: "numbered-list", items: [
        "Take his side against neighbors, teachers and policemen. They are all prejudiced against      your child.",
      ] },
      { type: "numbered-list", items: [
        "When he gets into real trouble, apologize for yourself by saying, \"I never could do anything      with him.\"",
      ] },
      { type: "numbered-list", items: [
        "Prepare for a life of grief. You will be apt to have it.",
      ] },
    ],
  },
  {
    slug: "checklist-for-hidden-anger",
    title: "Checklist for Hidden Anger",
    date: "January 22, 2014",
    summary: "A checklist to help determine if you are hiding anger from yourself, with insights on recognizing and discharging buried resentments.",
    thumbnail: "/assets/articles/hidden-anger-thumb.jpg",
    content: [
      { type: "paragraph", text: "From a handout of Onsite Workshops (www.onsiteworkshops.com), with additional information from Dr. Gore." },
      { type: "paragraph", text: "If we have any national fault, it is hiding our own anger from ourselves. Here is a checklist to help you determine if you are hiding your anger from yourself. Any of these is usually a sign of hidden, unexpected anger. If several of these items fit you, you would probably benefit from learning to better acknowledge your feelings." },
      { type: "paragraph", text: "Hidden anger is not about rage. This is about the feelings we call \"irritation,\" \"annoyance,\" getting mad\", etc. All these negative feelings have one thing in common: They are considered undesirable at best, and destructive at worst. We are taught to avoid them if possible (it isn’t) and certainly to avoid expressing them. Unfortunately, many people go overboard in controlling negative feelings: they control not only their expression, but their awareness of them as well." },
      { type: "paragraph", text: "Because you are unaware of being angry does not mean that you are not angry. It is the anger you are unaware of which can do most damage to you and your relationship with other people. The anger does get expressed, but in inappropriate ways. Freud once likened anger to the smoke in an old-fashioned wood burning stove. The normal avenue for the discharge of smoke is up the flue and out of the chimney. If the normal avenue is blocked, the smoke will leak out of the stove in unintended ways…around the door, through the grate, etc. choking everyone in the room. If all avenues of escape are blocked, the fire goes out and the stove ceases to function. Likewise the normal, human expression of anger is gross physical movement and/or loud vocalization: watch an unhappy baby sometime." },
      { type: "paragraph", text: "By age five or so we learn that such expressions are unacceptable to others and lead to undesirable consequences, such as being yelled at, beaten or having affection/attention withheld. We learn to \"be nice,\" which means (among other things) hiding \"bad\" feelings. By adulthood, even verbal expression is curtailed, since a civilized person is expected to be \"civil.\" Thus, expression is stifled, and to protect ourselves from the unbearable burden on continually unexpressed \"bad\" feelings, we go to the next step and convince ourselves that we are not angry, even when we are. Such self-deception is never completely successful, however–the blocked anger leaks out in inappropriate ways, some of which are listed above." },
      { type: "paragraph", text: "The items in the list are all danger signals that negative feelings are being bottled up inside. It is true that each of them can have causes other than anger (procrastination, for example, can be due to an extreme fear of failure), but the presence of any of them is reason enough for you to look within yourself for buried resentments. If you are human, you will find some. If you are fortunate, you will find few, since you learned effective ways of discharging them. If you are like most of us, you will need to unlearn old habits before you can learn new ways of handling \"bad\" feelings–new \"constructive\" ways, rather than the old \"destructive\" ways." },
      { type: "paragraph", text: "Getting rid of a lifetime accumulation of buried resentments is a major task, which can be one of the goals of psychotherapy. Whether such a process is necessary is for you to decide in consultation with a qualified professional. At a minimum, you should learn techniques which will help you to stop adding to the \"pile,\" no matter the existing depth of the \"pile.\"" },
      { type: "paragraph", text: "The process of dealing with perceived \"negative\" feelings can be divided into three parts for purposes of discussion:" },
      { type: "paragraph", text: "1) Recognizing the feeling. Labeling it. Embracing it." },
      { type: "paragraph", text: "2) Owning it- acknowledging that it is yours." },
      { type: "paragraph", text: "3) Discharging it- acting on it in a positive, healthy way." },
      { type: "paragraph", text: "These three steps are greatly intertwined. If you do them enough, your pile will get smaller. Stay with it and your children will have smaller piles, too" },
    ],
  },
  {
    slug: "on-feelings",
    title: "On Feelings",
    date: "",
    summary: "Understanding the difference between thinking and feeling, with short, medium, and long lists to help you identify your emotions.",
    thumbnail: "/assets/articles/feelings-thumb.jpg",
    content: [
      { type: "paragraph", text: "In this video I talk about emotions, and how to lean into them, not steer away from them. It is scary, it is sad, it will make you feel lonely….nah, it won’t, but it’ll explain why emotions are important." },
      { type: "paragraph", text: "Embracing feelings is not easy, in fact, a lot of people spend a lot of energy trying to avoid their feelings. Thinking is easier and safer for most, thinking uses logic and rational ideas. Emotions are “wilder” and more unpredictable. They can overwhelm you. They can confuse you. Some of us have spent our whole lives running from them." },
      { type: "paragraph", text: "We try to cover up our feelings with success. We try to cover up our emotions with activities. We try drugs and alcohol. We try over-exercising, over-eating or over-working…but, our feelings remain with us." },
      { type: "paragraph", text: "Most of us were not given a vocabulary of feelings, we weren’t taught the language. It is a simple lexicon: mad, sad, happy, fear, aloneness, connectedness, shame, happiness and guilt. Because I am in a good mood: I will allow “disgust” to be included in this list of core feelings." },
    ],
  },
  {
    slug: "passive-assertive-aggressive-behavior",
    title: "Passive Assertive Aggressive Behavior",
    date: "",
    summary: "Understanding the spectrum from passive to assertive to aggressive behavior, and why assertiveness matters.",
    thumbnail: "/assets/articles/passive-assertive-thumb.jpg",
    content: [
      { type: "paragraph", text: "No matter what problems bring people into therapy, I am amazed at the number of people who have difficulties with assertiveness. Here is a hand out that my clients have found helpful. (*From an anonymous handout, with additional information from Dr. Gore)" },
      { type: "paragraph", text: "NOTE: This page does NOT discuss passive-aggressive behavior. For a discussion of this issue, please click here." },
      { type: "paragraph", text: "WHAT IS PASSIVE BEHAVIOR?" },
      { type: "paragraph", text: "It allows others to choose for you." },
      { type: "paragraph", text: "It denies you feelings." },
      { type: "paragraph", text: "It rarely gets you what you want." },
      { type: "paragraph", text: "It shows that you think little of yourself." },
      { type: "paragraph", text: "It diminishes your self-respect." },
      { type: "paragraph", text: "It helps others to walk all over you." },
      { type: "paragraph", text: "It may or may not be based on self-awareness." },
      { type: "paragraph", text: "It requires self-discipline." },
      { type: "paragraph", text: "It often leads to an emotional explosion." },
      { type: "paragraph", text: "It alternates between powerlessness and outbursts of anger." },
      { type: "paragraph", text: "It leads to isolation, you tend to run away from people, places and things." },
      { type: "paragraph", text: "It creates a mentality of \"victimhood\" which then fuels more passive behavior, which leads to more feelings of \"victimhood,\" which continues in a painful,debilitating cycle. You CAN stop this cycle." },
      { type: "paragraph", text: "WHAT IS ASSERTIVE BEHAVIOR?" },
      { type: "paragraph", text: "It is active behavior." },
      { type: "paragraph", text: "It is behavior that allows you to choose for yourself." },
      { type: "paragraph", text: "It expresses how you feel." },
      { type: "paragraph", text: "It has a good chance of achieving your goal." },
      { type: "paragraph", text: "It increases your self-respect." },
      { type: "paragraph", text: "It improves your relationships with others." },
      { type: "paragraph", text: "It is based on a great deal of self-awareness." },
      { type: "paragraph", text: "It requires self-discipline." },
      { type: "paragraph", text: "It leads to conflict resolution." },
      { type: "paragraph", text: "It helps set and maintain better boundaries between you and others." },
      { type: "paragraph", text: "It leads to personal power." },
      { type: "quote", text: "Assertive behaviors are difficult to achieve, but striving for assertiveness is worth any amount of effort." },
      { type: "paragraph", text: "WHAT IS AGGRESSIVE BEHAVIOR?" },
      { type: "paragraph", text: "It is active behavior." },
      { type: "paragraph", text: "It chooses for others as well as for you." },
      { type: "paragraph", text: "It expresses how you feel." },
      { type: "paragraph", text: "It shows that you think the world revolves around you." },
      { type: "paragraph", text: "It achieves your goal with no regard for the rights of others." },
      { type: "paragraph", text: "It breaks down your relationships with others." },
      { type: "paragraph", text: "It is based on limited self-awareness." },
      { type: "paragraph", text: "It leads to power that is frequently rebelled against." },
      { type: "quote", text: "Aggressive people have difficulty in seeing why they are often lonely and how they push people away." },
      { type: "quote", text: "Assertiveness can be situational — you may assert yourself with some people and in some places, and not in others." },
      { type: "quote", text: "If you are passive in some situations, you can tend to become aggressive in others." },
      { type: "quote", text: "If you are passive, you can build up anger and resentment and \"explode\" into aggressive behavior-bypassing assertive behavior" },
      { type: "paragraph", text: "altogether." },
      { type: "paragraph", text: "* Assertive people are good time managers." },
      { type: "paragraph", text: "* Assertive people can ask for what they want." },
      { type: "paragraph", text: "* Assertive people can say \"YES.\" Assertive people can say \"NO\" (NO is a complete sentence)" },
      { type: "paragraph", text: "* Assertive people can accept a compliment. Assertive people can accept criticisms. * Assertiveness can be learned" },
    ],
  },
  {
    slug: "eleven-simple-words",
    title: "Eleven Simple Words to Teach Your Children. Or, Eleven Simple Words To Teach Yourself.",
    date: "January 10, 2014",
    summary: "Three powerful phrases every parent — and person — should learn: I Don't Know, I Need Help, and This Doesn't Feel Right.",
    thumbnail: "/assets/articles/eleven-words-thumb.jpg",
    content: [
      { type: "heading", text: "(Or, Better Yet, Eleven Simple Words To Teach Yourself, Then Go Out And Have Some Children, Then Teach Them, Too)" },
      { type: "paragraph", text: "Words 1-3: I Don’t Know" },
      { type: "paragraph", text: "These words are powerful. Learn to say them, even if you think others may judge you as stupid or naïve. You are not stupid or naïve when you ask questions…asking questions comes out of a place of self esteem and power, not lack of intelligence." },
      { type: "paragraph", text: "I saw a bumper sticker once that said: Less judgment, more curiosity. Wow, I never realized that curiosity is the opposite of judgmentalism…but that makes sense, no?" },
      { type: "paragraph", text: "Teach your kids to ask every question they have." },
      { type: "paragraph", text: "Words 4-6: I Need Help" },
      { type: "paragraph", text: "Again, these are powerful words. They are not a sign of weakness. Needing help is OK, and asking for help is necessary. Don’t assume that others can read your mind and offer help to you when you need it. Asking for help is tough to do, but, will lead to you feeling better. Ironically, the easier it is for you to ask for help, the less needy you will feel. This is important, so allow me to repeat myself: The easier it is for you to ask for help, the less needy you will feel." },
      { type: "paragraph", text: "Words 7-10: This Doesn’t Feel Right" },
      { type: "paragraph", text: "Someone with good self esteem will get out of a situation which is uncomfortable. We have that power, we can leave wrong situations. One of the most important things to teach our children about friendship and dating is that they need to trust their own inner voices. If someone is making them not feel OK, then it is NOT OK. We need to trust our inner voices: \"Does this situation feel GOOD or does it feel YUCKY?\" If something feels wrong but it should feel right, it is wrong. Our inner compass is more important than \"shoulds\" placed upon us." },
      { type: "paragraph", text: "Another example of this, unrelated to relationships: When I was 29, I searched nationwide for a job. I found myself in Aspen, Colorado interviewing with a psychologist who wanted me to join his practice. Never being there before, I had imagined that Aspen was a town of a quarter million people, a small town by my standards, but a \"happening\" place for a single young man." },
      { type: "paragraph", text: "I found a town with less than 10,000 people and one stop light! I asked the shrink what one does around here other than skiing and drinking. He told me that mountain biking, hiking, camping and running were really big in Aspen. \"That would be great,\" I thought." },
      { type: "paragraph", text: "Now, I wasn’t then, nor was I ever, a biker, a hiker, a camper or a runner, but…I was thinking to myself, \"I can learn to bike, and hike, and camp and run. Yeah, I can see this working out just great.\"" },
      { type: "paragraph", text: "I went home to think about it further, and, luckily, realized that I would be miserable there. I am a big city guy, not an outdoorsman. Never was, and probably will never be. I was trying to fit a round peg in a square hole. I turned down the practice offer." },
      { type: "paragraph", text: "Had I more self esteem at the time, I would have looked the guy in the eye and said, \"Sorry, but this just won’t be a good fit for me.\" It takes self esteem to realize when something isn’t working right." },
      { type: "paragraph", text: "The Eleventh Word: No" },
      { type: "paragraph", text: "\"No\" is not only a word, but, it is also a complete sentence. Learn to say no, without apologies, excuses or explanations. \"No\" is a big part of assertiveness, and, a big part of taking care of yourself." },
      { type: "paragraph", text: "Now, I know you parents are thinking that it would be crazy to teach a child to say no, as they say it so easily already. I hope you understand that I am encouraging the teaching of assertiveness and to be true to yourself." },
      { type: "paragraph", text: "I would like to end with a story about my favorite teacher in eighth grade, Mr. Laffer. He was a hippy with a beard and bright red hair. I loved science, and he may not have loved me, but Mr. Laffer liked me and enjoyed my sense of humor." },
      { type: "paragraph", text: "When it was yearbook time, I looked forward to seeing what he would write to me (yeah, I know, I wasn’t too cool at the time). He wrote: \"To thine own self be true\" and signed it. I read it, and was disappointed. I thought about it and went back to him and had him write something else to me." },
      { type: "paragraph", text: "As time moves on, I realize that Mr. Laffer’s original inscription is actually the best instruction one can give a thirteen year old. By the way, I was totally shocked to later learn that it was some guy named Shakespeare, and not Mr. Laffer, who originated the quote." },
    ],
  },
  {
    slug: "chasing-misery",
    title: "Chasing Misery: How to Stay Unhappy, Lack Serenity and Avoid Joy in Your Life",
    date: "January 9, 2014",
    summary: "A satirical guide to staying unhappy — reverse psychology techniques for finding serenity and joy.",
    thumbnail: "/assets/articles/chasing-misery-thumb.jpg",
    content: [
      { type: "paragraph", text: "We all have choices. \"Free will,\" I believe it is called. If you want to stay unhappy, there are some proven ways to accomplish this. Time after time, I have seen these ideas put successfully into action, making NOT ONLY the person who practices these techniques miserable, but, also allows those around them, especially spouses and children, to maintain a perpetually high level of misery, too. These techniques are quite powerful, and should only be attempted by people who are truly, sincerely dedicated to maximizing their unhappiness." },
      { type: "paragraph", text: "**Stay in a state of fear** One can see the world as a safe place, or one can live in fear of real and imagined pain, hazards and difficulty. Fear can keep you inside of your house forever, with the wrong person forever, in the same job forever, etc. Here is a fact: 98% of what we worry about never happens. But remember, there's always that two per cent chance on which to maintain our focus." },
      { type: "paragraph", text: "**Endlessly analyze and don't make any changes** It's fine to understand what is going on with you, others or the world, but be careful of the paralysis by analysis trap. You know the joke about the guy who has been wetting the bed for twenty years? Now that he has been in therapy for the last fifteen years, he still wets the bed, but now he knows why he wets the bed. Find a therapist who will help you gain insight into problems, but will never provide any direction or support about actually changing those problems." },
      { type: "paragraph", text: "**Don't listen to anybody** We sometimes get stuck in our own little ways of thinking about or doing things. Other people can be helpful to give us a new perspective or new possibilities, so, don't listen to anybody. Always assume that you know better than they do." },
      { type: "paragraph", text: "**Listen to everybody** At the same time, letting other people's views of what is right for you dominate your life can keep you pretty unhappy. Try to keep on pleasing most people who are around you. For those of you who truly want to stay stuck in misery, keep on trying to please the people who can never be pleased." },
      { type: "paragraph", text: "**Blame others for your actions or problems** If things happen to go wrong, take heart in the knowledge that it was not your fault. If you search hard enough, you can find somebody or something to blame. No matter what, never take responsibility for your own actions. If all else fails, then blame your mother. This technique of mother-blaming is very effective, and tends to please analytic psychiatrists to no end. Oh, heck....let's give this one its own section:" },
      { type: "paragraph", text: "**It's all your mother's or your father's fault** If you had a less than ideal childhood, if your parents were not very good parents, or, just outright bad parents....then of course you are unhappy. If your problem was one of parental neglect or abandonment...then, of course you are miserable. My definition of a dysfunctional family is any family composed of two or more people. If your parents did a lousy job, then you can spend the rest of your life holding on to that pain. It is possible to move beyond that hurt and pain, but it is easier to hold on to the resentment, anger and sadness." },
      { type: "paragraph", text: "**Blame yourself or put yourself down regularly** If you haven't mastered to art of blaming others and your life is not going well, you might as well blame yourself, and continually put yourself down. Making a habit of negative self-talk will almost assuredly demoralize you and undermine your confidence." },
      { type: "paragraph", text: "**Hold on to anger** Anger is a feeling. You can choose to appropriately deal with your anger, or not. You can hold on to it, or let it go. Appropriate, safe expression of anger will allow anger to leave your body and leave you feeling lighter, happier and free. Holding on to anger is a sure recipe for ulcers, headaches, heart disease and probably cancer, too. Holding on to anger will also keep people away from you, allowing you to isolate and really focus your energy on how you have been wronged. One of the surest recipes for unhappiness is allowing resentments and anger to linger." },
      { type: "paragraph", text: "**Practice and perfect passivity** Staying stuck in one place is the perfect breeding ground for depression and anxiety. Learn to stay in one place and really, really avoid any temptation to do something different. NEVER be assertive and ask for what you need...You may become disappointed. Becoming a victim takes dedication and practice, but it is attainable if you want it badly enough." },
      { type: "paragraph", text: "**Have no sense of spirituality** To paraphrase that famous sociologist Madonna Ciccone, \"We are living in a material world.\" Focus on the attainment of goods, and ignore the invisible threads that connect all things. Equate all spiritual beliefs with religious beliefs, and throw the baby out with the bathwater. Believe that there is no higher power, that all things are random and that you are the most powerful thing in the universe." },
      { type: "paragraph", text: "**Do no charity or volunteer work** Do I really need to explain this one? You can't stay focused on your misery and simultaneously help someone. Besides, do you really have time to help others?" },
      { type: "paragraph", text: "**Keep doing the same thing that doesn't work** If what you are doing isn't working keep doing it. Why keep doing the same thing? Because it is familiar, comfortable and easier than changing. Change is scary. Here is a great quote: People from dysfunctional families seek out familiar pain. Bob Earll said it, but he probably stole it from somebody else." },
      { type: "paragraph", text: "Bill O'Hanlon re-tells a story: A man was drunk and on his hands and knees under a street light, obviously looking for something. A cop walks by and asks the man what he is doing. The man says that he dropped his house keys and is looking for them. The cop starts helping him look for the keys. After ten minutes of futile searching, the cop asks, \"Now, where was the last place you remember having your keys?\" The man said he had them in his hand, for sure, when he was across the street. The cop was confused, \"If you had them across the street, why are you looking for your keys here and not across the street?\" The man replied, \"Well, the light is much better here.\"" },
      { type: "paragraph", text: "**Keep thinking the same thoughts when those thoughts don't help** Some people think changing your thinking will result in changing your actions. Others think you need to change your actions, then your thoughts will change, too. Regardless of how you approach it, not changing your thinking style or your thoughts will almost certainly make changing impossible." },
      { type: "paragraph", text: "**Keep putting yourself in the same unhelpful environment** When you are in a situation that is awful, like a poor work environment or a friendship where you feel continually taken advantage of, stay in that environment. Again, change is scary, and by staying put you will eliminate any anxiety brought about by trying to do something different." },
      { type: "paragraph", text: "**You heard it here first, folks: Misery Loves Company** If you are around unhappy people almost exclusively, then the chance of your finding happiness is minimal. There is really no better way to spend time than with people who insist on lamenting about how bad things are. Victimhood is contagious." },
      { type: "paragraph", text: "**Don't ask for help** If you can't do something or need something or want to learn something, figure it out yourself. Don't seek other's input, they probably know less than you do, anyway. Asking for help is a sign of weakness." },
      { type: "paragraph", text: "**Don't trust your inner voice** As we grow older, we learn to distance ourselves from our true self. If you get a nagging feeling in your gut, ignore it. Use your head, not your heart. Don't trust any feelings that you can't absolutely be sure of. Kramer, Jerry's neighbor, once said, \"What does the Little Man say? Listen to the Little Man, George.\" Now, you aren't going to take advice from the likes of Kramer, are you...you see how he turned out, didn't you?" },
      { type: "paragraph", text: "**Seek addiction in your life** One sure way to be miserable is to be actively engaged in an ongoing addiction. If you can't muster up the dedication needed to be an addict, try marrying one instead. And, check this out: It doesn't matter what the addiction is! You can be a food addict, a sex addict, a pill addict, an alcoholic, a compulsive gambler, a compulsive spender....it doesn't matter. All addiction has at its core a commonality: Addicts are uncomfortable in their own skins. And staying in the addiction ensures that this discomfort never fades." },
      { type: "paragraph", text: "**Lie, Deny and Lie** Dishonesty breeds unhappiness, and unhappiness breeds dishonesty. Denial is powerful; one can truly fool one's self. On the other hand, when we lie to others, we tend to know we are lying. Living a life of lies almost guarantees misery. Lie to yourself, lie to others, and then lie about lying!" },
      { type: "paragraph", text: "**Procrastinate** This is very powerful. When you procrastinate, you almost always are thinking about what you should be doing but are NOT doing. This makes you miserable. Then, when you absolutely have your back up against the wall, and work furiously to finish a task you should have started \"X\" amount of days ago, you will be miserable as you try to complete the task. And, usually do a lousy job at the task. Then, when you finally are finished, you will feel miserable and unsatisfied....but you will still procrastinate the next time, too." },
      { type: "paragraph", text: "**External self-esteem** There is self-esteem and there is OTHER-esteem. Other-esteem is having one's view of oneself dependent on what somebody else thinks of me. In addition, other-esteem is having one's view of oneself dependent on \"things,\" like, \"I am as good as the kind of car I drive.\" Or, \"I am as good as my job says I am.\" If we seek happiness from without, rather than from within, than happiness will always elude us. However, it is good for the economy.....and, you do love America, don't you?" },
      { type: "paragraph", text: "**Have a disorder** People show up in my office wearing designer clothing and designer diagnoses. The new, \"hot\" ones include Attention Deficit Disorder, Bipolar Disorder, and Fibromyalgia. Truly lucky people can have all three diagnoses at the same time if they were fortunate enough to have the correct doctors before they meet me. Having a bona fide disorder makes changing that much more difficult...and that is what is important, isn't it?" },
      { type: "paragraph", text: "**Isolation is a key component of misery** Our ability to connect with others at a deep level is a constantly evolving skill. People tend to get better at being social as they age. Some people never learn to connect with others and give up trying. A special note for women: Learn to distrust and not spend time with other women. I often hear \"I just prefer to be with men, all my friends are men -- women are so ______.\" Learn to fill in the blank: \"catty,\" \"backstabbing,\" \"gossipy,\" \"manipulative,\" \"boring,\" \"superficial,\" \"too vain,\" etc. Ladies, learn your own ways to avoid intimacy with other women." },
      { type: "paragraph", text: "And men? Well, since we don't like to talk anyway, isolation comes easier to us. If, as a man, you are required to interact with others, keep all communication at a simple, non-feeling level. I have found that talking about sports or work is an effective block to having any true connections with others." },
      { type: "paragraph", text: "Hey! How 'bout them Braves?" },
      { type: "paragraph", text: "---" },
      { type: "paragraph", text: "*This article is a much expanded version of a handout from Bill O'Hanlon. It is adapted here with his permission, and I thank him for that. Bill's work can be found at [www.billohanlon.com](http://www.billohanlon.com/)*" },
    ],
  },
  {
    slug: "why-play-therapy-is-stupid",
    title: "Why Play Therapy is Really, Really Stupid",
    date: "April 11, 2017",
    summary: "A provocative article on why family therapy is the modality of choice for helping children, not individual play therapy.",
    thumbnail: "/assets/articles/play-therapy-thumb.jpg",
    content: [
      { type: "paragraph", text: "Play therapists believe the way to help a child is through accessing their “inner world” via play.  They get on the floor and play board games with the children, play in sandboxes and dollhouses, have the kids do drawings and make other forms of art work, and engage and interact with children." },
      { type: "paragraph", text: "Now, I think playing with children is quite important. I love playing with children.  However, I think having parents sit in my waiting room while I engage their child in a game is vainly wrong.  Who am I to think that one hour a week with me, even if I am the greatest child therapist in the world, is going to create a change in the child who is with their parents for the other 167 hours of the week?" },
      { type: "paragraph", text: "All behavior must be viewed and understood in context.  Allow me to repeat myself:  All behavior must be viewed and understood in context.  A child’s context consists of their home, their siblings, their friends, their school, their parents and anyone else with whom they have significant contact (nannies, grandparents, aunts, etc.)" },
      { type: "paragraph", text: "Now, play therapy is useful, if you are working with orphans.  You need to get into their heads to understand their issues (which usually consist of “Why am I in an orphanage?”, “How am I doing in this orphanage?” and, “How can I get out of this orphanage?”).  If there are no parents with whom to interact, then let the play therapy begin." },
      { type: "paragraph", text: "And, play therapy may be useful for one or two sessions as a way to engage the child more fully into the family therapy.  Or, it is one way to help understand the child and how he or she fits or doesn’t “fit” with the rest of his or her family." },
      { type: "paragraph", text: "My strong belief is:  To help children, the modality of choice is family therapy." },
      { type: "paragraph", text: "Family therapy is difficult for parents.  We don’t usually sit around and discuss what you did right…the focus tends to be on changing interactions that don’t work well for your family." },
      { type: "paragraph", text: "Some Examples of Problems That Can Be Resolved with Family Therapy" },
      { type: "paragraph", text: "The problems can be quite different, yet, research shows most problems with children can be resolved via family-based interventions." },
      { type: "paragraph", text: "School Avoidance:  Family therapy should be utilized to make the little student go to school.  The cure for school avoidance is school attendance.  And that means tomorrow, not next week." },
      { type: "paragraph", text: "Depression in children:  Family therapy should be utilized to help engage the child in activities that do not serve the depression well, like, exercise, joining clubs, playing with others, getting some excitement going about learning a new skill, etc.  Note:  Drug companies don’t agree, but, I think true depression in children is fairly uncommon.  Depression can occur for periods of time in children, but, children are remarkably resilient.  Drugs may be indicated for a child, but, again, only after other therapies have failed.  To treat a child with drugs as the first attempt at treatment is wrong.  And, to medicate a child without therapy is wrong.  Let me say this again:  To medicate a child without therapy is wrong." },
      { type: "paragraph", text: "HOT DIAGNOSIS ALERT:  Attention, consumers of mental health services, there is new diagnosis being highly-touted and advertised by the pharmaceutical industry.  That hot, hip diagnosis is Bipolar Disorder in your child.  DO NOT BE GULLIBLE.  There are some Bipolar Children out there, like, maybe, four in all of Georgia.  If somebody told you your child is Bipolar, please get a second opinion.  If your kid is sad sometimes, and really angry at other times:  It means he or she has feelings, not a Bipolar Disorder." },
      { type: "paragraph", text: "Social difficulties:  Family therapy should be utilized to help engage the child in activities that enable shy, socially awkward or isolative children to be with other children.  The cure for social difficulties is to get a child to be more social…not to play Candyland with his or her therapist.  And, our playing with sand figures won’t help his or her social issues, either." },
      { type: "paragraph", text: "Anxiety in children:  Family therapy should be utilized to help decrease anxiety in children.  I am now going to say something really hard for parents to hear:  I have never treated an anxious child who did not have at least one anxious parent.  This is really important, so, I will say it twice:  I have never treated a child for anxiety who did not have at least one anxious parent.  A family pattern of anxiety is a gift that keeps on giving and giving and giving…." },
      { type: "paragraph", text: "“Acting out” behaviors in children:  Family therapy should be utilized to help decrease the “acting out” types of behaviors.  These behaviors include:  attention deficit types of behaviors, impulsivity, anger and angry outbursts, distractibility, overt defiance at home or school, minor criminal behaviors, destructiveness, threatening acts, violence, etc.  I can get on the floor and play with clay and figure out why Johnny is smashing dishes during dinner, or, we can work as a family to end this “Pathological Plate Smashing Disorder” right away." },
      { type: "paragraph", text: "Does family therapy always work on these acting-out behaviors?  No.  Sometimes, families just wait too long to get help.  I can’t count the number of times I have had families say to me, “I wish we did this when Junior was seven years old, instead of now.”" },
      { type: "paragraph", text: "Does family therapy usually work for these behaviors?  Yes." },
      { type: "paragraph", text: "Does individual therapy for a child often go “hand in hand” with the family therapy?  Yes." },
      { type: "paragraph", text: "Is individual therapy ever appropriate?  I feel individual therapy is very appropriate when the entire system is also being “worked on.”  Individual therapy for a child (including Play Therapy) is great, as long as the contextual issues are being addressed clearly and directly.  My experience is that if the entire family is dealing directly with the issues, then there is often no real need for individual child therapy." },
      { type: "paragraph", text: "Beware:  I have worked at places that proclaim to do family therapy, yet, do hardly any family therapy at all.  They meet with the parents for a few minutes (or, usually, with the mother because the father is at work), then meet with the child for a half hour, then finish up by meeting with the mother again.  Sometimes, if these “family therapists” are feeling particularly bold that day, they finish up with the mother and the child together (!!) in the same room for a few minutes.  This is not family therapy.  This is dangerous because it can create the illusion that the parents have truly attempted to address their issues." },
      { type: "paragraph", text: "To close:  I believe that children can be compared to “gas” as it was described in one my daughter’s middle school Physics textbook:" },
      { type: "paragraph", text: "A gas has no definite volume or definite shape.  A gas always takes both the volume and the shape of any container into which it is placed." },
      { type: "paragraph", text: "I can go on, but, my point is simple:  You are the most important agent of change for your child or teenager.  There are 168 hours in week.  One hour per week of trying to better understand what a child is experiencing is not going to help if a child’s context doesn’t allow or create change." },
      { type: "paragraph", text: "Please allow me to repeat myself:  One hour per week of trying to better understand what a child is experiencing is not going to help if a child’s context doesn’t allow or create change." },
      { type: "paragraph", text: "Sincere Apology Section:" },
      { type: "paragraph", text: "Pre-emptive Apology and Disclaimer:  This article has angered some Play Therapists.  Sorry.  The above is just my opinion.  I am sure play therapy, by itself, has helped dozens of children over the last fifty years." },
      { type: "paragraph", text: "No, Really, Here Is the Truth:  I guess I am not all that sorry about this article.  I truly believe that individually treating children usually doesn’t help children, and, in fact, often prevents children from getting the help they need.  And, in no way did I mean to insult orphans, either." },
    ],
  },
  {
    slug: "child-psychology",
    title: "Child Psychology",
    date: "January 6, 2013",
    summary: "What is child psychology? A different perspective on helping children through family systems rather than individual therapy.",
    thumbnail: "/assets/articles/child-psychology-thumb.jpg",
    content: [
      { type: "paragraph", text: "What is child psychology1? For most professionals who work with children, a child psychologist is someone whose job is to \"fix\" your child. They usually \"fix\" your child by spending many, many, many sessions with your child. First, they form a relationship with your child. This will take an average of six and one-half sessions2. Then, these individually-focused therapists use this new \"relationship\" to try to get your child to gain insight into their maladaptive behaviors. Then, they tell you to have patience, as this type of therapy takes a long time3 to have an impact. During this therapy, they will meet with you, the parents, briefly and sporadically. These individually-focused therapists will tell you that things are either progressing well, or, not so well. But, they will meet with you occasionally. I was trained differently, and, I believe most child psychologists (and play therapists) are really trying to perform a \"Parentectomy4.\"" },
      { type: "paragraph", text: "What do I do with my child psychology clients? First, as a child psychologist, I know children really well. And, as a family therapist, I understand families really well. I meet with the whole family for the initial visit, sometimes meeting alone with parts of the family for parts of this first session. But, I always keep the whole system5 in mind. I believe that parents can be put in a position to help their children NOT need a child psychologist. This shouldn’t take a long, long, long time." },
      { type: "paragraph", text: "Footnotes:" },
      { type: "paragraph", text: "1- This is the first sentence of this article, which, I feel, effectively captures the tone of this piece." },
      { type: "paragraph", text: "2- I made this up, but I am pretty sure I am close." },
      { type: "paragraph", text: "3- Originally written as \"a long, long, long time\"" },
      { type: "paragraph", text: "4- A painful surgical procedure where a child is artificially treated (and viewed) as if they exist independently of his or her parents." },
      { type: "paragraph", text: "5- Most child psychologists see a child as existing in a world where parents are merely impediments to a child’s health6." },
      { type: "paragraph", text: "6- I am not sure if one is allowed to footnote a footnote, but, I feel parents are a child’s best chance of the child \"getting his or her act together.\"" },
    ],
  },
  {
    slug: "premarital-counseling-faqs",
    title: "Premarital Counseling FAQ's",
    date: "",
    summary: "Frequently asked questions about premarital counseling — what to expect, why it matters, and Dr. Gore's humorous take.",
    thumbnail: "/assets/articles/premarital-thumb.jpg",
    content: [
      { type: "paragraph", text: "Q: Is it true you know everything about being married? A: Yes, it is true.  Don’t tell my wife, though, she’ll hyperventilate from laughter if she heard me say that…" },
      { type: "paragraph", text: "Q: Well, we are thinking about getting married, do you offer premarital counseling? A: Yes, I love doing premarital counseling." },
      { type: "paragraph", text: "Q: What is your approach? A: I believe the couple should commit to a minimum of four sessions, and, at the end of the fourth session we should all decide if we are “done for now,” or, if some more work needs to take place." },
      { type: "paragraph", text: "Q: Why four sessions? A: In the first session, we will talk about what is going on “Today,” do some history-taking, and talk about how you met.  In the second and third sessions, we will take a family history (you decide who goes first or second) and look at the patterns of relationships/marriage in each of your families. We will look at what messages and “rules” you bring to the marriage.  We are a product of our families, you know…" },
      { type: "paragraph", text: "Q: My parents are  ___________ (CHOOSE ONE:  A-Divorced; B-Crazy; C-Mildly Dysfunctional; D-Doing Hard Time; or, E-All of the above). What if we want our marriage to look nothing like other marriages in our family? A: Then doing some preparation now will help prevent any of those old patterns from emerging.  I love when I see a couple who say:  “We want this to work, but, neither of us knows what to do…”  We all need help with relationships." },
      { type: "paragraph", text: "Q: OK…so what about that fourth session? A: At that time, we talk about what I feel are your potential “sticking points,” places where you will need to work on improving.  I give you direct, honest feedback.  If I say something you don’t agree with, then we figure out where I “might have missed something.”  My goal is that by the end of this fourth session, you will feel clearer about your relationship, and that I have “set the stage” for you to work on and prevent problems." },
      { type: "paragraph", text: "Q: But you are so expensive! A: If you spend thirteen hundred bucks with me, it will be a better, longer-lasting investment than the flowers you’re buying for your wedding.  And, I actually smell better than many types of flowers." },
      { type: "paragraph", text: "Q: Can’t you just recommend a book? A: There is no single outstanding book…I feel each couple has their own unique issues, but…feel free to read all you want about healthy marriages.  I simply haven’t found that one great book to recommend to people." },
      { type: "paragraph", text: "Q: What types of religions do you work with? A: Any kind except certain sects of Polygamous Mormons. I simply lack the physical space in my office. No…I kid.  I love Mormons, I am a big Karl Malone fan." },
      { type: "paragraph", text: "Seriously, it doesn’t matter what type of religious affiliation you have (or don’t have).  My approach is not religion-based, but, we will certainly discuss religious and spiritual beliefs and see if you are having any issues in that area." },
      { type: "paragraph", text: "Q: Why would we come to you instead of our Pastor/Minister/Priest/Reverend/Rabbi? A: I curse more." },
      { type: "paragraph", text: "Q: Really? A: Well, probably, but, I feel I can go deeper and quicker than most other folks.  I can address what you two need, not what some “program” says you need.  You can also do both, by the way:  You can see someone from your house of worship…and see me." },
      { type: "paragraph", text: "Q: What if at the end of four sessions you tell us not to get married? A: I have never done that, but, I have seen couples who feel that four sessions are just a beginning, and stick around and do more work on their issues." },
      { type: "paragraph", text: "Q: You keep on using the term “work.”  Isn’t love supposed to be easy? A: Only in love songs and movies, kids.  Sigmund Freud (who is quite dead and often quite wrong) said:  We are here to work and to love.  Dr. Gore says:  We need to love our work, and work at love." },
      { type: "paragraph", text: "Q: Isn’t love enough? A: If it was, would you still be reading this?  Do the “work” now, it will be easier to deal with your “stuff” now, instead of five years from now…" },
      { type: "paragraph", text: "I believe in marriage.  I believe in working on relationships on an ongoing basis.  I believe the best gift we can give ourselves, and give to our children, is a happy marriage." },
    ],
  },
  {
    slug: "does-my-child-have-bipolar-disorder",
    title: "Doctor, Does My Child Have Bipolar Disorder?",
    date: "January 3, 2014",
    summary: "No. A direct and honest take on the over-diagnosis of bipolar disorder in children.",
    thumbnail: "/assets/articles/bipolar-thumb.jpg",
    content: [
      { type: "paragraph", text: "No." },
      { type: "paragraph", text: "Note: Drug companies and psychiatrists believe bipolar disorder in adults occurs with some frequency, I feel it is a rare phenomenon. Most folks mislabeled bipolar are, in fact, people who are abusing drugs and alcohol (prescribed drugs and non-prescribed drugs). True bipolar disorders in adults hardly happens and is misdiagnosed frequently. With children, I believe there may be fourteen kids in all of America who have bipolar disorder in childhood. Everyone else is a child who is defiant, impulsive, explosive, unpredictable, angry, violent, threatening, etc. Why would children act this way? Because they can. And, because it “works” for them. These children have convinced their parents and their teachers that they are simultaneously in charge of the family/classroom while simultaneously being totally out of control. Your child is not bipolar, your child needs to learn to behave by you parenting him or her differently." },
    ],
  },
  {
    slug: "enabling-versus-caring",
    title: "Enabling Versus Caring",
    date: "January 13, 2013",
    summary: "A side-by-side comparison of enabling behaviors versus truly caring behaviors in relationships.",
    thumbnail: "/assets/articles/enabling-caring-thumb.jpg",
    content: [
      { type: "comparison", columns: {
        left: [
          "I protect",
          "I control",
          "I carry their feelings",
          "I don't listen",
          "I rescue",
          "I fix",
          "I feel... tired, anxious, fearful, over-responsible",
          "I can't trust",
        ],
        right: [
          "I share",
          "I confront",
          "I am sensitive",
          "I listen",
          "I don't rescue",
          "I let consequences naturally occur",
          "I feel... relaxed, free, aware, highly-esteemed",
          "I can trust",
        ]
      } },
    ],
  },
  {
    slug: "loved-one-drugs-alcohol",
    title: "When a Loved One Has a Problem with Drugs or Alcohol: What Works and What Doesn't",
    date: "October 24, 2014",
    summary: "A comprehensive guide on what to do (and what NOT to do) when someone you love is struggling with addiction.",
    thumbnail: "/assets/articles/loved-one-problem-thumb.jpg",
    content: [
      { type: "heading", text: "Here is what not to  do:" },
      { type: "list", items: [
        "Stay  in denial: Pretend things aren’t that bad.",
      ] },
      { type: "list", items: [
        "Stay  in denial: Think that what is wrong is NOT a function of the drugs and/or  alcohol usage. (He is just depressed./He just has an anxiety disorder./He has  ADD./He is under a lot of stress.)",
      ] },
      { type: "list", items: [
        "Stay  in denial: Think that things will change.",
      ] },
      { type: "list", items: [
        "Subtly,  indirectly, discreetly, and meekly discuss your concerns with the person who  drinks/drugs too much. Let’s make this pretend “problem person” a male  (although the likelihood of the problem person being a female is pretty much  the same), and call him “Bud.” Meekly tell Bud your feelings about his drinking  and/or drugging.",
      ] },
      { type: "list", items: [
        "Bud  will say, “I am fine.”",
      ] },
      { type: "list", items: [
        "Then,  meekly tell Bud you don’t think he is “fine” and you wish he would stop, or at  least slow down.",
      ] },
      { type: "list", items: [
        "Two  things will happen now:",
      ] },
      { type: "list", items: [
        "Bud  will say he will slow down, then not slow down; or",
      ] },
      { type: "list", items: [
        "Bud  will say he won’t slow down, then not slow down.",
      ] },
      { type: "list", items: [
        "Try  wearing him down: Count the drinks, count the money spent, count the meetings  missed, count the hours missed with the kids, count the times he is late, etc.",
      ] },
      { type: "list", items: [
        "Now,  to really go nowhere: Share these statistics with Bud. Provide charts and spreadsheets,  if possible. (Personally, I recommend 3-D Pie Charts.) Bud will ignore them and  tell you they aren’t accurate statistics.",
      ] },
      { type: "list", items: [
        "I would  advise trying to bring the issue with Bud “to a head” at this point: Ask  him/beg him/threaten him/plead with him to commit to changing.",
      ] },
      { type: "list", items: [
        "Step 10 will  fail.",
      ] },
      { type: "list", items: [
        "If you are  really, really healthy, then get on with your life without Bud. My  experience: Really, really healthy people would have gotten on with their  lives without Bud a long, long time ago.",
      ] },
      { type: "list", items: [
        "If you cannot  move on with your life, or choose not to move on with your life, it is  time to start all over again and go back to the beginning of this list. But,  first, try this next one…",
      ] },
      { type: "list", items: [
        "Truly,  truly believe that things will be different now.",
      ] },
      { type: "list", items: [
        "Now, repeat  Action Steps One through 14 as often as necessary.",
      ] },
      { type: "subheading", text: "Here is what will work:" },
      { type: "paragraph", text: "(Careful, this stuff is powerful and shouldn’t be initiated until you are ready.) (Note that I said wait until YOU are ready, not until Bud is ready.)" },
      { type: "list", items: [
        "First, accept that you have been in denial.",
      ] },
      { type: "list", items: [
        "Understand that denial is a normal human reaction to  overwhelming situations, and that denial is a coping strategy used by everyone.  This includes smart folks, educated folks, successful folks, and loving folks.",
      ] },
      { type: "list", items: [
        "Now, directly discuss your concerns with the person who  drinks/drugs too much. Let’s make this pretend “problem person” a male  (although the likelihood of the problem person being a female is pretty much  the same), and call him “Bud.” Tell Bud your feelings about his drinking and/or  drugging. Use “I statements.” (I see _____, I feel ______, I am _____, I need  ____ ) Personally, I recommend “I feel all alone.”",
      ] },
      { type: "list", items: [
        "Bud will say, “I am fine.”",
      ] },
      { type: "list", items: [
        "Then, tell Bud you don’t think he is “fine” and you  wish he would stop, or at least slow down.",
      ] },
      { type: "list", items: [
        "Two things will happen now:",
      ] },
      { type: "list", items: [
        "Bud  will say he will slow down, then not slow down; or",
      ] },
      { type: "list", items: [
        "Bud  will say he won’t slow down, then not slow down.",
      ] },
      { type: "list", items: [
        "Remember Steps 1 and 2 and make sure you are not in  denial. Please see that Bud is still drinking and/or drugging.",
      ] },
      { type: "list", items: [
        "Now, to get some real movement you must do these next two  very difficult steps. I would advise bringing the issue with Bud “to a head” at  this point. Give him an ultimatum to commit to changing. This is effective, but  very, very hard. Give Bud a consequence if he doesn’t slow down: I will tell  your parents, I will ask you to move out, I will stop going to parties with  you, I won’t let you see the kids, I won’t talk to you for a week, I will leave  for the weekend, I will leave, etc.",
      ] },
      { type: "list", items: [
        "Follow through on the consequence. (I told you these  two steps are hard.) Don’t waiver from your commitment. Personally, I recommend  that you equate this step with loving Bud.",
      ] },
      { type: "list", items: [
        "If  you are really, really healthy, then get on with your life without Bud. My  experience: Really, really healthy people would have gotten on with their lives  without Bud a long, long time ago. However, now you are getting closer to  being healthy. (Parents: Please See Note 1.)",
      ] },
      { type: "list", items: [
        "If  you cannot move on with your life, or choose not to move on with your  life, it is time to make the drastic step of going to an Al-Anon meeting and/or  having Bud come to join you in therapy. Do both of these things simultaneously.  If you must do only one at a time, start with Al-Anon.",
      ] },
      { type: "list", items: [
        "Al-Anon  (http://www.alanonatl.com/ )  is a group for people who are in relationships with someone who is struggling  with addiction/alcoholism issues. Bud will not like you going to these  meetings. They are free (or you can put a dollar or two in the basket), yet  very powerful (if you are open to the process)…so: Go anyway.",
      ] },
      { type: "list", items: [
        "Keep  on going to Al-Anon, even if you didn’t enjoy the first meeting. Commit to  going to at least seven more meetings. Go to different meetings in different  places until you feel you have found a few good meetings. If you go to eight  meetings and want to stop going, then stop. However, if you go to eight  meetings, you will be amazed at the changes that are happening, and you  will want to keep on attending.",
      ] },
      { type: "list", items: [
        "Now,  try to get Bud (who, you must remember, is “Fine”) to see someone who knows  addiction/alcoholism. Do not go to a therapist who doesn’t know  addiction/alcoholism inside and out. A good, general, highly-skilled  therapist will be roundly defeated by Bud; you need an expert. Bud won’t want  to see any therapist, let alone someone who knows addiction/alcoholism. One of  my favorite clients says to just bring Bud to someone and call it “counseling”  or “marriage counseling.” She recommends “forgetting” to mention that the  counselor is an addiction expert. Personally, I would never recommend such an  underhanded method. (Spouses: Please See Note 2.)",
      ] },
      { type: "list", items: [
        "If  he won’t go to therapy, and Al-Anon meetings are not allowing you to feel as if  life is getting better fast enough, then go to the therapist alone.",
      ] },
      { type: "list", items: [
        "Now,  live your life differently. Stop enabling Bud. Stop nagging Bud. Stop  threatening Bud. Stop rescuing Bud. Stop focusing on Bud and his  drinking/drugging. Stop focusing on Bud. Stop focusing on Bud. Stop focusing on  Bud. Go make new friends and/or take up a new hobby. (Personally, I recommend  Clogging.)",
      ] },
      { type: "list", items: [
        "If  you start changing YOUR life and how you live it, then, and only then,  will there be a tiny chance of Bud saying to you, \"I need help.\"",
      ] },
      { type: "list", items: [
        "There  is an alternative approach. It is hard, scary, and takes true commitment: Hiring  a professional interventionist.",
      ] },
      { type: "list", items: [
        "Call  me if you get stuck. Therapy is expensive, Al-Anon costs a buck.",
      ] },
      { type: "paragraph", text: "Note 1.  I have been asked, “How can we ‘detach’ and move on with our lives if Bud is a minor child, or a grown-up child?” This is tricky, and difficult, and may call for professional guidance. It is a struggle we all go through as parents: How much help is too much? In short: If Bud is trying to get clean, then help him in selected ways. If Bud is unwilling to get clean, then stop enabling him (see Enabling Versus Caring) and allow Bud to hit his bottom. Then Bud may be ready to accept help. If you are helping Bud avoid “hitting bottom,” then you are hurting Bud." },
      { type: "paragraph", text: "Note 2: This client is an attorney. Pray for her." },
    ],
  },
  {
    slug: "intervention",
    title: "Intervention: An Option for Helping Alcoholics and Addicts",
    date: "",
    summary: "Understanding the surprise and invitational models of intervention for helping loved ones with addiction.",
    thumbnail: "/assets/articles/intervention-thumb.jpg",
    content: [
      { type: "paragraph", text: "Have you ever said, “I just don’t know what to do…” Or, “I’ve run out of options.” An intervention may be the only approach left. Deciding to do an intervention is not easy, but, they are usually extremely effective." },
      { type: "paragraph", text: "Vern Johnson, the pioneer of intervention, said “Intervention is a way in which to approach a loved one or friend in a loving and respectful manner.” There are now, thank goodness, different models of intervention. Two types of interventions are a “surprise” model or an “invitational” model." },
      { type: "paragraph", text: "A surprise model, as exemplified by the TV Show “Intervention,” consists of:" },
      { type: "paragraph", text: "Confronting the alcoholic, usually through some form of a ruse, with how his/her drinking or drugging has impacted everyone around the alcoholic or addict. The alcoholic’s family, friends, and employers attempt to tell the alcoholic in their own words how his (or her) drinking has been a problem in their lives." },
      { type: "paragraph", text: "In this model, the only focus of an intervention is to get the alcoholic to go into a treatment program. Unfortunately, most of the time, it’s not as simple as that. Often the other aspects of the disease (how the other family members enable or allow the disease, or, how the family will relate to each other after treatment) are not addressed in the intervention. Without fixing the world the alcoholic/addict lives in, the chance of good recovery is greatly lessened." },
      { type: "paragraph", text: "An invitational model, a newer, more systemic way to help alcoholics/addicts and their families, consists of:" },
      { type: "paragraph", text: "Inviting the loved one into a process in which the whole family looks at how the disease of addiction impacts them, taking the focus off of the addict and putting it where it should be, on the disease. Individually the family will approach their loved one and talk about how the disease has impacted the relationship. Each dialogue is a “mini-intervention” where the addict learns something about the reality of how his or her behavior is impacting others. This process helps nudge them towards the contemplation stage, initiating the addict’s belief that addiction is NOT working well for them." },
      { type: "paragraph", text: "A workshop will be proposed and the addict will be invited into the process. A large percentage of addicts will attend the workshop. In the workshop the focus will be kept on the disease aspect and off of the addict (the belief here is that they have enough shame already)." },
      { type: "paragraph", text: "There is an emphasis on separating the human from the medical disease, thereby reducing the shame in the human. This is a hugely successful approach as the family is also “intervened” on and when their loved one comes home they have eliminated the “relapse environment.” This is my preferred way of doing things. It does cost more and takes a longer time to complete, but, with this model changes tend to last longer and all family members have a chance to get some happiness back into their lives." },
      { type: "paragraph", text: "I personally recommend visiting www.interventionctr.com or www.heatherhayes.tv. These skilled interventionists come with the “Gore Seal of Approval.”" },
    ],
  },
  {
    slug: "messed-up-28-year-old",
    title: "Doc, I Think I May Have Messed Up with My 28-Year-Old Child",
    date: "January 17, 2013",
    summary: "\"He's getting really good at Call of Duty.\" A humorous but direct take on failure to launch and enabling adult children.",
    thumbnail: "/assets/articles/messed-up-28-thumb.jpg",
    content: [
      { type: "paragraph", text: "“He still lives with us, he hasn’t worked in months, but he’s getting really good at ‘Call of Duty.’ What can we do?”" },
      { type: "paragraph", text: "I get these calls all the time. Here’s my response." },
      { type: "paragraph", text: "(First of all, don’t call me “Doc” unless your name is Wyatt Earp.)" },
      { type: "paragraph", text: "Often, the adult/child has some sort of substance abuse issues, but, other times, the kid just likes to hang out." },
      { type: "paragraph", text: "Now, why would a 28-year-old choose to do nothing all day? Why would a young person act like they have no drive or motivation? My potentially offensive answer: Why do male dogs enjoy licking themselves? Because they CAN." },
      { type: "paragraph", text: "So, my belief is that you, the parents, have created this “Frankenstein Who Reclines.”" },
      { type: "paragraph", text: "I get it: Extenuating circumstances have occurred. S/he lost the job, the former roommate stole from him/her, s/he was in credit card debt and was just going to live in the basement until the debt disappeared, the boss picked on him/her and fired him/her for no reason." },
      { type: "paragraph", text: "The history of why the Golden Child is on your couch isn’t important." },
      { type: "paragraph", text: "The question is, “What can we do NOW?”" },
      { type: "paragraph", text: "How can we fix a “failure to launch” issue? What can you, as loving parents, do differently? Is there a secret to getting the Golden Child out of your basement and into the real world? Yes, and it is a straightforward, pragmatic and life-changing system." },
      { type: "paragraph", text: "I have a custom-designed Three Point Plan that is tailored to fit your particular needs:" },
      { type: "numbered-list", items: [
        "Stop enabling him or her.",
      ] },
      { type: "numbered-list", items: [
        "Stop enabling him or her.",
      ] },
      { type: "numbered-list", items: [
        "Stop enabling him or her.",
      ] },
      { type: "paragraph", text: "To do this is simple, but very, very difficult. Let me help you launch your baby into the real world. To paraphrase my favorite toy store, Home Depot, “You can do it, I can help.”" },
    ],
  },
  {
    slug: "list-of-lists",
    title: "List of Lists",
    date: "",
    summary: "Dr. Gore's eclectic collection of lists — from top guitarists and comedians to parenting truths and recovery steps.",
    thumbnail: "/assets/articles/list-of-lists-thumb.jpg",
    content: [
      { type: "paragraph", text: "(in no particular order unless stated otherwise)" },
      { type: "paragraph", text: "Top Five Guitarists" },
      { type: "list", items: [
        "Clapton during his heroin years",
      ] },
      { type: "list", items: [
        "Carlos Santana",
      ] },
      { type: "list", items: [
        "Pete Townsend",
      ] },
      { type: "list", items: [
        "Hendrix during his \"whatever-he-could-get\" years",
      ] },
      { type: "list", items: [
        "Frank Zappa",
      ] },
      { type: "paragraph", text: "Things My (Now) Twelve Year Old Can Do That Are Astounding!" },
      { type: "list", items: [
        "She can crack her knuckles in her toes!",
      ] },
      { type: "list", items: [
        "She can do a one handed cartwheel, hold a drink in one hand and not spill it!",
      ] },
      { type: "list", items: [
        "She can bend her thumb down to forearm!",
      ] },
      { type: "list", items: [
        "She can curl her tongue with two folds!",
      ] },
      { type: "list", items: [
        "Her elbows are double-jointed!",
      ] },
      { type: "list", items: [
        "She can sound like she is locked in a closet just by talking with her lips closed!",
      ] },
      { type: "paragraph", text: "Reasons Parents Show Up In My Office With Complaints About Their Child" },
      { type: "list", items: [
        "They are not strict enough with their children.",
      ] },
      { type: "list", items: [
        "They are not strict enough with their teenagers.",
      ] },
      { type: "list", items: [
        "They try to be friends with their kids.",
      ] },
      { type: "list", items: [
        "They don’t have real authority over their kids.",
      ] },
      { type: "list", items: [
        "They have sought the approval of their children, and either succeeded or failed.",
      ] },
      { type: "paragraph", text: "Helpful Grooming Tips For Men Over 35" },
      { type: "list", items: [
        "Trim any hair protruding outside of your nostrils.",
      ] },
      { type: "list", items: [
        "It is time to switch from briefs to boxers, if you haven’t already done so.",
      ] },
      { type: "list", items: [
        "Trim eyebrow hairs that are over an inch long.",
      ] },
      { type: "list", items: [
        "Fact:  There are no viable comb-over techniques.",
      ] },
      { type: "list", items: [
        "And, of course, trim your ear hairs.",
      ] },
      { type: "paragraph", text: "Blocks to experiencing feelings (in my opinion, not fact-based like the best TV show list)" },
      { type: "list", items: [
        "Male vs female  (males have   a harder time with feelings)",
      ] },
      { type: "list", items: [
        "Smart vs. dumb  (smart   folks have a harder time with feelings)",
      ] },
      { type: "list", items: [
        "Addiction  (people who are   in addiction or in love with an addict/alcoholic have a harder time with   feelings)",
      ] },
      { type: "list", items: [
        "Trauma  (experiencing a   trauma makes it harder to truly experience feelings)",
      ] },
      { type: "list", items: [
        "Certain professions/jobs    (for example, accountants, defense attorneys and surgeons tend to attract people   who are intellectually-based and not feeling-based)",
      ] },
      { type: "list", items: [
        "Cultural  (Brits, Germans   and Irish, for example, have a harder time with feelings than some other   cultures-I know, this is controversial)",
      ] },
      { type: "list", items: [
        "Dysfunctional family   history  (if you grew up in a dysfunctional family you will have a harder time   with feelings)",
      ] },
      { type: "paragraph", text: "The Two Best Definitions of a Dysfunctional Family" },
      { type: "list", items: [
        "A family where you got   too much of what you didn’t need and not enough of what you   needed",
      ] },
      { type: "list", items: [
        "A family that contains   two or more people",
      ] },
      { type: "paragraph", text: "Best TV Shows Ever" },
      { type: "list", items: [
        "Seinfeld/Curb Your Enthusiasm",
      ] },
      { type: "list", items: [
        "ER",
      ] },
      { type: "list", items: [
        "Hill Street Blues",
      ] },
      { type: "list", items: [
        "Entourage",
      ] },
      { type: "list", items: [
        "Sopranos",
      ] },
      { type: "list", items: [
        "Flipper",
      ] },
      { type: "paragraph", text: "Worst Parts of Fatherhood" },
      { type: "list", items: [
        "Getting up early in the morning.",
      ] },
      { type: "list", items: [
        "Getting up in the middle of the night.",
      ] },
      { type: "list", items: [
        "Bending over to get the children in and out of car seats.",
      ] },
      { type: "list", items: [
        "Battling to keep your weight under 300 pounds because you need to   finish everything on your kid’s plate in order to not waste food and   help save the environment.",
      ] },
      { type: "list", items: [
        "Trying to not curse in front of them.",
      ] },
      { type: "list", items: [
        "Having to put your kid on a men’s public bathroom toilet seat.",
      ] },
      { type: "paragraph", text: "My Favorite Therapists" },
      { type: "list", items: [
        "Murray Bowen",
      ] },
      { type: "list", items: [
        "Jay Haley",
      ] },
      { type: "list", items: [
        "Salvador Minuchin",
      ] },
      { type: "list", items: [
        "Virginia Satir",
      ] },
      { type: "list", items: [
        "Chloe Madanes",
      ] },
      { type: "list", items: [
        "Milton H. Erickson",
      ] },
      { type: "paragraph", text: "George Costanza’s Jobs" },
      { type: "list", items: [
        "Rick Barr Properties – Real Estate Agent",
      ] },
      { type: "list", items: [
        "Sid’s Parking Services – Parking Attendant",
      ] },
      { type: "list", items: [
        "Pendant Publishing – Manuscript Reader",
      ] },
      { type: "list", items: [
        "Unemployed",
      ] },
      { type: "list", items: [
        "NBC – Sitcom Writer",
      ] },
      { type: "list", items: [
        "Specialty Models – Hand Model",
      ] },
      { type: "list", items: [
        "E.D. Granmont – Bra Salesman",
      ] },
      { type: "list", items: [
        "Sanalac – Sales Representative",
      ] },
      { type: "list", items: [
        "New York Yankees – Assistant to the Traveling Secretary",
      ] },
      { type: "list", items: [
        "Unemployed – The Summer of George",
      ] },
      { type: "list", items: [
        "Play Now Sports – Playground Equipment Sales Rep",
      ] },
      { type: "list", items: [
        "Costanza & Son – Computer Salesman",
      ] },
      { type: "list", items: [
        "Kruger Industrial Smoothing – Analyst",
      ] },
      { type: "list", items: [
        "NBC – Sitcom Writer",
      ] },
      { type: "list", items: [
        "The Susan Ross Foundation – Board Member",
      ] },
      { type: "paragraph", text: "George Costanza’s Imaginary Jobs" },
      { type: "list", items: [
        "Vandelay Industries – Latex Salesman",
      ] },
      { type: "list", items: [
        "Playwright – off-Broadway play",
      ] },
      { type: "list", items: [
        "Marine Biologist",
      ] },
      { type: "list", items: [
        "Architect as “Art Vandelay” (designed the new addition to the Guggenheim)",
      ] },
      { type: "list", items: [
        "Importer/Exporter as “Art Corvelay”",
      ] },
      { type: "list", items: [
        "Porno Actor as “Buck Naked”",
      ] },
      { type: "list", items: [
        "Hen Supervisor for Tyler Chicken out of Little Rock,  AR",
      ] },
      { type: "list", items: [
        "The Human Fund – Founder",
      ] },
      { type: "paragraph", text: "Things Kids Do That Are Normal and Not Worthy of a Diagnosis" },
      { type: "list", items: [
        "They have lots of energy.",
      ] },
      { type: "list", items: [
        "They are curious.",
      ] },
      { type: "list", items: [
        "They make mistakes.",
      ] },
      { type: "list", items: [
        "They are self-centered.",
      ] },
      { type: "list", items: [
        "They have dramatic mood swings.",
      ] },
      { type: "list", items: [
        "They are impulsive.",
      ] },
      { type: "paragraph", text: "How to be clean and sober:" },
      { type: "list", items: [
        "Stop drinking and/or do drugs",
      ] },
      { type: "list", items: [
        "Don’t change any thing else about yourself, cross your fingers and hope for instant happiness",
      ] },
      { type: "paragraph", text: "How to be in recovery from addiction:" },
      { type: "list", items: [
        "Don’t drink or do drugs",
      ] },
      { type: "list", items: [
        "Go to meetings",
      ] },
      { type: "list", items: [
        "Have a sponsor",
      ] },
      { type: "list", items: [
        "Talk to the sponsor",
      ] },
      { type: "list", items: [
        "Have a list of numbers to call",
      ] },
      { type: "list", items: [
        "Call people in the program when in crisis",
      ] },
      { type: "list", items: [
        "Call people in the program when not in crisis",
      ] },
      { type: "list", items: [
        "Hang out with people in recovery",
      ] },
      { type: "list", items: [
        "Work on a specific step",
      ] },
      { type: "list", items: [
        "Have a home group",
      ] },
      { type: "list", items: [
        "Read the literature",
      ] },
      { type: "list", items: [
        "Listen to speakers via recordings",
      ] },
      { type: "list", items: [
        "Go to meetings early and stay late",
      ] },
      { type: "list", items: [
        "Change your playmates, playgrounds and playthings, if needed.  And it is usually needed",
      ] },
      { type: "list", items: [
        "Pray and meditate",
      ] },
      { type: "list", items: [
        "Pick up a chip",
      ] },
      { type: "list", items: [
        "Become honest with yourself",
      ] },
      { type: "list", items: [
        "Become honest with others",
      ] },
      { type: "list", items: [
        "Do service work",
      ] },
      { type: "list", items: [
        "Actively work on gaining more spirituality",
      ] },
      { type: "list", items: [
        "Reach out to newcomers",
      ] },
      { type: "list", items: [
        "Sponsor somebody",
      ] },
      { type: "list", items: [
        "Go to conferences and workshops",
      ] },
      { type: "list", items: [
        "Work on other issues: nicotine, $, sex, food, TV, work, and anything else that blocks you from feelings/relationships/spirituality.",
      ] },
      { type: "paragraph", text: "Things I have done for my (now 16 year old) daughter (in order from least annoying to most annoying)" },
      { type: "list", items: [
        "Went to an Arthur   live show",
      ] },
      { type: "list", items: [
        "Went to a Barney   live show",
      ] },
      { type: "list", items: [
        "Went to a Britney   Spears “concert”",
      ] },
      { type: "list", items: [
        "Went to a Katy Perry   concert",
      ] },
      { type: "list", items: [
        "Went to a Spice   Girls concert",
      ] },
      { type: "list", items: [
        "Went to a Wiggles   show (backstage passes, too, by the way)",
      ] },
      { type: "list", items: [
        "Went to a Cobra   Starship/the Fray/Owl City/Justin Bieber concert",
      ] },
      { type: "list", items: [
        "Went to a Jonas   Brothers/Hannah Montana concert",
      ] },
      { type: "paragraph", text: "Best Stephen King Movie Adaptations (in ascending order)" },
      { type: "numbered-list", items: [
        "The       Shining",
      ] },
      { type: "paragraph", text: "3. The Green Mile" },
      { type: "paragraph", text: "2. Stand By Me" },
      { type: "paragraph", text: "1. The Shawshank Redemption" },
      { type: "paragraph", text: "History of the Diagnostic and Statistical Manual, Which Psychiatry/Psychology/Drug Companies Use to Make Diagnoses" },
      { type: "list", items: [
        "First Edition (1918):  	     106 Disorders, 130 Pages",
      ] },
      { type: "list", items: [
        "Second Edition (1968):    182 Disorders, 134 Pages",
      ] },
      { type: "list", items: [
        "Third Edition (1980):       265 Disorders, 494 Pages",
      ] },
      { type: "list", items: [
        "Fourth Edition (1994):     374 Disorders, 880 Pages",
      ] },
      { type: "paragraph", text: "Are there really that many new ways for people to act like there is something wrong with them, or, are the Pharmaceutical Companies really that good at politics?" },
      { type: "paragraph", text: "The Best Bedtime Book To Read To A Child:" },
      { type: "list", items: [
        "Goodnight Gorilla",
      ] },
    ],
  },
  {
    slug: "adhd-fair-and-balanced",
    title: "ADHD: A Fair and Balanced View",
    date: "January 12, 2014",
    summary: "Dr. Gore's opinionated, confrontational, and clinically grounded Q&A on ADHD — why it's over-diagnosed, under-evaluated, and why family therapy beats pills.",
    thumbnail: "/assets/articles/adhd-thumb.jpg",
    content: [
      { type: "subheading", text: "Q: OK, Dr. Gore, is it true that you know everything there is to know about Attention-Deficit/Hyperactivity Disorder?" },
      { type: "paragraph", text: "No." },
      { type: "subheading", text: "Q: Then why should I ask you questions about Attention-Deficit/Hyperactivity Disorder?" },
      { type: "paragraph", text: "Because I have some strong opinions about this \"disorder.\" And, because there is a lot of mis-information going around about this \"disease.\" And, I think some families would benefit if they thought differently about this \"diagnosis.\" And, I enjoy pissing off pharmaceutical companies, psychiatrists and pediatricians who over-diagnosis, mis-diagnosis and have no business \"diagnosing\" this \"diagnosis.\" And, it is your job to ask me questions." },
      { type: "subheading", text: "Q: If Attention-Deficit/Hyperactivity Disorder (ADHD) is not a disorder or a disease, what is it, exactly?" },
      { type: "paragraph", text: "It is a cluster of symptoms that, when taken as a whole, justify a diagnosis of ADHD. These symptoms include distractibility, impulsivity, hyperactivity, poor attentional skills AND there must be a BIOLOGICAL basis for the syndrome. Some children are distractible or impulsive or hyperactive because they are allowed to be. They are able to show better abilities with proper structure. If someone has a true ADHD, they cannot act any other way but distractible or impulsive or hyperactive, regardless of the rules, structure, rewards or punishment available. If someone has a true ADHD, then there is a biological (neurological) problem." },
      { type: "subheading", text: "Q: Do you have scientific facts backing up your statements?" },
      { type: "paragraph", text: "Yeah, I do. But, let's just do this…DISCLAIMER: What you are about to read is merely one man's opinion." },
      { type: "subheading", text: "Q: OK, then, what is the difference between Attention-Deficit Disorder (ADD) and Attention-Deficit Hyperactivity Disorder (ADHD)?" },
      { type: "paragraph", text: "Historically, the \"H\" in ADHD represents \"hyperactivity.\" There have been attempts to show that ADD can exist without hyperactivity. At present, the accepted terminology is ADHD." },
      { type: "subheading", text: "Q: Is there such a disease/disorder/syndrome/diagnosis as ADHD?" },
      { type: "paragraph", text: "Yes, there is. However, it is fairly uncommon, and does not fit the classification of a disease or a disorder. ADHD is a description of symptoms. In my humble opinion, it impacts way less than one percent of the population." },
      { type: "subheading", text: "Q: But I heard it affected five percent of girls, and up to twelve or fifteen percent of boys! And even the most conservative estimates suggest that at least three percent of the population is suffering from this disorder!" },
      { type: "paragraph", text: "First off, stop using exclamation points! Just lob me questions. Second, where do you get those statistics?" },
      { type: "subheading", text: "Q: From unbiased sources, like Ciba-Geigy, the pharmaceutical company that manufactures Ritalin. Or, from Ch.A.D.D. (Children and Adults with Attention Deficit Disorders). Or, the American Psychiatric Association, the makers of the Diagnostic and Statistical Manual, Fifth Edition, the source of all mental health diagnoses." },
      { type: "paragraph", text: "I think these sources are all wrong. And, they are quite biased towards having as many people as possible suffer from this disease. Ch.A.D.D. gets a significant amount of its funding from the pharmaceutical industry. Ch.A.D.D. doesn't think they are pro-pharmacology, but they are." },
      { type: "subheading", text: "Q: Aren't you \"biased\" as well?" },
      { type: "paragraph", text: "Yes, I am biased towards helping children and families have kids who behave well, both at home and at school. And, I am biased towards achieving this goal without drugs or diagnosing. And, I am biased towards parents and schools not taking the easy way out by medicating children at the first sign of behavioral problems. And, I am biased because I feel that family therapy should be the first treatment offered." },
      { type: "subheading", text: "Q: What about adult Attention-Deficit Hyperactivity Disorder?" },
      { type: "paragraph", text: "That is a whole other topic. There are adults with the syndrome. They had it their whole lives. They could benefit from treatment. I just don't believe that there are as many ADHD adults walking around as one would be led to believe. It is just not that common an occurrence." },
      { type: "subheading", text: "Q: Don't the drugs (Concerta, Adderall, Adderall XR, Metadate CD, Ritalin, Ritalin LA, Focalin, Strattera, Etcettera) \"work?\"" },
      { type: "paragraph", text: "Sure, about 75% of the time, they help kids and adults stay focused, and reduce excessive motor behavior. And, they do so rather quickly. And, they do so rather painlessly for the schoolteachers, parents, pediatricians and psychiatrists. Drugs work. Drugs work in reducing problems in the classroom, but will not make a child learn. I took speed in college, stayed up all night and wrote a paper due the next day. The speed \"worked.\" When I used to be tired in the morning, I drank two cups of strong coffee, and felt less tired. The caffeine \"worked.\"" },
      { type: "paragraph", text: "There is a little-known study where professors took their normal, non-ADHD children and gave them performance tests (Dextroamphetamine: Cognitive and Behavioral Effects in Normal Prepubertal Boys. Judith L. Rapoport, Monte S. Buchsbaum, Theodore P. Zahn, Herbert Weingartner, Christy Ludlow and Edwin J. Mikkelsen. Science. Vol. 199, No. 4328, Feb. 3, 1978, pp. 560-563. American Association for the Advancement of Science.) Then they gave their kids speed, I mean, they gave their kids Ritalin. (Note: the professors did this to their own children because the government never would have allowed them to give the drugs to \"normal\" children, because giving speed to kids is not something the government condones.) Then, they retested their kids, and, lo and behold, the children's test performances significantly improved!! I can use exclamation points!! The speed helped the normal children's test scores and measures of attention." },
      { type: "paragraph", text: "Now, I know FAQ sections should have short, concise answers, but allow me one more paragraph, please. I know for a fact that for many years pediatricians were taught to \"diagnosis\" by giving Ritalin when ADHD is suspected, and, if behavior improves…then that CONFIRMS the diagnosis. Obviously, medical schools were not, and are not, aware that speed works. And it works on anybody, regardless of the presence or absence of ADHD." },
      { type: "subheading", text: "Q: So, if they work, why not use the drugs?" },
      { type: "paragraph", text: "Well…" },
      { type: "numbered-list", items: [
        "Why not NOT use drugs?",
        "There are some \"mild\" side effects, including: difficulty sleeping, loss of appetite, irritability, nervousness, stomach aches, headaches, dry mouth, blurry vision, nausea, dizziness, drowsiness and tics.",
        "There are other, less mild side effects: hypersensitivity, anorexia, palpitations, blood pressure and pulse changes, cardiac arrhythmia, anemia, scalp hair loss (no, I never took Ritalin), and toxic psychosis.",
        "I might as well add that there is evidence (from sources where I was unable to evaluate the strength of their research) linking Ritalin and other stimulant medications prescribed for ADHD with: abnormal liver function, cerebral arteritis, leukopenia, and death. Now, I must admit to my readers, I have no idea what cerebral arteritis is, nor do I know what leukopenia is, but they both sound bad. And, of course, I can clearly state that \"abnormal liver functioning\" and \"death\" are not acceptable side effects in the pursuit of children behaving better and increasing SAT scores.",
        "Giving pills to a kid sends them several important messages. A-You are not OK. B-You are lacking in something. C-Pills make you better and more whole. Note: I have heard at several Alcoholics Anonymous and Narcotics Anonymous meetings recovering alcoholics/addicts say something like, \"The first time I knew that I needed to put some substance into my body to be 'OK' was when my doctor/teacher/father/mother told me to take Ritalin.\"",
        "More than nine out of ten children taking Ritalin, or another Stimulant Medication receive no therapy. They receive pills and that is all. Therapy can individually focus on giving a child some remediation strategies to help his or her behavior, to help his or her \"focusing\" behaviors, and to help him or her overcome the self-esteem issues that come with constantly getting trouble at school or home. More importantly, they are deprived of participating in family therapy, the single most powerful way to help with the syndrome of ADHD. Family therapy does not tell the child that he or she is not OK, it says that we as a group need to work on changing our behavior.",
      ] },
      { type: "subheading", text: "Q: Does family therapy really work?" },
      { type: "paragraph", text: "Yes, it is as good as, and probably better than, any other treatment available." },
      { type: "subheading", text: "Q: What happens in family therapy?" },
      { type: "paragraph", text: "I believe that Mom and Dad (or just Dad, or just Mom) need to work on ways to make Junior behave/attend/focus better on tasks. I believe that if Junior learns better focus and attention at home, then this will translate to better focus and behavior at school." },
      { type: "subheading", text: "Q: Is it that simple?" },
      { type: "paragraph", text: "Yes." },
      { type: "subheading", text: "Q: But I thought ADHD is an incredibly complex problem?" },
      { type: "paragraph", text: "It is. But let us look at, finally, what ADHD truly is. There are some children, and adults, who have a neurologically-based impaired ability to focus attention on things for an extended period. Allow me to repeat, there is a neurological (a physical, a biological, a brain chemistry-based, etc.) deficit in the person's nervous system. These people are few and far between." },
      { type: "subheading", text: "Q: Say more, please…" },
      { type: "paragraph", text: "These people, although they would still benefit from individual and family therapy, need some specific neurological help to better attend to tasks. These are the people that need Ritalin. But, most people on Ritalin are taking the drug because their behavior led to a mis-diagnosis." },
      { type: "subheading", text: "Q: How do you know if the behavior is the problem, or if there is a neurologically-based problem with attention?" },
      { type: "paragraph", text: "By getting a complete and thorough evaluation by a well-trained psychologist, examining the developmental and current aspects of the behaviors in multiple contexts." },
      { type: "subheading", text: "Q: But aren't most people given the diagnosis without any formal psychological testing?" },
      { type: "paragraph", text: "Yes. And, that is the tragedy. That is why the rate of prescribing stimulant medication is steadily growing each year. Any why the rate of prescribing stimulant medication is extremely dependent on one's geographical location and one's socio-economic status." },
      { type: "subheading", text: "Q: Gee, this is fascinating…say more, again…" },
      { type: "paragraph", text: "There are some cities with a school district with one out of every three boys on some form of stimulant medication. Down the road, five miles away, only one out of forty boys are on some form of stimulant medication. Why? The first school district is in a wealthy part of town." },
      { type: "subheading", text: "Q: So, wouldn't these children have parents who are less likely to want their child on medication?" },
      { type: "paragraph", text: "You would think that, wouldn't you? But the opposite is often true, a \"keep up with the Jones's\" mentality is in effect. You want your child to have good grades, and if they are not good, you will do anything to get the grades higher. Plus, there exists a herd mentality, if one child is getting the diagnosis, and getting drugs, and then getting better grades (and better behavior reports from the teacher), then that pediatrician will find his/her waiting room full of young people with the \"disease\" of ADHD." },
      { type: "subheading", text: "Q: Is there some other geographical impact?" },
      { type: "paragraph", text: "Yes, I think there is tremendous variation among towns and cities. I would take the unpopular position that Atlanta has one of the highest rates of kids on some form of stimulant medication, per square mile, in the United States." },
      { type: "subheading", text: "Q: Wow. Speaking of the United States, what about in other parts of the world?" },
      { type: "paragraph", text: "Funny you should ask that. This diagnosis is almost non-existent in many, many countries. Can you, dear readers, think of any disease that impacts as many as 15% of the male population of one and only one country? And, by the way, many of these countries (where ADHD is practically non-existent) have children that out-score American kids on different test measures, i.e., these are countries that also value their child's education. But, as we speak, drug companies are out there trying to infiltrate the thinking of these countries' physicians." },
      { type: "subheading", text: "Q: Can we get back to the correct way to diagnose this problem?" },
      { type: "paragraph", text: "Sure. First you go to a psychologist, or better yet, a neuropsychologist. Then you give them a check for at least eight hours of their time (between $800 and $4000.)" },
      { type: "subheading", text: "Q: Why would I pay that?" },
      { type: "paragraph", text: "Because you want to make sure that your child actually has Attention-Deficit Hyperactivity Disorder, right? Or that you, as an adult, actually have ADHD." },
      { type: "subheading", text: "Q: OK, just a little \"sticker shock\" there. Then what?" },
      { type: "paragraph", text: "Well, here is what should happen: There should be a meeting with both parents and the child, to orient them both to the testing process. Then, the parent should be interviewed, and a history of the symptoms should be attained, including:" },
      { type: "numbered-list", items: [
        "a medical history",
        "a developmental history",
        "a past psychiatric history",
        "an educational history",
        "a family history",
      ] },
      { type: "paragraph", text: "Then the child should be interviewed, and depending on the age of the child, some of the same information should be sought…" },
      { type: "subheading", text: "Q: Wait a minute. How can a pediatrician do this, each visit to the pediatrician takes about fifteen minutes, at most? They don't have time to do this…" },
      { type: "paragraph", text: "Don't interrupt me. Of course, they can't do this, and, neither can most psychiatrists or family practice doctors. Most prescriptions for stimulant medications are based on a few minutes of complaints from parents, a cursory evaluation of school performance (maybe) and quick look at the offending child. Presto. Now, may I continue? You also want to get some pen and paper surveys filled out by the child's teachers/nannies/day care providers/grandparents-anybody who spends time consistently with the child. This is done to assess the child's behavior over several different settings. After interviewing the child, some formal testing should begin." },
      { type: "subheading", text: "Q: Who is qualified to do this testing?" },
      { type: "paragraph", text: "A licensed psychologist." },
      { type: "subheading", text: "Q: What does this testing show?" },
      { type: "paragraph", text: "First, overall intellectual skills are evaluated. Then, specifically, various measures of discrete types of intellectual skills are evaluated. The main source of the correct diagnosis of ADHD is in these discrete measures of intellectual performance. Some measures have little to do with attention, like understanding vocabulary words, or tests of abstract reasoning (\"How are a cow and a monkey alike?\" for example.) Others are directly influenced by attentional skills (\"Say these numbers, in order, after me: 4, 8, 3, 5, 1, 6, and 2,\" for example.)" },
      { type: "paragraph", text: "Tests of academic achievement are also given. Further, memory tests are given, as well as specific measures of attention skills. Often, two or more testing sessions are required. Then the psychologist puts together all the information gathered into a report called a psychological evaluation. Then, there is a meeting where the child and parents are given the information discovered via the testing, this is called a feedback session. Now do you know why this takes at least eight hours? I don't do these evaluations any more, they are too time consuming to do properly. Unfortunately, it is much easier for a physician to write a prescription than to undergo a thorough evaluation." },
      { type: "subheading", text: "Q: What else can I get out of a psychological evaluation?" },
      { type: "paragraph", text: "Most importantly, a correct diagnosis." },
      { type: "subheading", text: "Q: I have heard of learning disabilities…Is there a pill that cures them?" },
      { type: "paragraph", text: "No, but that doesn't mean that a lot of kids on Ritalin do not have learning disabilities. A learning disability means that a child is of average, or above average intelligence and has a (neurologically-based) deficit in a discrete area of functioning. Most people think of dyslexia when thinking about learning disabilities (seeing letters or numbers reversed, like a 'b' is seen as a 'd,' is one form of dyslexia.) But one can have a learning disability in one of several areas, examples include in written expression, mathematics, language or reading." },
      { type: "subheading", text: "Q: So, do you feel a lot of children diagnosed with ADHD are, in fact, learning disabled?" },
      { type: "paragraph", text: "Yes, as many as 70% of children with the ADHD diagnosis have a learning disability. Now, you can be both ADHD and have a learning disability. But, most of the children I have seen who have been diagnosed with ADHD have neither ADHD nor a learning disability. These children are merely having behavioral problems. But, again, a full psychological evaluation is necessary to make sure there are not other issues (i.e., anxiety, depression, oppositionality/avoidance, etc.) that are presenting as ADHD." },
      { type: "subheading", text: "Q: Isn't there a simple test I can take that can give an appropriate diagnosis?" },
      { type: "paragraph", text: "No" },
      { type: "subheading", text: "Q: I have a friend who took a computer-based continuous performance test. Their doctor said this was the only tool needed to diagnosis ADHD." },
      { type: "paragraph", text: "He's an idiot." },
      { type: "subheading", text: "Q: My friend?" },
      { type: "paragraph", text: "No, the doctor." },
      { type: "subheading", text: "Q: What about the Amen Clinic? They take brain scans and tell you what is wrong with your brain? And what about other brain scans?" },
      { type: "paragraph", text: "The science is just not good enough (yet). SPECT scans, MRI's, PET's, fMRI's…They don't work as well as the sellers of these products say they do. I would call Amen an idiot, too, but he has a team of full-time lawyers who don't like that. (My diagnosis: Napoleon Syndrome). So, I won't." },
      { type: "subheading", text: "Q: So, what is the best way to help these behavioral problems?" },
      { type: "paragraph", text: "Family therapy." },
      { type: "subheading", text: "Q: Why?" },
      { type: "paragraph", text: "Parents are the people most likely to have the ability to correct a child's behavior. They are, ideally, with the child a lot, and they have, ideally, a lot of power over the child." },
      { type: "subheading", text: "Q: But what happens when parents feel that they have tried everything, and nothing has worked?" },
      { type: "paragraph", text: "Family therapy will give the parents a lot more ways to help correct a child's behavior." },
      { type: "subheading", text: "Q: OK, so you like family therapy. What if my child actually has ADHD? What will family therapy do then?" },
      { type: "paragraph", text: "Family therapy will do nothing to impact the neurological issues of attention difficulties…BUT, family therapy can still help with coping with the child's behavior problems. And it can positively impact how the child approaches school." },
      { type: "subheading", text: "Q: What about drugs?" },
      { type: "paragraph", text: "If behavior change programs don't work, then drugs are a reasonable next step. At least at this point the child and the parents know that every effort was attempted before drugs were introduced." },
      { type: "subheading", text: "Q: If a child is on medication can family therapy still help?" },
      { type: "paragraph", text: "Yes, medicine plus therapy can be a powerful combination. And, with good individual and family therapy, dosages can be cut back, and in some cases eliminated altogether." },
      { type: "subheading", text: "Q: Doesn't therapy take a lot of effort, time and money?" },
      { type: "paragraph", text: "Yes, it isn't easy. But, it is certainly better for the child, the parents and the whole family in the long run. Therapy is just not good for the drug companies." },
      { type: "subheading", text: "Q: Do you want to give your disclaimer again?" },
      { type: "paragraph", text: "Thanks. Good idea. The above are MY opinions, and nobody should take any actions without consulting their therapists, psychologists, or physicians. Reading this article is not a substitute for professional consultation. But don't put your kid on medicine without a full psychological evaluation." },
    ],
  },
  {
    slug: "fifty-two-fun-facts-marriage",
    title: "Fifty-Two Free Fun Facts From A Marriage Counselor",
    date: "June 24, 2017",
    summary: "Fifty-four practical, personal, and occasionally blunt tips from a therapist who has treated thousands of couples. Read this list, memorize some of it, try to enact a few — then you won't need to come see me.",
    thumbnail: "/assets/articles/marriage-facts-thumb.jpg",
    content: [
      { type: "paragraph", text: "Doing marriage therapy is a high-stakes endeavor, with lots of potential to change people’s lives. If divorce occurs, kids can have their childhoods turned upside down, the financial ramifications are huge, and multiple generations are impacted forever. I have treated thousands of couples, and, when a marriage goes from bad to good, it still thrills me to be part of that process. Read this list, memorize some of it, and try to enact a few. Then you won’t need to come see me." },
      { type: "numbered-list", items: [
        "You need to set aside time for your marriage and keep that time sacred and immovable.",
      ] },
      { type: "numbered-list", items: [
        "The best gift you can give your kids is a good marriage. Stop buying them so much stuff already.",
      ] },
      { type: "numbered-list", items: [
        "In the old day’s marriages came before the children. If your marriage is central, your kids will not only survive, they will be better off. Our Kids Don’t Need to be Worshipped and Celebrated So Much.",
      ] },
      { type: "numbered-list", items: [
        "Fighting in your marriage is OK. Fighting that yields new information and empathy is really, good.",
      ] },
      { type: "numbered-list", items: [
        "Anger is OK, rage isn’t. If you are raging (over a “five” out of a “ten” on your “Anger Meter”) then YOU take a break and calm down. Then YOU re-engage. Always.",
      ] },
      { type: "numbered-list", items: [
        "Constant fighting will kill your marriage and constant fighting in my office will make me want to call in sick (and I am never sick.)",
      ] },
      { type: "numbered-list", items: [
        "It is better to be happy than to be right.",
      ] },
      { type: "numbered-list", items: [
        "When you say “My feelings just aren’t there anymore” I think you are cheating.",
      ] },
      { type: "numbered-list", items: [
        "When you say “I want to see what else is out there” I know you are cheating.",
      ] },
      { type: "numbered-list", items: [
        "Stop telling friends and family anything you aren’t saying to your spouse. Keep that energy in the marriage.",
      ] },
      { type: "numbered-list", items: [
        "If your husband calls to make the appointment, that usually means my job is going to be very hard (especially if your bags are packed and at the door).",
      ] },
      { type: "numbered-list", items: [
        "If your wife calls to make the appointment, but then you take ten days to tell her or me when you can do a session, my job is going to be really, hard. And now I don’t like you.",
      ] },
      { type: "paragraph", text: "And I don’t care how “Big” your job is…" },
      { type: "numbered-list", items: [
        "Although I (usually) don’t shout “Grow up already!” during a session, I am thinking it. Marriage is for grown-ups.",
      ] },
      { type: "numbered-list", items: [
        "Throwing things is a violent act. It is abusive even if you’re “only” throwing something against a wall.",
      ] },
      { type: "numbered-list", items: [
        "The older I get the more this is true and vital: It isn’t what you say, it is how you say it.",
      ] },
      { type: "numbered-list", items: [
        "Yeah, I am expensive. Go to a hundred dollar an hour counselor and tell me what you’ve accomplished after eight sessions.",
      ] },
      { type: "numbered-list", items: [
        "Ask directly for what you need.",
      ] },
      { type: "numbered-list", items: [
        "Affairs are preventable. It is a gradual slope.",
      ] },
      { type: "numbered-list", items: [
        "Affairs needn’t be fatal to a marriage.",
      ] },
      { type: "numbered-list", items: [
        "Don’t have an affair. Please.",
      ] },
      { type: "numbered-list", items: [
        "The message you send to your partner is not necessarily the message your partner receives. This one keeps my waiting room full.",
      ] },
      { type: "numbered-list", items: [
        "Stonewalling (shutting down and not communicating) will kill your marriage.",
      ] },
      { type: "numbered-list", items: [
        "Constant criticism and/or contempt will kill your marriage.",
      ] },
      { type: "numbered-list", items: [
        "Reluctance to take responsibility for any part of the marital difficulties will kill your marriage.",
      ] },
      { type: "numbered-list", items: [
        "Active addiction or alcoholism will kill your marriage. (Note to “functioning” alcoholics everywhere: I don’t care if you haven’t missed a day of work in fourteen years, your taking the edge off every night makes for one lonely, neglected partner.)",
      ] },
      { type: "numbered-list", items: [
        "Stop viewing him as a remodeling project. He can change, but not as much as you may like.",
      ] },
      { type: "numbered-list", items: [
        "There is a reason s/he was single until s/he was thirty-seven.",
      ] },
      { type: "numbered-list", items: [
        "There is a reason this is his/her third marriage.",
      ] },
      { type: "numbered-list", items: [
        "My number one recommendation: Stop taking each other for granted.",
      ] },
      { type: "numbered-list", items: [
        "You are not the “good one”. There is hardly ever a “good one”.",
      ] },
      { type: "numbered-list", items: [
        "If you say you are going to do something, do it. This is an important part of trust.",
      ] },
      { type: "numbered-list", items: [
        "Nothing feels better than knowing your partner has your back.",
      ] },
      { type: "numbered-list", items: [
        "Step-children issues are difficult to keep separate from marital issues.",
      ] },
      { type: "numbered-list", items: [
        "Extended periods of silence = one angry household.",
      ] },
      { type: "numbered-list", items: [
        "“They” say it is possible to have a good sexless marriage. I haven’t seen one yet, but, I have only treated 2,137 couples.",
      ] },
      { type: "numbered-list", items: [
        "You need to carve-out time for your marriage and keep that time sacred and immovable.",
      ] },
      { type: "numbered-list", items: [
        "Some people just don’t need to be together.",
      ] },
      { type: "numbered-list", items: [
        "Nothing feels worse than if your relationship consists entirely of deciding whether you should be in the relationship or not.",
      ] },
      { type: "numbered-list", items: [
        "My number one recommendation: Do what is necessary for your partner to feel safe. With a sense of safety, “I” can be truly “me.” Without safety, I need to act like someone else. That is exhausting.",
      ] },
      { type: "numbered-list", items: [
        "More safety = More vulnerability. Vulnerability is good.",
      ] },
      { type: "numbered-list", items: [
        "If issues with your “Ex-Spouse” are intruding on your current marriage, you should probably consider truly, truly divorcing your Ex.",
      ] },
      { type: "numbered-list", items: [
        "Women need to understand that men aren’t mind readers. You need to tell them what you need and how you feel. Repeat until they get it.",
      ] },
      { type: "numbered-list", items: [
        "You may need to teach your man how to listen. For example, (1) Listening doesn’t equal advice giving. (2) Look at me when I am talking, please. (3) Please pause the game.",
      ] },
      { type: "numbered-list", items: [
        "It stinks that women must work this hard. The truth is women are better at relationships than men. That is why we men tend to be happier in marriage than women. It isn’t fair, I know, don’t get mad at me.",
      ] },
      { type: "numbered-list", items: [
        "Men need to understand that if you ignore your wife all day she isn’t going to feel amorous at night.",
      ] },
      { type: "numbered-list", items: [
        "My number one recommendation: Truly hear each other.",
      ] },
      { type: "numbered-list", items: [
        "Women want to feel connected.",
      ] },
      { type: "numbered-list", items: [
        "Men want to be held in awe, but will settle for appreciation. And please don’t shame us.",
      ] },
      { type: "numbered-list", items: [
        "Women want appreciation, too, but if you ask them about their day, and listen…That’ll usually work.",
      ] },
      { type: "numbered-list", items: [
        "Go ahead and give’em a good foot rub once in a while.",
      ] },
      { type: "numbered-list", items: [
        "If your problems have been going on for ten years, I won’t fix you in five sessions.",
      ] },
      { type: "numbered-list", items: [
        "Remodeling your kitchen won’t save the marriage. Neither will that trip to Europe.",
      ] },
      { type: "numbered-list", items: [
        "My number one recommendation: Be nice to each other.",
      ] },
      { type: "numbered-list", items: [
        "You need to create time for your marriage and keep that time sacred and immovable.",
      ] },
    ],
  },
  {
    slug: "xanax-for-anxiety",
    title: "Why Taking Xanax for Anxiety Is Really, Really Stupid",
    date: "February 27, 2017",
    summary: "Xanax works great — the first few times. Here's why it's one of the worst long-term approaches to treating anxiety, and what to do instead.",
    thumbnail: "/assets/articles/xanax-thumb.jpg",
    content: [
      { type: "heading", text: "Why Taking Xanax for Anxiety Is Really, Really Stupid" },
      { type: "paragraph", text: "Anxiety feels awful. Every year hundreds of thousands of emergency room visits occur because people go from feeling anxious to feeling really, really anxious to having a panic attack. They then end up in the ER convinced they are having a heart attack. Anxiety is fear. We are still wired as if we were cavemen." },
      { type: "paragraph", text: "The anxiety we feel when we are running ten minutes late for an appointment is SUBJECTIVELY FELT the same way, with the same intensity, as if our loved ones were about to be eaten by a saber-tooth tiger. Our bodies do the same thing, release the same neurotransmitters, regardless of whether we are late for an appointment or if our family was about to be devoured by a saber-tooth tiger. Xanax works great." },
      { type: "paragraph", text: "The first few times we take it, it immediately decreases our distress. We don’t get uptight if we are ten minutes late, we don’t feel the same fear/panic/anxiety as if we are being attacked by a large, toothy animal. But, what happens the second or third time we take Xanax? It still works, but, we start to adapt to the chemical relaxation. When we use Xanax regularly, something happens…" },
      { type: "paragraph", text: "When the Xanax wears off, we get anxious!! The number one side effect of Xanax leaving our body is that our body screams, “Hey, how ‘bout some more Xanax?” This is important so allow me to re-state it. Please." },
      { type: "paragraph", text: "The main side effect of Xanax wearing off is that our body/mind creates more anxiety… And this anxiety cries out for more Xanax. Doctors write nearly 50 million prescriptions for Xanax or alprazolam (the cheap, generic equivalent) every year–that’s more than one Xanax prescription every second (please read the source of the accurate statistic- http://www.forbes.com/2010/09/16/prozac-xanax-valium-business-healthcare-psychiatric-drugs.html ). It is the best-selling psychiatric drug in America, and that is some accomplishment. I believe the majority of doctors have lost the ability to discriminate whether a drug should truly be prescribed or not." },
      { type: "paragraph", text: "And, I believe, it is much, much easier for medical professionals to prescribe Xanax than to not prescribe Xanax. If Doctor Z doesn’t prescribe Xanax, then Doctor Z will then be forced to A) talk to the patient, and, therefore B) spend more time with the patient." },
      { type: "paragraph", text: "So, what should you do? Take more Xanax? I am glad you asked…Hey, how ‘bout we get to the root of our anxiety? Hey, how ‘bout we get to root of the underlying cause? The problem is, if we are sedated, medicated and numbed out– consistently taking the edge off whenever we feel anxious–then we will NEVER get to the root of the problem. The “root of the issue” is two-fold:" },
      { type: "list", items: [
        "1-Why do I feel overwhelmed by my anxiety?",
      ] },
      { type: "list", items: [
        "2-How can I cope with my anxiety without a Chill Pill?",
      ] },
      { type: "paragraph", text: "There is no shortcut here. It just takes good therapy…." },
    ],
  },
  {
    slug: "taking-time-to-be-a-couple",
    title: "Taking the Time Out to Be a Couple",
    date: "October 19, 2016",
    summary: "Fifteen minutes a day. Sacred and immovable. A personal story about the Sandwich Generation and the one habit that keeps a marriage alive.",
    thumbnail: "/assets/articles/couple-time-thumb.jpg",
    content: [
      { type: "paragraph", text: "The Sandwich Generation is defined as the generation caught between raising children and taking care of their elderly parents. Yesterday, I was the son of an 87 year old mother in a nursing home and the parent of an eight year old girl and a ten year old boy. Basically, a poster child for the Sandwich Generation; I wouldn’t have been smiling in the poster." },
      { type: "paragraph", text: "I woke up, the kids and wife were gone. I rode to work, talking, driving, and doing a phone session with an alcoholic in a hospital, her therapist, and her beaten-up family therapist. I then worked eight hours straight, talking to my mother’s nursing home, getting her back on hospice. It wasn’t looking good. I cancelled dinner with my wife and kids, went to see Mom, and drove home in time to put the kids to bed. The kids and I talked, we prayed, we sent good wishes to Grandma.Then it was just my wife and I. She had work to do, I had work to do, but, we went to the pond." },
      { type: "paragraph", text: "Our pond is luxurious, filled with movement and color. It is a beautiful, tranquil piece of man-made nature. However, when it is raining or winter, we go to the couch. And sit. And talk. And debrief/unload/dump. We carve out the time to be a couple. Again, we both were busy, but we took the time out from all the other stuff and focused on our connection." },
      { type: "paragraph", text: "I have a list I give to engaged couples. It has around fifty items, and I write no less than three or four times that each should carve out time for your coupleship; keep that time sacred and immovable." },
      { type: "paragraph", text: "Sacred: Time together is special time. No electronics, minimal talk of kids, just two grown-ups sharing their day…Or sometimes, sharing their hearts." },
      { type: "paragraph", text: "Immovable: It’s a priority. It doesn’t get moved. It doesn’t take a back seat to work, kids, or tiredness. Date nights are wonderful, but here I am talking about fifteen minutes of connecting. That’s all it takes." },
      { type: "paragraph", text: "In the old days, the marriage was the focus of the household. Today, not so much. It’s all about the kids. Now, don’t get me wrong, I like kids. I enjoy kids. I think they are pretty special. I even have owned four of them, but the “core” of the family is the connection between the adults." },
      { type: "paragraph", text: "The best gift we can give our kids is a good marriage." },
      { type: "paragraph", text: "Article on Marriage.com" },
    ],
  },
  {
    slug: "childs-bill-of-rights",
    title: "A Child's Bill of Rights",
    date: "January 31, 2015",
    summary: "Thirteen rights every child has — starting with the right to hear \"No\" at least three times a day. Adapted from John Rosemond, with Dr. Gore's endorsement of 91.5% of it.",
    thumbnail: "/assets/articles/childs-rights-thumb.jpg",
    content: [
      { type: "paragraph", text: "Because it is the most character-building, two-letter word in the English language, children have the right to hear their parents say \"No\" at least three times a day." },
      { type: "paragraph", text: "Children have the right to find out early in their lives that their parents don’t exist to make them happy, but to offer them the opportunity to learn the skills their children need to eventually make themselves happy." },
      { type: "paragraph", text: "Children have a right to scream all they want over the decisions their parents make, albeit their parents have the right to confine said screaming to certain areas of their homes." },
      { type: "paragraph", text: "Children have the right to find out early that their parents care deeply for them but don’t give a hoot what their children think about them at any given moment in time." },
      { type: "paragraph", text: "Because it is the truth, the whole truth, and nothing but the truth, children have the right to hear their parents say \"Because I said so\" on a regular and frequent basis." },
      { type: "paragraph", text: "Because it is the most character-building activity a child can engage in, children have the right to share significantly in the doing of household chores." },
      { type: "paragraph", text: "Children have a right to experience that they are not the center of the universe." },
      { type: "paragraph", text: "Children have the right to learn to be grateful for what they receive, therefore, they have the right to receive all of what they truly need and very little of what they simply want." },
      { type: "paragraph", text: "Children have the right to learn early in their lives that obedience to legitimate authority is not optional, that there are consequences for disobedience, and that said consequences are memorable and, therefore, persuasive." },
      { type: "paragraph", text: "Children have a right to not be treated as equals to their parents" },
      { type: "paragraph", text: "Children have the right to learn that parents are not their friends." },
      { type: "paragraph", text: "Every child has the right to parents who love him/her enough to make sure he/she enjoys all of the above rights." },
      { type: "paragraph", text: "Parents: Prepare your child for the path, do not prepare the path for the child." },
      { type: "paragraph", text: "The above is adapted from John Rosemond (www.rosemond.com) and is used with his permission. I agree with 91.5 % of what Mr. Rosemond says." },
    ],
  },
  {
    slug: "on-forgiveness",
    title: "On Forgiveness",
    date: "December 18, 2014",
    summary: "Forgiveness is something you do for yourself, and this woman is walking the walk. A therapist's reflection on what forgiveness actually costs — and what it frees.",
    thumbnail: "/assets/articles/forgiveness-thumb.jpg",
    content: [
      { type: "paragraph", text: "This is a tale of forgiveness, a beautiful one. Forgiveness is something you do for yourself, and this woman is walking the walk…." },
      { type: "paragraph", text: "In my office, I have sat with people who have been wronged in ways that would make most grudges look trivial. And I will tell you what took me years to fully understand: forgiveness is not something you do for the person who hurt you. It is something you do for yourself. Resentment is a full-time job. It wakes you up at 3 a.m. It wins arguments in the shower. It rearranges your face whenever that person’s name comes up. And while all of that is happening, the person who hurt you is probably not thinking about you at all. Forgiveness is not about saying what happened was OK. It is about deciding you are done letting it run your life. The woman in the story below understood this better than most of my clients do after years of therapy. She did not forgive because the young man who shot her deserved it. She forgave because she did." },
      { type: "note", text: "To read the story that inspired this reflection, search for \"When Victims Forgive\" by Nicholas Kristof in the New York Times (2014). Search 'Kristof Ian Manuel Debbie Baigrie NY Times' to find it. The story is about Ian Manuel, who was 13 when he shot Debbie Baigrie during a gang initiation in 1990, and the remarkable relationship that followed over the next two decades." },
    ],
  },
];
