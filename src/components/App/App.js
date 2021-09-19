import React, { useState } from 'react'
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Board } from '../Board/Board';

export const App = () => {
    const [boardNames] = useState([
        'to do',
        'doing',
        'done'
    ]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Header />
                <Board heading={boardNames[0]} />
                <Board heading={boardNames[1]} />
                <Board heading={boardNames[2]} />
                <Footer />
            </div>
        </div>
    )
}
