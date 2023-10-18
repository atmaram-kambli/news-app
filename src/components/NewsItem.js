import React from "react";

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, source } = props;
    return (
        <div>
            <div className="card">
                <div >
                    <span className="position-absolute end-0 badge rounded-pill bg-danger" style={{ top: "-2%" }}>{source}</span>
                </div>
                <img src={!(imageUrl) ? `https://source.unsplash.com/random/?${title}` : imageUrl} className="card-img-top" alt="not available" style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more...</a>
                </div>
            </div>
        </div>
    );
}
export default NewsItem;