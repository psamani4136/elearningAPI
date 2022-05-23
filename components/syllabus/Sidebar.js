import React, { useState } from 'react'
import Link from "next/link";
import styles from '../../styles/CategorySidebar.module.css'
import { AiOutlineHeatMap, AiOutlineInsertRowLeft } from 'react-icons/ai';

import { singleCategory } from '../../actions/category'

const Sidebar = ({ categories }) => {
    const [relatedSyllabuses, setRelatedSyllabuses] = useState([]);



    const category = () => {
        return categories.map((c, i) => {
            return (

                <div key={i} className={styles.sidebarContainer} >
                    <span onClick={() => associatedSyllabuses(c.slug)} className={styles.sidebarCategory}>
                        <div className={styles.sidebarCategoryIcon}><AiOutlineInsertRowLeft /></div>
                        <div className={styles.sidebarCategoryText}>
                            {c.name} Syllabuses
                        </div>
                    </span>

                </div>
            )
        })
    }
    const associatedSyllabuses = (slug) => {
        singleCategory(slug).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelatedSyllabuses(data);
            }
        });
    }

    const syllabus = () => {
        return relatedSyllabuses.map((s, i) => {
            return (
                <div key={i} className={styles.subSidebarContainer} >
                    <Link href="/syllabuses/[slug]" as={`/syllabuses/${s.slug}`}>
                        <a>{s.name}</a>
                    </Link>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            <div className={styles.categorySidebar}>
                <div>{category()}</div>
                {/* {syllabus()} */}
            </div>
        </React.Fragment>
    );
};

export default Sidebar;