import React, { useState, useEffect } from 'react'
// 
import { FaPhone, FaPeriscope, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineInsertRowLeft } from 'react-icons/ai';
import Layout from '../../components/Layout'
import styles from '../../styles/TeachersIndex.module.css'
import { getCategories } from "../../actions/category";

const guidesIndex = () => {
    const [allCategories, setAllCategories] = useState([])
    const initCategories = () => {
        getCategories({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllCategories(data)
            }
        })
    }

    useEffect(() => {
        initCategories();


    }, [])

    const category = () => {
        return allCategories.map((c, i) => {
            return (

                <div key={i} className={styles.syllabusContainer} >
                    <span className={styles.syllabusCategory}>
                        <div className={styles.syllabusCategoryIcon}><AiOutlineInsertRowLeft /></div>
                        <div className={styles.syllabusCategoryText}>

                            {/* <Link href="/category/[slug]" as={`/category/${c.slug}`}> */}
                            <span>{c.name} Teacher Guides</span>
                            {/* </Link> */}

                        </div>
                    </span>
                </div>
            )
        })
    }

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
                                    Curriculum eTeacher Guides
                                </div>
                                <p>This is Solomon Islands elearning flatform recently published by the Ministry of Education and Human Resource Development. This flatform hold all teacher guides elearning content for ECE, Primary, Junior Secondary, Senior Secondary and TVET.</p>
                                <div className={styles.syllabusCategory}>{category()}</div>
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            Teacher guides contents space
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default guidesIndex