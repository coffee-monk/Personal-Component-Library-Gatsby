import React, { Component } from "react"

import GridTemplateStyles from "../components/grid-template-areas.css"

export class GridTemplateAreas extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>My Website</h1>
        </header>
        <section className="content">
          <h3>Welcome To My Site</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            suscipit reprehenderit aperiam repudiandae voluptatibus, expedita ex
            temporibus eos et mollitia velit vel molestias sint dolore at
            doloremque neque minima optio ad tempore quisquam perferendis esse
            non. Aliquam illum doloremque architecto! Rem voluptas at sunt sed
            enim eius laborum dolores quaerat?
          </p>
        </section>
        <aside className="sidebar">
          <h3>Contact Us</h3>
          <ul>
            <li>Some Company</li>
            <li>50 Main st, Boston MA</li>
            <li>something@something.com</li>
            <li>555-555-5555</li>
          </ul>
        </aside>
        <div className="box-1">
          <h3>Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quisquam at veritatis a labore quod illo dolorem fugiat quas
            repellendus omnis odio eligendi ab, dolor necessitatibus, saepe
            aliquid quaerat aperiam.
          </p>
        </div>
        <div className="box-2">
          <h3>Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quisquam at veritatis a labore quod illo dolorem fugiat quas
            repellendus omnis odio eligendi ab, dolor necessitatibus, saepe
            aliquid quaerat aperiam.
          </p>
        </div>
        <div className="box-3">
          <h3>Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quisquam at veritatis a labore quod illo dolorem fugiat quas
            repellendus omnis odio eligendi ab, dolor necessitatibus, saepe
            aliquid quaerat aperiam.
          </p>
        </div>
        <div className="box-4">
          <h3>Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            quisquam at veritatis a labore quod illo dolorem fugiat quas
            repellendus omnis odio eligendi ab, dolor necessitatibus, saepe
            aliquid quaerat aperiam.
          </p>
        </div>
        <footer className="footer">
          <p>Copyright &copy; 2019</p>
        </footer>
      </div>
    )
  }
}

export default GridTemplateAreas
