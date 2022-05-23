import React from 'react';
import {
    NavLink
} from 'reactstrap';
import Link from 'next/link'
import Router from 'next/router';
import { FaHouseDamage } from "react-icons/fa";


import { signout, isAuth } from '../../actions/auth';
import styles from '../../styles/AdminHeader.module.css'
import { APP_NAME } from '../../config'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main_menu}>
                <div className={styles.app_name}>
                    <Link href="/">
                        <a>
                            <FaHouseDamage />
                        </a>
                    </Link>
                </div>
                <div className={styles.main_curriculum_menu}>
                    <div className={styles.main_curriculum_1}>
                        <Link href="/admin/syllabus">
                            <a>
                                Syllabuses
                            </a>
                        </Link>
                    </div>
                    <div className={styles.main_curriculum_1}>
                        <Link href="/admin/student">
                            <a>
                                Student Books
                            </a>
                        </Link>
                    </div>
                    <div className={styles.main_curriculum_1}>
                        <Link href="/admin/guide">
                            <a>
                                Teacher Guides
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    {isAuth() && (
                        <div className={styles.signout_auth}>
                            <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                                Signout
                        </NavLink>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Header;