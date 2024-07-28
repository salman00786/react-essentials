import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import {TabButton} from "./components/TabButoon.jsx";


function App() {
  const [tabContent, useTabContent] = useState();
  const handleSelect = (selectedButton) => {
     useTabContent(selectedButton);
     console.log(tabContent)
}
console.log("Test!!!")
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
        <ul>

          {CORE_CONCEPTS.map((conceptItems) => <CoreConcepts key={conceptItems.title} {...conceptItems}/>)}
         
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => (handleSelect("components"))}>Component</TabButton>
            <TabButton onSelect={() => (handleSelect("jsx"))} >JSX</TabButton>
            <TabButton onSelect={() => (handleSelect("props"))}>Props</TabButton>
            <TabButton onSelect={() => (handleSelect("state"))}>State</TabButton>
          </menu>
          {!tabContent ? <p>"Please select any button"</p> : <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
              {EXAMPLES[tabContent].code}
              </code>
            </pre>

           </div>}
         
        </section>
      </main>
    </div>
  );
}

export default App;
