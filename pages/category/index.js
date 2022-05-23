import React, { useState, useEffect } from 'react'
import Layout from '../../components/category/Layout'
import styles from '../../styles/CategoryContent.module.css'

import { withRouter } from "next/router";

import { getCategories, singleCategory } from "../../actions/category";

import { getSyllabusSection } from '../../actions/section'
import { singleSyllabus, listSyllabusSections } from '../../actions/syllabus'

const categorySyllabuses = () => {

    const [mySyllabus, setMySyllabus] = useState([])
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
        // initSections();

    }, [])

    // const initSections = () => {
    //     listSyllabusSections(mySyllabus.slug).then((data) => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             setSections(data)
    //         }
    //     })
    // }

    const itsSyllabus = (slug) => {
        singleSyllabus(slug).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMySyllabus(data)
            }
        })
    }


    return (
        <Layout categories={allCategories} itsSyllabus={itsSyllabus}>
            <div>
                <div className={styles.syllabusheading}>{mySyllabus.name}</div>
                <div className={styles.syllabusContents}>
                    <div className={styles.syllabusContents_1}>123456</div>
                    <div className={styles.syllabusContents_2}>
                        Table of contents
                        <div>
                            {/* {syllabusSections()} */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
categorySyllabuses.getInitialProps = ({ query }) => {
    return getCategories(query).then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { data };
        }
    });
};

export default withRouter(categorySyllabuses);