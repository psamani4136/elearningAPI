import React from 'react'
import Layout from '../../components/Layout'
import Student from '../../components/auth/Student'
import Learning from '../../components/my-learning/myLearning'

const archiveIndex = () => {
    return (
        <Layout>
            <Student>
                <Learning>
                    <div>This is the student ARCHIVE page !</div>
                </Learning>
            </Student>
        </Layout>
    )
}

export default archiveIndex    