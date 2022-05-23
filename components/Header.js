import React, { useState, Fragment } from 'react';
import {
    NavLink
} from 'reactstrap';
import Link from 'next/link'
import Router from 'next/router';

import { FaHouseDamage } from "react-icons/fa";

import { signout, isAuth } from '../actions/auth';
import styles from '../styles/Header.module.css'
import { APP_NAME } from '../config'



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={styles.container}>
            <div className={styles.main_header}>
                <div className={styles.main_logo}>

                </div>
                <div className={styles.main_text}>
                    Solomon Islands e-Learning Center
                </div>
            </div>
            <div className={styles.main_menu}>
                <div className={styles.main_menu__home}>
                    <Link href="/">
                        <a>
                            <FaHouseDamage />
                        </a>
                    </Link>
                </div>
                <div className={styles.main_curriculum_menu}>
                    <div className={styles.main_curriculum_1}>
                        <Link href="/syllabuses">
                            <a>
                                Syllabuses
                            </a>
                        </Link>
                    </div>
                    <div className={styles.main_curriculum_1}>
                        <Link href="/students">
                            <a>
                                Student Books
                            </a>
                        </Link>
                    </div>
                    <div className={styles.main_curriculum_1}>
                        <Link href="/guides">
                            <a>
                                Teacher Guides
                            </a>
                        </Link>
                    </div>
                </div>
                {isAuth() && isAuth().teacher === 1 && (
                    <Fragment>

                        <div className={styles.main_teacher_1}>
                            <Link href="/teacher">
                                <a>My Teaching</a>
                            </Link>
                        </div>
                        <div className={styles.main_teacher_1}>
                            <Link href="/class">
                                <a>Create Class</a>
                            </Link>
                        </div>

                    </Fragment>
                )}

                {isAuth() && isAuth().student === 1 && (
                    <div className={styles.main_curriculum_1}>
                        <Link href="/student">
                            <a>My Learning</a>
                        </Link>
                    </div>
                )}

                {isAuth() && isAuth().role === 1 && (
                    <Fragment>
                        <div>
                            <Link href="/admin/syllabus">
                                <a>Admin Dashboard</a>
                            </Link>
                        </div>
                        <div style={{ cursor: 'pointer', color: 'white' }}>
                            <Link href="/signup">
                                <a>
                                    Teacher Signup
                              </a>
                            </Link>
                        </div>
                    </Fragment>
                )}



                <div className={styles.main_auth}>
                    {!isAuth() && (
                        <div className={styles.main_signin}>
                            <Link href="/signin">
                                <a>
                                    Signin
                                </a>
                            </Link>
                        </div>
                    )}


                    {isAuth() && (
                        <div>
                            <NavLink style={{ cursor: 'pointer', color: 'white' }} onClick={() => signout(() => Router.replace(`/signin`))}>
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