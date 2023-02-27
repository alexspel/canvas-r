import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';


export const Loader = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
