import { Link, LinkProps } from 'react-router-dom';

export const AppLink = (props) => {
    const { children, to, ...otherProps } = props;
    return (
        <Link to={to} {...otherProps}>{children}</Link>
    );
};
