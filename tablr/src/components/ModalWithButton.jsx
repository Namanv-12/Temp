import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";

function ModalWithButton({ t }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        {t("open")}
      </button>

      {open && (
        <Modal onClose={() => setOpen(false)} title={t("title")}>
          <Form t={t} />
        </Modal>
      )}
    </>
  );
}

export default ModalWithButton;