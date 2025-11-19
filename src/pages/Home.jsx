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
        {/* NEW: Progress at a Glance strip */}
        <section className="homeSummary">
          <div className="homeSummaryHeader">
            <h2>Progress at a Glance</h2>
            <p className="homeSummaryLead">
              From thirteen coastal states to a continental republic, the United
              States has grown in population, opportunity, and institutions
              while returning again and again to the same core promise: a people
              governing themselves under a written Constitution.
            </p>
          </div>

          <div className="homeStatsGrid">
            <div className="homeStat">
              <span className="homeStatLabel">States in the Union</span>
              <div className="homeStatNumbers">
                <strong>13</strong>
                <span className="homeStatArrow">→</span>
                <strong>50</strong>
              </div>
              <p>
                From the original thirteen states along the Atlantic coast to a
                union that reaches from Maine to Hawaii and Alaska, the map has
                expanded while the constitutional framework has held.
              </p>
            </div>

            <div className="homeStat">
              <span className="homeStatLabel">Representation &amp; Voice</span>
              <div className="homeStatNumbers">
                <strong>1</strong>
                <span className="homeStatArrow">→</span>
                <strong>535</strong>
              </div>
              <p>
                One Continental Congress has become a modern Congress with 435
                Representatives and 100 Senators, giving citizens a structured
                way to send their concerns and convictions to the national
                level.
              </p>
            </div>

            <div className="homeStat">
              <span className="homeStatLabel">Protected Lands</span>
              <div className="homeStatNumbers">
                <strong>Few</strong>
                <span className="homeStatArrow">→</span>
                <strong>Hundreds</strong>
              </div>
              <p>
                Early battlefield memorials have grown into hundreds of national
                park units and historic sites, preserving mountains, coastlines,
                and town squares where the American story unfolded.
              </p>
            </div>

            <div className="homeStat">
              <span className="homeStatLabel">Innovation</span>
              <div className="homeStatNumbers">
                <strong>Mail &amp; Musket</strong>
                <span className="homeStatArrow">→</span>
                <strong>Space &amp; Digital</strong>
              </div>
              <p>
                In a few centuries the country moved from handwritten letters
                and horse-drawn travel to flight, space exploration, and global
                networks that carry ideas in seconds.
              </p>
            </div>
          </div>

          <div className="homeProgress">
            <div className="homeProgressTrack">
              <div className="homeProgressFill"></div>
            </div>
            <div className="homeProgressLabels">
              <span>1776 · Founding &amp; First Experiments</span>
              <span>1860s · Union Tested &amp; Renewed</span>
              <span>1900s · Industry &amp; Global Leadership</span>
              <span>2000s–2025 · Innovation &amp; Civic Renewal</span>
            </div>
          </div>
        </section>

        {/* existing section cards */}
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

        {/* NEW: Era chips row */}
        <section className="homeEras">
          <h2>Explore by Era</h2>
          <div className="homeEraChips">
            <a href="/founding" className="homeEraChip">
              <span className="homeEraTitle">
                Founding &amp; Early Republic
              </span>
              <span className="homeEraDates">1776–1820s</span>
            </a>
            <a href="/timeline" className="homeEraChip">
              <span className="homeEraTitle">Expansion &amp; Renewal</span>
              <span className="homeEraDates">1830s–1900</span>
            </a>
            <a href="/timeline" className="homeEraChip">
              <span className="homeEraTitle">World Wars &amp; Leadership</span>
              <span className="homeEraDates">1914–1945</span>
            </a>
            <a href="/timeline" className="homeEraChip">
              <span className="homeEraTitle">Modern America</span>
              <span className="homeEraDates">1945–2025</span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
