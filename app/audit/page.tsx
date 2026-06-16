import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendlyButton from "../components/CalendlyButton";
import CalendlyBadge from "../components/CalendlyBadge";

export default function Audit() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Navbar />

      {/* HERO */}
      <header className="hero hero-auto">
        <div className="hero-inner">
          <span className="label hero-label">Free Revenue Systems Audit</span>
          <h1>
            Find out exactly where your pipeline is leaking, and what it is
            costing you every month.
          </h1>
          <p>
            A structured 45-minute review of your lead flow, pipeline, and
            follow-up sequences. You get a written report within 48 hours. No
            pitch. No obligation.
          </p>
          <div className="hero-buttons">
            <CalendlyButton className="btn btn-filled">
              Book Your Free Audit
            </CalendlyButton>
          </div>
          <p className="hero-fineprint">
            Spaces limited
          </p>
        </div>
      </header>

      {/* WHAT WE COVER */}
      <section className="section-light">
        <div className="container">
          <div className="section-heading">
            <h2>45 minutes. Everything assessed.</h2>
          </div>
          <div className="cover-grid">
            <div className="cover-card cover-cyan">
              <h3>CRM and Pipeline</h3>
              <p>
                How clean is your pipeline, what stages exist, what
                automations are running.
              </p>
            </div>
            <div className="cover-card cover-blue">
              <h3>Lead Response</h3>
              <p>
                How fast new leads get a response and whether anything fires
                automatically.
              </p>
            </div>
            <div className="cover-card cover-green">
              <h3>Show-Up Rate</h3>
              <p>
                Your current show-up rate vs the 70-80% benchmark and what
                sequences exist.
              </p>
            </div>
            <div className="cover-card cover-amber">
              <h3>Follow-Up and Recovery</h3>
              <p>
                What happens after a no-show and how many post-call follow-up
                touches exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-dark">
        <div className="container">
          <div className="section-heading">
            <h2>What lands in your inbox within 48 hours.</h2>
          </div>
          <div className="deliverables">
            <div className="deliverable-row">
              <span className="deliverable-time">Day 2</span>
              <div className="deliverable-content">
                <h3>Revenue Leak Report</h3>
                <ul>
                  <li>Top 3 revenue gaps named and quantified in £</li>
                  <li>Each gap has a specific fix attached</li>
                  <li>Delivered as a written document within 48 hours</li>
                </ul>
              </div>
            </div>
            <div className="deliverable-row">
              <span className="deliverable-time">Day 2</span>
              <div className="deliverable-content">
                <h3>Baseline Metrics Snapshot</h3>
                <ul>
                  <li>5 core numbers benchmarked against targets</li>
                  <li>Monthly revenue impact calculated per gap</li>
                </ul>
              </div>
            </div>
            <div className="deliverable-row">
              <span className="deliverable-time">End of Week 1</span>
              <div className="deliverable-content">
                <h3>Priority Fix List</h3>
                <ul>
                  <li>Weeks 1-4 in full detail</li>
                  <li>Each fix labelled with the metric it improves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR YOU / NOT FOR YOU */}
      <section className="section-light">
        <div className="container">
          <div className="section-heading">
            <span className="label">Is This For You</span>
            <h2>Honest answer.</h2>
          </div>
          <div className="fit-grid">
            <div className="fit-col fit-yes">
              <h3>Show up if...</h3>
              <ul>
                <li>
                  <span>✓</span> Your offer has been validated, you have made
                  consistent revenue from it
                </li>
                <li>
                  <span>✓</span> You are the decision maker
                </li>
                <li>
                  <span>✓</span> Revenue has been stuck despite consistent
                  leads
                </li>
                <li>
                  <span>✓</span> You want to know exactly what is causing it
                </li>
              </ul>
            </div>
            <div className="fit-col fit-no">
              <h3>Do not show up if...</h3>
              <ul>
                <li>
                  <span>✗</span> You are still looking for your first clients
                </li>
                <li>
                  <span>✗</span> You want lead generation services
                </li>
                <li>
                  <span>✗</span> You are not willing to share CRM access
                </li>
                <li>
                  <span>✗</span> You are price shopping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="section-light cta-section">
        <div className="container">
          <div className="section-heading">
            <h2>Book your free 45-minute audit.</h2>
            <p>
              Pick a time. I will send 3 short questions to answer beforehand
              so we make the 45 minutes count.
            </p>
          </div>
          <CalendlyButton className="btn btn-filled">
            Choose a Time
          </CalendlyButton>
          <p className="cta-fineprint">
            Not ready to book? Connect on{" "}
            <a
              href="https://www.linkedin.com/in/tanay-shah-revops-lead/"
              style={{ color: "var(--accent-cyan)" }}
            >
              LinkedIn
            </a>{" "}
            let&apos;s chat.
          </p>
        </div>
      </section>

      <Footer />
      <CalendlyBadge />
    </>
  );
}
