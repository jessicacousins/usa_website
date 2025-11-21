import React, { useState } from "react";
import "./Map.css";

const REGIONS = [
  {
    id: "newEngland",
    name: "New England",
    subtitle: "Birthplace of American liberty",
    facts: [
      "Plymouth, Boston, Lexington, and Concord sit within this compact corner of the country.",
      "Town meetings, church covenants, and local committees helped shape early self-government.",
      "Key landmarks include the Freedom Trail, Minute Man National Historical Park, and Plymouth Rock.",
    ],
    link: "/new-england",
  },
  {
    id: "midAtlantic",
    name: "Mid-Atlantic",
    subtitle: "Ideals put into ink",
    facts: [
      "Philadelphia hosted the Continental Congress and the Constitutional Convention.",
      "The Declaration of Independence and U.S. Constitution were debated and signed here.",
      "Ports and print shops spread founding ideas across the colonies and the Atlantic world.",
    ],
    link: "/founding",
  },
  {
    id: "south",
    name: "The South",
    subtitle: "Agrarian strength and enduring communities",
    facts: [
      "Southern colonies and states contributed military leaders, statesmen, and agricultural output.",
      "Ports and river systems tied local economies to both Atlantic trade and inland markets.",
      "Faith communities and local institutions helped sustain families and towns through change.",
    ],
    link: "/timeline",
  },
  {
    id: "midwest",
    name: "Midwest & Great Lakes",
    subtitle: "Heartland of industry and food",
    facts: [
      "The Northwest Ordinance opened paths for new Midwestern states governed by republican principles.",
      "By the late 1800s, the region powered railroads, manufacturing, and grain production.",
      "Today it remains a core engine for industry, agriculture, and cross-country travel.",
    ],
    link: "/timeline",
  },
  {
    id: "west",
    name: "Mountain West",
    subtitle: "Frontier, faith, and open landscapes",
    facts: [
      "Explorers, ranchers, miners, and families moved west along trails and railroads.",
      "National parks across the Rockies and deserts protect some of America’s most dramatic scenery.",
      "Western states helped define modern conservation, water management, and outdoor recreation.",
    ],
    link: "/resources",
  },
  {
    id: "pacific",
    name: "Pacific & Pacific Northwest",
    subtitle: "Gateway to the Pacific and space age",
    facts: [
      "Ports along the Pacific Rim connect American trade directly to Asia and the wider world.",
      "Aerospace and technology corridors on the West Coast helped drive the space and digital ages.",
      "Pacific states host major research universities, tech centers, and deep-water harbors.",
    ],
    link: "/timeline",
  },
];

export default function Map() {
  const [selectedId, setSelectedId] = useState("newEngland");
  const selectedRegion =
    REGIONS.find((region) => region.id === selectedId) || REGIONS[0];

  return (
    <section className="page mapPage">
      <header className="mapHeader">
        <h2>American Map of Ideas</h2>
        <p className="lead">
          This stylized map highlights how different regions of the United
          States contribute to one national story—from colonial New England to
          the Pacific coast. Hover a region to see a quick snapshot; use the
          link to jump deeper into the site.
        </p>
      </header>

      <div className="mapLayout">
        <div className="mapPanel">
          <div
            className="mapShape"
            aria-label="Stylized map of the United States"
          >
            {REGIONS.map((region) => (
              <button
                key={region.id}
                type="button"
                className={`mapRegion mapRegion--${region.id}${
                  selectedId === region.id ? " is-active" : ""
                }`}
                onMouseEnter={() => setSelectedId(region.id)}
                onFocus={() => setSelectedId(region.id)}
                aria-pressed={selectedId === region.id}
              >
                <span className="mapRegionLabel">{region.name}</span>
              </button>
            ))}
          </div>
          <p className="mapHint">
            Hover or focus each glowing segment to explore the regions. This is
            a simplified, symbolic map—not a precise geographic outline.
          </p>
        </div>

        <aside className="mapInfo">
          <div className="mapInfoCard">
            <p className="mapInfoKicker">Region spotlight</p>
            <h3>{selectedRegion.name}</h3>
            <p className="mapInfoSubtitle">{selectedRegion.subtitle}</p>
            <ul className="mapInfoList">
              {selectedRegion.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
            <a className="mapInfoLink" href={selectedRegion.link}>
              View related content
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
