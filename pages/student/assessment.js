import React from 'react'
import Layout from '../../components/Layout'
import Student from '../../components/auth/Student'
import Learning from '../../components/my-learning/myLearning'

const assessmentIndex = () => {
    return (
        <Layout>
            <Student>
                <Learning>
                    This is the student ASSESSMENT page !
                </Learning>
            </Student>
        </Layout>
    )
}

export default assessmentIndex