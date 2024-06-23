import { useState, useEffect } from "react";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const useModal = (selector: string): ModalInterface | null => {
  const [modal, setModal] = useState<ModalInterface | null>(null);

  useEffect(() => {
    const modalElement = document.querySelector(selector) as HTMLElement | null;
    if (modalElement) {
      const modalOptions: ModalOptions = {
        closable: true,
        onHide: () => console.log("modal is hidden"),
        onShow: () => console.log("modal is shown"),
        onToggle: () => console.log("modal has been toggled"),
      };
      const modalInstance = new Modal(modalElement, modalOptions);
      setModal(modalInstance);
    } else {
      console.error(`Modal element not found for selector: ${selector}`);
    }
  }, [selector]);

  return modal;
};

export default useModal;
