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
            <div className="mapWireframe" aria-hidden="true">
              <svg
                className="mapWireframeSvg"
                viewBox="0 0 100 60"
                preserveAspectRatio="xMidYMid meet"
              >
                <rect
                  className="mapWireframeStroke"
                  x="6"
                  y="10"
                  width="88"
                  height="40"
                  rx="10"
                  ry="10"
                />

                <line
                  className="mapWireframeStroke mapWireframeStroke--light"
                  x1="10"
                  y1="18"
                  x2="90"
                  y2="18"
                />
                <line
                  className="mapWireframeStroke mapWireframeStroke--light"
                  x1="10"
                  y1="26"
                  x2="90"
                  y2="26"
                />
                <line
                  className="mapWireframeStroke mapWireframeStroke--light"
                  x1="10"
                  y1="34"
                  x2="90"
                  y2="34"
                />
                <line
                  className="mapWireframeStroke mapWireframeStroke--light"
                  x1="10"
                  y1="42"
                  x2="90"
                  y2="42"
                />

                <path
                  className="mapWireframeStroke mapWireframeStroke--soft"
                  d="M8 20 Q 28 10 50 16 T 92 24"
                />
                <path
                  className="mapWireframeStroke mapWireframeStroke--soft"
                  d="M8 40 Q 30 52 54 46 T 92 38"
                />

                <circle className="mapWireframeStar" cx="22" cy="32" r="1.4" />
                <circle className="mapWireframeStar" cx="35" cy="28" r="1.4" />
                <circle className="mapWireframeStar" cx="46" cy="38" r="1.4" />
                <circle className="mapWireframeStar" cx="60" cy="30" r="1.4" />
                <circle className="mapWireframeStar" cx="74" cy="24" r="1.4" />
                <circle className="mapWireframeStar" cx="80" cy="16" r="1.4" />
              </svg>
            </div>

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
