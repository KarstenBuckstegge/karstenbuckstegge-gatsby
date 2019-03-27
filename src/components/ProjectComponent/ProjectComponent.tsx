import * as React from 'react';

import { Project } from 'src/pages/portfolio';

import styles from './projectComponent.module.scss';

interface Props {
  project: Project;
}

export const ProjectComponent = (props: Props) => {
  const { image, video, title, links } = props.project.node;

  const playVideo = async (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = e.currentTarget;

    try {
      await videoElement.play();
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error('could not play background video', error.message);
    }
  };
  const stopVideo = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = e.currentTarget;
    videoElement.pause();
  };

  return (
    <li className={styles.wrapper} style={{ backgroundImage: `url('https:${image.file.url}')` }}>
      {video && (
        <video className={styles.video} onMouseOver={playVideo} onMouseLeave={stopVideo} loop={true} muted={true}>
          <source src={`https:${video.file.url}`} type="video/mp4" />
        </video>
      )}
      <h2 className={styles.title}>{title}</h2>

      {Object.keys(links).map(link => (
        <a key={link} href={links[link]} target="_blank">
          {link}
        </a>
      ))}
    </li>
  );
};
