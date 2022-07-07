import React from "react";

/**
 * Social links
 * @param {*} param0
 * @returns
 */
const CopyWriteSection = ({ copywrite, term, policy }) => {
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7">
            <p className="mb-0 f_400">{copywrite}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="list-unstyled f_menu text-right">
              <li>
                <a href=".#">{term}</a>
              </li>
              <li>
                <a href=".#">{policy}</a>
              </li>
              <li>
                <a href="/sitemap/sitemap-0.xml">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyWriteSection;
