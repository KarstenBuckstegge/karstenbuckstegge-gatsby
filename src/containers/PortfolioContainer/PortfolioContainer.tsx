import * as React from 'react';

import { Project } from 'src/pages/portfolio';
import { LayoutComponent } from '../../components/LayoutComponent/LayoutComponent';
import { Headline } from '../../patterns/Headline/Headline';
import { PortfolioItems } from '../PortfolioItemsContainer/PortfolioItemsContainer';

import styles from './portfolioContainer.module.scss';

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
      <Headline className={styles.headline} size="h1">
        PORTFOLIO
      </Headline>
      <PortfolioItems items={props.projects} onImagesLoaded={onImagesLoaded} />
    </LayoutComponent>
  );
};
