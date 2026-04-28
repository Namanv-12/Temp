function Greeting({ t, name }) {
  return (
    <>
      <h2>{t("hello", { name })}</h2>
      <p>{t("description")}</p>
      <p>{t("title")}</p>
    </>
  );
}

export default Greeting;