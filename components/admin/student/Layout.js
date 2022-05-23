import Header from '../Header'
import Sidebar from './Sidebar'
import styles from '../../../styles/AdminLayout.module.css'
const studentLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />

            <div className={styles.adminLayoutContainer}>
                <Sidebar />
                <div className={styles.adminLayoutContent}>{children}</div>
            </div>

        </React.Fragment>
    );
};

export default studentLayout;