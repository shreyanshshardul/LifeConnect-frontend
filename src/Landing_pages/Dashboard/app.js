import { useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Cards search={search} />
    </>
  );
}
