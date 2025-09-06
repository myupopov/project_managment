import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ConfirmModal = forwardRef(function ConfirmModal({ onConfirm, cancelDelete, title, isNotification }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} onClose={cancelDelete} className="result-modal p-12 fborder-none rounded-lg shadow-md">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p>{title}</p>
        <div className="modal-actions flex gap-12 font-bold mt-2">
          {!isNotification && <button onClick={onConfirm} className="btn btn-danger">
            Yes
          </button>}
          <form method="dialog" onSubmit={cancelDelete} className="btn btn-secondary">
            <button>Close</button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default ConfirmModal;
