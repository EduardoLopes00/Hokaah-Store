import { ImageArea } from '../../components/UnsignedIn/ImageArea';
import { InputArea } from '../../components/UnsignedIn/InputArea';
import './styles.scss';

export const UnsignedIn = () => {
  return (
    <div className="container">
      <div className="default-area-style">
        <InputArea />
      </div>
      <div className="default-area-style">
        <ImageArea />
      </div>
    </div>
  );
};
