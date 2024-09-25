import { PiQuestionBold } from "react-icons/pi";

export default function FaqItem({question, answer}) {
  return (
    <div className="flex gap-3">
      <div className="mt-[3px] flex h-[30px] w-[30px] flex-shrink-0 basis-[25px] items-center justify-center rounded-md bg-blue-200 p-1.5 dark:bg-[#365dff]">
        <PiQuestionBold className="text-[30px] text-[#365dff] dark:text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium">{question}</p>
        <p className="text-sm text-[#878590] dark:text-drkol leading-6">{answer}</p>
      </div>
    </div>
  );
}