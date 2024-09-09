import { useSelector } from "react-redux";

import CardView from "../components/ui-components/CardView";
import ProjectCard from "../components/sidebar/sidebar-menu/sidebar-menu-item/project-items/ProjectCard";

export default function AllProjects() {
  const projects = useSelector((state) => state.boards);

  return (
    <>
      <CardView title={`All Projects`}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectName={project.name}
            projectImageUrl={project.img}
            projectCompletion={project.complete}
            boardId={project.id}
            members={project.members}
          />
        ))}
      </CardView>
    </>
  );
}
