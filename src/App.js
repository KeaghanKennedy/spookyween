import "./App.css";
import crackBean from "./evil-crowley.png";
import { Parallax } from "react-parallax";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Hark Comrade!</h1>
        <h3>
          Thou art hereby invited to Crowley's Spooky Birthday Extravaganza, to
          be held on Friday the thirteenth of October. We bid thee join us for
          an evening of revelry as we celebrate both Halloween and the first
          anniversary of our dark lord's birth (and also Keaghan's birthday from
          like 2 weeks earlier but nobody gives a shit about that). Shouldst
          thou wish to attend, simply scroll downward and submit yonder form and
          your presence at said event shall be noted. Plus ones/partners are
          welcome. Just fill out the form again for each person coming.
        </h3>
        <h3>TLDR</h3>
        <h3>Date: 13/10/2023</h3>
        <h3>Time: Around 6</h3>
        <h3>Place: 15b Saunders Street Coburg, 3058</h3>
      </div>
      <Parallax
        bgImage={crackBean}
        bgImageAlt="Crowley, Lord of Chaos"
        bgClassName="crack-bean"
        strength={300}
      >
        <div style={{ height: "400px" }} />
      </Parallax>
      <form
        className="container"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          console.log("submitted", formData, formProps);
        }}
      >
        <fieldset>
          <legend>Your Name</legend>

          <div>
            <input type="text" id="name" name="name" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Your Dietary Preference</legend>

          <div>
            <input type="checkbox" id="veg" name="veg" value="veg" />
            <label htmlFor="veg">Vegan/Vegetarian</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="omnivore"
              name="omnivore"
              value="omnivore"
            />
            <label htmlFor="omnivore">Omnivorous</label>
          </div>
          <div>
            <label htmlFor="allergies">Allergies: </label>
            <input type="text" id="allergies" name="allergies" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Your Beverages Of Choice</legend>

          <div>
            <input type="checkbox" id="beer" name="beer" value="beer" />
            <label htmlFor="beer">Beer</label>
          </div>
          <div>
            <input type="checkbox" id="wine" name="wine" value="wine" />
            <label htmlFor="wine">Wine</label>
          </div>
          <div>
            <input type="checkbox" id="cider" name="cider" value="cider" />
            <label htmlFor="cider">Cider</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="spirits"
              name="spirits"
              value="spirits"
            />
            <label htmlFor="spirits">Spirits/Cocktails</label>
          </div>
          <div>
            <input type="checkbox" id="nonalc" name="nonalc" value="nonalc" />
            <label htmlFor="nonalc">Non Alchoholic</label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
