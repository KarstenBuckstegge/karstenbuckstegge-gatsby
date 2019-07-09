import { graphql } from 'gatsby';
import * as React from 'react';

import { LayoutComponent } from '../components/layoutComponent/layoutComponent';
import { PortfolioComponent } from '../components/PortfolioComponent/PortfolioComponent';

export interface Links {
  behance: string;
  instagram: string;
}

export interface Project {
  node: {
    title: string;
    type: string;
    image: {
      file: {
        url: string;
      };
    };
    links: Links;
    video: {
      file: {
        url: string;
      };
    };
  };
}

interface PortfolioProps {
  data: {
    allContentfulProjectSummary: {
      edges: Project[];
    };
  };
}

export const portfolioContainerQuery = graphql`
  query ProjectSummary {
    allContentfulProjectSummary {
      edges {
        node {
          title
          type
          image {
            file {
              url
            }
          }
          links {
            behance
            instagram
          }
          video {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

class PortfolioContainer extends React.Component<PortfolioProps, {}> {
  public render() {
    const projects = this.props.data.allContentfulProjectSummary.edges;

    return (
      <LayoutComponent>
        <PortfolioComponent projects={projects} />
      </LayoutComponent>
    );
  }
}

export default PortfolioContainer;
