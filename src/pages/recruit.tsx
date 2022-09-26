import Link from "next/link";
import Image from "next/image";
import MapPage from "../components/company/MapPage";
import SEO from "../components/layouts/SEO";
import Recruitment from "../components/recruit/Recruitment";

export default function Recruit() {
  return (
    <>
      <SEO
        title={""}
        description={""}
        keyword={""}
        image={"/main_logo.png"}
        url={""}
      />
      <Recruitment />
    </>
  );
}
