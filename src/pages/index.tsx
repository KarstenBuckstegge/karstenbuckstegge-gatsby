import * as React from 'react';
import Helmet from 'react-helmet';

import { Index } from '../containers/IndexContainer';

class IndexPage extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Helmet>
          <title>Karsten Buckstegge - Visual Artist</title>
          <meta name="title" content="Karsten Buckstegge - Visual Artist" />
          <meta
            name="description"
            content="Illustrator, Mural Artist und Frontend Developer aus Hamburg. Ich helfe dir die perfekte Visualisierung für dein Projekt zu erschaffen!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://karstenbuckstegge.de/" />
          <meta property="og:title" content="Karsten Buckstegge - Visual Artist" />
          <meta
            property="og:description"
            content="Illustrator, Mural Artist und Frontend Developer aus Hamburg. Ich helfe dir die perfekte Visualisierung für dein Projekt zu erschaffen!"
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://karstenbuckstegge.de/" />
          <meta property="twitter:title" content="Karsten Buckstegge - Visual Artist" />
          <meta
            property="twitter:description"
            content="Illustrator, Mural Artist und Frontend Developer aus Hamburg. Ich helfe dir die perfekte Visualisierung für dein Projekt zu erschaffen!"
          />
          <meta property="twitter:image" content="" />
        </Helmet>
        <Index />
      </>
    );
  }
}

export default IndexPage;
