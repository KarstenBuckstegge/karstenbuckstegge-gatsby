import * as React from 'react';

import { Project } from 'src/pages/portfolio';
import { LayoutComponent } from '../../components/LayoutComponent/LayoutComponent';
import { PortfolioItems } from '../PortfolioItemsContainer/PortfolioItemsContainer';

interface Props {
  projects: Project[];
}

export const Portfolio: React.FC<Props> = props => {
  const [loading, setLoading] = React.useState(true);

  const onImagesLoaded = () => {
    if (loading) {
      setLoading(false);
    }
  };

  return (
    <LayoutComponent secondaryPage={true} loading={loading}>
      <PortfolioItems items={props.projects} onImagesLoaded={onImagesLoaded} />
    </LayoutComponent>
  );
};
