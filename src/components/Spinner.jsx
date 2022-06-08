import React from 'react'
import '../sass/Spinner.scss'





const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner__bounce1"></div>
            <div className="spinner__bounce2"></div>
            <div className="spinner__bounce3"></div>
        </div>
    )
}

export default Spinner