import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function Community() {
  return (
      <div className="software">
        <div className="pageContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>

          {/* PRIDEChicago */}
          <div className="projectRow">
            <div className="projectRowInner">
              <div className="projectTextWrap" style={{ maxWidth: '100%' }}>
                <div className="projectMeta">COMMUNITY</div>
                <h2 className="projectTitle">PRIDEChicago</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '1rem' }}>
                  <span className="communityRole">Volunteer Coordinator</span>
                  <span className="communityRole">2025–Present</span>
                </div>
                <div className="projectInsight">
                  "Pride isn't a parade — it's a year-round operation built by community."
                </div>
                <p className="projectDesc">
                  Grew the volunteer base from 40 to 200+. Built the infrastructure, role definitions, training materials, and recruitment pipelines needed to extend PRIDEChicago from a one-day event into a year-round nonprofit operation. Partnered with city officials, corporate sponsors, and community organizations. Deployed the full team to execute a 150-contingent parade on time and on budget.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}
