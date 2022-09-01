import './styles.scss';
import kitSmokeLogo from 'src/public/images/Kit-Smoke-Logo.svg';

export const ImageArea = () => {
  return (
    <div className="image-area-content">
      <img src={kitSmokeLogo} alt="logo" />
    </div>
  );
};
