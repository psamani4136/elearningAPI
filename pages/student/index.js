import React from 'react'
import Layout from '../../components/Layout'
import Student from '../../components/auth/Student'
import Learning from '../../components/my-learning/myLearning'

const StudentIndex = () => {
    return (
        <Layout>
            <Student>
                <Learning>
                    This is the Students Index page
                </Learning>
            </Student>
        </Layout>
    )
}

export default StudentIndex;