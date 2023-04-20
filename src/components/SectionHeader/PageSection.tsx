import { Fragment, ReactNode } from "react";
import { translate } from "@/components/i18nTranslate/helper";
import PageTitle from "@/components/Helmet";

type Props = {
  children: ReactNode;
  tString: string;
};

const PageSection = ({ children, tString }: Props) => {
  return (
    <Fragment>
      <PageTitle pageTitle={translate(tString)} />
      <section className="mx-auto mt-40 w-[90%] p-4">{children}</section>
    </Fragment>
  );
};

export default PageSection;
