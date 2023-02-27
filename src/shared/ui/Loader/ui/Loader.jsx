import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export const Loader = ({ className }) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
