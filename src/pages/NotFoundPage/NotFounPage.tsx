import BackgroundPage from '@/assets/img/background-404.jpg';

import styles from './NotFoundPage.module.css';

export const NotFounPage = () => {
  return (
    <div className={styles.window}>
      <div className={styles.info}>
        <img className={styles.background} src={BackgroundPage} alt='background' />
        <div className={styles.body}>
          <h2>Dungeons Fight</h2>
          <span className={styles.logo}>404</span>
          <span className={styles.text}>Страница не найдена</span>
          <button type='button' className={styles.btn}>
            Вернуться на главную
          </button>
        </div>
      </div>
      <div className={styles.copyright}>©By Meow-Double 2024</div>
    </div>
  );
};
