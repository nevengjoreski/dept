export const BEMFooter = () => (
  <div className="footer--container">
    <div className="footer--upper">
      <object
        className="footer-logo"
        data="/svg/dept-logo.svg"
        width="88"
        height="25"
      ></object>
      <div className="footer--navigation--container">
        <ul className="footer--navigation">
          <li>Work</li>
          <li>Services</li>
          <li>Stories</li>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer--logo--container">
        <object
          className="social--media--logo"
          data="/svg/facebook.svg"
          width="30"
          height="30"
        ></object>
        <object
          className="social--media--logo"
          data="/svg/twitter.svg"
          width="30"
          height="30"
        ></object>
        <object
          className="social--media--logo"
          data="/svg/instagram.svg"
          width="30"
          height="30"
        ></object>
      </div>
    </div>
    <hr className="footer--line" />
    <div className="footer--lower">
      <div className="footer--information">
        <ul className="footer--information--navigation">
          <li>Chamber of Commerce: 63464101</li>
          <li>VAT: NL 8552.47.502.B01</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div className="footer--company">© 2022 Dept Agency</div>
    </div>
  </div>
)
