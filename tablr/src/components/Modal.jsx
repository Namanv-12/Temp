function Modal({ onClose, title, children }) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Modal;