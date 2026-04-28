import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";

function ModalWithButton({ t }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        {t("open")}
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={t("title")}
      >
        <Form t={t} />
      </Modal>
    </div>
  );
}

export default ModalWithButton;