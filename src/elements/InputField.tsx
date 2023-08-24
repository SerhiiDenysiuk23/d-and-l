import React, {FC} from 'react';

interface Props {
  placeholder: string
  value: string,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const InputField: FC<Props> = ({placeholder, value, onChange}) => {

  return (
    <div className={'input-field'}>
      <label className="input-field__label">{placeholder}</label>
      <input value={value} onChange={onChange} type="text"/>
    </div>
  );
};

export default InputField;