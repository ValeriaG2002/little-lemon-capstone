import './ConfirmationModal.css';
import { useNavigate } from 'react-router-dom';

const ConfirmationModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleReturnToHome = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" 
          alt="Success" 
          className="modal-check-icon" 
        />
        <h2 className="modal-title">Your table has been reserved!</h2>
        <p className="modal-message">
          You will receive a confirmation email with the reservation details.
        </p>
        <button onClick={handleReturnToHome} className="modal-button">
          OK
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
