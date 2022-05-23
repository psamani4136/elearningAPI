import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div><Header /></div>
            <div>{children}</div>
            <div><Footer /></div>
        </React.Fragment>
    );
};

export default Layout;