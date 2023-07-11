import * as React from 'react';
import cls from 'classnames';
import classes from './QuestionCard.module.css';
import Answers from './Answers';
import CodeSection from './CodeSection';
import Option from './Option';
import Question from './Question';

interface OwnProps {
  className?: string;
}

export type Props = Omit<React.ComponentPropsWithRef<'div'>, keyof OwnProps> & OwnProps;

const QuestionCardBase = (props: Props, ref: React.Ref<HTMLDivElement>) => {
  const {className, ...otherProps} = props;
  return <div {...otherProps} className={cls(className, classes.root)} ref={ref}>
    <Question/>

    <CodeSection/>

    <Answers>
      <Option/>
      <Option/>
      <Option/>
      <Option/>
    </Answers>

    <div>
      <button></button>
      <button></button>
    </div>
  </div>
};

const QuestionCard = React.forwardRef(QuestionCardBase) as typeof QuestionCardBase;

export default QuestionCard