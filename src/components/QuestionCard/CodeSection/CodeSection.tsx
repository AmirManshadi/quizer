import * as React from 'react';
import cls from 'classnames';
import classes from './CodeSection.module.css';


interface OwnProps {
  className?: string;
}

export type Props = Omit<React.ComponentPropsWithRef<'div'>, keyof OwnProps> & OwnProps;

const CodeSectionBase = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const {className, ...otherProps} = props;
  
  return <div {...otherProps} className={cls(className, classes.root)} ref={ref}>
    <p>this is the CodeSection</p>
  </div>
};

const CodeSection = React.forwardRef(CodeSectionBase) as typeof CodeSectionBase;

export default CodeSection