import React from "react";

export default function Home() {
  return (
    <section className="page">
      <h1 className="hero">
        America: A Constitutional Republic Built on Liberty
      </h1>
      <p className="lead">
        This site highlights America’s founding ideals—self-government, ordered
        liberty, religious freedom, and civic virtue—tracing milestones from the
        colonial era to 2025. Every fact links to an official government source
        so you can verify and explore further.
      </p>

      <div className="cards">
        <a className="card" href="/founding">
          <h3>Founding Principles</h3>
          <p>
            Declaration, constitutions, and the central role of faith and virtue
            in public life.
          </p>
        </a>
        <a className="card" href="/new-england">
          <h3>New England & Boston</h3>
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
    </section>
  );
}
