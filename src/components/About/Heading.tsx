import { translate } from "@/components/i18nTranslate/helper";

type Props = {
  tString: string;
  styling: string;
};

export const Heading3 = ({ tString, styling }: Props) => {
  return <h3 className={styling}>{translate(tString)}</h3>;
};
