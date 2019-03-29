import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container-fluid bg-success text-light mb-5 py-3">
                <div className="row">
                    <div className="col-6 offset-3 text-center">
                        <h1>Todux app</h1>
                        <h2>Lista de afazeres</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
