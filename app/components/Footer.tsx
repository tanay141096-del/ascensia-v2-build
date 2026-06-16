export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="brand-logo" />
              <strong>Acsensia</strong>
            </div>
            <span>Revenue Operations Consulting</span>
          </div>
          <div className="footer-contact">
            tanay141096@gmail.com
            <br />
            linkedin.com/in/tanay-shah-revops-lead
            <br />
            +91 9004511099
          </div>
        </div>
        <p className="footer-copyright">© 2025 Acsensia. All rights reserved.</p>
      </div>
    </footer>
  );
}
