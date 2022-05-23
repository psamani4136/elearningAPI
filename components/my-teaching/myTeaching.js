import Link from 'next/link'

import Header from '../Header'
import Footer from '../Footer'

import styles from '../../styles/TeachingSpace.module.css'
const teachingLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className={styles.teachingContainer}>
                <div className={styles.teachingContent}>
                    <div className={styles.teachingMenu}>My Teaching</div>
                    <div className={styles.teachingContentMenuHolder}>
                        <div className={styles.teachingContentMenu}>
                            <div className={styles.teachingMenuItem}>
                                <Link href="/teacher/planner">
                                    <a>
                                        Year Planner
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.teachingMenuItem}>
                                <Link href="/teacher/scheme">
                                    <a>
                                        Scheme of Work
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.teachingMenuItem}>
                                <Link href="/teacher/weekly">
                                    <a>
                                        Weekly Program
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.teachingMenuItem}>
                                <Link href="/teacher/activity">
                                    <a>
                                        Learner Activity
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.teachingMenuItem}>
                                <Link href="/teacher/class">
                                    <a>
                                        My Class
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.teachingMenuItem}>

                                <Link href="/teacher/assessment">
                                    <a>
                                        Class Assessment
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.teachingMenuItem}>
                                <Link href="/teacher/archive">
                                    <a>
                                        My Archive
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.teachingChildren}>{children}</div>
            </div>
        </React.Fragment>
    );
};

export default teachingLayout;