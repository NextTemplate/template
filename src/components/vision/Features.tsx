import Link from "next/link";
import styles from "../../styles/vision/Vision.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>My Design Plan</h2>
        <p className={styles.featuresMainSubTitle}>
          デザイナーとして大切にしたいこと
        </p>
        <div className={styles.featuresArea}>
          <>
            <h2 className={styles.featuresTitle}>自分自身が楽しむこと</h2>
            <div className={styles.featuresDescription}>
              楽しくないとクリエイティブなことは生まれない。
              <br />
              <br />
              顧客やステークホルダーの問題解決をすることは勿論なのですが、自分が楽しいと感じてその場に居ることが何より大事だと考えています。
              <br />
              <br />
              いつでも、どんな時でも楽しく過ごしたい。
              <br />
              <br />
              そういった気持ちがあるからこそ、仲間を大切にしたり、質を高めようと努力できるのだと私は考えています。
              <br />
              <br />
              楽しいからついつい考えてしまう。楽しいからついついやってしまう。
              <br />
              <br />
              いつもワクワクした気持ちを忘れないデザイナーでいたいです。
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Features;
