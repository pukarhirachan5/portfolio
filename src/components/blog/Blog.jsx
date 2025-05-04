import React from 'react'
import './blog.css'
import Image1 from '../../assets/blog-1.svg'
import Image2 from '../../assets/blog-2.svg'
import Image3 from '../../assets/blog-3.svg'

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
        <h2 className="section_title">Latest Posts</h2>

        <div className="blog_container grid">

          <div className="blog_card">
            <div className="blog_thumbnail">
                <a href="#"><span className="blog_category">Reviews</span></a>
                <a href="#"><img src={Image1} alt="" className='blog_img' /></a>
            </div>
            <div className="blog_details">
                <h3 className="blog_title">Best App Development</h3>
                <div className="blog_meta">
                    <span>01 april, 2022</span>
                    <span className="blog_dot">.</span>
                    <span>Pukar Hirachan</span>
                </div>
            </div>
          </div>  

          <div className="blog_card">
            <div className="blog_thumbnail">
                <a href="#"><span className="blog_category">Reviews</span></a>
                <a href="#"><img src={Image2} alt="" className='blog_img' /></a>
            </div>
            <div className="blog_details">
                <h3 className="blog_title">Best App Development</h3>
                <div className="blog_meta">
                    <span>01 april, 2022</span>
                    <span className="blog_dot">.</span>
                    <span>Pukar Hirachan</span>
                </div>
            </div>
          </div>  

          <div className="blog_card">
            <div className="blog_thumbnail">
                <a href="#"><span className="blog_category">Reviews</span></a>
                <a href="#"><img src={Image3} alt="" className='blog_img' /></a>
            </div>
            <div className="blog_details">
                <h3 className="blog_title">Best App Development</h3>
                <div className="blog_meta">
                    <span>01 april, 2022</span>
                    <span className="blog_dot">.</span>
                    <span>Pukar Hirachan</span>
                </div>
            </div>
          </div>  


        </div>
    </section>
  )
}

export default Blog