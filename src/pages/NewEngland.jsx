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
        New England is a landscape of ideas as much as it is of coastlines,
        shipyards, meetinghouses, and quiet towns. Through its early struggles
        and its deep belief in community, it shaped the moral and civic backbone
        of the nation. The region’s story is made of individuals who acted with
        conviction, towns that grew around principles of local governance, and
        moments where ordinary people decided that freedom was worth sacrifice.
        The history here is dense, layered, and rooted in
        faith, courage, and a belief that people can govern themselves.
      </p>

      <p>
        Across Massachusetts and the surrounding colonies, ideas about liberty
        didn’t arrive suddenly; they accumulated slowly—in churches, in town
        halls, and in heated conversations along the wharves of Boston. The
        National Park Service and the Commonwealth of Massachusetts preserve
        these stories today, offering primary accounts of the choices and
        conflicts that gave rise to America’s earliest democratic traditions.
      </p>

      <ul className="facts">
        <Fact
          title="Boston Tea Party (Dec. 16, 1773) — National Park Service"
          href="https://www.nps.gov/articles/000/boston-tea-party-in-real-time.htm"
        >
          The Boston Tea Party grew out of years of tension between colonists
          and the British Parliament. Merchants, tradesmen, and everyday
          residents—meeting in what is now the{" "}
          <a
            href="https://www.nps.gov/bost/learn/historyculture/old-south-meeting-house.htm"
            target="_blank"
            rel="noreferrer"
          >
            Old South Meeting House
          </a>
          —voted to resist shipments of taxed tea. On a cold December night,
          they boarded the Dartmouth, Beaver, and Eleanor and destroyed 342
          chests of tea. The action was deliberate, disciplined, and symbolic: a
          demand that a free people must have a voice in their own laws. The
          event escalated tensions that ultimately made independence
          unavoidable.
        </Fact>

        <Fact
          title="Minute Man National Historical Park — NPS"
          href="https://www.nps.gov/mima/learn/historyculture/april-19-1775.htm"
        >
          At dawn on April 19, 1775, the world changed in the small towns of
          Lexington and Concord. According to National Park Service records,
          local militias—ordinary farmers and tradesmen—stood in defense of
          their homes as British troops marched to seize colonial supplies.
          Shots were exchanged, and within hours the conflict spread across
          miles of countryside. The retreat back to Boston became a running
          battle, with militias moving through woods and stone walls that still
          remain today. These events are remembered as the “shot heard ’round
          the world,” marking the beginning of the American Revolution.
        </Fact>

        <Fact
          title="Freedom Trail — National Park Service"
          href="https://www.nps.gov/thingstodo/walk-the-freedom-trail.htm"
        >
          The Freedom Trail is a 2.5-mile path threading through Boston’s
          cobblestone streets, linking sixteen nationally significant sites.
          These include Faneuil Hall—called the “Cradle of Liberty” by early
          patriots—and the{" "}
          <a
            href="https://www.nps.gov/bost/learn/historyculture/old-north-church.htm"
            target="_blank"
            rel="noreferrer"
          >
            Old North Church
          </a>
          , where lanterns signaled Paul Revere’s legendary midnight ride. The
          trail is a physical reminder of how concentrated the revolutionary
          movement was: in a walkable cluster of churches, homes, halls, and
          wharves where ordinary citizens shaped extraordinary outcomes.
        </Fact>

        <Fact
          title="Massachusetts Constitution (1780) — Mass.gov"
          href="https://www.mass.gov/guides/john-adams-the-massachusetts-constitution"
        >
          Drafted chiefly by John Adams, the Massachusetts Constitution remains
          the oldest functioning written constitution in the world. Mass.gov
          notes that many of its ideas—checks and balances, a framework for
          public education, and protections for individual rights—directly
          influenced the U.S. Constitution. It reflects a worldview that liberty
          flourishes when citizens are educated, virtuous, and engaged in public
          life.
        </Fact>

        <Fact
          title="Pilgrim Memorial State Park (Plymouth Rock) — Mass.gov"
          href="https://www.mass.gov/locations/pilgrim-memorial-state-park"
        >
          Plymouth Rock symbolizes the Pilgrims’ arrival in 1620, but the deeper
          legacy preserved by Massachusetts is the{" "}
          <a
            href="https://www.mass.gov/info-details/mayflower-compact"
            target="_blank"
            rel="noreferrer"
          >
            Mayflower Compact
          </a>
          —a foundational act of self-government. This simple covenant, created
          aboard a ship anchored off Cape Cod, committed its signers to form a
          civil body politic guided by just laws. Historians note that its
          spirit of shared responsibility and community decision-making became a
          defining feature of New England towns.
        </Fact>

        <Fact
          title="Boston by the Numbers — U.S. Census Bureau"
          href="https://data.census.gov/cedsci/profile?g=160XX00US2507000"
        >
          According to the Census Bureau, Boston remains one of the most
          influential cities in the country—driven by education, science,
          medicine, and civic participation. Its modern profile shows a
          population shaped by centuries of innovation and public
          service. These numbers reflect a city that continues to evolve while
          honoring its role as the birthplace of America.
        </Fact>
      </ul>

      <p>
        Today, New England’s historical sites—preserved by the
        National Park Service, Mass.gov, and local archives.
        They remind us that liberty grows from countless small decisions made by
        individuals who believed their voices mattered. In the towns, churches,
        and fields of Massachusetts, the early story of the United States still
        feels remarkably close, carried forward not only by documents but by the
        places where the nation first found its purpose.
      </p>
    </section>
  );
}
