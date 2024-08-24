export default function SidebarMenuItem({children}) {
  return (
    <div className="3xl:w-[275px] flex w-[180px] items-center justify-between rounded-lg border bg-white p-2.5 xl:w-[225px] dark:border-drkbrd dark:bg-drkbg2 dark:text-drkcol">
      {children}
    </div>
  );
}