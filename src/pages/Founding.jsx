import React from "react";

const Item = ({ title, children, href }) => (
  <li className="fact">
    <h4>
      <a href={href} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h4>
    <p>{children}</p>
  </li>
);

export default function Founding() {
  return (
    <section className="page">
      <h2>Founding Principles & Documents</h2>

      <p>
        The founders did not see liberty as a loose idea; they treated it as a
        set of obligations, habits, and institutions that had to be built on
        purpose. Virtue, knowledge, and faith were not decorations around the
        system—they were supports that made self-government possible.
      </p>

      <p>
        The early Republic did not appear fully formed. It emerged through
        debates, drafts, and experiments in law. From the Declaration of
        Independence to the Constitution and Bill of Rights, Americans drew on
        Scripture, English common law, classical republics such as Rome, and
        their own lived experience under the British crown. The goal was not to
        copy older models, but to learn from them and design something more
        stable, more just, and more protective of individual freedom.
      </p>

      <ul className="facts">
        <Item
          title="Declaration of Independence (1776) — National Archives"
          href="https://www.archives.gov/founding-docs/declaration-transcript"
        >
          Declares that all men “are endowed by their Creator with certain
          unalienable Rights,” laying the moral foundation for American
          self-government and establishing that legitimate authority must rest
          on consent, not coercion.
        </Item>

        <Item
          title="First Amendment — Constitution Annotated (Congress.gov)"
          href="https://constitution.congress.gov/constitution/amendment-1/"
        >
          Protects free exercise of religion, speech, press, assembly, and
          petition—core liberties that allow citizens to seek truth, worship
          according to conscience, and correct their government without fear.
        </Item>

        <Item
          title="Northwest Ordinance (1787) — National Archives"
          href="https://www.archives.gov/milestone-documents/northwest-ordinance"
        >
          Article III states that “religion, morality, and knowledge being
          necessary to good government and the happiness of mankind, schools and
          the means of education shall forever be encouraged.” The law ties
          public education, moral order, and liberty together as part of one
          project.
        </Item>

        <Item
          title="Religion & the Founding of the American Republic — Library of Congress"
          href="https://www.loc.gov/exhibits/religion/"
        >
          The Library of Congress shows how many colonists crossed the Atlantic
          to practice their faith freely, and how that religious diversity and
          conviction helped drive the push for liberties of conscience and the
          separation of church and state.
        </Item>
      </ul>

      <h3>Founders & First Experiments in Self-Government</h3>

      <p>
        Before there was a Constitution, there were people learning, arguing,
        and adjusting in real time. The Continental and Confederation Congresses
        governed through war and peace, testing what it meant for thirteen
        colonies to act as one. The Articles of Confederation created a first
        national framework that proved too weak—but it taught the founders what
        they needed to change.
      </p>

      <p>
        At the center of this story are men like George Washington, John Adams,
        Thomas Jefferson, James Madison, Alexander Hamilton, Benjamin Franklin,
        and John Jay. They read the Bible, classical historians, and political
        philosophers. They studied the British system, Greek city-states, and
        the Roman Republic. What emerged in Philadelphia in 1787 was a new kind
        of constitutional republic: three branches, separated powers, and
        written limits meant to protect human dignity over time.
      </p>

      <ul className="facts">
        <Item
          title="Founders Online — National Archives"
          href="https://founders.archives.gov/"
        >
          Founders Online gathers more than one hundred eighty thousand
          documents from Washington, Adams, Jefferson, Madison, Hamilton,
          Franklin, and Jay. Letters, drafts, and diaries show them working
          through questions of law, religion, foreign policy, finance, and
          everyday life—the first rough drafts of American self-government.
        </Item>

        <Item
          title="American Founders Papers — Library of Congress"
          href="https://guides.loc.gov/american-founders-papers"
        >
          The Library of Congress provides guides to the papers of major
          founders, including their public writings and private correspondence.
          These collections reveal how deeply they drew on history, classical
          examples, and religious conviction when designing republican
          institutions.
        </Item>

        <Item
          title="Continental & Confederation Congresses (1774–1789) — Records at the National Archives"
          href="https://www.archives.gov/research/guide-fed-records/groups/360.html"
        >
          The Continental and Confederation Congresses governed the United
          States through the Revolution and the first years of peace. Their
          records show everything from war strategy and diplomacy to debates
          over finance, western lands, and public worship—early practice in
          running a national legislature.
        </Item>

        <Item
          title="Articles of Confederation — First U.S. Constitution"
          href="https://www.archives.gov/milestone-documents/articles-of-confederation"
        >
          Adopted in 1777 and ratified in 1781, the Articles of Confederation
          created a loose union of sovereign states with a weak central
          government. It was a deliberate step away from monarchy, but its
          limits—no direct taxation, no separate executive, and little power to
          enforce laws—convinced many founders that a stronger, better-designed
          constitution was necessary.
        </Item>

        <Item
          title="Creating the United States — Road to the Constitution (Library of Congress)"
          href="https://www.loc.gov/exhibits/creating-the-united-states/road-to-the-constitution.html"
        >
          The Library of Congress describes America’s search for a workable plan
          of government as slow and demanding. Moving from a wartime alliance to
          a lasting union required compromise, creativity, and a new framework
          that could correct the weaknesses of the Articles without sliding back
          into tyranny.
        </Item>

        <Item
          title="Separation of Powers & Checks and Balances"
          href="https://constitution.congress.gov/browse/essay/intro.7-2/ALDE_00000031/"
        >
          The Constitution divides authority into legislative, executive, and
          judicial branches so that no single part of government can dominate
          the others. This design reflects both the founders’ experience with
          the British monarchy and their study of classical mixed governments—a
          modern attempt to channel power through law instead of personality.
        </Item>
      </ul>

      <p>
        Together, these documents, debates, and institutions form more than a
        timeline. They show a people trying to build a republic that respects
        God-given rights while learning from the failures of past empires and
        monarchies. The founding era is not just a story of what they escaped,
        but of what they chose to build—ordered liberty, under a written
        Constitution, sustained by faith, reason, and civic responsibility.
      </p>
    </section>
  );
}
