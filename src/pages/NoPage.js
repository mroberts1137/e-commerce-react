import error_img from '../assets/404-dino.jpg';

const NoPage = () => {
  return (
    <div>
      <img src={error_img} alt="404 error" />
      <h3>404 Error. Resource not found.</h3>
    </div>
  );
};

export default NoPage;
