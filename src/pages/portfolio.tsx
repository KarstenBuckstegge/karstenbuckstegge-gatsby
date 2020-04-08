import { RouteComponentProps } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import { Portfolio } from '../containers/PortfolioContainer/PortfolioContainer';

export interface Links {
  behance: string;
  instagram: string;
  web: string;
  github: string;
}

export type ProjectTypes = 'illustration' | 'development' | 'mural' | 'experimental' | 'design';

export interface Project {
  node: {
    title: string;
    type: ProjectTypes[];
    info: string;
    createdAt: string;
    image: {
      fluid: {
        src: string;
        srcSet: string;
        srcWebp: string;
        srcSetWebp: string;
        aspectRatio: number;
        sizes: string;
      };
      title: string;
    };
    links: Links;
  };
}

interface PortfolioProps extends RouteComponentProps {
  data: {
    allContentfulProject: {
      edges: Project[];
    };
  };
}

export const portfolioContainerQuery = graphql`
  query Project {
    allContentfulProject {
      edges {
        node {
          title
          type
          info
          createdAt
          image {
            fluid(maxWidth: 1000) {
              src
              srcSet
              srcWebp
              srcSetWebp
              aspectRatio
              sizes
            }
            title
          }
          links {
            behance
            instagram
            web
            github
          }
        }
      }
    }
  }
`;

class PortfolioContainer extends React.Component<PortfolioProps, {}> {
  public render() {
    const projects = this.props.data.allContentfulProject.edges;

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

        <Portfolio projects={projects} />
      </>
    );
  }
}

export default PortfolioContainer;
