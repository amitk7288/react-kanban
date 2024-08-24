import ProjectItem from "./ProjectItem";

export default function ProjectItems() {
  return (
    <div className="">
      <p className="mb-2 xl:text-lg pl-1 font-medium dark:text-drkcol">Projects</p>
      <div className="flex w-fit flex-col items-center gap-2.5">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
