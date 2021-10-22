import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Home() {

    const [results, setresults] = useState([])
    let [page, setpage] = useState(1)
  
    console.log('global',page)

    async function getApi(p){
        let {data} = await axios(`https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${p}`)
        setresults(data.items)      
    }

   function nav(e){
     
        if(e.target.classList.contains('nxt')){
            if (page===34)
            {
                document.querySelector('.nxt').classList.add('disabled')
                setpage(page)
                return page
            }
            document.querySelector('.pre').classList.remove('disabled')
            document.querySelector('.nxt').classList.remove('disabled')
            setpage(page++)
            return page
        }

        if(e.target.classList.contains('pre')){
            if (page===1)
            {
                document.querySelector('.pre').classList.add('disabled')
                setpage(page)
                return page
            }
            document.querySelector('.pre').classList.remove('disabled')
            document.querySelector('.nxt').classList.remove('disabled')
            setpage(page--)
            return page
        }
   }

  
    useEffect(() => {
        console.log(page)
        getApi(page)  
    }, [page])
   
    return (
        <div className='container pt-5'>
            <h1 className=' text-center customColor'>Top Rated Github repos</h1>
            <div className=" my-5">
                {results.map((repo)=> <div key={repo.id} className="row align-items-center my-4 ms-md-3 pb-4 border-bottom">
                    <div className='col-1 me-3'>
                    <img className='img-fluid' src={repo.owner.avatar_url} alt="" /></div>
                    <div className="col-10 ">
                        <h2 className='h4 mb-2 text-info'>{repo.name}</h2>
                        <p className='ps-2 pt-2 mb-0 fs-8 '>{repo.description} </p>
                        <span className='d-inline-block ps-2 '><u>Language:</u> {repo.language}</span>
                        <span className='d-inline-block p-1 border  rounded mx-1'>{repo.stargazers_count} <i className="fas fa-star"></i> </span>
                         <span className='d-inline-block p-1 border rounded '> {repo.open_issues} issues</span>
                        <span className=''> submitted {Math.floor((new Date().getTime()- new Date(`${repo.updated_at}`).getTime())/ (1000 * 3600 * 24))} days ago by {repo.owner.login}</span>
                        {/* <p className='p-2 fs-8'>  </p> */}
                    </div>
                </div> )}
            </div>

            <div className='d-flex justify-content-center align-items-center mb-4'>
                <button onClick={nav} className='btn btn-warning me-4 pre'>Previous</button>
                <span>{page}</span>
                <button onClick={nav} className='btn btn-warning ms-4 nxt'>Next</button>
            </div>
        </div>
    )
}
