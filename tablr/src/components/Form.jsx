function Form({ t }) {
    return (
        <div>
            <p>{t("description")}</p>

            <input placeholder={t("name")} />
            <br />

            <input placeholder={t("email")} />
            <br />

            <button>{t("submit")}</button>
        </div>
    );
}

export default Form;