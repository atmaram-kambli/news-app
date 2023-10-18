import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    // const articlesRaw = [  
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Moneycontrol"
    //         },
    //         "author": "Maryam Farooqui",
    //         "title": "Gujarat Titans locks sponsors for IPL 2024, says not far away from break even",
    //         "description": "The two season old team had joined the IPL bandwagon in 2022 when the league added two new teams. French private equity firm CVC Capital had acquired the franchise for Rs 5,625 crore.",
    //         "url": "https://www.moneycontrol.com/news/trends/sports/gujarat-titans-locks-sponsors-for-ipl-2024-says-not-far-away-from-break-even-11519401.html",
    //         "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/12/Collage-Maker-22-Dec-2022-04.13-PM-770x435.jpg",
    //         "publishedAt": "2023-10-12T05:12:32Z",
    //         "content": "Gujarat Titans, the two seasons old franchise is already prepping up for the upcoming season of the Indian Premier League (IPL) in 2024. It has locked sponsors and is looking to double its fanbase.\r\n… [+4049 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Cricket World Cup: Indian, Pakistani players' friendship off the field",
    //         "description": "The South Asian neighbours are fierce rivals on the cricket pitch - but share camaraderie outside of matches.",
    //         "url": "https://www.bbc.co.uk/news/world-asia-india-67074571",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12BFE/production/_131389767_gettyimages-1243978053-594x594.jpg",
    //         "publishedAt": "2023-10-12T05:03:09Z",
    //         "content": "Whenever India and Pakistan meet on a cricket pitch, the world witnesses another instalment of what is one of sports' most fiercely contested rivalries.\r\nAnd when the two meet at a World Cup, as they… [+5064 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "International Business Times"
    //         },
    //         "author": "Faisal KAMAL",
    //         "title": "Four Key India-Pakistan Battles At World Cup",
    //         "description": "Arch-rivals India and Pakistan meet in a blockbuster clash at the World Cup on Saturday.",
    //         "url": "https://www.ibtimes.com/four-key-india-pakistan-battles-world-cup-3714932",
    //         "urlToImage": "https://d.ibtimes.com/en/full/4492217/high-hopes-rohit-sharmas-battle-shaheen-shah-afridi-saturday-could-crucial.jpg",
    //         "publishedAt": "2023-10-12T02:06:37Z",
    //         "content": "Arch-rivals India and Pakistan meet in a blockbuster clash at the World Cup on Saturday.\r\nAFP Sport takes a look at four key battles that could decide the eagerly-awaited contest at the world's bigge… [+2257 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNA"
    //         },
    //         "author": null,
    //         "title": "Afghanistan coach Trott sees progress despite second World Cup defeat",
    //         "description": "NEW DELHI : Afghanistan lost their second successive World Cup game on Wednesday after an eight-wicket defeat by India but coach Jonathan Trott says they are making progress and have got to grips with conditions in Delhi where they play England next.Afghanist…",
    //         "url": "https://www.channelnewsasia.com/sport/afghanistan-coach-trott-sees-progress-despite-second-world-cup-defeat-3839906",
    //         "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--9Ya6Xp-m--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-10-12t035546z_1_lynxmpej9b03t_rtroptp_3_cricket-worldcup-ind-afg.jpg?itok=l2k6HIZt",
    //         "publishedAt": "2023-10-12T03:55:46Z",
    //         "content": "NEW DELHI : Afghanistan lost their second successive World Cup game on Wednesday after an eight-wicket defeat by India but coach Jonathan Trott says they are making progress and have got to grips wit… [+1825 chars]"
    //     }
    // ]

    const [articles, setArticles] = useState([]);
    // const [articles, setArticles] = useState(articlesRaw);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirst = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1, s.length);
    }

    const updateNews = async () => {
        const d = new Date();
        // setLoading({loading: true});
        props.setProgress(5);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&from=${new Date(d - 2 * 86400000)}&to=${d}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const response = await fetch(url); //it returs the promise
        props.setProgress(25);
        if (response.status !== 200) {
            console.log("Could not fetch the data for");
        }
        const data = await response.json();
        props.setProgress(50);
        console.log(data.totalResults);
        console.log(data);
        setArticles(data.articles);
        setPage(page + 1);
        setTotalResults(data.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    
    useEffect(() => {
        document.title = "NeweMania - " + capitalizeFirst(props.category);
        updateNews();
        // eslint-disable-next-line
    }, [])
    
    // const componentDidMount = async() => {
        //     updateNews();
        // }
        
    const fetchMoreData = async () => {
        const d = new Date();
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&from=${new Date(d - 2 * 86400000)}&to=${d}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const response = await fetch(url); //it returs the promise
        if (response.status !== 200) {
            console.log("could not fetch the data for");
        }
        const data = await response.json();
        // console.log(data.totalResults);
        // console.log(data);
        setLoading(false);
        setArticles(articles.concat(data.articles));
        setPage(page + 1);
        // setTotalResults(data.totalResults);
    }

    // Previous and Next buttons to fetch data on another page
    // const handleNextPage = async () => {
    //     setPage(page + 1);
    //     updateNews();
    // }
    // const handlePrevPage = async () => {
    //     setPage(page - 1);
    //     updateNews();
    // }

    return (
        <>
            <h1 className='text-center'>NewsMania - Top {capitalizeFirst(props.category)} HeadLines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row my-3">
                        {articles.map((obj) => {
                            return (
                                <div key={obj.url} className="col-md-4 my-2">
                                    <NewsItem title={obj.title ? ((obj.title.length < 42) ? obj.title : obj.title.slice(0, 42) + "...") : " "} description={(obj.description) ? ((obj.description.length < 88) ? obj.description : obj.description.slice(0, 88) + "...") : " "} imageUrl={obj.urlToImage} newsUrl={obj.url} source={obj.source.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between my-3">
                <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePrevPage} id="prev">&larr; previous</button>
                <button disabled={(page + 1 > Math.ceil(totalResults/props.pageSize))} type="button" className="btn btn-primary" onClick={handleNextPage}>next &rarr;</button>
            </div> */}
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    // setProgress: PropTypes.func
}
News.defaultPropTypes = {
    country: "in",
    pageSize: 12,
    category: "technology",
    apiKey: "2e8380080be04e5eb6004ffc0fb4c2ca",
}

export default News;