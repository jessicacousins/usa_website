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
        The history here is dense, layered, and rooted in faith, courage, and a
        belief that people can govern themselves.
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
          civil body politic guided by just laws. Its spirit of shared
          responsibility and community decision-making became a defining feature
          of New England towns.
        </Fact>

        <Fact
          title="Boston by the Numbers — U.S. Census Bureau"
          href="https://data.census.gov/cedsci/profile?g=160XX00US2507000"
        >
          According to the Census Bureau, Boston remains one of the most
          influential cities in the country—driven by education, science,
          medicine, and civic participation. Its modern profile shows a
          population shaped by centuries of innovation and public service. These
          numbers reflect a city that continues to evolve while honoring its
          role as the birthplace of America.
        </Fact>
      </ul>

      {/* Freedom Trail map-style grid */}
      <h3>Freedom Trail: A Walkable Map of Ideas</h3>
      <p>
        The Freedom Trail is more than a red line on the pavement. It is a map
        of arguments, prayers, and decisions that moved a people from loyal
        subjects to self-governing citizens. Each stop is a kind of waypoint in
        the story of American liberty.
      </p>

      <div className="cards freedomTrailMap">
        <div className="card">
          <h4>Faneuil Hall</h4>
          <p>
            Often called the “Cradle of Liberty,” Faneuil Hall hosted meetings
            where Bostonians debated taxes, representation, and the meaning of
            freedom. Its Great Hall still echoes with public speech and civic
            debate.
          </p>
          <a
            href="https://www.nps.gov/places/faneuil-hall.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Faneuil Hall
          </a>
        </div>

        <div className="card">
          <h4>Old South Meeting House</h4>
          <p>
            The largest indoor gathering place in colonial Boston, it was here
            that thousands crowded in to decide what to do about the tea. The
            march to Griffin’s Wharf began at this door.
          </p>
          <a
            href="https://www.nps.gov/bost/learn/historyculture/osmh.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Old South Meeting House
          </a>
        </div>

        <div className="card">
          <h4>Old North Church</h4>
          <p>
            From the steeple of this church, signal lanterns quietly carried a
            message across the Charles River—one if by land, two if by sea—so
            riders could warn the countryside of the British march.
          </p>
          <a
            href="https://www.nps.gov/places/old-north-church.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Old North Church
          </a>
        </div>

        <div className="card">
          <h4>Granary Burying Ground</h4>
          <p>
            A small burial ground along Tremont Street where patriots such as
            Paul Revere, Samuel Adams, and John Hancock are laid to rest. It is
            a reminder that the Revolution was carried by real people with
            finite lives and enduring legacies.
          </p>
          <a
            href="https://www.nps.gov/places/granary-burying-ground.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Granary Burying Ground
          </a>
        </div>

        <div className="card">
          <h4>Paul Revere House</h4>
          <p>
            A modest wooden home in the North End, now one of Boston’s oldest
            surviving houses. From here, a silversmith and father of many set
            out on the ride that would make his name part of American memory.
          </p>
          <a
            href="https://www.nps.gov/places/paul-revere-house.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Paul Revere House
          </a>
        </div>

        <div className="card">
          <h4>Bunker Hill Monument</h4>
          <p>
            The granite obelisk on Breed’s Hill marks the first major battle of
            the Revolution. It honors the courage of citizen-soldiers who held
            the line long enough to prove that the colonies would not back down.
          </p>
          <a
            href="https://www.nps.gov/places/bunker-hill-monument.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Bunker Hill Monument
          </a>
        </div>
      </div>

      {/* New England Heroes section */}
      <h3>New England Heroes</h3>
      <p>
        History is carried by places, but also by people. New England produced
        leaders whose lives tied ideas about liberty to concrete action. They
        were imperfect, serious, and committed. Their work still shapes how we
        think about courage, duty, and self-government.
      </p>

      <div className="cards heroesGrid">
        <div className="card">
          <h4>John Adams</h4>
          <p>
            A Massachusetts lawyer turned revolutionary statesman, Adams argued
            fiercely for independence, helped draft the Declaration, and later
            shaped the Massachusetts Constitution. His letters and papers show a
            mind constantly wrestling with justice, responsibility, and faith.
          </p>
          <a
            href="https://guides.loc.gov/john-adams"
            target="_blank"
            rel="noreferrer"
          >
            Library of Congress — John Adams Resource Guide
          </a>
        </div>

        <div className="card">
          <h4>Paul Revere</h4>
          <p>
            Known for a single midnight ride, Revere was also a master
            silversmith, a veteran of earlier conflicts, and an innovator who
            later ran a copper works. His life shows how skilled craftsmen and
            small-business owners became central to the Patriot cause.
          </p>
          <a
            href="https://www.nps.gov/people/paul-revere.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Paul Revere
          </a>
        </div>

        <div className="card">
          <h4>Dr. Joseph Warren</h4>
          <p>
            A physician, orator, and early leader in the Patriot movement,
            Warren helped organize resistance in Boston and fell at the Battle
            of Bunker Hill. Forts and memorials across Massachusetts bear his
            name, honoring a life cut short but deeply influential.
          </p>
          <a
            href="https://www.nps.gov/people/dr-joseph-warren.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Dr. Joseph Warren
          </a>
        </div>

        <div className="card">
          <h4>Colonel William Prescott</h4>
          <p>
            Prescott commanded provincial forces at Bunker Hill, overseeing the
            overnight construction of the redoubt on Breed’s Hill. His steady
            leadership under fire became part of New England’s memory of
            ordinary citizens stepping into extraordinary roles.
          </p>
          <a
            href="https://www.nps.gov/articles/000/william-prescott.htm"
            target="_blank"
            rel="noreferrer"
          >
            NPS — Colonel William Prescott
          </a>
        </div>
      </div>

      <p>
        Today, New England’s historical sites—preserved by the National Park
        Service, Mass.gov, and local archives—invite reflection. They remind us
        that liberty grows from countless small decisions made by individuals
        who believed their voices mattered. In the towns, churches, and fields
        of Massachusetts, the early story of the United States still feels
        remarkably close, carried forward not only by documents but by the
        places where the nation first found its purpose.
      </p>
    </section>
  );
}
