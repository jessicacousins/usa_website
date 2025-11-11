import React from "react";

const Fact = ({ title, href, children }) => (
  <li className="fact">
    <h4>
      <a href={href} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h4>
    <p>{children}</p>
  </li>
);

export default function NewEngland() {
  return (
    <section className="page">
      <h2>New England & Boston — Birthplace of American Liberty</h2>
      <p>
        From Plymouth’s self-governing compact to Boston’s revolutionary spark,
        New England is central to the American story.
      </p>

      <ul className="facts">
        <Fact
          title="Boston Tea Party (Dec. 16, 1773) — National Park Service"
          href="https://www.nps.gov/articles/000/boston-tea-party-in-real-time.htm"
        >
          Bostonians destroyed 342 chests of tea to protest taxation without
          representation, accelerating the road to independence.
        </Fact>

        <Fact
          title="Minute Man National Historical Park — NPS"
          href="https://www.nps.gov/mima/learn/historyculture/april-19-1775.htm"
        >
          April 19, 1775: Lexington & Concord—the opening battles of the
          Revolution, often called the “shot heard ’round the world.”
        </Fact>

        <Fact
          title="Freedom Trail — NPS"
          href="https://www.nps.gov/thingstodo/walk-the-freedom-trail.htm"
        >
          A 2.5-mile path connecting key revolutionary sites in Boston’s
          historic neighborhoods.
        </Fact>

        <Fact
          title="Massachusetts Constitution (1780) — Mass.gov"
          href="https://www.mass.gov/guides/john-adams-the-massachusetts-constitution"
        >
          Drafted by John Adams, it is the world’s oldest functioning written
          constitution and a model for the U.S. Constitution.
        </Fact>

        <Fact
          title="Pilgrim Memorial State Park (Plymouth Rock) — Mass.gov"
          href="https://www.mass.gov/locations/pilgrim-memorial-state-park"
        >
          The park commemorates the Pilgrims’ landing and the beginnings of
          self-government that influenced American civic life.
        </Fact>

        <Fact
          title="Boston by the Numbers — U.S. Census Bureau"
          href="https://data.census.gov/cedsci/profile?g=160XX00US2507000"
        >
          Explore official, up-to-date population and economic data for Boston.
        </Fact>
      </ul>
    </section>
  );
}
