import { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtomComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const TextButton = ({ text, ...rest }: ButtomComponentProps) => {
  return (
    <button className="buttonComponent" {...rest}>
      {text}
    </button>
  );
};
