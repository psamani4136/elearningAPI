import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from "next/router";
import Link from "next/link";
import { AiOutlineInsertRowLeft } from 'react-icons/ai';
import { FaPhone, FaPeriscope, FaRegEnvelope } from "react-icons/fa";
import renderHTML from "react-render-html";


import { singleCategory } from "../../actions/category";
import { getCategories } from '../../actions/category'
import Layout from '../../components/Layout'
import styles from '../../styles/CategorySlug.module.css'

const Category = ({ category, data }) => {
    const [categories, setCategories] = useState([]);
    const [relatedContent, toggleRelatedContent] = useState(false);

    const initCategories = () => {
        getCategories({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategories(data)
            }
        })
    }

    useEffect(() => {
        initCategories();

    }, [])

    const icategory = () => {
        return categories.map((c, i) => {
            return (

                <div key={i} className={styles.syllausContainer} >
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

    const showYears = () => {
        return categories.years.map((c, i) => {
            return (

                <div key={i}>
                    <span>
                     
               {c.name} Syllabuses
                    </span>
                </div>
            )
        })
    }

    const syllabusCard = () => {
        return data.data.map((s, i) => {
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
                        <Link href="/syllabuses/[slug]" as={`/syllabuses/${s.slug}`}>
                            <a><p>View</p></a>
                        </Link>
                    </div>
                    <div className={styles.cardCategoryContainer}><p>Category: <Link href="/category/[slug]" as={`/category/${s.category.slug}`}>
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
                                    All {data.category.name} Syllabuses
                                    </div>
                                <p>Below is the list of all the {data.category.name} syllabuses currently available on this site. You can view the syllabus of your choice. Pleasant browsing.</p>
                                <div className={styles.syllabusCategory}>
                                    {icategory()}
                                </div>
                            </div>
                        </div>
                        <div className={styles.syllabusContents}>
                            <div className={styles.syllabusContents_1}>
                                {syllabusCard()}
                                {/* {JSON.stringify(data)} */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                category: data.query,
                data
            };
        }
    });
};
export default withRouter(Category)