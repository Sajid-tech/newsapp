import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log("Hello I am a constructor from News Components");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=444fb2802e214c20b943d5b823f94846&page=1&pageSize=18"
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(data)
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })

  }

  handlePreClick = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=444fb2802e214c20b943d5b823f94846&page=${this.state.page - 1}&pageSize=18`
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(data)
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles
    })
    this.setState({
      page: this.state.page - 1
    })
  }

  handleNextClick = async () => {
    console.log(" next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

    }
    else {



      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=444fb2802e214c20b943d5b823f94846&page=${this.state.page + 1}&pageSize=18`
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(data)
      console.log(parsedData)
      this.setState({ articles: parsedData.articles })

      this.setState({
        page: this.state.page + 1
      })
    }
  }

  render() {
    console.log(
      "render"
    )
    return (
      <div className="container my-3">
        <h2>NewsRoom - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description.slice(0, 80) + "..." : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>


        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 18)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    );
  }
}

export default News;
