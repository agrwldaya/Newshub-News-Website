import React from 'react';
import { useSelector } from "react-redux"
const NewsItem = ({ item }) => {
  const BgData = useSelector((store) => store.BgStatus);
  //  console.log(BgData)
  return (
    <div className="d-flex justify-content-center"style={{ width: '50vh' }}>
      <div className="m-3">
        <div className="card" style={{backgroundColor:`${BgData.imgBg}`}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{item.source.name}</span>
          {item.urlToImage?<img src={item.urlToImage ? item.urlToImage : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17001/production/_132290249_gettyimages-1926577344.jpg"} className="card-img-top" alt="..." />:<></>}
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">Read More</a>
            <p className="card-text"><small className="text-muted">{new Date(item.publishedAt).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
