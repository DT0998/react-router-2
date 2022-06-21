import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
    {
        id:'q1',
        author:'Max',
        text:'Learning react is fun',
    },
    {
        id:'q2',
        author:'Maximilian',
        text:'Learning react is great',
    }
]

function AllQuotes() {
    return ( 
        <QuoteList quotes={DUMMY_QUOTES}/>
     );
}

export default AllQuotes;