import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { AiOutlineHeatMap, AiOutlineInsertRowLeft } from 'react-icons/ai';
import { FaPhone, FaPeriscope, FaRegEnvelope } from "react-icons/fa";
import { withRouter } from "next/router";
import renderHTML from "react-render-html";

import Layout from '../../components/syllabus/Layout'
import styles from '../../styles/SyllabusIndex.module.css'

import { getCategories, singleCategory } from "../../actions/category";
import { getSyllabusSection } from '../../actions/section'
import { getSyllabuses } from '../../actions/syllabus'

const syllabusCategory = () => {
    const [relatedSyllabuses, setRelatedSyllabuses] = useState([]);
    const [allCategories, setAllCategories] = useState([])
    const [allSyllabuses, setAllSyllabuses] = useState([])



    const initCategories = () => {
        getCategories({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllCategories(data)
            }
        })
    }

    const initSyllabuses = () => {
        getSyllabuses({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAllSyllabuses(data)
            }
        })
    }


    useEffect(() => {
        initCategories();
        initSyllabuses();

    }, [])

    const category = () => {
        return allCategories.map((c, i) => {
            return (

                <div key={i} className={styles.syllabusContainer} >
                    <span className={styles.syllabusCategory}>
                        <div className={styles.syllabusCategoryIcon}><AiOutlineInsertRowLeft /></div>
                        <div className={styles.syllabusCategoryText}>

                            <Link href="/category/[slug]" as={`/category/${c.slug}`}>
                                <a>{c.name} Syllabuses</a>
                            </Link>

                        </div>
                    </span>
                </div>
            )
        })
    }

    // const associatedSyllabuses = (slug) => {
    //     singleCategory(slug).then((data) => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setRelatedSyllabuses(data);
    //         }
    //     });
    // }

    // const syllabus = () => {
    //     return relatedSyllabuses.map((s, i) => {
    //         return (
    //             <div key={i} className={styles.subSidebarContainer} >
    //                 <Link href="/syllabuses/[slug]" as={`/syllabuses/${s.slug}`}>
    //                     <a>{s.name}</a>
    //                 </Link>
    //             </div>
    //         )
    //     })
    // }

    const syllabusCard = () => {
        return allSyllabuses.map((s, i) => {
            return (
                <div key={i} className={styles.cardContainer}>
                    <div className={styles.cardNameContainer}>
                        <div>
                            <div className={styles.cardName}><p>{s.subject.name} Syllabus</p></div>
                        </div>
                    </div>
                    <div className={styles.cardExcerptContainer}>
                        <div className={styles.cardExcerpt}>
                            <p>{renderHTML(s.excerpt)}</p>
                            
                        </div>
                    </div>
                    <div className={styles.cardLinkContainer}>
                        <div className={styles.cardLinkContent}>
                            <Link href="/syllabuses/[slug]" as={`/syllabuses/${s.slug}`}>
                                <a><p>View</p></a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.cardCategoryContainer}><p>Category | <Link href="/category/[slug]" as={`/category/${s.category.slug}`}>
                        <a>{s.category.name}</a>
                    </Link></p></div>
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
                                    Curriculum eSyllabus
                                </div>
                                <p>The Solomon Islands government elearning flatform through the Ministry of Education and Human Resource Development published its curriculum syllabus elearning content for ECE, Primary, Junior Secondary, Senior Secondary and TVET.</p>
                                <div className={styles.syllabusCategory}>{category()}</div>
                            </div>
                        </div>
                        <div className={styles.syllabusContents}>
                            <div className={styles.syllabusContents_1}>
                                {syllabusCard()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default withRouter(syllabusCategory);