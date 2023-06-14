import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="https://barahsinghe.com/wp-content/themes/WPSTARTER/imagio_s/img/logo/barahsinghe_beer.png" alt="Card image cap" style={{ "width": "18rem", "maxHeight": "360px" }}/>
                    <div className="card-body">
                        <p className="card-text">Barahsinghe Beer</p>
                        <div className="container w-100">
                            <select className="m-2 h-100  bg-success rounded">
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    )
                                })}
                            </select>

                           
                            <div className='d-inline h-100 fs-5'>Total Price</div>
                        </div>

                    </div>
                </div>
            </div></div>
    )
}
