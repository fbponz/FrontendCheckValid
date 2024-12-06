import React from 'react';
import Form from '../components/ui/Form';
import Maphandler from '../components/ui/Map';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex w-full h-full">
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-center">Validador de direcciones</h1>
                    <div className="flex justify-center items-center">
                        <Form />
                    </div>
                    <div className="flex justify-center items-center">
                    <p className="text-center mt-4">Zona afectada:</p>
                    </div>

                </div>
                <div className="w-1/2">
                    <Maphandler />
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Home;