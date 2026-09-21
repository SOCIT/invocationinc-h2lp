import Link from "next/link";
import { BuyButton } from "./BuyButton";
import { bookProduct, LAUNCH_CODE } from "@/lib/products";

const CHAPTERS: Array<[string, string]> = [
  ["Introduction — The Contract", "Every interaction is an exchange of value, and \u201ccommunication is what the listener does.\u201d Practical reps, not inspiration. Not motivation talk. Not a list of things to say."],
  ["Chapter 1 — It Starts With a Smile", "Genuine vs. fake smiles, and the SmileBell\u2122: a touch-triggered anchor that produces a genuine smile on command \u2014 set in about 21 reps. Everything in the book sits on this."],
  ["Chapter 2 — Overcoming Social Anxiety", "Act despite anxiety, not after it\u2019s gone. Graded exposure starting with smiling at strangers, the 5-second rule, and reframing every non-response as a successful rep."],
  ["Chapter 3 — Verbal Communication", "The conversation system: names, comments and observations, FORM, dreams \u2014 and CLIFFORD, the only acronym you need to memorize. Plus \u201cCoffee is for Closers.\u201d"],
  ["Chapter 4 — The Power of Words", "Language surgery. Remove \u201ccan\u2019t,\u201d \u201cimpossible,\u201d and complaining. Swap \u201cbut\u201d for \u201cand.\u201d Reinforce the exact behavior you want more of, by name, close in time."],
  ["Chapter 5 — Gratitude", "The second of the Three Things: remove baseline expectations and thank what actually happened. The +1 / 0 / \u22122 / \u22124 table of how gratitude moves people toward you or away."],
  ["Chapter 6 — The Science of Nonverbal Communication", "The book\u2019s claimed science base: the mirror neuron system, the Power Equation, why a group\u2019s mood drifts toward the weighted sum in the room \u2014 and why the compliment sandwich is banned."],
  ["Chapter 7 — The Practice of Nonverbal Communication", "Mental State (emotion, sensations, intention, perception) plus framing: decide their state, apply it to yourself, frame them into it, picture the interaction. Under five seconds."],
  ["Chapter 8 — Reframing", "For the people already in your life: present-tense belief statements, written and read daily, that change your perception of them \u2014 and what their mirror neurons pick up from you."],
  ["Chapter 9 — Communication Enhancements", "True time constraints (a false clock is a lie), prepared enthusiasm plus real interest, compliments behind backs, storytelling that elicits \u2014 and touch that is invited, never default."],
  ["Chapter 10 — Putting It All Together", "The full interaction stack in one place: eye contact, smile, five-second mental prep, body pointed, mirror, eyebrow flash, CLIFFORD. One system for strangers, customers, coworkers, dates."],
  ["Chapter 11 — Who Are All These People?", "The MVP rule (the person in front of you is the most important person in the room), interaction timelines \u2014 and how to quietly reduce time with the chronically negative. No ghosting. No announcement."],
  ["Chapter 12 — Meet People", "Turn errands into reps and build the Rolodex. The phone-and-text adaptation of the stack for when you can\u2019t make eye contact: keep the state, keep the frame, smile, stand, run CLIFFORD."],
  ["Chapter 13 — Get Out and Meet People", "Where to go, how to find the hosts and extroverts (stand near the greeter), and the fear section answered in order: \u201cWhat if they don\u2019t want to talk to me?\u201d"],
  ["Chapter 14 — The Physical, Not the Psychological", "Tribe mentality and bias, head-on: \u201cYou cannot hide a bias. You can overcome it.\u201d Practice the state on the people who make your brain uncomfortable. Be the dumbest person in the room."],
  ["Chapter 15 — Meeting Groups of People", "The group ladder: show up, become a regular, become the greeter, walk newcomers into subgroups, adopt the introverts, host. Groups are just a bunch of individuals."],
  ["Chapter 16 — Keep Meeting People", "The closer: the confidence feedback loop, the truth (\u201cYou don\u2019t owe a stranger your whole file. You owe them a real face\u201d), and the final line \u2014 make eye contact. Smile. Go meet someone."],
];

const FAQS: Array<[string, string]> = [
  [
    "I\u2019m an introvert / I have social anxiety \u2014 this isn\u2019t for me.",
    "The book is built for you first. The early chapters give you concrete, low-risk practice \u2014 smiling at strangers, micro talk \u2014 so you build skill gradually, without needing to become someone else overnight. And anxiety doesn\u2019t have to disappear first: the book\u2019s position is that you act despite it, not after it\u2019s gone. No forced conversations. You can always disengage.",
  ],
  [
    "I can\u2019t change my personality.",
    "You don\u2019t have to. The book\u2019s aim is \u201cconsistent, usable skills which become natural habits \u2014 not some inspiration or motivational talk.\u201d It\u2019s a stack of mechanics: a smile, a conditioned bell, a conversation structure, a mental-prep method. Mechanics can be practiced. Personalities don\u2019t need to be replaced.",
  ],
  [
    "This sounds manipulative.",
    "The system runs on no-expectation: genuine interest, invited touch only, true time constraints, and honesty over performance. \u201cYou don\u2019t owe a stranger your whole file. You owe them a real face.\u201d And the 4% rule means the other person does ~80% of the talking \u2014 you can\u2019t fake-listen your way through that.",
  ],
  [
    "Is this pickup-artist stuff?",
    "No. The book says it explicitly: this material belongs with mental state and practice, not with pickup framing. Dating is one practice venue among dozens \u2014 customers, coworkers, servers, strangers, groups. If you want seduction scripts, this is the wrong book.",
  ],
  [
    "A \u201cSmileBell\u201d sounds like pseudoscience.",
    "The book presents it as classical conditioning \u2014 Pavlov is the explicit reference \u2014 plus practice reps: about 21 pairings to set the anchor. Take it as the author\u2019s conditioning method, not as peer-reviewed neuroscience. The mechanism it leans on is old and unglamorous: pair a touch with a genuine smile enough times and the touch starts producing the smile.",
  ],
  [
    "I don\u2019t have time to meet thousands of people.",
    "The timeline is built for a normal life. Errands become reps \u2014 the cashier with the nametag counts. The book\u2019s math: about a thousand positive interactions a year, less than three a day, makes a strong communicator. And the 10,000-hours bit is treated as a story, not a requirement.",
  ],
  [
    "I\u2019ve read communication books before. They\u2019re all vague.",
    "This one names the blocks, the acronym, the rep counts, and the timelines. \u201cIt is especially useful if you have ever felt that \u2018soft skills\u2019 advice was too vague, too gentle, or disconnected from real outcomes.\u201d If you want one more book of \u201cjust be confident,\u201d skip it.",
  ],
  [
    "Will this work for phone and text, not just in person?",
    "Chapter 12 covers the nonvisual adaptation explicitly: keep the mental state, keep the frame, picture the interaction, smile, stand up, run CLIFFORD \u2014 and drop the parts the channel can\u2019t carry. The stack survives the loss of eye contact.",
  ],
  [
    "What exactly do I get?",
    "The complete book as a PDF \u2014 sixteen chapters, eight coaching sessions, about 34,000 words \u2014 available to download the second your payment clears. The EPUB edition is in final formatting; every buyer gets it emailed free the moment it\u2019s done.",
  ],
];

export function H2LPPage() {
  return (
    <>
      <div className="lf-bar">
        HOW TO LIKE PEOPLE — <span className="lf-now">$19.97 · FIRST 100 READERS PAY $9.97</span>
      </div>

      <header className="lf-site-header">
        <div>Invocation Inc · Human Performance Engineers</div>
        <Link href="#offer">Get the Ebook — {bookProduct.priceDisplay}</Link>
      </header>

      <main id="main" className="lf-wrap">
        <p className="lf-stamp">
          A field manual for social fluency. Not charm school. Not pickup-artist.
        </p>

        <p className="lf-tiny" style={{ textAlign: "center", marginBottom: 4 }}>
          HOW TO LIKE PEOPLE
        </p>
        <p className="lf-tiny" style={{ textAlign: "center", marginTop: 0 }}>
          How to be someone people want to talk to.
        </p>

        <h1>You don&rsquo;t have a personality problem. You have a practice problem.</h1>

        <p className="lf-lead">
          Most social-skills advice is vague, gentle, and disconnected from real
          outcomes. This book treats human interaction like a system you can run:
          a genuine smile on command, a conversation structure that never runs
          dry, and a five-second mental-prep method that sets the outcome before
          you open your mouth.
        </p>

        <p>
          <strong>Every interaction is an exchange of value.</strong> Conversations
          falter because the value received doesn&rsquo;t justify the effort. You know
          the feeling from the other side: the person who leaves you drained, the
          coworker who makes you cringe, the small talk that costs more than it
          gives. <strong>Communication is what the listener does.</strong> You
          don&rsquo;t get credit for sentences that existed in your head &mdash; you get
          credit for what arrived.
        </p>

        <p>
          This book is the other side of that sentence. A repeatable stack &mdash;
          eye contact, a genuine smile, a conditioned calm, a conversation
          structure, a mental-prep method &mdash; practiced until meeting people is
          a skill instead of a talent. Not inspiration. Not &ldquo;believe in
          yourself.&rdquo; Reps.
        </p>

        <div className="lf-cta" id="buy-hero">
          <BuyButton
            productId="book"
            label={<>Get the Ebook — {bookProduct.priceDisplay}</>}
          />
          <p className="lf-tiny">
            First 100 readers: enter code <strong>{LAUNCH_CODE}</strong> at checkout
            and pay $9.97. PDF instant download · EPUB emailed free when formatting
            is done.
          </p>
        </div>

        <h2>Nobody wrote down the rules</h2>

        <p>
          For some people, a room full of strangers is terrifying. For others
          it&rsquo;s just&hellip; effortful. And the advice out there is &ldquo;be
          yourself&rdquo; and &ldquo;just be confident&rdquo; &mdash; instructions about as
          useful as &ldquo;just be taller.&rdquo; Meanwhile the people who are good at
          this make it look like a personality trait, which convinces everyone else
          it&rsquo;s something you&rsquo;re born with.
        </p>

        <p>
          The book&rsquo;s argument: it isn&rsquo;t. It&rsquo;s a stack of mechanics &mdash;
          smile, a conditioned bell, a conversation structure, a frame &mdash; and
          mechanics can be practiced. <em>&ldquo;Familiarity is the basis of knowledge,
          knowledge is the basis of effective action, effective action is the basis
          for positive results, and repeated positive results are the basis for
          confidence.&rdquo;</em>
        </p>

        <p>
          And if you&rsquo;re an engineer, an IT person, or someone on the spectrum:
          this was written for how you learn. Blocks. Acronyms. Checklists. Rep
          counts. The unwritten rules, written down &mdash; no vibes required. (It&rsquo;s
          a skill manual, not therapy, and it doesn&rsquo;t pretend to be.)
        </p>

        <h2>The stack</h2>

        <p>
          One system, taught in order, from first smile to running the room:
        </p>

        <p>
          <strong>1. The SmileBell&trade;.</strong> A classically conditioned touch
          anchor &mdash; Pavlov&rsquo;s dogs, applied to your own face &mdash; that
          produces a genuine smile and the calm behind it on command. The book says
          about 21 reps to set it. Everything else in the book sits on this, because
          the smile is the first thing another person experiences from you.
        </p>

        <p>
          <strong>2. The 4% Rule.</strong> The book&rsquo;s model: about 80% of
          communication is nonverbal; of the 20% that&rsquo;s verbal, about 80% should
          come from the other person. Your talking time is roughly 4% of the
          interaction &mdash; and you spend it opening, inquiring, and closing.
          <em>&ldquo;The goal is not to dominate the conversation. The goal is to create
          the conditions where the other person wants to talk with you.&rdquo;</em>
        </p>

        <p>
          <strong>3. CLIFFORD.</strong> The only acronym you need to memorize:{" "}
          <strong>C</strong>ompliment, <strong>I</strong>ntroduction,{" "}
          <strong>F</strong>rom, <strong>F</strong>amily, <strong>O</strong>ccupation,{" "}
          <strong>R</strong>ecreation, <strong>D</strong>reams. The first three letters
          are also the format: <strong>C</strong>onnect, share{" "}
          <strong>L</strong>ikeness, <strong>I</strong>nquire. You never run out of
          things to say, because the content of the conversation is directly in
          front of you &mdash; in the other person&rsquo;s brain.
        </p>

        <p>
          <strong>4. Mental State + Framing.</strong> Under five seconds, before you
          open your mouth: decide the other person&rsquo;s ending state, apply it to
          yourself, frame them into it, picture the interaction happening.{" "}
          <em>&ldquo;Before you ever meet someone you will like them and they will
          like you.&rdquo;</em>
        </p>

        <p>
          <strong>5. The full sequence.</strong> Eye contact. Smile. Mental prep.
          Body pointed, mirror, eyebrow flash. CLIFFORD. And &ldquo;Coffee is for
          Closers&rdquo; &mdash; close every conversation clean and exchange contact
          info.
        </p>

        <p>
          Then the practice ladder: smile at strangers &rarr; micro talk &rarr;
          CLIFFORD reps on cashiers and servers &rarr; individuals &rarr; groups
          &rarr; regular &rarr; greeter &rarr; host. <em>&ldquo;Knowing the content can
          help. Only action makes the change last.&rdquo;</em> About a thousand
          positive interactions a year &mdash; less than three a day &mdash; and the
          book calls that a strong communicator. Eight coaching sessions walk you up
          it in order.
        </p>

        <h2>What this is not</h2>

        <div className="lf-warn">
          <p>
            <strong>Not pickup artistry.</strong> The book says it explicitly: this
            material belongs with mental state and practice, not with pickup
            framing. Dating is one practice venue among dozens &mdash; customers,
            coworkers, servers, strangers, groups.
          </p>
          <p>
            <strong>Not manipulation.</strong> The system runs on no-expectation:
            genuine interest, invited touch only (handshake or hug &mdash; their
            choice), true time constraints. A false clock is a lie, and the
            relationship sits on that lie. <em>&ldquo;You don&rsquo;t owe a stranger your
            whole file. You owe them a real face.&rdquo;</em>
          </p>
          <p>
            <strong>Not a personality transplant.</strong> The aim is
            &ldquo;consistent, usable skills which become natural habits &mdash; not
            some inspiration or motivational talk.&rdquo; Nobody is asking you to walk
            out today and smash through a brick wall like the Kool-Aid Man just to
            hang out with a group of people.
          </p>
        </div>

        <h2>Who it&rsquo;s for</h2>

        <ul>
          <li><strong>IT people and engineers</strong> &mdash; it&rsquo;s a system with documentation, not vibes.</li>
          <li><strong>People on the spectrum</strong> &mdash; the unwritten rules, written down: explicit mechanics you can practice.</li>
          <li><strong>Anyone who knows this doesn&rsquo;t come naturally</strong> &mdash; the book is built for you first, with low-risk reps before anything high-pressure.</li>
          <li><strong>Socially skilled extroverts</strong> &mdash; it sharpens the specific tools: framing, nonverbal control, conversation structure.</li>
        </ul>

        <p>
          The current word is <em>rizz</em>. The useful version is social fluency you can practice.
        </p>

        <h2>The book&rsquo;s own lines</h2>

        <p><em>&ldquo;Communication is what the listener does.&rdquo;</em></p>
        <p><em>&ldquo;Before you ever meet someone you will like them and they will like you.&rdquo;</em></p>
        <p><em>&ldquo;People run from the negative with twice the energy they run toward the positive.&rdquo;</em></p>
        <p><em>&ldquo;You don&rsquo;t owe a stranger your whole file. You owe them a real face.&rdquo;</em></p>
        <p><em>&ldquo;Make eye contact. Smile. Go meet someone.&rdquo;</em></p>

        <h2>What you&rsquo;ll learn: the 16 chapters</h2>

        {CHAPTERS.map(([title, desc]) => (
          <div className="lf-week" key={title}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}

        <h2>The author</h2>

        <p>
          <strong>Jonah Dorman</strong> is a U.S. Army combat veteran. He trained foster
          parents, social workers, and child-protection staff in trauma-informed care
          and positive communication &mdash; and served as VP or Chair/CoChair of 7+
          organizations bridging foster parents, the agencies that handle placements,
          and the government.
        </p>

        <p>
          He&rsquo;s been GM, VP, interim CEO &mdash; managing coders and IT workers (not always
          the best communicators) and running performance reviews for a living. He has
          studied hypnosis, NLP, sales, and performance.
        </p>

        <p>
          The book is what those jobs have in common: humans respond to incentives,
          stories, and repetition &mdash; whether you admit it or not. Years of knowledge,
          hundreds of books and published papers &mdash; dumbed down into methods normal
          people can use. No guru worship. No &ldquo;believe in yourself.&rdquo; A stack you
          can practice.
        </p>

        <h2 id="offer">Get the book</h2>

        <p>
          <strong>How to Like People</strong> &mdash; the complete book, direct from
          the author. Sixteen chapters, eight coaching sessions, about 34,000 words:
          the whole interaction stack, from first smile to running the room.{" "}
          <s>{bookProduct.listPriceDisplay}</s>{" "}
          <strong>{bookProduct.priceDisplay}</strong>.
        </p>

        <div className="lf-cta">
          <p className="lf-cta-kicker">
            First 100 readers pay $9.97 — enter code <strong>{LAUNCH_CODE}</strong> at checkout
          </p>
          <BuyButton
            productId="book"
            label={<>Get the Ebook — {bookProduct.priceDisplay}</>}
          />
          <p className="lf-tiny">
            PDF available to download the second your payment clears. The EPUB edition
            is in final formatting — every buyer gets it emailed free the moment it&rsquo;s done.
          </p>
          <p className="lf-tiny">
            Sold here direct from the author.
          </p>
        </div>

        <h2>Questions</h2>

        <div className="lf-faq">
          {FAQS.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>

        <div className="lf-ps">
          <p>
            P.S. &mdash; Make eye contact. Smile. Go meet someone. That&rsquo;s the
            last line of the book, and it&rsquo;s also the whole book. The rest is
            just the reps that make it true.
          </p>
        </div>
      </main>

      <footer className="lf-footer">
        <p>© {new Date().getFullYear()} Invocation Inc. Not therapy. Not medical advice.</p>
        <p>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
        </p>
      </footer>
    </>
  );
}
