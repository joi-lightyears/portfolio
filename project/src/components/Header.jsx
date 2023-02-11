import React from 'react'

function Header() {
  return (
    // <div>Header</div>
    <section className='header-container'>
        <main className='intro'>
            <h1>
                Hi, <br />
                I'm Nguyen Thanh Dat, <br />
                a third-year IT major at the <br />
                Ho Chi Minh City University of Transport
            </h1>
            
            <a href="Antoanthongtin.pdf" className='cv-btn' download>
            <div className="">
                    <span className="background"></span>
                    <span className="border"></span>
                    <span className="text">Curriculum Vitae</span>
                </div>
            </a>
        </main>
    </section>
  )
}

export default Header