import { useState, useMemo } from 'react'
import useApi from '../hooks/useApi'

function Dashboard() {
  const { loading, response, error, callApi } = useApi();
  const [searchText, setSearchText] = useState('');

  async function handleClick() {
    callApi('https://dummyjson.com/users');
  }
  
  function debounce(func, delay) {
    let timer;

    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(()=>func.apply(this, args), delay);
    }
  }

  const debouncedSearch = debounce(searchText, 300);

  const filteredData = useMemo(() => {
    if (!searchText) return response?.users;

    return response?.users?.filter((user) => user?.firstName.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText, response])

  return (
    <>
      <div>Dashboard Page!</div>
      <button onClick={handleClick}>FetchData</button>
      {/* {console.log(loading)}
      {console.log(response)}
      {console.log(error)} */}
      {loading && <div>Loading...</div>}
      {!loading && error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error &&
        <div>
          <input type='search' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
          {filteredData &&
            <ul>
              {
                filteredData?.map((user) =>
                  <li key={user.id}>{user?.firstName} {user?.lastname}</li>
                )
              }
            </ul>
          }
        </div>
      }
    </>
  )
}

export default Dashboard