type Props = {
  value: string;
  error: string;
  labelName: string;
  onChange: (value: any) => void;
  type: string;
  id: string;
  htmlFor: string;
};

const LabelWithInput = ({
  htmlFor,
  id,
  type,
  labelName,
  value,
  onChange,
  error,
}: Props) => {
  return (
    <div className="flex w-72 flex-col pt-2">
      <label
        htmlFor={htmlFor}
        className="description-text  dark:text-color-description px-1 text-xl font-normal text-color-white dark:font-bold"
      >
        {labelName}
        <span className="text-rose-500">*</span>
      </label>
      {type === "message" ? (
        <textarea
          id={id}
          name={type}
          value={value}
          onChange={(e) => onChange(e)}
          className="description-text border-b-primary-300 text-primary-300 caret-primary-pink-hover  h-9 w-60  
    rounded-sm border-b border-solid px-1 text-lg 
    font-normal valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500 sm:w-72"
          required
        />
      ) : type === "email" ? (
        <input
          id={id}
          name={labelName}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          className="description-text border-b-primary-300 text-primary-300 caret-primary-pink-hover h-9  w-60 rounded-sm  
border-b border-solid px-1 text-lg font-normal
valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500 sm:w-72 "
          required
        />
      ) : (
        <input
          id={id}
          name={labelName}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          className="description-text border-b-primary-300 text-primary-300 caret-primary-pink-hover h-9  w-60 rounded-sm  
border-b border-solid px-1 text-lg font-normal
valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500 sm:w-72 "
          required
          pattern="^(\w\w+)\s(\w+)$"
        />
      )}
      {error && <span className="mt-1 text-sm text-rose-500">{error}</span>}
    </div>
  );
};

export default LabelWithInput;
