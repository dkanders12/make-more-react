import React from "react";
import { useGetQuery } from "../Fetch/HygraphFetching";
import { getAllBlogs } from "../Hygraph/Hygraphgql";
import { NavLink } from "react-router-dom";
import "./Hygraph.scss";

const Hygraph = () => {
  const { data, isLoading, error } = useGetQuery(getAllBlogs, `games`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="main">
      <h1>Gallery Posts</h1>
      <div id="grid" className="grid-container">
        {data.galleries.map((gallery, index) => (
          <article id="Container" key={gallery.id} className="grid-item">
            <div>
              <h2>{gallery.title}</h2>
              <p className="display">{gallery.underRubrik}</p>
              <p className="red">{new Date(gallery.time).toLocaleString()}</p>
              <NavLink to={`/gallery/${gallery.id}`}>Læs mere</NavLink>
            </div>
            <img src={gallery.img.url} alt={gallery.img.fileName} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hygraph;
