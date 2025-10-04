const skills = [
    {
        id: 1,
        name: "React",
        logo: "react.svg",
        slug: "react",
    },
    {
        id: 2,
        name: "HTML",
        logo: "html.svg",
        slug: "html",
    },
    {
        id: 3,
        name: "javaScript",
        logo: "javascript.svg",
        slug: "javascript",
    },
    {
        id: 4,
        name: "CSS",
        logo: "css.svg",
        slug: "css",
    }
];

function Skillcard() {
  return (
    <>
      {skills.map((skill) => {
        return (
          <div className="skill__card" key={skill.id}>
            <img src={skill.logo} style={{ width: 50 }} alt={skill.name} />
            <h3 className="skill__title" style={{ marginBottom: 0 }}>{skill.name}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Skillcard;
