import React from 'react';

export default function Info() {
    return(
        <div className='info'>
            <img src='./images/Foto.jpg' className='info--image' />
            <h1>Julian Perassi</h1>
            <h2>FullStack Developer</h2>
            <p>http://omens.space</p>
            <div className='info--buttons'>
                <a href="mailto:perassijulian@gmail.com">
                    <button type="button" className='button--email'>Email</button>
                </a>
                <a href="https://github.com/perassijulian">
                    <button type="button" className='button--github'>GitHub</button>
                </a>
            </div>
        </div>
    )
}