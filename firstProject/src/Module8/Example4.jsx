import React,{useState,useEffect} from 'react'

function Example4() {
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
    useEffect(()=>{
        //side effect for api fetching
        async function Fetchdata(){
            try{
               let response=await fetch('https://fakestoreapi.com/products')
               let res=await response.json()
               console.log(res)
               setData(res)
               setError(false)

            }
            catch(error){
                console.log("error while fetching data")
                setError(true)

            }
        }
        Fetchdata()

    },[])
  return (
    <div>
        <h1>Example for Api fetching using useeffect</h1>
        {/* {data?(<div>
            <h4>Data is fetched succesfully</h4>
            <pre>{JSON.stringify(data,null,5)}</pre>
                </div>
            ):(<p>data is loading..............</p>)} */}
            {error&&<p>Error while fetching</p>}
            {!error&&data&&(
                <ul>
                    {
                        data.map((ele)=>{
                            return(
                                <li keys={ele.id}>
                                    <h2>ID:{ele.id}</h2>
                                <h3>Title:{ele.title}</h3>
                                <p>Description:{ele.description}</p>
                                <h5>Price:{ele.price}</h5>
                                </li>
                            )
                        })
                    }
                </ul>
            )}

      
    </div>
  )
}

export default Example4
