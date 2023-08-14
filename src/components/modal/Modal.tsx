import React, { ReactNode, useEffect, useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [display, setDisplay] = useState(isOpen);
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setDisplay(false);
    onClose();
  };

  useEffect(() => {
    setDisplay(isOpen);

    // 모달이 열렸을 때, ref에 대한 클릭 이벤트를 추가
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      console.log(ref.current, ref.current.contains(event.target as Node));
      handleClose();
    }
  };

  return (
    <>
      {display && (
        <div className="modal">
          <div className="modal-overlay" />
          <div className="modal-content" ref={ref}>
            <div className="modal-header">
              <button onClick={handleClose}>Close</button>
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer"></div>
          </div>
        </div>
      )}
    </>
  );
};
