import SEO from "../components/layouts/SEO";
import NewShop from "../components/company/NewShop";
import Nakashima from "../components/company/Nakashima";
import Corporation from "../components/company/Corporation";

const Company: React.FC = () => {
  return (
    <>
      <SEO
        title={""}
        description={""}
        keyword={""}
        image={"/main_logo.png"}
        url={""}
      />
      <NewShop />
      <Nakashima />
      <Corporation />
    </>
  );
};

export default Company;
