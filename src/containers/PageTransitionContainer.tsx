import * as React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

export type transitionDirection = 'left' | 'right';

interface Props {
  className: string;
  to: string;
  direction?: transitionDirection;
  title?: string;
}

export const PageTransition: React.FC<Props> = props => (
  <AniLink
    className={props.className}
    to={props.to}
    cover={true}
    direction={props.direction}
    duration={3}
    bg={`url(https://source.unsplash.com/random/500x500) center no-repeat #00CAA7`}
    title={props.title}
  >
    {props.children}
  </AniLink>
);
