import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl"> 
                We're delighted to have you <span className="text-pink-500">Here! :)</span>
                </h1>
                <p className="mt-12">
                Explore a diverse range of courses tailored to your interests and goals. 
                From technical skills to creative pursuits, 
                our curated selection offers something for everyone. 
                Whether you're seeking professional development or 
                personal enrichment, you'll find engaging and informative 
                courses to help you learn and grow.Our courses are designed by 
                industry experts, 
                providing you with high-quality education and practical knowledge.
                </p>
                <Link to="/">
                 <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                     Back
                 </button>
                </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=>(
                   <Cards key={item.id} item={item}/> 
                ))  
            }
        </div>
    </div>
    </>
  )
}

export default Course;