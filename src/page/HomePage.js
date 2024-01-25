import React from 'react';
import { useState } from 'react';
import Spinner from '../components/Spinner';
import Products from '../components/Products';

const HomePage = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        
        setLoading(true);
        try {
            let response = await fetch(API_URL);
            let data = await response.json();
            setPosts(data);
        } 
        catch(error) {
            console.log("API Fatt Gya");
            setPosts([]);
        }
        setLoading(false);
    }

    useState( () => {
        fetchData();
    }, []);

  return (
    <div className='w-3/4 mx-auto'>
        {
            loading ? (<Spinner/>) : 
            
                posts.length > 0 ? (
                    <div  className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-9 py-5'>
                        {
                            posts.map( (post) => {
                                return (
                                    <Products post={post} key={post.id}/>
                                )
                            })
                        }
                    </div>
                ) : (<div>No Data Found</div>)
            
            
        }
    </div>
  )
}

export default HomePage;