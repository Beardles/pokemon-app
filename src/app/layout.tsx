import { type Metadata } from "next";
import { PageLayout } from "~/components/layout";

import './globals.css';

export const metadata: Metadata = {
  title: 'Create-A-Dex',
  description: 'Create your own Pokedex!',
};

type Props = {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => (
    <html lang="en">
      <body>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
)

export default RootLayout;