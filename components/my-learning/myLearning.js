import Link from 'next/link'


import styles from '../../styles/StudentSpace.module.css'
const studentLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className={styles.learningContainer}>
                <div className={styles.learningContent}>
                    <div className={styles.learningMenu}>My Learning</div>
                    <div className={styles.learningContentMenuHolder}>
                        <div className={styles.learningContentMenu}>

                            <div className={styles.learningMenuItem}>
                                <Link href="/student/books">
                                    <a>
                                        My Books
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.learningMenuItem}>
                                <Link href="/student/notes">
                                    <a>
                                        My Notes
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.learningMenuItem}>
                                <Link href="/student/activity">
                                    <a>
                                        My Activity
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.learningMenuItem}>
                                <Link href="/student/class">
                                    <a>
                                        My Class
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.learningMenuItem}>

                                <Link href="/student/assessment">
                                    <a>
                                        My Assessment
                                    </a>
                                </Link>

                            </div>
                            <div className={styles.learningMenuItem}>
                                <Link href="/student/archive">
                                    <a>
                                        My Archive
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.learningChildren}>{children}</div>
            </div>
        </React.Fragment>
    );
};

export default studentLayout;