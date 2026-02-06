// @/components/ui/Icon.tsx
import React from 'react';

type Props = React.SVGAttributes<SVGSVGElement> & {
  name: string;
  size?: number;
};

const IconsMap: Record<string, React.FC<React.SVGAttributes<SVGSVGElement>>> = {};

const Icon = ({ name, size = 24, ...props }: Props) => {
  const Component = IconsMap[name]; // Здесь мы можем добавлять иконки динамически, загружая их отдельно
  return Component ? <Component width={size} height={size} {...props} /> : null;
};

export default Icon;