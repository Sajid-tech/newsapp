import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 3,
      articles: [
        {
          source: {
            id: "independent",
            name: "Independent",
          },
          author: "Lawrence Ostlere",
          title:
            "England vs Australia LIVE: Cricket scorecard and Ashes updates from the first Test at Edgbaston",
          description:
            "Who will draw first blood in the 2023 Ashes? Follow latest updates as England and Australia go head to head on day one at Edgbaston",
          url: "http://www.independent.co.uk/sport/cricket/ashes-score-live-england-australia-cricket-b2358752.html",
          urlToImage:
            "https://static.independent.co.uk/2023/06/16/10/newFile-1.jpg?quality=75&width=1200&auto=webp",
          publishedAt: "2023-06-16T10:02:54Z",
          content:
            "England and Australia begin their fight for the Ashes today as the mens series gets under way at Edgbaston.\r\nAustralia utterly dominated their visitors when the two sides last met Down Under, when Mi… [+5156 chars]",
        },
        {
          source: {
            id: "espn-cric-info",
            name: "ESPN Cric Info",
          },
          author: null,
          title:
            "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          description:
            "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          publishedAt: "2020-04-27T11:41:47Z",
          content:
            "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
          source: {
            id: "espn-cric-info",
            name: "ESPN Cric Info",
          },
          author: null,
          title:
            "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          description:
            "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          publishedAt: "2020-03-30T15:26:05Z",
          content:
            "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
        },
      ],
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from News Components");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsRoom - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDesc"
              imageUrl="https://static.independent.co.uk/2023/06/16/10/newFile-1.jpg?quality=75&width=1200&auto=webp"
              newUrl="todo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
