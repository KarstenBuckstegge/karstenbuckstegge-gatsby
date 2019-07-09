import { Link } from 'gatsby';
import * as React from 'react';

import { IndexProps } from '../../pages/index';
import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

interface Props {
  data: IndexProps;
}

export const IndexComponent: React.StatelessComponent<Props> = props => {
  const {
    title,
    subtitle,
    description: {
      childMarkdownRemark: { html }
    }
  } = props.data;
  return (
    <LayoutComponent>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/portfolio/">Portfolio</Link>
    </LayoutComponent>
  );
};
