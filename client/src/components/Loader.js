import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status" />
    </div>
  );
};
