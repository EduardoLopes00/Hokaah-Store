import { InputHTMLAttributes } from 'react';
import './styles.scss';

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  labelText: string;
};

export const InputComponent = ({ name, labelText, ...rest }: InputComponentProps) => {
  return (
    <>
      <label className="inputComponent-label" htmlFor={name}>
        {labelText}
      </label>
      <input className="inputComponent-input" name={name} {...rest} />
    </>
  );
};
