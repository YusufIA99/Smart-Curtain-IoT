import React from "react";
import "./Vejr.css";
function VejrHero() {
  return (
    <section id="vejr-hero">
      <div className="vejret">
        <h2>Vejret her</h2>
        <form action="input">
          <textarea
            name=""
            id=""
            cols="28"
            rows="3"
            placeholder="Indtast by"
          ></textarea>
          <button className="btn">Søg</button>
        </form>
      </div>
    </section>
  );
}

export default VejrHero;
