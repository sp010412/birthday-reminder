import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data);
  const list = () => {
    setPeople(data);
  };

  return (
    <main>
      <section className="container">
        <h3> Birthdays Today</h3>
        <List people={people} />
       
        <button onClick={list}> view</button>
        <button onClick={() => setPeople([])}> clear all</button>

      </section>
    </main>
  );
}

export default App;
