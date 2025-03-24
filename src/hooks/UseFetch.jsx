import React, { useEffect ,useState} from 'react'

const UseFetch = (apiPath,quarySeach="") => {
    const [data, setData] = useState([])
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=602cd1313e12fc966a43045affd4e606&language=en-US&page=1&query=${quarySeach}`
    useEffect(() => {
        async function fatchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
          }
          fatchMovies()
    
     
    }, [url])
    
  return {data}
   
}

export default UseFetch
