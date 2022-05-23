import React from 'react'

import Layout from '../components/Layout'
import SignupComponent from '../components/auth/SignupForm'
import Admin from '../components/auth/Admin'

import styles from '../styles/Signup.module.css'

const Signup = () => {

    return (
        <Layout>
            <Admin>
                <div className={styles.container}>
                    <div className={styles.container_holder}>
                        <div className={styles.container_left}>Left side</div>
                        <div className={styles.container_right}>
                            <div className={styles.container_right_background}><span className={styles.container_right_title}>Signup form</span><SignupComponent /></div>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Signup