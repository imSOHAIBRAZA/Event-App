import React, { useEffect, Fragment } from 'react';
import HeaderMenu from '../Header/HeaderMenu'
import List from '../Views/List/List.js';
import addfvrt from '../../images/add-fvrt.png'

const MarketplaceSpecs = (props) => {




	const { created_at, date, description, id, thumbnail, title, all_broadcasts } = props.eventData.data[0]



	return (




		<div className="col-lg-12 p-0">
			<div className="light-gray-back pb-120">
				<div className="custom-container">
					<div className="row pt-5">
						<div className="col-lg-9 pr-0 large-padd-0">

							<div className="row row-eq-height mb-3">
								<div className="col-lg-12 pl-0 padding-right-zero" style={{paddingRight: '0px'}}>
									<div className="border-arround3 p-3 h-100">
										<div className="">
											<div className="d-inline-block">
												<img src={addfvrt} alt="favorite" />
											</div>
											<div className="d-inline-block">
												<span className="fs-24 fw-bold m-0 color-blue pr-2"> {title} </span>
												<span className="fs-14 gray6">{date}</span>
											</div>
										</div>
									</div>
								</div>

							</div>


							<div className="row mb-3">
								<div className="col-lg-9 pl-0 md-size-mb-16 md-size-p-0">
									<div className="border-arround4 white p-4 h-100">
										<div className="mb-3 pl-3">
											<h3 className="fw-bold fs-24 m-0">Event Description</h3>
										</div>
										<div className="row">
											<div className="col-lg-5">
												<div className="benefits">
													<ul>
														<li>{description}</li>
														{/* <li>Greater liquidity & flexibility</li> */}
													</ul>
												</div>
											</div>
											{/* <div className="col-lg-3">
												<div className="benefits">
													<ul>
														<li>Driver productivity</li>
														<li>Cost savings</li>
													</ul>
												</div>
											</div> */}
											{/* <div className="col-lg-4">
												<div className="benefits">
													<ul>
														<li>Downtime management</li>
														<li>Fleet safety</li>
													</ul>
												</div>
											</div> */}
										</div>
									</div>
								</div>

								<div className="col-lg-3 p-0">
									<div className="border-arround h-100">
										<img src={`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${thumbnail}`} alt="gallery image" style={{ height: 'inherit' }} className=" w-100" />

									</div>
								</div>
							</div>

							<div className="text-left" style={{ padding: '30px', marginTop: '20px', backgroundColor: '#FF5722' }}>
								{/* <form className="text-center center"> */}
								<div className="clearfix">
									<div className="fancy-input float-left w-25 position-relative">
										<input type="text" name="" placeholder="Search Place" />
										<button className="btn-search">
											<i className="fa fa-search" aria-hidden="true"></i>
										</button>
									</div>


								</div>
								{/* </form> */}
							</div>

							{/* <div className="row pb-40">
								<div className="col-lg-12 p-0">
									<div className="border-arround p-4">
										<h3 className="inner-head mb-4">Gallery & Marketing Collateral</h3>
										<div className="row row-eq-height">
											<div className="col-lg-9 col-md-9 pl-0 xs-padding-0">
												<div id="video-container">
													<img src={`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${thumbnail}`} controls="" className="h-100">
														
													</img>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 p-0">
												<div className="imageWrap">
													<img src="../imagesWeb/gallery-image2.png" alt="gallery image" className="mb-3 w-100" />
												</div>
												<div className="imageWrap">
													<img src="../imagesWeb/gallery-image3.png" alt="gallery image" className="mb-3 w-100" />
												</div>
												<div className="imageWrap">
													<img src="../imagesWeb/gallery-image4.png" alt="gallery image" className="w-100" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> */}
							<div className="row">
								<div className="col-lg-12 p-0 md-size-mb-16">
									<div className="border-arround2 p-4">
										{/* <div className="clearfix d-flex block-d align-items-center social-block">
											<div className="float-left w-30">
												<h3 className="inner-head m-0">Share or refer to a friend</h3>
											</div>
											<div className="float-left text-right w-30">
												<form>
													<div className="mail-to">
														<input type="text" name="" placeholder="Email" />
														<button className="btn-mailto"><img src="../imagesWeb/send-image.png" /></button>
													</div>
												</form>
											</div>
											<div className="float-right text-right w-40">
												<h3 className="inner-head m-0 d-inline-block">Share on social media</h3>
												<i className="fa fa-twitter d-inline-block fs-22 pl-2" aria-hidden="true"></i>
												<i className="fa fa-facebook d-inline-block fs-22 pl-2" aria-hidden="true"></i>
												<i className="fa fa-phone d-inline-block fs-22 pl-2" aria-hidden="true"></i>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 pr-0 large-padd-0" >
							<div>
								<h5 style={{ background: '#ff6a00', borderRadius: '6px', color: 'white', marginRight: '10px', padding: '15px' }} >
									Today's games
								</h5>
							</div>

							<div className="games" >
							Afghanistan Vs West Indies
							10/20/2019 10:20:00
							</div>

							<div className="games" >
							Afghanistan Vs West Indies
							10/20/2019 10:20:00
							</div>

							<div className="games" >
							Afghanistan Vs West Indies
							10/20/2019 10:20:00
							</div>

							<div>
						</div>



						</div>

						{/* <div className="col-lg-3 md-size-p-0">
							<div className="right-section border-arround2 mb-4">
								<div className="p-3">
									<div className="">
										<h3 className="fw-bold fs-18 mb-3 gray4">How can we help you?</h3>
										<p className="mb-3 fs-14 gray5">Have something to discuss or want to solve your some query?</p>
										<p className="m-0"><span>Join us on </span><span className="color-blue fw-bold pl-3">Brick360</span></p>
									</div>
								</div>
							</div>
							<div className="right-section border-arround2">
								<div className="p-3 mb-3">
									<div className="text-center">
										<img src="../imagesWeb/invest-image1.png" className="img-fluid" alt="invest image" />
									</div>
									<div className="pt-4">
										<h3 className="fs-18 mb-3 fw-bold gray4">Refinance a commercial mortgage </h3>
										<div className="fancy-btn text-center">
											<button className="btn btn-details">INVEST NOW</button>
										</div>
									</div>
								</div>
							</div>
							<div className="text-right pt-4 pb-4">
								<a href="#" className="d-inline-block fs-18 purple pr-2">Add a feedback</a>
								<i className="fa fa-commenting-o d-inline-block" aria-hidden="true"></i>
							</div>
							<div className="right-section border-arround2">
								<div className="p-3 mb-3">
									<div className="text-center">
										<img src="../imagesWeb/invest-image2.png" className="img-fluid" alt="invest image" />
									</div>
									<div className="pt-4">
										<h3 className="fs-18 mb-3 fw-bold gray4">How to advertise with us?</h3>
										<div className="fancy-btn text-center">
											<button className="btn btn-details">INVEST NOW</button>
										</div>
									</div>
								</div>
							</div>
							<div className="text-right pt-4 pb-4">
								<a href="#" className="d-inline-block fs-18 purple pr-2">Add a feedback</a>
								<i className="fa fa-commenting-o d-inline-block" aria-hidden="true"></i>
							</div>
						</div> */}


					</div>
					{all_broadcasts.length ? <List data={all_broadcasts} /> : <h3 className="center text-center" >No BRODCAST EVENT</h3>}
				</div>
			</div>
		</div>



	)
}

export default MarketplaceSpecs;