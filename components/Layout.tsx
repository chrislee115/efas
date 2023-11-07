

import Head from 'next/head';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  description?: string;
}

function Layout(props: LayoutProps): JSX.Element {
  const title = props.title ?? 'efas 🍄';
  const description = props.description ?? 'a guttural experience';
  return (
    <div id="root">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bryanpan.co/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <link rel="preload" href="/fonts/PPNeueMontreal-Bold.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Bodoni/Bodoni.woff" as="font" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

        <title>{title}</title>
      </Head>
      <main id={props.id}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
