import Navbar from "../components/Navbar";

export default function Audit() {
  return (
    <>
      <Navbar />
      <main className="audit-page">
        <div className="audit-box">
          <span className="label">Book Free Audit</span>
          <h1>Let&apos;s find where revenue is leaking.</h1>
          <p>
            A free 20-minute call. No pitch, no obligation — just a clear look
            at your pipeline and where it&apos;s costing you money. Reach out
            directly to book a time:
          </p>
          <a className="btn btn-filled" href="mailto:tanay141096@gmail.com">
            Email tanay141096@gmail.com
          </a>
          <p className="cta-fineprint" style={{ marginTop: "24px" }}>
            Or connect on linkedin.com/in/tanay-shah-revops-lead · +91 9004511099
          </p>
        </div>
      </main>
    </>
  );
}
