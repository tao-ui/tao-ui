interface CtrlProps {
  title: string;
}

export const Ctrl = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
