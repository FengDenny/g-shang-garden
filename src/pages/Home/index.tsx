import Hero from "./Hero";
import PageTitle from "@/components/Helmet";
import { translate } from "@/components/i18nTranslate/helper";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <PageTitle pageTitle={translate("homeTitle")} />
      <div>
        <Hero />
      </div>
    </>
  );
};

export default index;
