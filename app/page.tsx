import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const CALENDLY_URL =
  "https://calendly.com/tanay141096/audit?background_color=151922&text_color=ffffff&primary_color=3aabdc";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <span className="label hero-label">Revenue Operations Consulting</span>
          <h1>
            Your revenue is not the problem.
            <br />
            Your backend is.
          </h1>
          <p>
            Most businesses at your stage are losing £5,000–£20,000 every
            month. Not because leads are bad, but because the system
            handling those leads was never properly built.
          </p>
          <div className="hero-buttons">
            <a href={CALENDLY_URL} className="btn btn-filled">
              Book Free Audit
            </a>
            <a href="#what-we-do" className="btn btn-outline">
              See How It Works
            </a>
          </div>
          <p className="hero-fineprint">
            Free 20-minute audit. No pitch. Max 6 clients at any time.
          </p>
        </div>
      </header>

      {/* THE PROBLEM */}
      <section className="section-light">
        <div className="container">
          <div className="section-heading">
            <span className="label">The Situation</span>
            <h2>Does this sound familiar?</h2>
          </div>
          <div className="cards-row">
            <div className="card-light">
              <div className="card-number">01</div>
              <p>Leads are coming in and some calls are closing</p>
            </div>
            <div className="card-light">
              <div className="card-number">02</div>
              <p>But revenue is stuck at the same number month after month</p>
            </div>
            <div className="card-light">
              <div className="card-number">03</div>
              <p>More content. More outreach. More hours. Nothing moves.</p>
            </div>
          </div>
          <div className="callout">
            The problem is almost never the offer. The problem is that the
            backend has not caught up with the front end. Everything still
            depends on the founder personally.
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="section-dark">
        <div className="container">
          <div className="section-heading">
            <span className="label">What We Do</span>
            <h2>We build the backend so revenue actually moves.</h2>
          </div>
          <div className="cards-row-dark">
            <div className="card-dark">
              <div className="card-number">01</div>
              <h3>Find the Leaks</h3>
              <p>
                We audit your setup and calculate exactly where revenue is
                escaping in £.
              </p>
            </div>
            <div className="card-dark">
              <div className="card-number">02</div>
              <h3>Build the System</h3>
              <p>
                We build the infrastructure done for you inside your existing
                tools.
              </p>
            </div>
            <div className="card-dark">
              <div className="card-number">03</div>
              <h3>It Runs Without You</h3>
              <p>
                Tested. Documented. The pipeline moves whether you are working
                or not.
              </p>
            </div>
          </div>
          <div className="offer-box">
            We help UK coaches, consultants and agencies stuck at
            £10K–£50K/month build the backend infrastructure that lets revenue
            actually move: pipelines, pre-call sequences, post-call
            follow-up, tagging, and dashboards.
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="section-light">
        <div className="container">
          <div className="section-heading">
            <span className="label">What We Build</span>
            <h2>The infrastructure most businesses at this stage are missing.</h2>
          </div>
          <div className="grid-2col">
            <div className="card-accent">
              <h3>Pipeline Architecture</h3>
              <p>
                Clean stages, deal values, and tracking so you see your
                business in 60 seconds.
              </p>
            </div>
            <div className="card-accent">
              <h3>Pre-Call Sequences</h3>
              <p>
                Automated reminders before every call. Show-up rates move from
                50% to 75%+.
              </p>
            </div>
            <div className="card-accent">
              <h3>No-Show Recovery</h3>
              <p>
                A message fires 15 minutes after a missed call. Recovers
                20-35% automatically.
              </p>
            </div>
            <div className="card-accent">
              <h3>Post-Call Follow-Up</h3>
              <p>
                21-day automated closing sequence. 7 touches without you
                lifting a finger.
              </p>
            </div>
            <div className="card-accent">
              <h3>Reporting Dashboard</h3>
              <p>
                5 core numbers in one view. Monday morning email sent
                automatically.
              </p>
            </div>
            <div className="card-accent">
              <h3>Pre-Qualification System</h3>
              <p>Filters unqualified leads before they reach your calendar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="section-dark">
        <div className="container">
          <div className="section-heading">
            <span className="label">Proof of Work</span>
            <h2>Results from real engagements.</h2>
          </div>

          <div className="proof-card">
            <span className="label">Ethan Golding · High-Ticket Coaching</span>
            <div className="proof-result">£10K → £75K MRR</div>
            <div className="proof-subtext">in 6 months</div>
            <p className="body">
              No CRM. No automation. Founder managing every lead manually.
              Built the entire infrastructure from scratch: GHL from zero,
              20+ automation workflows, pre-call sequences, onboarding
              automation. Revenue grew 7x not from new leads but from
              converting the ones already coming in.
            </p>
          </div>

          <div className="proof-row">
            <div className="proof-card">
              <h4>Charlie Phillips · Coaching at £50K/month</h4>
              <p>
                Show-up rate stabilised with a 12-email pre-call sequence.
              </p>
            </div>
            <div className="proof-card">
              <h4>Zac Ratcliff · Two businesses</h4>
              <p>
                Two businesses systematised on GHL. Pre-call sequences,
                Zapier connections, course builds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="section-light">
        <div className="container">
          <div className="section-heading">
            <span className="label">Is This For You</span>
            <h2>Honest answer.</h2>
          </div>
          <div className="fit-grid">
            <div className="fit-col fit-yes">
              <h3>This is for you if...</h3>
              <ul>
                <li>
                  <span>✓</span> You are booking calls and some are closing
                </li>
                <li>
                  <span>✓</span> Revenue has been flat despite leads coming in
                </li>
                <li>
                  <span>✓</span> Follow-up is manual and inconsistent
                </li>
                <li>
                  <span>✓</span> You want the problem fixed not just diagnosed
                </li>
                <li>
                  <span>✓</span> You are willing to share CRM access
                </li>
              </ul>
            </div>
            <div className="fit-col fit-no">
              <h3>This is not for you if...</h3>
              <ul>
                <li>
                  <span>✗</span> You have no consistent lead flow yet
                </li>
                <li>
                  <span>✗</span> You want someone to generate leads for you
                </li>
                <li>
                  <span>✗</span> You are not the decision maker
                </li>
                <li>
                  <span>✗</span> You are not willing to share access
                </li>
                <li>
                  <span>✗</span> You are not ready to commit to fixing it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark cta-section">
        <div className="container">
          <div className="section-heading">
            <span className="label">Ready to Start</span>
            <h2>Book a free 20-minute pipeline audit.</h2>
            <p>
              We look at your setup and tell you exactly where revenue is
              leaking. No pitch. No obligation. If we cannot find anything
              useful in 20 minutes, you have lost nothing.
            </p>
          </div>
          <a href={CALENDLY_URL} className="btn btn-filled">
            Book Your Free Audit
          </a>
          <p className="cta-fineprint">
            Max 6 clients · linkedin.com/in/tanay-shah-revops-lead
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
