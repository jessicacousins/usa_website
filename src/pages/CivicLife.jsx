
import React, { useEffect, useState } from "react";
import "./CivicLife.css";

const rightsCards = [
  {
    id: "vote",
    title: "Vote in U.S. Elections",
    body: "Citizens can vote in federal, state, and local elections—one of the most direct ways to guide the country’s future.",
    href: "https://vote.gov/",
    source: "Vote.gov — Official Voting Information",
  },
  {
    id: "charters",
    title: "Charters of Freedom",
    body: "The Declaration of Independence, Constitution, and Bill of Rights—known as the Charters of Freedom—secure core rights for the American people.",
    href: "https://www.archives.gov/founding-docs",
    source: "National Archives — America’s Founding Documents",
  },
  {
    id: "constitution",
    title: "Understand the Constitution",
    body: "The Constitution Annotated explains how each article and amendment has been interpreted over time.",
    href: "https://constitution.congress.gov/",
    source: "Constitution Annotated — Congress.gov",
  },
  {
    id: "jury",
    title: "Serve on a Jury",
    body: "Jury service is a civic duty that lets citizens help protect rights and liberties in the courts.",
    href: "https://www.uscourts.gov/court-programs/jury-service",
    source: "U.S. Courts — Jury Service",
  },
  {
    id: "citizenship",
    title: "Citizenship Rights & Duties",
    body: "USCIS highlights that citizenship includes shared values of freedom, liberty, and equality—plus responsibilities like supporting the Constitution.",
    href: "https://my.uscis.gov/citizenship/information",
    source: "USCIS — Rights and Responsibilities",
  },
  {
    id: "learn-more",
    title: "Learn the Process",
    body: "Guides and lessons from federal agencies walk through how laws are made, how courts work, and how to get involved.",
    href: "https://www.congress.gov/help/learn-about-the-legislative-process",
    source: "Congress.gov — The Legislative Process",
  },
];

const checklistItems = [
  {
    id: "check-vote",
    label:
      "I know where to find official information on how to register and vote in my state.",
    href: "https://vote.gov/register",
    linkLabel: "vote.gov/register",
  },
  {
    id: "check-charters",
    label:
      "I have read at least part of the Declaration of Independence, Constitution, or Bill of Rights.",
    href: "https://www.archives.gov/founding-docs",
    linkLabel: "archives.gov/founding-docs",
  },
  {
    id: "check-branches",
    label:
      "I can name the three branches of the federal government and one thing each does.",
    href: "https://constitution.congress.gov/browse/",
    linkLabel: "constitution.congress.gov",
  },
  {
    id: "check-jury",
    label:
      "I understand that jury service is a civic duty and how jurors are selected.",
    href: "https://www.uscourts.gov/court-programs/jury-service",
    linkLabel: "uscourts.gov/jury-service",
  },
  {
    id: "check-local",
    label:
      "I know how to find my local officials and contact them respectfully about an issue.",
    href: "https://www.usa.gov/elected-officials",
    linkLabel: "usa.gov/elected-officials",
  },
  {
    id: "check-young",
    label:
      "If I’m under 18, I know how to start preparing to vote on my 18th birthday.",
    href: "https://vote.gov/guide-to-voting/preparing-age-18-and-under",
    linkLabel: "vote.gov — preparing to vote",
  },
];

const timelineItems = [
  {
    id: "1789",
    era: "early",
    title: "1789 — First Congress Establishes Citizenship Duties",
    summary: "Early laws define naturalization, courts, and jury procedures.",
    detail:
      "The First Congress implemented the Constitution by creating federal courts, passing the Judiciary Act, and adopting early naturalization statutes. Those choices shaped how people became citizens and how juries would operate in federal courts.",
    href: "https://www.archives.gov/founding-docs",
    source: "Archives — Founding Documents",
  },
  {
    id: "1870",
    era: "civil",
    title: "1870 — 15th Amendment Expands Voting Rights",
    summary:
      "Prohibits denial of voting based on race, color, or previous slavery.",
    detail:
      "After the Civil War, the 15th Amendment placed a constitutional limit on state and federal governments: they could no longer restrict the vote on the basis of race, color, or previous condition of servitude, affirming a broader civic role for formerly enslaved people.",
    href: "https://constitution.congress.gov/amendment/15/",
    source: "Congress.gov — 15th Amendment",
  },
  {
    id: "1920",
    era: "civil",
    title: "1920 — Women Gain the Right to Vote",
    summary: "The 19th Amendment extends suffrage to women nationwide.",
    detail:
      "Decades of petitions, marches, and advocacy culminated in the 19th Amendment, which barred denying the vote on the basis of sex. It significantly expanded the number of citizens with a direct voice in elections.",
    href: "https://constitution.congress.gov/browse/essay/amdt19-3-4/ALDE_00013827/['nineteenth']",
    source: "Congress.gov — 19th Amendment",
  },
  {
    id: "1940",
    era: "modern",
    title: "1940 — Selective Training & Service Act",
    summary:
      "Establishes the first peacetime draft and defines military obligations.",
    detail:
      "On the eve of World War II, Congress passed the first peacetime conscription law in U.S. history. It outlined who could be called to serve, reinforcing the idea that defense of the country is a shared civic responsibility.",
    href: "https://www.archives.gov/st-louis/selective-service?_ga=2.142541938.1360524298.1764301957-2091475462.1764212556",
    source: "National Archives — WWII Records",
  },
  {
    id: "1965",
    era: "civil",
    title: "1965 — Voting Rights Act",
    summary:
      "Eliminates barriers that prevented equal participation in elections.",
    detail:
      "The Voting Rights Act targeted practices such as literacy tests and other barriers that undermined the 15th Amendment. Enforcement mechanisms increased the federal role in protecting access to the ballot.",
    href: "https://www.archives.gov/milestone-documents/voting-rights-act",
    source: "Archives — Voting Rights Act",
  },
  {
    id: "1971",
    era: "civil",
    title: "1971 — Voting Age Lowered to 18",
    summary:
      "The 26th Amendment expands civic responsibility to younger citizens.",
    detail:
      "Against the backdrop of the Vietnam War, the 26th Amendment aligned voting age with the age of military service, bringing millions of younger Americans formally into the electorate.",
    href: "https://constitution.congress.gov/browse/essay/amdt26-2-8/ALDE_00013945/['Voting',%20'Rights26th',%20'Amendment']",
    source: "Congress.gov — 26th Amendment",
  },
  {
    id: "2002",
    era: "modern",
    title: "2002 — Help America Vote Act",
    summary: "National standards improve election systems and voting access.",
    detail:
      "The Help America Vote Act (HAVA) introduced federal standards for election administration, encouraged the modernization of voting equipment, and supported more consistent voter registration systems across states.",
    href: "https://www.eac.gov",
    source: "U.S. Election Assistance Commission",
  },
  {
    id: "present",
    era: "modern",
    title: "Present — Expanding Civic Participation",
    summary:
      "Modern civic tools include online registration, digital hearings, and accessible election resources for all voters.",
    detail:
      "Today, voters use official portals to register, track ballots, and study issues. Remote and accessible formats for hearings and meetings make it easier for more citizens to stay informed and involved.",
    href: "https://www.usa.gov/voting",
    source: "USA.gov — Voting Resources",
  },
];

const timelineFilters = [
  { id: "all", label: "All Eras" },
  { id: "early", label: "Early Republic" },
  { id: "civil", label: "Civil Rights & Suffrage" },
  { id: "modern", label: "Modern Civic Reforms" },
];

export default function CivicLife() {
  const [checked, setChecked] = useState(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = window.localStorage.getItem("civicChecklist");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [selectedEra, setSelectedEra] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("civicChecklist", JSON.stringify(checked));
  }, [checked]);

  const toggleItem = (id) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleCard = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const filteredTimeline =
    selectedEra === "all"
      ? timelineItems
      : timelineItems.filter((item) => item.era === selectedEra);

  return (
    <section className="page civicPage">
      {/* HEADER */}
      <header className="civicHeader">
        <p className="civicKicker">Practicing citizenship</p>
        <h1 className="civicTitle">
          Civic Life: Rights, Duties, and Daily Habits
        </h1>
        <p className="civicLead">
          The Founders grounded the nation in Enlightenment natural-rights
          philosophy— the idea that rights originate above government authority
          and citizens help preserve them through active participation. This
          page gathers official civic tools including voting information, jury
          guidance, and constitutional resources.
        </p>

        <div className="civicQuickLinks">
          <a
            href="https://vote.gov/"
            target="_blank"
            rel="noreferrer"
            className="civicQuickLink"
          >
            Register to Vote
          </a>
          <a
            href="https://www.archives.gov/founding-docs"
            target="_blank"
            rel="noreferrer"
            className="civicQuickLink"
          >
            Read the Founding Documents
          </a>
          <a
            href="https://constitution.congress.gov/"
            target="_blank"
            rel="noreferrer"
            className="civicQuickLink"
          >
            Explore the Constitution
          </a>
        </div>
      </header>

      {/* RIGHTS SECTION  */}
      <section className="civicRights">
        <h2>Rights & Responsibilities from Official Sources</h2>
        <p className="civicSub">
          Federal agencies describe citizenship as a blend of freedoms and
          obligations— voting, learning the law, serving on juries, and
          supporting the Constitution in daily life.
        </p>
        <div className="civicRightsGrid">
          {rightsCards.map((card) => (
            <article key={card.id} className="civicCard">
              <div className="civicCardGlow" />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="civicCardLink"
              >
                {card.source}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CHECKLIST  */}
      <section className="civicChecklistSection">
        <div className="civicChecklistIntro">
          <h2>Your Civic Habits Checklist</h2>
          <p>
            This list is private to your browser. Check items as you learn and
            act, then follow the links to go deeper on each topic with official
            U.S. government resources.
          </p>
        </div>

        <div className="civicChecklist">
          {checklistItems.map((item) => {
            const isChecked = !!checked[item.id];
            return (
              <button
                key={item.id}
                className={`civicChecklistItem ${
                  isChecked ? "is-checked" : ""
                }`}
                onClick={() => toggleItem(item.id)}
                type="button"
              >
                <span className="civicChecklistBox" aria-hidden="true" />
                <span className="civicChecklistText">
                  {item.label}
                  <span className="civicChecklistLink">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.linkLabel}
                    </a>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* TIMELINE WITH FILTERS + CONNECTOR + EXPAND */}
      <section className="civicTimelineSection">
        <h2 className="timelineTitle">Civic Duties Over Time</h2>
        <p className="timelineLead">
          American civic duties expanded through constitutional amendments,
          federal legislation, and evolving democratic norms. Use the filters
          below to explore different eras, then click a card to see more detail.
        </p>

        <div className="timelineFilters">
          {timelineFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`timelineFilterBtn ${
                selectedEra === filter.id ? "is-active" : ""
              }`}
              onClick={() => setSelectedEra(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="civicTimeline">
          {filteredTimeline.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const isFinal = item.id === "present";
            return (
              <article
                key={item.id}
                className={`timelineItem neonBlock ${
                  isExpanded ? "is-expanded" : ""
                } ${isFinal ? "finalPulse" : ""}`}
                onClick={() => handleToggleCard(item.id)}
              >
                <div className="timelineHeaderRow">
                  <h3>{item.title}</h3>
                  <span className="timelineEraTag">
                    {item.era === "early"
                      ? "Early Republic"
                      : item.era === "civil"
                      ? "Civil Rights & Suffrage"
                      : "Modern Civic Reforms"}
                  </span>
                  <span
                    className={`timelineCaret ${isExpanded ? "is-open" : ""}`}
                    aria-hidden="true"
                  />
                </div>
                <p>{item.summary}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="timelineLink"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.source}
                </a>
                {isExpanded && <p className="timelineExtra">{item.detail}</p>}
              </article>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="civicFooterNote">
        <p>
          All links on this page go to official U.S. government sites, so you
          can verify facts for yourself and share trustworthy information with
          others.
        </p>
      </footer>
    </section>
  );
}
