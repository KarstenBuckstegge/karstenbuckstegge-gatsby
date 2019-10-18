import { graphql } from 'gatsby';
import * as React from 'react';

import { PortfolioComponent } from '../components/PortfolioComponent/PortfolioComponent';

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
    image: {
      file: {
        url: string;
      };
    };
    links: Links;
  };
}

interface PortfolioProps {
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
          image {
            file {
              url
            }
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

    return <PortfolioComponent projects={projects} />;
  }
}

export default PortfolioContainer;
