import React, { Component } from 'react'
import { NewsItem } from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        
        this.state = {
            articles: [],
            loading : false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?q=world&apiKey=5aaeb8f21219499e9c4d291cdc86dfb0";
        const response = await fetch(url); //it returs the promise
        const data = await response.json();
        // console.log(data);
        this.setState({
            articles: data.articles
        });
    }

  render() {
    return (
      <div className='container my-3'>
            <h1>NewsMania - Top HeadLines</h1>

            <div className="row">
                {this.state.articles.map((obj) => {
                    return (
                        <div className="col-md-4">
                            <NewsItem title={obj.title ? ((obj.title.length < 42) ? obj.title : obj.title.slice(0,42)+"...") : " "} description={(obj.description) ? ((obj.description.length < 88) ? obj.description : obj.description.slice(0,88)+"...") : " "} imageUrl={obj.urlToImage} newsUrl={obj.url}/>
                        </div>
                    );
                })}
            </div>
      </div>
      
    )
  }
}

export default News;