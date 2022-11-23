// import { RotatingLines } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Loader } from './Spinner.styled';

const Spinner = () => {
  return (
    // <div>
      <Loader
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    // </div>
  );
};

export default Spinner;