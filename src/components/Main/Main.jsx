import React from 'react';
import './Main.scss';
import Form from './Form/Form';

const Main = () => {
    return (
        <main className="main">
            <div className="container text-center">
                <span className="main-title">Твой надежный и быстрый обменник</span>
                <Form />
            </div>
        </main>
    );
};

export default Main;
