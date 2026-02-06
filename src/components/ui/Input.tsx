import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: Props) => {
  return <input {...props} />;
};

export default Input;