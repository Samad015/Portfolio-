import React from "react";
import {Fade} from "react-reveal";
import {blogSection} from "../../portfolio";

export default function Blogs() {
  if (!blogSection.display) return null;

  return (
    <Fade bottom duration={450} distance="16px">
      <section className="main">
        <h1 className="heading">Writing</h1>
        {blogSection.blogs.map(blog => (
          <article className="project-entry" key={blog.url}>
            <div>
              <h2>
                <a href={blog.url}>{blog.title}</a>
              </h2>
              <p>{blog.description}</p>
            </div>
          </article>
        ))}
      </section>
    </Fade>
  );
}
