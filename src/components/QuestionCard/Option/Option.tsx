import * as React from 'react';
import cls from 'classnames';
import classes from './Option.module.css';


interface OwnProps {
  className?: string;
}

export type Props = Omit<React.ComponentPropsWithRef<'div'>, keyof OwnProps> & OwnProps;

const OptionBase = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const {className, ...otherProps} = props;
  
  return <div {...otherProps} className={cls(className, classes.root)} ref={ref}>
    this is an option!
  </div>
};

const Option = React.forwardRef(OptionBase) as typeof OptionBase;

export default Option