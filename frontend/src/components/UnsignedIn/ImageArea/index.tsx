import './styles.scss';
import kitSmokeLogo from 'src/public/images/Kit-Smoke-Logo.svg';
import { useAuth } from 'src/hooks/useAuth';

export const ImageArea = () => {
  const test = useAuth();

  console.log(test);

  return (
    <div className="image-area-content">
      <img src={kitSmokeLogo} alt="logo" />
    </div>
  );
};
