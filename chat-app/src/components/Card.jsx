import React from 'react'

const Card = (props) => {
    console.log(props.user, props.age);

    return (
        <div className="card-container">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="poorva" />

                <div className="card-content">
                    <h2 className="card-title">{props.user},{props.age}</h2>
                    <p className="card-desc">
                        This is a simple card description. You can write anything here.
                    </p>
                    <button className="card-btn">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card