"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSeacrhButton = () => {
    console.log(searchTerm);
  };

  return (
    <div className="mx-auto flex w-3/4">
      <Input
        className="rounded-none rounded-l-lg"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        className="rounded-none rounded-r-lg bg-violet-600 hover:bg-violet-800"
        type="button"
        onClick={handleSeacrhButton}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
