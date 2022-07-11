export default function BodySection({ children, css, id }) {
  return (
    <div
      className={`${css} w-full h-auto min-h-screen py-20 flex flex-col`}
      id={id}
    >
      {children}
    </div>
  );
}
