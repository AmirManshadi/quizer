import * as React from 'react';
import cls from 'classnames';
import classes from './Button.module.css';


interface OwnProps {
  className?: string;
}

export type Props = Omit<React.ComponentPropsWithRef<'button'>, keyof OwnProps> & OwnProps;

const ButtonBase = (props: Props, ref: React.Ref<HTMLButtonElement>) => {
  const {className, ...otherProps} = props;
  
  return <button {...otherProps} className={cls(className, classes.root)} ref={ref}>
    this is a button
  </button>
};

const Button = React.forwardRef(ButtonBase) as typeof ButtonBase;

export default Button