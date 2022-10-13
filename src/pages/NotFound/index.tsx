import notFound from '../../assets/not-found.svg';
import './styles.css';

function NotFound() {
  return (
    <div className="img-not-found">
      <img src={notFound} alt="Not Found" />
    </div>
  );
}

export default NotFound;
