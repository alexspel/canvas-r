import { classNames } from 'lib/classNames/classNames';
import cls from './Button.module.scss';

const Button = ({ className, children, ...otherProps }) => {
    return (
        <button
            type='button'
            className={classNames(cls.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;