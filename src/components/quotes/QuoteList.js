import React from 'react';
import {useHistory,useLocation} from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


// sort func
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes,isSortingAscending)
  const changeSortingHandler = () =>{
    // location route url
    history.push({
      pathname:location.pathname,
      search:`?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    })
     
  }
  return (
    <React.Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default QuoteList;
