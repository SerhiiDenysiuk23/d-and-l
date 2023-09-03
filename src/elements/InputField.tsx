import React, {FC} from 'react';

interface Props {
  placeholder: string
  value: string,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  errorMsg?: string
}

const InputField: FC<Props> = ({placeholder, value, onChange, errorMsg}) => {
  const [isErrorExist, setIsErrorExist] = React.useState(false)

  React.useEffect(()=>{
    setIsErrorExist(!!errorMsg && errorMsg.length > 0)
  },[errorMsg])
  return (
    <div className={`input-field ${isErrorExist ? 'input-field__error' : ''}`}>
      <label className="input-field__label">{placeholder}</label>
      <input value={value} onChange={onChange} type="text"/>
      {
        isErrorExist &&
        <div>*{errorMsg}</div>
      }
    </div>
  );
};

export default InputField;