import * as React from 'react';

import { Project } from 'src/pages/portfolio';

interface Props {
  project: Project;
}

export const ProjectComponent = (props: Props) => {
  const { image, video, title, description, links } = props.project.node;

  return (
    <li>
      <img src={`https:${image.file.url}`} alt={title} />
      {video && <video src={`https:${video.file.url}`} autoPlay={true} />}
      <span>{title}</span>
      <span>{description}</span>

      {Object.keys(links).map(link => {
        return (
          <a key={link} href={links[link]}>
            {link}
          </a>
        );
      })}
    </li>
  );
};
