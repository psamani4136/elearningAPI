import React, { Fragment, useState, useEffect } from 'react'
import { withRouter } from "next/router";
import Link from "next/link";
import renderHTML from "react-render-html";
import { AiOutlineHeatMap, AiOutlineInsertRowLeft } from 'react-icons/ai';

import Layout from '../../components/Layout'
import { singleSubstrand } from '../../actions/substrand'
import { getCategories, singleCategory} from '../../actions/category'
import { getSections, getSyllabusSections } from '../../actions/section'
import styles from '../../styles/SyllabusSlug.module.css'
import { isAuth } from "../../actions/auth";
import { getYearsWithAllSubstrands } from "../../actions/year";

const Substrand = ({ data }) => {
    const [relatedContent, toggleRelatedContent] = useState(false);
    const [associated, setAssociated] = useState([]);
    const [categories, setCategories] = useState([]);
    const [syllCategory, setSyllCategory] = useState([]);
    const [syllabusSections, setSyllabusSections] = useState([]);
    const [content, setContent] = useState([]);

    const initsections = () => {
        getSections({}).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSyllabusSections(data)
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

    const sections = () => {
        return syllabusSections.map((s, i) => {
            return (

                <div key={i} className={styles.sectionContents}  >
                    <span onClick={() => associatedSections(s.slug)} >
                        {renderHTML(s.title)}
                    </span>
                </div>
            )
        })
    }

    const associatedSections = (slug) => {
        getSyllabusSections(slug, { data }).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setAssociated(data);
            }
        });
    }


    const category = () => {
        return categories?.map((c, i) => {
            return (
                <div key={i} className={styles.syllausContainer} >
                    <span className={styles.syllabusCategory}>
                        <div className={styles.syllabusCategoryIcon}><AiOutlineInsertRowLeft /></div>
                        <div className={styles.syllabusCategoryText}>
                            <Link href="/category/[slug]" as={`/category/${c.slug}`}>
                                <a>{c.name} Syllabuses</a>
                            </Link>
                            {/* <span  onClick={() => syllabusCategory(c.slug)} >{c.name} Syllabuses</span> */}
                        </div>
                    </span>
                </div>
            )
        })
    }

    // const syllabusCategory = (slug) => {
    //     singleCategory(slug).then((data) => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setSyllCategory(data);
    //         }
    //     });
    // }

    const showOutcomes = () => {
        return data.outcomes?.map((o, i) => {
            return (
                <div key={i}>
                    <div className={styles.substrand__Outcomes__heads}>
                        {isAuth() && (
                            <React.Fragment>
                                <div className={styles.substrand__Outcomes__1}>
                                    <Link href="/outcome/[slug]" as={`/outcome/${o.slug}`}>
                                        <a>{renderHTML(o.general)}</a>
                                    </Link>
                                </div>
                                <div className={styles.substrand__Outcomes__2}>
                                    <div>{renderHTML(o.indicators)}</div>
                                </div>
                            </React.Fragment>
                        )}
                        {!isAuth() && (
                            <React.Fragment>
                                <div className={styles.substrand__Outcomes__1}>
                                    <span>{renderHTML(o.general)}</span>
                                </div>
                                <div className={styles.substrand__Outcomes__2}>
                                    <div>{renderHTML(o.indicators)}</div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            )
        });
    }


    const showSubstrand = () => {
        return (
            <div className={styles.substrandContainer}>
                <div className={styles.substrandContainer__1}>
                    <div className={styles.substrandHeading}>
                        <div className={styles.substrandHeading__1}><strong>Subject:</strong> {data.subject.name}
                        </div>
                        <div className={styles.substrandHeading__2}>
                            Year: {data.year.name}
                        </div>
                    </div>
                    <div className={styles.substrandStrand}>
                        {renderHTML(data.strand.name)}
                    </div>
                    <div className={styles.substrandHeads}>
                        <div className={styles.substrandHeads__1}> <strong>Substrand:</strong> {data.name}</div>
                        <div className={styles.substrandHeads__2}>Periods: {data.periods}</div>
                    </div>
                    <div className={styles.substrandStatement}>{renderHTML(data.statement)}</div>
                    <div className={styles.substrandOutcomes}>
                        <div className={styles.substrandOutcomes__1}>General Learning Outcomes</div>
                        <div className={styles.substrandOutcomes__2}>Specific Learning Outcomes</div>
                    </div>
                    <div className={styles.substrandOutcomesStem}>
                        <div className={styles.substrandOutcomes__stem__1}>Learners should:</div>
                        <div className={styles.substrandOutcomes__stem__2}>Learners should be able to: </div>
                    </div>
                    <div>{showOutcomes()}</div>
                </div>

            </div>
        )
    }

    const assessment = () => {
        return data.outcomes?.map((c, i) => {
            return (
                <div key={i}>
                    <div>
                        <a>{renderHTML(c.assessment)}</a>
                    </div>
                </div>
            )
        })
    }

    const showAllYears = () => {
        return data.years?.map((year, i) => (
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
        getYearsWithAllSubstrands(slug, { data }).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                //push json data into setContent state 
                setContent(data);
                if (associated || associated.length !== 0) {
                    setAssociated([])
                }
            }
        });
    };

    const showAllYearSubstrands = () => {
        return content?.map((c, i) => (
            <div key={i} className={styles.syllabusSubstrandTitle}>
                <Link href="/substrand/[slug]" as={`/substrand/${c.slug}`}>
                    <a><strong>{c.name} </strong></a>
                </Link>

            </div>
        ));
    };

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



    return (
        <Layout>
            <div style={{ minHeight: '500px', width: '100%' }}>

                <div className={styles.syllabuscontentContainer}>
                    <div className={styles.syllabusheadingContainer}>
                        <div className={styles.syllabusheading}>
                            <div className={styles.syllabusTitle}>
                                {data.subject.name} Syllabus
                            </div>
                            <p className={styles.syllabusText}>The categories below contains all the syllabuses currently used in all the schools registered with the Ministry of Education and Human Resource Development.</p>
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

                            {associated.foreword ? showForeword() : <React.Fragment>
                                {showSubstrand()}
                                < div className={styles.substrand_assessment}>
                                    <div><strong>Suggested Assessment Events</strong></div>
                                    <div>
                                        {assessment()}
                                    </div>
                                    {/* {JSON.stringify(syllCategory)} */}
                                </div>
                            </React.Fragment>
                            }

                            {associated.acknowledgement ? showAcknowledgement() : null}
                            {associated.introduction ? showIntroduction() : null}
                            {associated.rationale ? showRationale() : null}
                            {associated.aim ? showAim() : null}


                        </div>
                    </div>
                    <div className={styles.syllabusContents_2}>
                        <strong>Table of contents</strong>
                        <div>
                            {sections()}

                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
Substrand.getInitialProps = ({ query }) => {
    return singleSubstrand(query.slug).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                data
            };
        }
    });
};
export default withRouter(Substrand)