import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

const stylesz = {
  listStyle: "none",
  backgroundColor: "#bc7373",
  padding: "20px",
  marginBottom: "10px",
};
const main = {
  padding: "50px",
};

function Scroll() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: "harry", page: pageNumber, count: 10 },
    }).then((res) => {
      setBooks((prevBooks) => {
        return [
          ...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)]),
        ]; 
      });
      setHasMore(res.data.docs.length > 0);
      setLoading(false);
    });
  }, [pageNumber]);

  let pageEnd = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(pageEnd.current);
  }, [loading]);

  const loadMore = () => {
    setPageNumber((prev) => prev + 1);
  };

  return (
    <div>
      <ul style={main}>
        {books.map((item, index) => {
          //   if (books.length === index + 1) {
          return (
            <li style={stylesz} key={item}>
              {item}
            </li>
          );
          //   } else {
          //     <li style={stylesz} key={item}>
          //       {item}vv
          //     </li>;
          //   }
        })}
      </ul>
      <span ref={pageEnd} style={{ display: "flex", justifyContent: "center" }}>
        {loading && "loading..."}
      </span>
    </div>
  );
}

export default Scroll;
