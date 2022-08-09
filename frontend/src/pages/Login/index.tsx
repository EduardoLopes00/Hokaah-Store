import { ImageArea } from '../../components/LoginPage/ImageArea';
import { InputArea } from '../../components/LoginPage/InputArea';
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
