import React from "react";
import BlogScreen from "../Components/blog/BlogScreen";
import BreadcrumScreen from "../Components/breadcrum/BreadcrumScreen";


const Blog = () => {
    return (
        <>
            <BreadcrumScreen url="Blog" />
            <BlogScreen />
        </>

    )
}

export default Blog