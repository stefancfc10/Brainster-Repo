import React from "react";

export const Banner: React.FC =()=>{
    return (
        <div className="banner">
            <img src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="text">
                <p>summer vacation</p>
                <h1>Nomad nation</h1>
                <a className="btn" href="/">read more</a>
            </div>
        </div>
    )
}