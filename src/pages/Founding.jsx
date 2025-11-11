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
        America’s founding affirms that our rights come from our Creator, and
        that government’s just powers derive from the consent of the governed.
        The Founders emphasized virtue, knowledge, and faith as supports for
        freedom and self-rule.
      </p>

      <ul className="facts">
        <Item
          title="Declaration of Independence (1776) — National Archives"
          href="https://www.archives.gov/founding-docs/declaration-transcript"
        >
          Declares that all men “are endowed by their Creator with certain
          unalienable Rights,” laying the moral foundation for American
          self-government.
        </Item>

        <Item
          title="First Amendment — Constitution Annotated (Congress.gov)"
          href="https://constitution.congress.gov/constitution/amendment-1/"
        >
          Protects free exercise of religion, speech, press, assembly, and
          petition—core liberties essential to a free people.
        </Item>

        <Item
          title="Northwest Ordinance (1787) — National Archives"
          href="https://www.archives.gov/milestone-documents/northwest-ordinance"
        >
          Article III: “Religion, morality, and knowledge being necessary to
          good government and the happiness of mankind, schools and the means of
          education shall forever be encouraged.” This reflects the early
          Republic’s expectation that faith and virtue strengthen liberty.
        </Item>

        <Item
          title="Library of Congress: Religion & the Founding of the American Republic"
          href="https://www.loc.gov/exhibits/religion/"
        >
          LOC’s exhibit shows many colonists “crossed the Atlantic to practice
          their faith freely,” shaping civic culture and the push for religious
          liberty in America.
        </Item>
      </ul>
    </section>
  );
}
