import { RouteComponentProps } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import { Portfolio } from '../containers/PortfolioContainer/PortfolioContainer';

export interface Links {
  behance: string;
  instagram: string;
  web: string;
}

export type ProjectTypes = 'illustration' | 'development' | 'mural' | 'experimental' | 'design';

export interface Project {
  node: {
    title: string;
    type: ProjectTypes[];
    info: string;
    createdAt: string;
    image: {
      file: {
        url: string;
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
            file {
              url
            }
            title
          }
          links {
            behance
            instagram
            web
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
            content="Illustrator, Mural Artist and Web Developer based in Hamburg, Germany. Let me help you create the perfect visual representation on any medium."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://karstenbuckstegge.de/" />
          <meta property="og:title" content="Karsten Buckstegge - Visual Artist" />
          <meta
            property="og:description"
            content="Illustrator, Mural Artist and Web Developer based in Hamburg, Germany. Let me help you create the perfect visual representation on any medium."
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://karstenbuckstegge.de/" />
          <meta property="twitter:title" content="Karsten Buckstegge - Visual Artist" />
          <meta
            property="twitter:description"
            content="Illustrator, Mural Artist and Web Developer based in Hamburg, Germany. Let me help you create the perfect visual representation on any medium."
          />
          <meta property="twitter:image" content="" />
        </Helmet>

        <Portfolio projects={projects} />
      </>
    );
  }
}

export default PortfolioContainer;
