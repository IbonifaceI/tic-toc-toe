import React from 'react';

type Props = React.ComponentPropsWithoutRef<'div'> & {
  title?: string;
  description?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
};

const Card = ({ title, description, header, content, ...props }: Props) => {
  return (
    <div {...props}>
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
      {header && <CardHeader>{header}</CardHeader>}
      {content && <CardContent>{content}</CardContent>}
    </div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>;
const CardDescription = ({ children }: { children: React.ReactNode }) => <p>{children}</p>;
const CardHeader = ({ children }: { children: React.ReactNode }) => <header>{children}</header>;
const CardContent = ({ children }: { children: React.ReactNode }) => <section>{children}</section>;

export { Card, CardTitle, CardDescription, CardHeader, CardContent };