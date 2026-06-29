import React, { useState, useEffect } from 'react'

function Example5() {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const result = await response.json()

        setData(result)
        setError(false)
      } catch (error) {
        console.log("Error while fetching data")
        setError(true)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>API Fetching using useEffect</h1>

      {error && <p>Error while fetching data</p>}

      {!error && data.length === 0 && <p>Loading...</p>}

      {!error && data.length > 0 && (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Count</th>
            </tr>
          </thead>

          <tbody>
            {data.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.title.substring(0,29)}</td>
                <td>{ele.description}</td>
                <td>{ele.category}</td>
                <td>${ele.price}</td>
                <td>
                  <img
                    src={ele.image}
                    alt={ele.title}
                    width="60"
                    height="60"
                  />
                </td>
                <td>
                  {ele.rating.rate}  </td>
                  <td>{ele.rating.count}</td> 
               
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Example5