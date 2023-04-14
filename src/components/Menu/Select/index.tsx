type Props = {
  lang: string[];
  selectLanguage: Function;
  styling?: string;
};

const index = ({ lang, selectLanguage, styling }: Props): JSX.Element => {
  return (
    <select
      onChange={(e): void => {
        selectLanguage(e);
      }}
      className={`${styling} cursor-pointer rounded-lg p-2 font-normal outline-none`}
    >
      {lang.map((language: string, index: number): JSX.Element => {
        return (
          <option
            key={index}
            className="py-2 text-base text-primary-green-100 hover:text-primary-yellow-100 hover:transition-colors
            hover:delay-75 hover:duration-75 active:text-primary-yellow-300 "
            value={language}
          >
            {language}
          </option>
        );
      })}
    </select>
  );
};

export default index;
