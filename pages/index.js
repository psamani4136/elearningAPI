import React from 'react'
// 
import { FaPhone, FaPeriscope, FaRegEnvelope } from "react-icons/fa";
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <Layout>
            <div className={styles.homeContainer}>
                <div className={styles.homeContentContainer}>
                    <div className={styles.homeSidebarContainer}>
                        <div className={styles.sidebarContents}>
                            <div className={styles.sidebarLogo}>
                                <div className={styles.sidebarCoat}></div>
                                <p className={styles.sidebarCoatText}>Solomon Islands <br />Goverment</p>
                            </div>
                            <div className={styles.sidebarMehrdContainer}>
                                <div><p>Ministry of Education and Human Resource Development</p></div>
                            </div>
                            <div className={styles.sidebarMehrdBoxContainer}>
                                <div className={styles.sidebarMehrdImage__1}>
                                    <div><FaPeriscope /></div>
                                </div>
                                <div><p>P.O.Box G28, <br />Honiara,<br />Solomon Islands</p></div>
                            </div>
                            <div className={styles.sidebarMehrdContactContainer}>
                                <div className={styles.sidebarMehrdImage__2}>
                                    <div><FaPhone /></div>
                                </div>
                                <div><p>Fax: <br />(677) 22042,<br />Phone: <br /> (677) 28803 | 28804 | 24664</p></div>
                            </div>
                            <div className={styles.sidebarMehrdEmailContainer}>
                                <div className={styles.sidebarMehrdImage__3}>
                                    <div><FaRegEnvelope /></div>
                                </div>
                                <div><p>Email: <br /> psamani.mehrd.gov.sb</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.homeMainContentContainer}>
                        <div className={styles.homeTopContainer}>
                            <div className={styles.homeTopHolder}>
                                <div className={styles.indexTitle}>
                                    MEHRD e-learning Portal
                                </div>
                                <p>This is Solomon Islands elearning flatform recently published by the Ministry of Education and Human Resource Development. This flatform hold all curriculum elearning content for ECE, Primary, Junior Secondary, Senior Secondary and TVET.</p>
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            Landing page contents space
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home