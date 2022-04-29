import "./ProjectsNav.css";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <nav>
      <NavLink>Diss-cord</NavLink>
      <NavLink>Slack-Clone</NavLink>
      <NavLink>Up-squad</NavLink>
    </nav>
  );
};

export default ProjectsNav;
