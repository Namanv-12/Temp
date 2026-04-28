function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div style={{ background: "#00000080", padding: "50px" }}>
            <div style={{ background: "white", padding: "20px" }}>
                <h3>{title}</h3>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;