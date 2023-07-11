import * as React from 'react';
import cls from 'classnames';
import classes from './Question.module.css';


interface OwnProps {
  className?: string;
}

export type Props = Omit<React.ComponentPropsWithRef<'div'>, keyof OwnProps> & OwnProps;

const QuestionBase = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const {className, ...otherProps} = props;
  
  return <div {...otherProps} className={cls(className, classes.root)} ref={ref}>
    <h3>Question #</h3>
    <p>this is question ... bluh</p>
  </div>
};

const Question = React.forwardRef(QuestionBase) as typeof QuestionBase;

export default Question