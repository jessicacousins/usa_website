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

  return (
    <section className="page civicPage">
      <header className="civicHeader">
        <p className="civicKicker">Practicing citizenship</p>
        <h1 className="civicTitle">
          Civic Life: Rights, Duties, and Daily Habits
        </h1>
        <p className="civicLead">
          The Founders grounded the nation in natural-rights philosophy drawn
          from Enlightenment thinkers such as John Locke—holding that rights
          come not from rulers but from “Nature and Nature’s God,” a phrase used
          in the Declaration of Independence. This page gathers official
          tools—from voter information to jury service and constitutional
          guides.
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

      <section className="civicRights">
        <h2>Rights & Responsibilities from Official Sources</h2>
        <p className="civicSub">
          Federal agencies describe citizenship as a blend of freedoms and
          obligations—voting, learning the law, serving on juries, and
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
