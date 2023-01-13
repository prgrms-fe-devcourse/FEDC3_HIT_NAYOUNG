import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type BackNavigation = {
  route: string;
  size: number;
};

const BackNavigation = ({ route, size = 32 }: BackNavigation) => {
  const Icon = BsArrowLeftShort;
  return (
    <div>
      <Link to={route}>
        <Icon size={size} />
      </Link>
    </div>
  );
};

export default BackNavigation;
