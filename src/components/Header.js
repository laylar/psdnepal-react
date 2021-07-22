import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header" className="alt">
				<h1 id="logo"><a href="index.html"> PSD <span>Partnership for Sustainable Development</span></a></h1>
				<nav id="nav">
					<ul>
						<li className="current"><a href="index.html">Welcome</a></li>
						<li className="submenu">
							<a href="#">Programs</a>
							<ul>
								<li><a href="#">Summer Projects</a></li>
								<li><a href="#">Research</a></li>
								<li className="submenu">
									<a href="training-and-internships.html">+ Training and Internships</a>
									<ul>
										<li><a href="#">Professional Training</a></li>
										<li><a href="#">Medical Elective</a></li>
										<li><a href="#">Teacher Training</a></li>
										<li><a href="#">Resource Training</a></li>
										<li><a href="#">Internship</a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#">+ Volunteering</a>
									<ul>
										<li><a href="#">Long Term Volunteering</a></li>
										<li><a href="#">Eco Volunteering</a></li>
									</ul>
								</li>
								<li className="submenu">
									<a href="#">+ Exchanges</a>
									<ul>
										<li><a href="#">Student Exchanges</a></li>
										<li><a href="#">Medical General Program</a></li>
										<li><a href="#">Entrepreneur Exchanges</a></li>
									</ul>
								</li>
							</ul>
							<li className="submenu">
								<a href="#">About Us</a>
								<ul>
									<li><a href="news.html">News</a></li>
									<li><a href="#">Our Team</a></li>
									<li><a href="#">Our Story</a></li>
								</ul>
							</li>
						</li>
						<li><a href="contact.html">Contact</a></li>
						<li><a href="#" className="button primary donate-button">Donate</a></li>
					</ul>
					
				</nav>
			</header>
      </div>
      )
    }
  }
  
  export default Header;