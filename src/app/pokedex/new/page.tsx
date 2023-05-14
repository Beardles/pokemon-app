import { type NextPage } from "next";
import { PageLayout } from "~/components/layout";
import { NewPokedexForm } from "~/components/ui/NewPokedexForm";

const NewPokedex: NextPage = () => {
  return (
    <PageLayout>
      <NewPokedexForm />
    </PageLayout>
  )
}

export default NewPokedex;