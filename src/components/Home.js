import React, { Component } from 'react';
import psdStatistics from '../images/psdstatistics-[1280x680].jpg' 

class Home extends Component {
  render() {
    return (
      <div>
        <section id="banner">

{/* 
  ".inner" is set up as an inline-block so it automatically expands
  in both directions to fit whatever's inside it. This means it won't
  automatically wrap lines, so be sure to use line breaks where
  appropriate (<br />).
 */}
<div className="inner">

  <header>
    <h2>PSD</h2>
  </header>
  <p><strong>Together</strong> we support
  <br />
   social transformation, development,
  <br />
  and empowerment in communities in Nepal.</p>
  <footer>
    <ul className="buttons stacked">
      <li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
    </ul>
  </footer>

</div>

</section>
  {/*  Main */}
				<article id="main">

					<header className="special container">
						<span className="icon solid fa-child" aria-hidden="true"></span>
						<h2>PSD <strong>engages</strong> with local and overseas volunteers
						<br />
						to develop and empower 
						<br />rural communities in Nepal.</h2>
						<p>Through <strong>community based</strong> projects that strengthen health, education, and environment sectors, <br />we <strong>lift up</strong> vulnerable communities.</p>
					</header>

					{/* One */}
						<section className="wrapper style2 container special-alt">
							<div className="row gtr-50">
								<div className="col-8 col-12-narrower">

									<header>
										<h2>Your donation or volunteer effort will help us build a stronger Nepal.</h2>
									</header>
									<a className="image featured"><img src={psdStatistics} alt="PSD statistics" /></a>
									<p></p>
									<footer>
										<ul className="buttons">
											<li><a href="news.html" className="button">Find Out How</a></li>
										</ul>
									</footer>

								</div>
								<div className="col-4 col-12-narrower imp-narrower">

									<ul className="featured-icons">
										<li><span className="icon solid fa-leaf" aria-hidden="true"><span className="label">Leaf icon</span></span></li>
										<li><span className="icon solid fa-graduation-cap" aria-hidden="true"><span className="label">Graduation cap icon</span></span></li>
										<li><span className="icon solid fa-laptop"><span className="label">Laptop icon</span></span></li>
										<li><span className="icon solid fa-handshake"><span className="label">Handshake icon</span></span></li>
										<li><span className="icon solid fa-tint" aria-hidden="true"><span className="label">Drop of water icon</span></span></li>
										<li><span className="icon solid fa-medkit" aria-hidden="true"><span className="label">Medkit icon</span></span></li>
									</ul>

								</div>
							</div>
						</section>

					{/* Two */}
						<section className="wrapper style1 container special">
							<div className="row">
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon solid featured fa-check"></span>
										<header>
											<h3>This is Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon solid featured fa-check"></span>
										<header>
											<h3>Also Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
								<div className="col-4 col-12-narrower">

									<section>
										<span className="icon solid featured fa-check"></span>
										<header>
											<h3>Probably Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
							</div>
						</section>

					{/* Three */}
						<section className="wrapper style3 container special">

							<header className="major">
								<h2>Check out what we've been working on</h2>
							</header>

							<div className="row">
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
										<header>
											<h3>Recycling and Upcycling</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
										<header>
											<h3>Education</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>
							<div className="row">
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
										<header>
											<h3>Medicine</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="col-6 col-12-narrower">

									<section>
										<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
										<header>
											<h3>Exchange Programs</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>

							<footer className="major">
								<ul className="buttons">
									<li><a href="#" className="button">See More</a></li>
								</ul>
							</footer>

						</section>

				</article>

			{/* CTA */}
				<section id="cta">

					<header>
						<h2>Ready to do <strong>something</strong>?</h2>
						<p>A great tomorrow starts today.</p>
					</header>
					<footer>
						<ul className="buttons">
							<li><a href="#" className="button primary">Donate</a></li>
							<li><a href="contact.html" className="button">Reach Out</a></li>
						</ul>
					</footer>

				</section>
      </div>
    )
  }
}

export default Home;