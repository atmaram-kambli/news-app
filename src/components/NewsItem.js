import React from "react";
import fallbackIMG from './../assets/img/news-fallback.webp';

const NewsItem = (props) => {
    const { title, description, imageUrl, newsUrl, source } = props;
    return (
        <div>
            <div className="card">
                <div >
                    <span className="position-absolute end-0 badge rounded-pill bg-danger" style={{ top: "-2%" }}>{source}</span>
                </div>
                <img src={!(imageUrl) ? fallbackIMG : imageUrl} className="card-img-top" alt="not available" style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm" style={{background:"linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)", color:"white"}}>Read more...</a>
                </div>
            </div>
        </div>
    );
}
export default NewsItem;