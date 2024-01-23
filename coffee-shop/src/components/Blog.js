

const Blog =()=>{
    return <section className="blog section" id="blog">
    <div className="blog__container container">
      <h2 className="section__title">
      Our blogs cover coffee with <br />
      insightful topics.
      </h2>

      <div className="blog__content grid">
        <article className="blog__card">
          <div className="blog__image">
            <img src="./media/blog1.jpg" alt="" class="blog__img" />
            <a href="https://www.masterclass.com/articles/how-to-grow-coffee" className="blog__button">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
            <div className="blog__stats">
              <div className="blog__reaction">
                <i className="bx bx-comment"></i>
                <span>31</span>
              </div>
              <div className="blog__reaction">
                <i className="bx bx-show"></i>
                <span>76,5k</span>
              </div>
            </div>
          </div>

          <div className="blog__data">
            <h2 className="blog__title">How to grow coffee beans</h2>
            <p className="blog__description">
            The blogs about coffee will provide you with valuable information on how to grow coffee 
            beans to high standards.
            </p>
          </div>
        </article>
        <article className="blog__card">
          <div className="blog__image">
            <img src="./media/blog2.jpg" alt="" class="blog__img" />
            <a href="https://perfectdailygrind.com/2017/11/making-coffee-at-home-whats-the-best-beginner-brewing-method/#:~:text=%E2%80%9CYou%20should%20start%20brewing%20your,temperature%20and%20experiment%20with%20that.%E2%80%9D" className="blog__button">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
            <div className="blog__stats">
              <div className="blog__reaction">
                <i className="bx bx-comment"></i>
                <span>96</span>
              </div>
              <div className="blog__reaction">
                <i className="bx bx-show"></i>
                <span>356,7k</span>
              </div>
            </div>
          </div>

          <div className="blog__data">
            <h2 className="blog__title">How to make coffee for beginner</h2>
            <p className="blog__description">
            The blogs about coffee will help you learn a lot about how to make
             coffee in a great coffee setting.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

}

export default Blog;