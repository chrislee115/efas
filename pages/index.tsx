import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

type TMenu = {
  [section: string]: string[];
}

const MENU_ITEMS: TMenu = {
  imbibe: [
    'oolong milk tea',
    'barley tea',
    'saigon flip',
  ],
  indulge: [
    'arancini',
    'maitaki',
    'wellington',
    'mushroom forest',
  ],
};

export default function Home(): JSX.Element {

  const [imgSrc, setImgSrc] = useState('gifs/light_up_shroom.gif');
  useEffect(() => {
    setTimeout(() => {
      setImgSrc('gifs/pulsating_shroom.gif');
    }, 1500);
  }, []);

  return (
    <Layout id={styles.container}>
      <h1 id={styles.title}>
        EFAS.
      </h1>
      <div id={styles.mushroom}>
        <img src={imgSrc}/>
      </div>
      <div id={styles.menu}>
        {Object.entries(MENU_ITEMS).map(([sectionTitle, items]) => {
          return (
            <div className={styles.section} key={sectionTitle}>
              <h3>{sectionTitle}</h3>
              {items.map(item => <h4 key={item}>{item}</h4>)}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

