import type { PropsWithChildren } from "react";

import Navbar from "./ui/Navbar";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-100">
        <div className="container mx-auto py-8">
          {props.children}
        </div>
      </main>
    </>
  );
};