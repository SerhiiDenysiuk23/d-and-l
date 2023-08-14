import React, {FC} from 'react';

interface Props {
  placeholder: string
}

const InputField: FC<Props> = ({placeholder}) => {
  return (
    <div className={'input-field'}>
      <label className="input-field__label">{placeholder}</label>
      <input type="text"/>
    </div>
  );
};

export default InputField;