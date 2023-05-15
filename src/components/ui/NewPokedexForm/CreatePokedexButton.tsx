import { z } from "zod";

type FormData = {
  name: string;
}

const formSchema = z.object({
  name: z.string(),
});

const CreatePokedexButton: Promise<React.FC> = async () => {
  const createPokedex = async ({ name }: FormData) => {
    try {
      formSchema.safeParse(name)
    } catch (e) {
      // TODO: Error handling
      console.log(e);
    }

    await fetch('/pokedex/create', {
      method: 'POST',
      body: JSON.stringify(name)
    })
  }

  return (
    <button onClick={() => createPokedex({ name: pokedexName })} className="bg-blue-500 text-white rounded-md py-2 px-1 w-48">Create</button>
  )
}

export default CreatePokedexButton;