import { ImageArea } from '../../components/UnsignedInPage/ImageArea';
import { InputArea } from '../../components/UnsignedInPage/InputArea';
import './styles.scss';

export const Login = () => {
  return (
    <div className="container">
      <div className="default-area-tyle">
        <InputArea />
      </div>
      <div className="default-area-tyle">
        <ImageArea />
      </div>
    </div>
  );
};
