'use client';

import { useState } from "react"
import { api } from "~/utils/api";

export const NewPokedexForm = () => {
  const [pokedexName, setPokedexName] = useState<string>("");
  const { mutate } = api.pokedex.create.useMutation({ 
    onSuccess: () => setPokedexName(""),
    onError: () => {
      // TODO: Do something with these errors
    }
  })

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Create New Pokedex</h1>
      <div className="bg-slate-100 text-center py-4">
        <div className="py-8">
          <input type="text" placeholder="Enter Pokedex Name..." className="py-2 px-2 rounded-lg w-64 border-yellow-100 border" value={pokedexName} onChange={(e) => setPokedexName(e.target.value)} />
        </div>
        <div>
          <button onClick={() => mutate({ name: pokedexName })} className="bg-blue-500 text-white rounded-md py-2 px-1 w-48">Create</button>
        </div>
      </div>
    </>
  )
}