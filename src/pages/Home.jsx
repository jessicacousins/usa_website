import React from "react";

export default function Home() {
  return (
    <section className="page homePage">
      <div className="heroShell">
        <div className="heroInner">
          <div className="heroLeft">
            <p className="heroKicker">A living timeline of liberty</p>
            <h1 className="heroTitle">
              America: A Constitutional Republic Built on Liberty
            </h1>
            <p className="heroLead">
              This site highlights America’s founding ideals—self-government,
              ordered liberty, religious freedom, and civic virtue—tracing
              milestones from the colonial era to 2025. Every fact links to an
              official government source so you can verify and explore further.
            </p>

            <div className="heroPills">
              <a className="heroPill" href="/founding">
                <span>Founding Era</span>
              </a>
              <a className="heroPill" href="/new-england">
                <span>New England &amp; Boston</span>
              </a>
              <a className="heroPill" href="/timeline">
                <span>Full Timeline</span>
              </a>
              <a className="heroPill" href="/resources">
                <span>Official Resources</span>
              </a>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroGlobe">
              <div className="heroRing heroRing--red"></div>
              <div className="heroRing heroRing--blue"></div>
              <div className="heroBadge">
                <strong>Population Growth</strong>
                <span>1776 ≈ 2.5 million</span>
                <span>2025 ≈ 330+ million</span>
              </div>
            </div>
            <p className="heroCaption">
              Click a section to jump into primary documents, official data, and
              preserved historic sites.
            </p>
          </div>
        </div>
      </div>

      <div className="homeSections">
        <div className="cards">
          <a className="card" href="/founding">
            <h3>Founding Principles</h3>
            <p>
              Declaration, constitutions, and the central role of faith and
              virtue in public life.
            </p>
          </a>
          <a className="card" href="/new-england">
            <h3>New England &amp; Boston</h3>
            <p>
              “Cradle of Liberty” sites, events, and documents from Plymouth to
              the Freedom Trail.
            </p>
          </a>
          <a className="card" href="/timeline">
            <h3>Timeline</h3>
            <p>
              Key moments from 1620 through today, with links to primary
              documents.
            </p>
          </a>
          <a className="card" href="/resources">
            <h3>Resources</h3>
            <p>Browse official archives, libraries, parks, and data portals.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
