import { graphql } from 'gatsby';
import * as React from 'react';

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
          createdAt
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

    return <Portfolio projects={projects} />;
  }
}

export default PortfolioContainer;
