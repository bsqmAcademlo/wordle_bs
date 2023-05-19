interface Props {
    children: JSX.Element | JSX.Element[];
}

import "./styles.css";

export const Container = ({ children }: Props) => {
    return <div className="container">{children}</div>;
};
