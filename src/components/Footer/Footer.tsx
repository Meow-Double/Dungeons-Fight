import GithubIcon from '@/assets/svg/github.svg';
import TelegramIcon from '@/assets/svg/telegram.svg';
import VkontakteIcon from '@/assets/svg/vkontakte.svg';

import styles from './Footer.module.css';

// const AltRegularExpression = (icon: string) => {
//   const matches = icon.match(/\/([^\/.]+)\./g);
//   return matches && matches[0].toString().replace(/^.|.$/g, '');
// };

const IconsArray = [
  {
    name: 'Telegram',
    path: TelegramIcon
  },
  {
    name: 'Github',
    path: GithubIcon
  },
  {
    name: 'Vkontakte',
    path: VkontakteIcon
  }
];
export const Footer = () => {
  const renderIconsNetwork = (): JSX.Element[] => {
    return IconsArray.map((icon) => (
      <li key={icon.name}>
        <img className={styles.icon} src={icon.path} alt={`${icon.name} icon`} />
      </li>
    ));
  };

  return (
    <footer>
      <div className='container'>
        <div className={styles.menu}>
          <h3>Dungeons Fight</h3>
          <span>Колекционка исторических предметов</span>
          <ul className={styles.icons}>{renderIconsNetwork()}</ul>
          <div className={styles.copyright}>©DungeonFight 2024</div>
        </div>
      </div>
    </footer>
  );
};
