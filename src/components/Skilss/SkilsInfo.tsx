import skills from "../../data/services";

const SkilsInfo = () => {
  return (
    <div className="education">
      <h4 className="label">Skills</h4>
      <ul className="bars">
        {skills.map((item, index) => (
          <li className="bar" key={index}>
            <div className="info">
              <span>{item.skill}</span>
              <span>{item.level}%</span>
            </div>
        
            <div
              className="line"
              style={{ "--width": `${item.level}%` } as React.CSSProperties}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkilsInfo;