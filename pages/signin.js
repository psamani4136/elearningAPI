import React from 'react'

import Layout from '../components/Layout'
import SigninComponent from '../components/auth/SigninForm'

import styles from '../styles/Signin.module.css'

const Signin = () => {

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.container_holder}>
                    <div className={styles.container_left}>Left side</div>
                    <div className={styles.container_right}>
                        <div className={styles.container_right_background}><span className={styles.container_right_title}>Signin form</span><SigninComponent /></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signin