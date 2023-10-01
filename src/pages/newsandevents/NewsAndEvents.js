import React from 'react'
import NewsEventsScreen from "../../Components/newsandevents/NewsEventsScreen";
import BreadcrumScreen from "../../Components/breadcrum/BreadcrumScreen";

const NewsAndEvents = () => {
  return (
    <>
    <BreadcrumScreen url="News & Evets"/>
    <NewsEventsScreen />
    </>
  )
}

export default NewsAndEvents