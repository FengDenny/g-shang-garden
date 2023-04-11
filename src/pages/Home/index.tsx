import Hero from "./Hero";
import Services from "./Services";
import Offer from "./Offer";
import Quality from "./Quality";
import PageTitle from "@/components/Helmet";
import { translate } from "@/components/i18nTranslate/helper";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <PageTitle pageTitle={translate("homeTitle")} />
      <div>
        <Hero />
        <Services />
        <Offer />
        <Quality />
      </div>
    </>
  );
};

export default index;
