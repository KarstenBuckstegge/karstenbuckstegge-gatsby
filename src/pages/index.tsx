import { graphql, Link } from 'gatsby';
import * as React from 'react';

interface IndexPageProps {
  data: {
    contentfulContentBlock: {
      title: string;
      subtitle: string;
      description: {
        childMarkdownRemark: {
          html: string;
        };
      };
    };
  };
}

export const indexPageQuery = graphql`
  query ContentBlock {
    contentfulContentBlock {
      title
      subtitle
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const {
      title,
      subtitle,
      description: {
        childMarkdownRemark: { html }
      }
    } = this.props.data.contentfulContentBlock;

    return (
      <section>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/portfolio/">Portfolio</Link>
      </section>
    );
  }
}

export default IndexPage;
