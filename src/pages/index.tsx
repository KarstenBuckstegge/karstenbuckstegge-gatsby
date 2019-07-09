import { graphql } from 'gatsby';
import * as React from 'react';

import { IndexComponent } from '../components/IndexComponent/IndexComponent';

export interface IndexProps {
  title: string;
  subtitle: string;
  description: {
    childMarkdownRemark: {
      html: string;
    };
  };
}

interface IndexPageProps {
  data: {
    contentfulContentBlock: IndexProps;
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
    return (
      <section>
        <IndexComponent data={this.props.data.contentfulContentBlock} />
      </section>
    );
  }
}

export default IndexPage;
