import { useState, useEffect } from 'react';
import { getNews } from '../APIServices';
import { Loader } from '../components/Loader';
import { Row, Col } from 'react-bootstrap';

export const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);

  //fetch all news
  useEffect(() => {
    getNews().then((res) => {
      setNews(res.response.docs);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="news-container" style={{ overflowY: 'auto' }}>
      <Row>
        <Col>
          <h1>Latest News From NY Times</h1>
        </Col>
      </Row>
      {news &&
        news.map((article) => (
          <Row key={article.headline.main} style={{ padding: '20px 0 20px' }}>
            <Col>
              <h5>{article.headline.main}</h5>
              <p>{article.snippet}</p>
              <a
                href={article.web_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read full article
              </a>
            </Col>
          </Row>
        ))}
    </div>
  );
};
