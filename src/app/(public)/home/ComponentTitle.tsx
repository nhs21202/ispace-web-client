import React from "react";

type Props = {
  title: string;
};
const ComponentTitle = ({ title }: Props) => {
  return (
    <h1 className="flex items-center justify-center font-sans text-3xl font-bold uppercase text-primary">
      {title}
    </h1>
  );
};

export default ComponentTitle;
