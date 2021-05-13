import { useState } from 'react';
import Pagination from 'react-js-pagination';

export const ArticleList = ({ articleList }) => {
  const [currentPagination, setPagination] = useState({
    currentPage: 1,
    articlesPerPage: 8,
  });

  const { currentPage, articlesPerPage } = currentPagination;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articleList.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );
  console.log('currentPagination',currentPagination)
  console.log('indexOfLastArticle',indexOfLastArticle)
  console.log('indexOfFirstArticle',indexOfFirstArticle)
  console.log('currentArticles',currentArticles)
  console.log('articleList',articleList)

  return (
    <>
      <h3 className="py-4 font-medium text-lg">Articles</h3>
      <div className="grid grid-cols-1 gap-4">
      {currentArticles.map(({ feed, ...oneArticle }, index) => (
          <p key={oneArticle.title + index}>{oneArticle.title}</p>
        ))}
        <Pagination
          innerClass="rounded py-2 px-2 flex"
          itemClass="px-2"
          activePage={currentPage}
          itemsCountPerPage={articlesPerPage}
          totalItemsCount={articleList.length}
          pageRangeDisplayed={5}
          onChange={(clickedNumber) => {
            setPagination((currState) => ({
              ...currState,
              currentPage: parseInt(clickedNumber),
            }));
          }}
        />
      </div>
    </>
  );
};