import React from 'react'

const Result = ({pics, loading}: any) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="result">
        {
        pics.map((pic: any, i: number) =>
            <div className="card" key={i}>
                <img
                    className="card-image"
                    alt={pic}
                    src={"https://farm" + pic.farm + ".staticflickr.com/" +  pic.server + "/" + pic.id + "_" + pic.secret + "_b.jpg"}
                    width="50%"
                    height="50%"
                ></img>
            </div>)
        }
        </div>
    )
}

export default Result
