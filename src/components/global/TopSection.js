export default function TopSection({ children }) {
  return (
    <div className="w-full h-auto min-h-screen py-20 flex flex-col justify-center items-center dark:bg-darkbg">
      {children}
    </div>
  );
}
