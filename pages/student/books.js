import React from 'react'
import Layout from '../../components/Layout'
import Student from '../../components/auth/Student'
import Learning from '../../components/my-learning/myLearning'

const booksIndex = () => {
    return (
        <Layout>
            <Student>
                <Learning>
                    This is the student BOOKS page !
                </Learning>
            </Student>
        </Layout>
    )
}

export default booksIndex