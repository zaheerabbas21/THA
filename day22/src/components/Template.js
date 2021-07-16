function Templates({ templates, setMeme }) {
  return (
    <div className="templates">
      {templates.map((template) => {
        return (
          <div
            onClick={() => setMeme(template)}
            key={template.id}
            className="template"
          >
            <div
              style={{ backgroundImage: `url(${template.url})` }}
              className="image"
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default Templates;
