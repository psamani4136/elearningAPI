import React from 'react'
import Layout from '../../components/Layout'
import Student from '../../components/auth/Student'
import Learning from '../../components/my-learning/myLearning'

const classIndex = () => {
    return (
        <Layout>
            <Student>
                <Learning>
                    This is the teacher CLASS page !
                </Learning>
            </Student>
        </Layout>
    )
}

export default classIndex