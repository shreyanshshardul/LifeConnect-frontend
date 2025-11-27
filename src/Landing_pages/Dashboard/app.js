import { useState } from "react";

function App() {
  const [search, setSearch] = useState(""); // ← ye search term
  
  
  return (
    <>
      <Navbar setSearch={setSearch} />  {/* Navbar ko pass karo */}
      <Routes>
        ...
        <Route path="/cards/*" element={<Cards search={search} />} />
        ...
      </Routes>
    </>
  )
}
