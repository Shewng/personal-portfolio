import ProjectDisplay from "../../components/ProjectDisplay";
import { projectsList } from "../../data";

const NailStyle = () => {
  const nailstyle = projectsList[0];
  return <ProjectDisplay {...nailstyle} />;
};

export default NailStyle;
