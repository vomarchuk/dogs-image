import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export const Modal: React.FC<any> = ({ closeModal, imageUrl }) => {
  if (!modalRoot) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-black bg-opacity-[0.8] z-[1200]"
    >
      <div className="relative max-w-[calc(100vw - 48px)] max-h-[calc(100vw - 24px)]">
        <img alt="dogs" src={imageUrl} className="w-[90vh]" />
      </div>
    </div>,
    modalRoot
  );
};
