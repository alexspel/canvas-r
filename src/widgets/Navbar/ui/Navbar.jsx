import { classNames } from 'shared/lib/classNames/classNames.js';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={classNames(cls.Navbar)}>
            <AppLink to="/">Main page</AppLink>
            <AppLink to="/about">About page</AppLink>
        </div>
    );
};

export default Navbar;