import * as React from 'react';
import cls from 'classnames';
import classes from './Answers.module.css';


interface OwnProps {
  className?: string;
  children: React.ReactNode
}

export type Props = Omit<React.ComponentPropsWithRef<'div'>, keyof OwnProps> & OwnProps;

const AnswersBase = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const {className, children, ...otherProps} = props;

  return <div {...otherProps} className={cls(className, classes.root)} ref={ref}>
    {children}
  </div>
};

const Answers = React.forwardRef(AnswersBase) as typeof AnswersBase;

export default Answers