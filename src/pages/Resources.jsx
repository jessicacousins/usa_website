import React from "react";

const LinkRow = ({ href, title, desc }) => (
  <li className="resItem">
    <a href={href} target="_blank" rel="noreferrer">
      {title}
    </a>
    <p>{desc}</p>
  </li>
);

export default function Resources() {
  return (
    <section className="page">
      <h2>Official Resources</h2>
      <ul className="resList">
        <LinkRow
          href="https://www.archives.gov/founding-docs/declaration"
          title="National Archives — Founding Documents"
          desc="Authoritative images, essays, and transcripts for the Declaration, Constitution, and more."
        />
        <LinkRow
          href="https://constitution.congress.gov/constitution/amendment-1/"
          title="Congress.gov — Constitution Annotated"
          desc="Primary text and explanations for the Bill of Rights and amendments."
        />
        <LinkRow
          href="https://www.loc.gov/exhibits/religion/"
          title="Library of Congress — Religion & the Founding"
          desc="Exhibition on religion’s role in the colonies and early Republic."
        />
        <LinkRow
          href="https://www.nps.gov/bost/index.htm"
          title="National Park Service — Boston National Historical Park"
          desc="Explore sites along Boston’s Freedom Trail."
        />
        <LinkRow
          href="https://www.nps.gov/mima/"
          title="National Park Service — Minute Man NHP"
          desc="Battlefields and structures associated with April 19, 1775."
        />
        <LinkRow
          href="https://www.mass.gov/guides/john-adams-the-massachusetts-constitution"
          title="Mass.gov — Massachusetts Constitution"
          desc="Background and significance of the 1780 Constitution."
        />
        <LinkRow
          href="https://data.census.gov/cedsci/profile?g=160XX00US2507000"
          title="U.S. Census — Boston Profile"
          desc="Official demographic and economic data for Boston."
        />
      </ul>
    </section>
  );
}
