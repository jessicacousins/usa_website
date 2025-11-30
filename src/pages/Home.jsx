import React from "react";

const stateGroups = [
  {
    label: "New England",
    blurb:
      "Harbors, town greens, and many of the earliest self-governing communities.",
    states: [
      "Maine",
      "New Hampshire",
      "Vermont",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
    ],
  },
  {
    label: "Mid-Atlantic",
    blurb: "Commercial ports, early industry, and key Constitutional debates.",
    states: ["New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland"],
  },
  {
    label: "South",
    blurb:
      "From colonial capitals to modern innovation corridors and coastal gateways.",
    states: [
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia",
      "Florida",
      "Alabama",
      "Mississippi",
      "Louisiana",
      "Tennessee",
      "Kentucky",
      "West Virginia",
      "Arkansas",
    ],
  },
  {
    label: "Midwest",
    blurb:
      "Heartland farms, Great Lakes cities, and major manufacturing centers.",
    states: [
      "Ohio",
      "Indiana",
      "Illinois",
      "Michigan",
      "Wisconsin",
      "Minnesota",
      "Iowa",
      "Missouri",
      "North Dakota",
      "South Dakota",
      "Nebraska",
      "Kansas",
    ],
  },
  {
    label: "Mountain West",
    blurb: "High plains, mountain ranges, and vast public lands.",
    states: [
      "Montana",
      "Wyoming",
      "Colorado",
      "New Mexico",
      "Idaho",
      "Utah",
      "Nevada",
    ],
  },
  {
    label: "Pacific & Non-Contiguous",
    blurb:
      "Pacific coasts and island states that extend the map far beyond the mainland.",
    states: ["Washington", "Oregon", "California", "Alaska", "Hawaii"],
  },
];

export default function Home() {
  return (
    <section className="page homePage">
      <div className="heroShell">
        <div className="heroInner">
          <div className="heroLeft">
            <p className="heroKicker">A living timeline of liberty</p>
            <h1 className="heroTitle">
              America: A Constitutional Republic Built on Liberty
            </h1>
            <p className="heroLead">
              This site highlights America’s founding ideals—self-government,
              ordered liberty, religious freedom, and civic virtue—tracing
              milestones from the colonial era to 2025. Every fact links to an
              official government source so you can verify and explore further.
            </p>

            <div className="heroPills">
              <a className="heroPill" href="/founding">
                <span>Founding Era</span>
              </a>
              <a className="heroPill" href="/new-england">
                <span>New England &amp; Boston</span>
              </a>
              <a className="heroPill" href="/timeline">
                <span>Full Timeline</span>
              </a>
              <a className="heroPill" href="/resources">
                <span>Official Resources</span>
              </a>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroGlobe">
              <div className="heroRing heroRing--red"></div>
              <div className="heroRing heroRing--blue"></div>
              <div className="heroBadge">
                <strong>Population Growth</strong>
                <span>1776 ≈ 2.5 million</span>
                <span>2025 ≈ 330+ million</span>
              </div>
            </div>
            <p className="heroCaption">
              Click a section to jump into primary documents, official data, and
              preserved historic sites.
            </p>
          </div>
        </div>
      </div>

      <div className="homeSections">
        <section className="homeSummary">
          <div className="homeSummaryHeader">
            <h2>Progress at a Glance</h2>
            <p className="homeSummaryLead">
              From thirteen coastal states to a continental republic, the United
              States has grown in population, opportunity, and institutions
              while returning again and again to the same core promise: a people
              governing themselves under a written Constitution.
            </p>
          </div>

          <div className="homeStatsGrid">
            <div className="homeStat">
              <span className="homeStatLabel">States in the Union</span>
              <div className="homeStatNumbers">
                <strong>13</strong>
                <span className="homeStatArrow">→</span>
                <strong>50</strong>
              </div>
              <p>
                From the original thirteen states along the Atlantic coast to a
                union that reaches from Maine to Hawaii and Alaska, the map has
                expanded while the constitutional framework has held.
              </p>
            </div>

            <div className="homeStat">
              <span className="homeStatLabel">Representation &amp; Voice</span>
              <div className="homeStatNumbers">
                <strong>1</strong>
                <span className="homeStatArrow">→</span>
                <strong>535</strong>
              </div>
              <p>
                One Continental Congress has become a modern Congress with 435
                Representatives and 100 Senators, giving citizens a structured
                way to send their concerns and convictions to the national
                level.
              </p>
            </div>

            <div className="homeStat">
              <span className="homeStatLabel">Protected Lands</span>
              <div className="homeStatNumbers">
                <strong>Few</strong>
                <span className="homeStatArrow">→</span>
                <strong>Hundreds</strong>
              </div>
              <p>
                Early battlefield memorials have grown into hundreds of national
                park units and historic sites, preserving mountains, coastlines,
                and town squares where the American story unfolded.
              </p>
            </div>

            <div className="homeStat">
              <span className="homeStatLabel">Innovation</span>
              <div className="homeStatNumbers">
                <strong>Mail &amp; Musket</strong>
                <span className="homeStatArrow">→</span>
                <strong>Space &amp; Digital</strong>
              </div>
              <p>
                In a few centuries the country moved from handwritten letters
                and horse-drawn travel to flight, space exploration, and global
                networks that carry ideas in seconds.
              </p>
            </div>
          </div>

          <div className="homeProgress">
            <div className="homeProgressTrack">
              <div className="homeProgressFill"></div>
            </div>
            <div className="homeProgressLabels">
              <span>1776 · Founding &amp; First Experiments</span>
              <span>1860s · Union Tested &amp; Renewed</span>
              <span>1900s · Industry &amp; Global Leadership</span>
              <span>2000s–2025 · Innovation &amp; Civic Renewal</span>
            </div>
          </div>
        </section>

        <div className="cards">
          <a className="card" href="/founding">
            <h3>Founding Principles</h3>
            <p>
              Declaration, constitutions, and the central role of faith and
              virtue in public life.
            </p>
          </a>
          <a className="card" href="/new-england">
            <h3>New England &amp; Boston</h3>
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

        <section className="homeEras">
          <h2>Explore by Era</h2>
          <div className="homeEraChips">
            <a href="/founding" className="homeEraChip">
              <span className="homeEraTitle">
                Founding &amp; Early Republic
              </span>
              <span className="homeEraDates">1776–1820s</span>
            </a>
            <a href="/timeline" className="homeEraChip">
              <span className="homeEraTitle">Expansion &amp; Renewal</span>
              <span className="homeEraDates">1830s–1900</span>
            </a>
            <a href="/timeline" className="homeEraChip">
              <span className="homeEraTitle">World Wars &amp; Leadership</span>
              <span className="homeEraDates">1914–1945</span>
            </a>
            <a href="/timeline" className="homeEraChip">
              <span className="homeEraTitle">Modern America</span>
              <span className="homeEraDates">1945–2025</span>
            </a>
          </div>
        </section>

        {/* Achievements two parallax */}
        <section className="achieveSection">
          <h2>American Achievements</h2>
          <p className="achieveLead">
            Across centuries, Americans have pushed boundaries in science, civic
            life, exploration, culture, and human potential.
          </p>

          <div className="achieveCarousel">
            <h3 className="achieveRowTitle">
              Nation-Building &amp; Innovation
            </h3>
            <div className="achieveRow achieveRow--primary">
              <div className="achieveTrack achieveTrack--fast">
                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>First Controlled Flight</h3>
                  <p>Wright Brothers, 1903 — launching the age of aviation.</p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Louisiana Purchase</h3>
                  <p>
                    1803 — The USA doubles in size, securing the Mississippi
                    River.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Lewis &amp; Clark Expedition</h3>
                  <p>
                    1804–1806 — Mapping the West from the Mississippi to the
                    Pacific.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Erie Canal</h3>
                  <p>
                    1825 — Connecting the Great Lakes to the Atlantic and
                    accelerating commerce.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Industrial Revolution Leadership</h3>
                  <p>
                    19th–20th century — Steel, rail, automobiles, and
                    manufacturing innovation.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Hoover Dam</h3>
                  <p>
                    1936 — Powering the American West with water, energy, and
                    economic growth.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Manhattan Project</h3>
                  <p>
                    1942–1945 — Breakthroughs in physics and national defense.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Interstate Highway System</h3>
                  <p>
                    1956 — A 41,000-mile network linking the nation for travel
                    and commerce.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Computer Revolution</h3>
                  <p>
                    1970s–1990s — Microchips, personal computers, and software
                    driving the digital age.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>GPS System</h3>
                  <p>
                    1978–1995 — A navigation backbone for travel, mapping, and
                    communication worldwide.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Mars Rovers</h3>
                  <p>
                    2004–2021 — Spirit, Opportunity, Curiosity, and Perseverance
                    explore the Red Planet.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Moon Landing</h3>
                  <p>Apollo 11, 1969 — “One small step for man...”</p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Transcontinental Railroad</h3>
                  <p>1869 — Coast-to-coast rail for the first time.</p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Internet Foundations</h3>
                  <p>ARPANET, 1969–1983 — The world goes digital.</p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>National Parks System</h3>
                  <p>Preserving mountains, rivers, monuments, and history.</p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Civil Rights Milestones</h3>
                  <p>
                    Expanding constitutional freedoms and equal protection under
                    the law.
                  </p>
                </div>
              </div>

              <div className="achieveSparkline"></div>
            </div>

            <h3 className="achieveRowTitle">Cultural Achievements</h3>
            <div className="achieveRow achieveRow--cultural">
              <div className="achieveTrack achieveTrack--slow">
                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Jazz &amp; Blues + Country</h3>
                  <p>
                    American-born music forms that influenced genres around the
                    world.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>The Great American Songbook</h3>
                  <p>
                    Classic popular songs that shaped modern music and
                    performance.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Hollywood Film</h3>
                  <p>
                    A global center of cinema, storytelling, and visual
                    innovation.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Broadway &amp; Theater</h3>
                  <p>
                    Musicals and plays that combine music, story, and stagecraft
                    for global audiences.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>American Literature</h3>
                  <p>
                    Novels, poetry, and essays exploring freedom, conscience,
                    and the frontier.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Space-Age Imagination</h3>
                  <p>
                    Science fiction, art, and film inspired by real exploration
                    and NASA missions.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Modern Design &amp; Architecture</h3>
                  <p>
                    Skyscrapers, campuses, and civic buildings rethinking how
                    people live and work together.
                  </p>
                </div>

                <div className="achieveItem">
                  <span className="achieveIcon" aria-hidden="true"></span>
                  <h3>Sports &amp; Shared Moments</h3>
                  <p>
                    From local fields to global championships, American sports
                    create common stories and heroes.
                  </p>
                </div>
              </div>

              <div className="achieveSparkline achieveSparkline--alt"></div>
            </div>
          </div>
        </section>

        {/* grid */}
        <section className="usaToday">
          <h2>United States Today</h2>
          <p className="usaTodayLead">
            A continental republic shaped by ideas, driven by innovation, and
            strengthened by its people.
          </p>

          <div className="usaGrid">
            <div className="usaStat">
              <strong>50</strong>
              <span>States</span>
            </div>

            <div className="usaStat">
              <strong>330M+</strong>
              <span>Citizens</span>
            </div>

            <div className="usaStat">
              <strong>63</strong>
              <span>National Parks</span>
            </div>

            <div className="usaStat">
              <strong>2.6M</strong>
              <span>Active &amp; Reserve Military</span>
            </div>

            <div className="usaStat">
              <strong>5,000+</strong>
              <span>Museums Nationwide</span>
            </div>

            <div className="usaStat">
              <strong>NASA</strong>
              <span>Deep-Space Missions Operating</span>
            </div>
          </div>
        </section>

        {/* 50 states overview */}
        <section className="statesSection">
          <div className="statesHeader">
            <h2>All 50 States at a Glance</h2>
            <p className="statesLead">
              From New England harbors to Pacific coasts and island capitals,
              fifty states form one constitutional union. Hover over each region
              to see its states and how they fit into the larger American map.
            </p>
          </div>

          <div className="statesGrid">
            {stateGroups.map((group) => (
              <article key={group.label} className="stateColumn">
                <header className="stateColumnHeader">
                  <h3>{group.label}</h3>
                  <p>{group.blurb}</p>
                </header>
                <ul className="stateList">
                  {group.states.map((state) => (
                    <li key={state} className="stateTag">
                      <span className="stateDot" aria-hidden="true" />
                      <span className="stateName">{state}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
