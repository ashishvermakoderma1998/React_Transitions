import { useState, useTransition } from "react";
import "./App.css";


function SearchResults({ query }) {
  // simulate a slow result
  const items = [];
  if (query) {
    for (let i = 0; i < 10000; i++) {
      items.push(
        <li key={i}>
          Result for {query} - {i}
        </li>,
      );
    }
  }
  return <ul style={{color:'red', fontSize: '16px'}}>{items}</ul>;
}

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input field
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      setQuery(value);
    });
  };

  return (
  <>
    <div>
      <input
      style={{ width: "300px", height: "30px", fontSize: "20px", marginBottom: "20px" }}
       type="text"
        value={input}
        onChange={handleChange} 
        placeholder="type to search..." 
        />

      {isPending && <p>Loading Result....</p>}
      <SearchResults  query={query} />
      
    </div>
  </>
  );
}

export default App;
