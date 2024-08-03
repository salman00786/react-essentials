import {TabButton} from "./TabButoon";
import { EXAMPLES} from "./../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){

    const [tabContent, useTabContent] = useState();
    const handleSelect = (selectedButton) => {
       useTabContent(selectedButton);
    }
    return(
        <Section title ={"Example"} id="examples">
        <Tabs  
              buttons ={
              <> <TabButton onSelect={() => (handleSelect("components"))}>Component</TabButton>
          <TabButton onSelect={() => (handleSelect("jsx"))} >JSX</TabButton>
          <TabButton onSelect={() => (handleSelect("props"))}>Props</TabButton>
          <TabButton onSelect={() => (handleSelect("state"))}>State</TabButton></>
        
        }>{!tabContent ? <p>"Please select any button"</p> : <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>
            {EXAMPLES[tabContent].code}
            </code>
          </pre>

         </div>}</Tabs>
       
        
       
      </Section>
    )
}

