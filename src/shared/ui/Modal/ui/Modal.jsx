import { classNames } from 'lib/classNames/classNames';
import cls from './Modal.module.scss';

const Modal = ({ className, children }) => {
    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            {children}
        </div>
    );
};

export default Modal;