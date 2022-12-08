import SEO from "../components/layouts/SEO";
import Overview from "../components/about/Overview";

const Service: React.FC = () => {
  return (
    <>
      <SEO
        title={"About 〜私について〜 | 野生のデザイナーのポートフォリオ"}
        description={"Tatsuya Ozawaのポートフォリオへようこそ。"}
        keyword={"キーワード"}
        image={"/main_logo.png"}
        url={"https://it-mee.netlify.app/about"}
      />
      <Overview />
    </>
  );
};

export default Service;
