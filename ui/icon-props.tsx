import dynamic from 'next/dynamic'
import { LucideProps, X } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { ComponentType } from 'react';
import { XCircle, Palette, ClipboardList, Building, Globe } from 'lucide-react';

export type LucideIconType = keyof typeof dynamicIconImports;

interface IconProps extends LucideProps {
  name: LucideIconType;
}

const iconMap = new Map<LucideIconType, ComponentType<LucideProps>>();
iconMap.set('palette', Palette);
iconMap.set('clipboard-list', ClipboardList);
iconMap.set('building', Building);
iconMap.set('globe', Globe);

const Icon = ({ name, ...props }: IconProps) => {
  //originally uses this dynamic import, but nextjs's dynamic import seems to have a delay
  //it causes icon to disappear for a split second everytime the component is rendered
  // const LucideIcon = dynamic(dynamicIconImports[name])
  //so we use a map instead :(
  const LucideIcon = iconMap.get(name) || XCircle;

  return <LucideIcon {...props} />;
};

export default Icon;