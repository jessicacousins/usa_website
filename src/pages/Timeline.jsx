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
          text="Pilgrims land in New England, bringing a covenantal idea of self-government that will echo through American history."
          href="https://www.mass.gov/locations/pilgrim-memorial-state-park"
          label="Mass.gov — Pilgrim Memorial State Park"
        />
        <Row
          year="1754–1763"
          text="The French and Indian War reshapes control of North America and sets the stage for later debates over taxation and representation."
          href="https://history.state.gov/milestones/1750-1775/french-indian-war"
          label="Office of the Historian — French & Indian War"
        />
        <Row
          year="1773"
          text="Boston patriots protest taxation without representation by tossing 342 chests of tea into the harbor, energizing resistance across the colonies."
          href="https://www.nps.gov/articles/000/boston-tea-party-in-real-time.htm"
          label="NPS — Boston Tea Party"
        />
        <Row
          year="1775"
          text="Militia at Lexington & Concord confront British regulars; local farmers and townspeople fire the 'shot heard ’round the world.'"
          href="https://www.nps.gov/mima/learn/historyculture/april-19-1775.htm"
          label="NPS — April 19, 1775"
        />
        <Row
          year="1776"
          text="The Declaration of Independence proclaims that all men are created equal and endowed by their Creator with unalienable rights."
          href="https://www.archives.gov/founding-docs/declaration-transcript"
          label="National Archives — Declaration Transcript"
        />
        <Row
          year="1781"
          text="The Articles of Confederation take effect, creating America’s first national government and binding the states together in a formal union."
          href="https://www.archives.gov/milestone-documents/articles-of-confederation"
          label="National Archives — Articles of Confederation"
        />
        <Row
          year="1783"
          text="The Treaty of Paris formally ends the Revolutionary War and secures international recognition of the United States as an independent nation."
          href="https://www.archives.gov/milestone-documents/treaty-of-paris"
          label="National Archives — Treaty of Paris (1783)"
        />
        <Row
          year="1787"
          text="Delegates in Philadelphia draft the U.S. Constitution and Congress passes the Northwest Ordinance, organizing new territories on principles of ordered liberty, religion, morality, and education."
          href="https://www.archives.gov/milestone-documents/northwest-ordinance"
          label="National Archives — Northwest Ordinance"
        />
        <Row
          year="1789"
          text="The First Federal Congress meets under the new Constitution, launches the three-branch system of government, and passes the Judiciary Act to establish the federal courts."
          href="https://www.archives.gov/milestone-documents/federal-judiciary-act"
          label="National Archives — Judiciary Act of 1789"
        />
        <Row
          year="1791"
          text="The Bill of Rights is ratified, including the First Amendment’s protections for religious liberty, speech, press, assembly, and petition."
          href="https://www.archives.gov/founding-docs/bill-of-rights-transcript"
          label="National Archives — Bill of Rights"
        />
        <Row
          year="1790–1960"
          text="From the early Republic through the frontier era, new states steadily join the Union—from Vermont and Kentucky to Alaska and Hawaii—turning a narrow strip of colonies into a continental republic of 50 states."
          href="https://www.census.gov/dataviz/visualizations/001/"
          label="Census — U.S. Territory & Statehood Status by Decade"
        />
        <Row
          year="1803"
          text="The Louisiana Purchase nearly doubles the nation’s size, opening vast new lands for future states and communities."
          href="https://www.archives.gov/milestone-documents/louisiana-purchase-treaty"
          label="National Archives — Louisiana Purchase Treaty"
        />
        <Row
          year="1812–1815"
          text="In the War of 1812, the young United States defends its independence again and emerges with a stronger sense of national identity."
          href="https://history.state.gov/milestones/1801-1829/war-of-1812"
          label="Office of the Historian — War of 1812"
        />
        <Row
          year="1846–1848"
          text="The Mexican–American War results in major territorial gains in the West, laying groundwork for new states and future settlement."
          href="https://history.state.gov/milestones/1830-1860/war-with-mexico"
          label="Office of the Historian — War with Mexico"
        />
        <Row
          year="1861–1865"
          text="The Civil War preserves the Union and leads to the abolition of slavery, transforming the Constitution and expanding the promise of liberty."
          href="https://www.nps.gov/civilwar/index.htm"
          label="NPS — The Civil War Overview"
        />
        <Row
          year="1869"
          text="At Promontory Summit, Utah, the Golden Spike unites the first transcontinental railroad, linking the Atlantic and Pacific and accelerating coast-to-coast travel and trade."
          href="https://www.nps.gov/gosp/learn/historyculture/the-last-spike-history-at-a-glance.htm"
          label="NPS — Golden Spike History at a Glance"
        />
        <Row
          year="1880"
          text="Thomas Edison’s incandescent light patent helps move America from gaslight to the electric age, transforming homes, streets, and businesses."
          href="https://www.archives.gov/historical-docs/edisons-light-bulb-patent"
          label="National Archives — Edison’s Light Bulb Patent"
        />
        <Row
          year="1903"
          text="At Kitty Hawk, the Wright brothers achieve the first controlled, powered, heavier-than-air flight, opening the era of aviation."
          href="https://www.nps.gov/articles/firstflight.htm"
          label="NPS — The First Flight"
        />
        <Row
          year="1917–1918"
          text="The United States enters World War I, helping tip the balance toward victory for the Allies and supporting a postwar order based on self-determination and collective security."
          href="https://history.state.gov/milestones/1914-1920/wwi"
          label="Office of the Historian — World War I"
        />
        <Row
          year="1941–1945"
          text="After the attack on Pearl Harbor, America mobilizes for World War II, defeats Axis powers in Europe and the Pacific, and emerges as a leading defender of freedom."
          href="https://www.history.navy.mil/browse-by-topic/wars-conflicts-and-operations/world-war-ii/1941/pearl-harbor.html"
          label="U.S. Navy — Pearl Harbor & U.S. Entry into WWII"
        />
        <Row
          year="1950–1953"
          text="In the Korean War, American forces join United Nations allies to defend the Republic of Korea and contain communist expansion in Asia."
          href="https://history.state.gov/milestones/1945-1952/korean-war"
          label="Office of the Historian — Korean War"
        />
        <Row
          year="1959"
          text="With the admission of Alaska and Hawaii, the United States becomes a union of 50 states stretching from the Arctic to the tropics."
          href="https://www.census.gov/library/visualizations/interactive/historical-apportionment-data-map.html"
          label="Census — Historical Apportionment & Statehood"
        />
        <Row
          year="1964–1965"
          text="The Civil Rights Act and Voting Rights Act strengthen the constitutional promise of equal protection and secure voting rights protections in federal law."
          href="https://www.archives.gov/milestone-documents/civil-rights-act"
          label="National Archives — Civil Rights Act of 1964"
        />
        <Row
          year="1969"
          text="Apollo 11 fulfills President Kennedy’s goal of landing Americans on the Moon and returning them safely, a landmark in science, courage, and national ambition."
          href="https://www.nasa.gov/mission/apollo-11/"
          label="NASA — Apollo 11 Mission Overview"
        />
        <Row
          year="1969–1983"
          text="DARPA’s ARPANET experiments pioneer packet-switching networks that grow into the modern internet, reshaping communication, commerce, and civic life."
          href="https://www.darpa.mil/news/features/arpanet"
          label="DARPA — ARPANET & Origins of the Internet"
        />
        <Row
          year="1990–1991"
          text="In the Gulf War, a U.S.-led coalition liberates Kuwait and demonstrates the effectiveness of modern joint operations and allied cooperation."
          href="https://history.state.gov/milestones/1989-1992/gulf-war"
          label="Office of the Historian — The Gulf War"
        />
        <Row
          year="2003–2011"
          text="Operation Iraqi Freedom topples Saddam Hussein’s regime and leads to years of American and coalition efforts to support an elected Iraqi government."
          href="https://www.afhistory.af.mil/FAQs/Fact-Sheets/Article/458942/2003-operation-iraqi-freedom/"
          label="U.S. Air Force — Operation Iraqi Freedom"
        />
        <Row
          year="2025"
          text="The 2024 reported census data was approximately 334 million, compared to the original count of the 13 colonies in 1776 of approximately 2.5 million."
          href="https://data.census.gov/cedsci/profile?g=160XX00US2507000"
          label="Census — Boston Profile & Modern Data"
        />
      </div>
    </section>
  );
}
