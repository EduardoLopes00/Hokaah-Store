import { ImageArea } from '../../components/UnsignedIn/ImageArea';
import { InputArea } from '../../components/UnsignedIn/InputArea';
import './styles.scss';

export type Pages = 'signin' | 'signup' | 'forgotpassword';
interface UnsignedInProps {
  page: Pages;
}

export const UnsignedIn = ({ page }: UnsignedInProps) => {
  return (
    <div className="container">
      <div className="default-area-style">
        <InputArea page={page} />
      </div>
      <div className="default-area-style">
        <ImageArea />
      </div>
    </div>
  );
};
