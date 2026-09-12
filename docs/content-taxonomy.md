# Where does a piece of content go?

drgore.com has three places writing can live, and until now the choice was made
case by case. Dave sends documents without saying which he means — his 2026-09-04
email literally opens "Are we doing a blog section?" — so the decision keeps
falling to us. This is the rule we use, so it stops being re-litigated per file.

## The one question

**Does a reader arrive because of the topic, or because of the author?**

- Topic → **Articles** (`src/data/articles.ts`, `/articles/<slug>`)
- Author → **Blog** (`src/data/blogPosts.ts`, `/blog/<slug>`)
- Neither, because the reader is deciding whether to hire him → **a service page**

The site already says this in its own index copy, and those two sentences are the
tiebreaker whenever a piece feels borderline:

- `/articles` — "Insights and resources from Dr. Gore on therapy, relationships,
  addiction, and family life."
- `/blog` — "Personal writing from someone who has spent 42 years listening. Some
  pieces are funny. Some are not. All of them are true."

Resources versus personal writing. That is the whole distinction.

## Articles

Evergreen reference. Someone searching a problem lands here, and it is as useful
in three years as it is today. The date is a detail, not the point.

Shapes that belong here: frameworks and checklists, question sets and worksheets,
primers that define a term, printables, "what is X" and "how to tell whether Y".

Practical signals: it is structured with headings or as a list; it would still make
sense with the date removed; the title reads like a search query; it is written to
be used rather than read once.

## Blog

Personal, occasioned, first person. Dave noticed something, or read something, or
is annoyed about something. It is anchored to a moment and it is worth reading
because it is him.

Shapes that belong here: essays, reactions to something he read or watched,
stories from practice, jokes, announcements.

Practical signals: it opens with "I"; it responds to a specific thing at a specific
time; removing the date would make it read oddly; you would not find it by
searching a symptom.

## Service pages

Neither of the above. First person, credentials, and a close that asks for the
work. The reader is not learning, they are deciding whether to book.

These do not exist on the site yet, which is why `are-families-important` is
currently filed under Articles. See the Build Suite work item for `/services`.
When that page ships, that copy moves and the article URL redirects to it.

## When the two rules disagree

**Dave's own designation wins.** If he says "here is a blog post," it is a blog
post, whatever the shape suggests. He is the author and it is his site. Note the
mismatch in the work item so the reasoning is on record, and move on.

## Applied to the September 2026 batch

| Document | Home | Why |
|---|---|---|
| couplequestions.docx | Articles | A question set to work through. Used, not read. |
| conversationstarting.docx | Articles | Same: prompts to use with a kid. |
| giving a fu.docx | Articles | A printable gag graphic. Matches the `attention-teenagers` precedent, which is also humor and also sits in Articles. |
| Signs of a Healthy Family System.doc | Articles | Sectioned framework, explicitly evergreen. |
| Family Therapy .docx | Articles, provisionally | Actually service-page copy. Filed here because no service page exists yet. Moves when `/services` ships. |
| What Nobody Will Tell You About Early Recovery.docx | Articles | A reference list for someone entering recovery. Dave called it a blog post, so under the rule above his word would win, but Jeremy re-filed it to Articles on 2026-09-11. |
| springsteen.docx | Blog | First person, reacting to a book he read. Textbook blog. |

## Both files, one contract

Whichever file a piece lands in, it needs: a slug, a **full publish date** (never a
bare year), a summary that does not give away the ending, and a `thumbnail` that
points at a file that actually exists in `public/`. `assertThumbnails` /
`assertArticleImages` fail the build otherwise, and that guard stays.

If a piece moves between the two, add a permanent redirect in `vercel.json` from
the old URL. A live URL is a promise even when it has only been live an hour.
