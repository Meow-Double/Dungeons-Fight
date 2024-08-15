import InputSvg from '@/assets/svg/input.svg';

import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <h3>Dungeons Fight</h3>
          <div className={styles.input_block}>
            <span>Вход</span>
            <img className={styles.icon} src={InputSvg} alt='input icon' />
          </div>
        </nav>
      </div>
    </header>
  );
};
