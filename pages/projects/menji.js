import ProjectDisplay from "../../components/ProjectDisplay";
import { projectsList } from "../../data";

const Menji = () => {
  const menji = projectsList[1];
  return <ProjectDisplay {...menji} />;
};

export default Menji;
