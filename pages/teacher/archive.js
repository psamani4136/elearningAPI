import React from 'react'
import Layout from '../../components/Layout'
import Teacher from '../../components/auth/Teacher'
import Teaching from '../../components/my-teaching/myTeaching'

const archiveIndex = () => {
    return (
        <Layout>
            <Teacher>
                <Teaching>
                    This is the teacher ARCHIVE page !
                </Teaching>
            </Teacher>
        </Layout>
    )
}

export default archiveIndex