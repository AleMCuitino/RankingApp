import React from 'react'
import Navbar from '../../components/navbar/Navbar';
//import Footer from '../../components/footer/Footer'
import AppForm from '../../components/app-form/appForm';

export default function SingleApp() {
    return (
        <>
            <Navbar />
            <h2>Agregar app</h2>
            <AppForm />
            {/* <ComentsList />
            <ComentForm /> */}

            {/* <Footer /> */}
        </>
    )
}