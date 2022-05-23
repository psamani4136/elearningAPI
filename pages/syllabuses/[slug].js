import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, useRouter } from "next/router";
import Link from "next/link";
import renderHTML from "react-render-html";

import { AiOutlineHeatMap, AiOutlineInsertRowLeft } from 'react-icons/ai';
import Layout from '../../components/syllabus/Layout'
import { singleSyllabus } from '../../actions/syllabus'
// import styles from '../../styles/CategoryContent.module.css'
import styles from '../../styles/SyllabusSlug.module.css'

import { getCategories } from '../../actions/category'

import { getSectionSyllabus, getSections } from '../../actions/section'
import { getYearWithAllSubstrands } from "../../actions/year";

const mySyllabus = ({ syllabus }) => {
    const [categories, setCategories] = useState([]);
    const [associated, setAssociated] = useState([]);
    const [content, setContent] = useState([]);
    const [sections, setSections] = useState([]);
    const [relatedContent, toggleRelatedContent] = useState(false);

    const initsections = () => {
        getSections({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSections(data)
            }
        })
    }

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
        initsections();

    }, [])

    const category = () => {
        return categories.map((c, i) => {
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

    const syllabusSections = () => {
        return sections.map((s, i) => {
            return (
                <div key={i} className={styles.sectionContents} >
                    <span onClick={() => sectionSyllabus(s.slug)} >
                        {renderHTML(s.title)}
                    </span>
                </div>
            )
        })
    }


    const sectionSyllabus = (slug) => {
        getSectionSyllabus(slug, { syllabus }).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAssociated(data);
            }
        });
    }

    const showForeword = () => {
        return associated.foreword?.map((f, i) => {
            return (
                <React.Fragment>
                    <div key={i} className="mt-2 ml-3">
                        <div>
                            <strong><h2>{renderHTML(f.title)}</h2></strong>
                        </div>
                        <p>{renderHTML(f.body)}</p>

                    </div>
                </React.Fragment>
            )
        })
    }

    const showIntroduction = () => {
        return associated.introduction?.map((f, i) => {
            return (
                <React.Fragment>
                    <div key={i} className="mt-2 ml-3">
                        <div>
                            <strong><h2>{renderHTML(f.title)}</h2></strong>
                        </div>
                        <p>{renderHTML(f.body)}</p>

                    </div>
                </React.Fragment>
            )
        })
    }

    const showAcknowledgement = () => {
        return associated.acknowledgement?.map((f, i) => {
            return (
                <React.Fragment>
                    <div key={i} className="mt-2 ml-3">
                        <div>
                            <strong><h2>{renderHTML(f.title)}</h2></strong>
                        </div>
                        <p>{renderHTML(f.body)}</p>
                    </div>
                </React.Fragment>
            )
        })
    }

    const showRationale = () => {
        return associated.rationale?.map((f, i) => {
            return (
                <React.Fragment>
                    <div key={i} className="mt-2 ml-3">
                        <div>
                            <strong><h2>{renderHTML(f.title)}</h2></strong>
                        </div>
                        <p>{renderHTML(f.body)}</p>
                    </div>
                </React.Fragment>
            )
        })
    }

    const showAim = () => {
        return associated.aim?.map((f, i) => {
            return (
                <React.Fragment>
                    <div key={i} className="mt-2 ml-3">
                        <div>
                            <strong><h2>{renderHTML(f.title)}</h2></strong>
                        </div>
                        <p>{renderHTML(f.body)}</p>
                    </div>
                </React.Fragment>
            )
        })
    }

    const showAllYears = () => {
        return syllabus.category.years?.map((year, i) => (
            <button
                key={i}
                style={{ marginBottom: "0.5rem", marginTop: "1rem", marginRight: "30px", marginLeft: "20px", padding: "5px 5px" }}
                className="btn btn-primary"
                onClick={() =>
                    yearSubstrands(year.slug)
                }
            >
                <strong style={{ padding: "10px 10px" }}>Year {year.name} </strong>
            </button>
        ));
    };

    const yearSubstrands = (slug) => {
        getYearWithAllSubstrands(slug, { syllabus }).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                //push json data into setContent state 
                setContent(data);
            }
        });
    };

    const showAllYearSubstrands = () => {
        return content.map((c, i) => (
            <div key={i} className={styles.syllabusSubstrandTitle}>
                <Link href="/substrand/[slug]" as={`/substrand/${c.slug}`}>
                    <a><strong>{c.name} </strong></a>
                </Link>
                
            </div>
        ));
    };


    return (
        <Layout>
            <div style={{ minHeight: '600px', width: '100%' }}>
                <div className={styles.syllabusContentContainer}>
                    <div className={styles.syllabusheadingContainer}>
                        <div className={styles.syllabusheading}>
                            <div className={styles.syllabusTitle}>
                                {syllabus.name}
                            </div>
                            <p className={styles.syllabusText}>
                                {syllabus.description}
                            </p>
                            <div className={styles.syllabusCategory}>
                                {category()}
                            </div>
                        </div>
                        <div className={styles.syllabusheadingImage}><AiOutlineHeatMap size={100} /></div>
                    </div>
                    <div className={styles.syllabusContents}>
                        {/* <div className={styles.syllabusContents_1}>{syllabus()}</div> */}
                    </div>
                </div>

                <div className={styles.syllabusContents}>
                    <div className={styles.syllabusContents_1}>
                        <div className={styles.syllabusYears}>
                            <div className={styles.syllabusButtonsInstruction}>*Click the year level below to see its substrands</div>
                            <div className={styles.syllabusButtons}>
                                <span onClick={() => toggleRelatedContent(!relatedContent)} >
                                    {showAllYears()}
                                </span>
                            </div>
                            <div>{relatedContent && <Fragment><div className={styles.syllabusSubstrands}>
                                {showAllYearSubstrands()}
                                
                            </div></Fragment>}</div>
                        </div>
                        <div className={styles.syllabusContentsDisplay}>
                            {associated.foreword ? showForeword() : null}
                            {associated.acknowledgement ? showAcknowledgement() : null}
                            {associated.introduction ? showIntroduction() : null}
                            {associated.rationale ? showRationale() : null}
                            {associated.aim ? showAim() : null}
                            {/* {JSON.stringify(content)} */}
                        </div>

                    </div>
                    <div className={styles.syllabusContents_2}>
                        <strong>Table of contents</strong>
                        <div className={styles.sectionContainer}>
                            {syllabusSections()}
                           
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

mySyllabus.getInitialProps = ({ query }) => {
    return singleSyllabus(query.slug).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                syllabus: data.syllabus
            };
        }
    });
};

export default withRouter(mySyllabus)

