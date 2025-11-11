import React from "react";

const Row = ({ year, text, href, label }) => (
  <div className="timelineRow">
    <div className="year">{year}</div>
    <div className="detail">
      <p>{text}</p>
      <a href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    </div>
  </div>
);

export default function Timeline() {
  return (
    <section className="page">
      <h2>Milestones: 1620 → 2025</h2>
      <div className="timeline">
        <Row
          year="1620"
          text="Pilgrims land in New England; self-governing traditions take root."
          href="https://www.mass.gov/locations/pilgrim-memorial-state-park"
          label="Mass.gov — Pilgrim Memorial State Park"
        />
        <Row
          year="1773"
          text="Boston Tea Party protests taxation without representation."
          href="https://www.nps.gov/articles/000/boston-tea-party-in-real-time.htm"
          label="NPS — Boston Tea Party"
        />
        <Row
          year="1775"
          text="Lexington & Concord ignite the American Revolution."
          href="https://www.nps.gov/mima/learn/historyculture/april-19-1775.htm"
          label="NPS — April 19, 1775"
        />
        <Row
          year="1776"
          text="Declaration of Independence asserts God-given rights and national sovereignty."
          href="https://www.archives.gov/founding-docs/declaration-transcript"
          label="National Archives — Declaration Transcript"
        />
        <Row
          year="1780"
          text="Massachusetts adopts the world’s oldest functioning written constitution."
          href="https://www.mass.gov/guides/john-adams-the-massachusetts-constitution"
          label="Mass.gov — Massachusetts Constitution"
        />
        <Row
          year="1787"
          text="Northwest Ordinance encourages religion, morality, and knowledge to sustain liberty."
          href="https://www.archives.gov/milestone-documents/northwest-ordinance"
          label="National Archives — Northwest Ordinance"
        />
        <Row
          year="1791"
          text="First Amendment protects free exercise of religion and free speech."
          href="https://constitution.congress.gov/constitution/amendment-1/"
          label="Congress.gov — First Amendment"
        />
        <Row
          year="2025"
          text="America continues to strengthen freedom through civic participation, education, and faith-informed virtue."
          href="https://data.census.gov/cedsci/profile?g=160XX00US2507000"
          label="Census — Boston Profile"
        />
      </div>
    </section>
  );
}
