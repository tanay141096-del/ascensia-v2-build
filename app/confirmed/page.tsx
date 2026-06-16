// Standalone post-booking confirmation page. Intentionally not linked from
// the Navbar/Footer or any other page - reachable only via direct URL (e.g.
// set as the "Redirect to a Confirmation Page" destination in the Calendly
// event-type settings).

export default function Confirmed() {
  return (
    <main className="confirm-page">
      <div className="confirm-inner">
        <div className="confirm-header">
          <span className="confirm-wordmark">Acsensia</span>
          <h1>Your Audit Is Booked</h1>
          <h2>Here&apos;s What To Do Before We Speak</h2>
          <p className="confirm-subtext">
            Read this page before our call. It will make our 45 minutes
            considerably more useful for you.
          </p>
        </div>

        <div className="confirm-step-label">↓ Step 1: Block Your Calendar</div>
        <div className="confirm-card">
          <h3>Show up properly</h3>
          <p>
            Camera on. Laptop, not phone. Somewhere quiet. We start on time
            and end on time.
          </p>
        </div>

        <div className="confirm-step-label">↓ Step 2: Know Your Numbers</div>
        <div className="confirm-card">
          <h3>Bring the basics</h3>
          <p>
            How many calls you book per month. Rough show-up rate. Average
            deal value. Rough estimates are fine. We calculate the rest live.
          </p>
        </div>

        <div className="confirm-step-label">↓ Step 3: Come Ready to Decide</div>
        <div className="confirm-card">
          <h3>This is a diagnostic, not a pitch</h3>
          <p>
            I&apos;ll map where revenue is leaking and show you what each leak
            costs per month. You&apos;ll leave with a clear picture whether we
            work together or not.
          </p>
        </div>

        <div className="confirm-step-label">↓ Step 4: Make Sure This Is For You</div>
        <div className="confirm-fit-grid">
          <div className="confirm-card confirm-fit-card">
            <h4>
              <span className="confirm-dot confirm-dot-green" />
              Show Up If&hellip;
            </h4>
            <ul>
              <li>You&apos;re booking calls but revenue isn&apos;t moving</li>
              <li>You can make a decision when it&apos;s clear</li>
              <li>You want to know exactly where money is leaking</li>
              <li>You&apos;re open to fixing what&apos;s actually broken</li>
            </ul>
          </div>
          <div className="confirm-card confirm-fit-card">
            <h4>
              <span className="confirm-dot confirm-dot-red" />
              Don&apos;t Show Up If&hellip;
            </h4>
            <ul>
              <li>You&apos;re just exploring with no intent to act</li>
              <li>You think more leads will fix the problem</li>
              <li>You&apos;re looking for someone to manage your ads</li>
              <li>You need multiple approval cycles to spend £500</li>
            </ul>
          </div>
        </div>

        <div className="confirm-step-label">↓ Step 5: Common Questions</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="confirm-card">
            <h3>What exactly happens on the call?</h3>
            <p>
              I&apos;ll walk you through your revenue funnel, identify where
              money is leaking, and show you what each leak costs per month.
              It&apos;s a diagnostic, not a sales pitch.
            </p>
          </div>
          <div className="confirm-card">
            <h3>Do I need to prepare anything specific?</h3>
            <p>
              Just rough numbers: monthly calls booked, show-up rate, and
              average deal value. If you don&apos;t have exact figures,
              estimates are fine. We work it out together.
            </p>
          </div>
          <div className="confirm-card">
            <h3>What if I need to reschedule?</h3>
            <p>
              No problem. Use the reschedule link in your calendar invite, or
              message me on LinkedIn and we&apos;ll find a new time that
              works.
            </p>
          </div>
          <div className="confirm-card">
            <h3>Is there any cost for the audit?</h3>
            <p>
              The 45-minute audit is free. If we decide to work together,
              we&apos;ll discuss scope and pricing after. No pressure either
              way.
            </p>
          </div>
        </div>

        <p className="confirm-faq-prompt">Questions before the call?</p>
        <div className="confirm-linkedin-row">
          <a
            href="https://www.linkedin.com/in/tanay-shah-revops-lead/"
            target="_blank"
            rel="noopener noreferrer"
            className="confirm-linkedin-btn"
          >
            <span className="confirm-linkedin-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </span>
            Message on LinkedIn
          </a>
        </div>

        <div className="confirm-divider" />
        <p className="confirm-footer-text">
          Tanay Shah · Acsensia · tanay141096@gmail.com
        </p>
      </div>
    </main>
  );
}
