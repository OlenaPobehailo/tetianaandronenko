import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className={css.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#d0def4', '#94b9f4']}
      />
    </div>
  );
};

export default Loader;
