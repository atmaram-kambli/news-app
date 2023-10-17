import React, {Component} from "react";

export class NewsItem extends Component
{
    render () {
        const {title, description, imageUrl, newsUrl, source} = this.props;

        return (
            <div>
                <div className="card">
                    <div >
                        <span className="position-absolute end-0 badge rounded-pill bg-danger" style={{ top: "-2%" }}>{source}</span>
                    </div>
                    <img src={!(imageUrl) ? `https://source.unsplash.com/random/?${title}` : imageUrl} className="card-img-top" alt="not present" style={{ height: "200px" }} />
                    {/* {<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>} */}
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more...</a>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default NewsItem;