import type { FC, ReactNode } from "react";

export interface SquareProps {
  black: boolean;
  children?: ReactNode;
}

const squareStyle = {
  width: "100%",
  height: "100%",
  background: "#3f1e0f",
  display: "inline-block",
  border: "1px solid rgb(102 40 19)",
  boxShadow: "inset 1px 1px 5px rgb(76 43 24)",
  borderRadius: 1,
};

export const Square: FC<SquareProps> = ({ children }) => {
  return (
    <div
      style={{
        ...squareStyle,
      }}
    >
      {children}
    </div>
  );
};
