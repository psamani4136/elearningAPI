import Header from '../Header'
import Footer from '../Footer'
import Sidebar from './Sidebar'
import styles from '../../styles/CategoryLayout.module.css'
const syllabusLayout = ({ categories, children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.categoryLayoutContainer}>
                <div className={styles.categoryLayoutContent}>{children}</div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default syllabusLayout;