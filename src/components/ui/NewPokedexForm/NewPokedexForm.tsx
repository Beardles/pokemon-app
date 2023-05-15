'use client';

import React from "react";
import CreatePokedexButton from "./CreatePokedexButton";

// TODO DUMMY: Make this an uncontrolled client component -- wrap in server component to handle the api call 
const NewPokedexForm: React.FC  = () => {
  const [pokedexName, setPokedexName] = React.useState("");

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Create New Pokedex</h1>
      <div className="bg-slate-100 text-center py-4">
        <form className="py-8">
          <input type="text" placeholder="Enter Pokedex Name..." className="py-2 px-2 rounded-lg w-64 border-yellow-100 border" value={pokedexName} onChange={e => setPokedexName(e.target.value)} />
          <div className="py-8">
            <CreatePokedexButton />
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPokedexForm;