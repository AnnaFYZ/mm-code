  // import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./footer.css"
 
  function Footer() {

    let thisYear = new Date().getFullYear();
    
    return (
      <footer>
  <div className="container footer-content">
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
      <div className="d-flex align-items-center">
        {/* <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
          </svg>
        </a> */}
        <div className="footer-end mb-3 mb-md-0 mx-auto">© {thisYear} MM-Code</div>
      </div>
      {/* <ul className="nav justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24">
              <use href="#twitter"></use>
            </svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24">
            </svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"> 
            </svg></a></li>
      </ul> */}
    </footer>
  </div>
</footer>

    );

  }

  export default Footer;
