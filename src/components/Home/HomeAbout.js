import React,{Fragment} from "react";

const HomeAbout = () => {
  return (
    <Fragment>
    <div className="our-company">
		<div className="custom-container">
			<div className="row">
				<div className="col-md-6">
					<div className="our-company-img"><img src="imagesWeb/our-company-img.jpg" alt="our-company" className="img-fluid"/></div>
				</div>			
				<div className="col-md-6">
					<div className="company-content">
						<h3>About our company</h3>
						<p>Bricktrade is an independent investment management firm focused on emerging markets. Our capabilities span from deal origination and structuring to legal, technical and financial due diligence, trading and risk mitigation.</p>
						<div className="learn-share">
							<span className="learn-mo"><a href="#">LEARN MORE</a></span><span className="social-share">SHARE &nbsp;&nbsp;<a href="#"><i className="fa fa-facebook"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><i className="fa fa-twitter"></i></a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="company-logo">
		<div className="custom-container">
			<div className="col-12 zero-padd">
			<ul>
				<li><img src="imagesWeb/c-logo1.png" alt="logo" className="img-fluid"/></li>
				<li><img src="imagesWeb/c-logo2.png" alt="logo" className="img-fluid"/></li>				
				<li><img src="imagesWeb/c-logo3.png" alt="logo" className="img-fluid"/></li>
				<li><img src="imagesWeb/c-logo4.png" alt="logo" className="img-fluid"/></li>
				<li><img src="imagesWeb/c-logo5.png" alt="logo" className="img-fluid"/></li>
				<li><img src="imagesWeb/c-logo6.png" alt="logo" className="img-fluid"/></li>
				<li><img src="imagesWeb/c-logo7.png" alt="logo" className="img-fluid"/></li>
			</ul>
			</div>
		</div>
	</div>
  </Fragment>
  );
};

export default HomeAbout;
