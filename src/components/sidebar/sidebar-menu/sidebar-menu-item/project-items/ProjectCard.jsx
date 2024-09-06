import { Link } from "react-router-dom";

export default function ProjectCard({
  projectName,
  projectImageUrl,
  projectCompletion,
  boardId,
}) {
  return (
    <div className="flex w-auto flex-col items-center justify-center gap-3 rounded-md border border-gray-200 bg-white p-4 shadow-lg sm:h-auto dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div className="flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border-[1px] bg-blue-100">
          <img
            src={projectImageUrl}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-center text-lg font-medium">{projectName}</p>
      <p className="text-center text-sm">{projectCompletion}% complete</p>
      <Link
        to={`/project/${boardId}`}
        className="w-[80%] rounded-md bg-[#365dff] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        View Project
      </Link>
    </div>
  );
}