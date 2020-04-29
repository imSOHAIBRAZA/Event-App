import React, { useEffect, Fragment } from 'react';
import HeaderMenu from '../Header/HeaderMenu'

const MarketplaceSpecs = (props) => {

	

	console.log('EVENT DETAILS++>',props.eventData[0])
	
	const {created_at,date,description,id,thumbnail,title} = props.eventData[0]
	// created_at: "2019-12-12 14:48:50"
	// date: "2019-12-17 05:00:00"
	// deleted_at: null
	// description: "NBA Regular Season 2019/20"
	// id: 4
	// thumbnail: "vatud3h2b0g4wwokk8.jpg"
	// title: "Rockets Vs Spurs"
	// type_fk: 2
	// updated_at: null

	return (




		<div className="col-lg-12 p-0">
			<div className="light-gray-back pb-120">
				<div className="custom-container">
					<div className="row pt-5">
						<div className="col-lg-9 pr-0 large-padd-0">
							
							<div className="row row-eq-height mb-3">
								<div className="col-lg-8 pl-0 padding-right-zero">
									<div className="border-arround3 p-3 h-100">
										<div className="">
											<div className="d-inline-block">
												<img src="../imagesWeb/add-fvrt.png" alt="favorite" />
											</div>
											<div className="d-inline-block">
									<span className="fs-24 fw-bold m-0 color-blue pr-2"> { title} </span>
									<span className="fs-14 gray6">{date}</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 p-0 padding-right-zero">
									<div className="border-arround h-100 pt-1 pl-2 pr-4 pb-4 mb-1">
										<div className="clearfix">
											<div className="float-left relative">
												{/* {manager_avatar.length > 0 ?
													<img
														src={
															manager_avatar
															// process.env.PUBLIC_URL + 'images/owner-image.png'
														}
														alt="icon"
														style={{ borderRadius: '50%', height: '50px', width: '50px' }}
														className="w-30px"
													/> :
													<img
														src={
															// manager_avatar
															process.env.PUBLIC_URL + 'images/owner-image.png'
														}
														alt="icon"
														style={{ borderRadius: '50%', height: '50px', width: '50px' }}
														className="w-30px"
													/>
												} */}
												<img src="../imagesWeb/msg.png" alt="icon" className="lr-0 w-10px" />
											</div>
											<div className="float-left pl-1 pt-1 sm-float-none padding-zero">
												<strong>Created at</strong>
												{/* <h3 className="m-0 fs-14 fw-bold fs-lh">Antoinette Darcy</h3> */}
												<p className="m-0 fs-12">{created_at}</p>
											</div>
											<div className="float-right pt-2 sm-float-none">
												{/* <img src="../imagesWeb/blue-envelope.png" alt="envelope" /> */}
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
									<img src={`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${thumbnail}`} alt="gallery image" style={{    height: 'inherit'}}className=" w-100" />

									</div>
								</div>
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
				</div>
			</div>
		</div>



	)
}

export default MarketplaceSpecs;