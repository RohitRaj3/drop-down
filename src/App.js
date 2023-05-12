import React, { useState } from "react";
import Select from "react-select";
// import './App.css';

function App() {
  const { value, setValue } = useState(null);
  const options = [
    { value: "JAVA", label: "java" },
    { value: "DSA", label: "Data Structure & Algorithm" },
    { value: "FRONT-END", label: "Front-End(Html,Css,JS)" },
    { value: "BACK-END", label: "Back-End(Node.js)" },
  ];
  return (
    <div style={{ margin: 20, width: 200,  
    }}>
      <Select
        options={options}
        defaultValue={value}
        placeholder="select courses"
        onChange={setValue}
        isMulti //{/* to add multiple option in once */}
        isSearchable
        noOptionsMessage={() => "coming soon .."}
        //isDisabled  // {/* as it get Disabled it will no longer show any dropdown item list */}
      />
    </div>
  );
}

export default App;
