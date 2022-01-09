import ProjectDisplay from "../../components/projects/ProjectDisplay";
import { projectsList } from "../../data";

const NailStyle = () => {
  const nailstyle = projectsList[0];
  return <ProjectDisplay {...nailstyle} />;
};

export default NailStyle;
