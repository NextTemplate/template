import SEO from "../components/layouts/SEO";
import Features from "../components/vision/Features";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"Vision 〜目指す方向〜 | 野生のデザイナーのポートフォリオ"}
        description={"Tatsuya Ozawaのポートフォリオへようこそ。"}
        keyword={"キーワード"}
        image={"/main_logo.png"}
        url={"https://it-mee.netlify.app/vision"}
      />
      <Features />
    </>
  );
};

export default Service;
