import React from 'react'
import Layout from '../../../components/admin/syllabus/Layout'
import Admin from '../../../components/auth/Admin'
import Sidebar from '../../../components/admin/syllabus/Sidebar'

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                This is the syllabus admin page
            </Admin>
        </Layout>
    )
}

export default AdminIndex