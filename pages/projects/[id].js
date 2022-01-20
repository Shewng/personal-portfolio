import Head from "next/head";
import ProjectDisplay from "../../components/ProjectDisplay";
import { projectsList } from "../../data";

export const getStaticProps = async ({ params }) => {
  const projects = projectsList.filter((p) => p.id.toString() == params.id);
  return {
    props: { project: projects[0] },
  };
};

export const getStaticPaths = async () => {
  const paths = projectsList.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

function Display({ project }) {
  return (
    <>
      <Head>
        <title> {project.name} | Shwong</title>
        <meta name="description" content="Homepage for The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/../favicon.ico" />
      </Head>

      <ProjectDisplay {...project} />
    </>
  );
}

export default Display;
