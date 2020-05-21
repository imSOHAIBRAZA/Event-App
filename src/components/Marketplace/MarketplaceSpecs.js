import React from 'react';
import List from '../Views/List/List.js';
import addfvrt from '../../images/add-fvrt.png'
import moment from 'moment';

const MarketplaceSpecs = (props) => {




	const { date, description, thumbnail, title, all_broadcasts } = props.eventData.data[0]



	return (




		<div className="col-lg-12 p-0">
			<div className="light-gray-back pb-120">
				<div className="custom-container">
					<div className="row pt-5 sticky" >
						<div className="col-lg-9 pr-0 large-padd-0">

							<div className="row row-eq-height mb-3">
								<div className="col-lg-12 pl-0 padding-right-zero" style={{ paddingRight: '0px' }}>
									<div className="border-arround3 p-3 h-100">
										<div className="">
											<div className="d-inline-block">
												<img src={addfvrt} alt="favorite" />
											</div>
											<div className="d-inline-block ">
												<span className="fs-24 fw-bold m-0 color-blue pr-2"> {title} </span>
												<span className="gray6 datestyle" >{moment(date).format('YYYY-MM-DD HH:MM')}</span>
											</div>
										</div>
									</div>
								</div>

							</div>


							<div className="row mb-3 eventDesc">
								<div className="col-lg-9 pl-0 md-size-mb-16 md-size-p-0">
									<div className="border-arround4 white p-4 h-100">
										<div className="mb-3 pl-3 ">
											<h3 className="fw-bold fs-24 m-0">Event Description</h3>
										</div>
										<div className="row">
											<div className="col-lg-5">
												<div className="benefits">
													<ul>
														<li>{description}</li>
													</ul>
												</div>
											</div>

										</div>
									</div>
								</div>

								<div className="col-lg-3 p-0">
									<div className="border-arround h-100">
										<img src={`https://havenadmin.adilhaddaoui.com/back/public/uploads/events/${thumbnail}`} alt="gallery" style={{ height: 'inherit' }} className=" w-100" />

									</div>
								</div>
							</div>

							<div className="text-left" style={{ padding: '30px', marginTop: '20px', backgroundColor: '#FF5722' }}>

								<div className="clearfix">
									<div className="fancy-input float-left w-25 position-relative">
										<input type="text" name="" placeholder="Search Place" />
										<button className="btn-search">
											<i className="fa fa-search" aria-hidden="true"></i>
										</button>
									</div>


								</div>
							</div>

							<div className="row">
								<div className="col-md-12 col-lg-12 p-0 md-size-mb-16">
									<div className="border-arround2 p-4">

									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 pr-0 large-padd-0 todaygameList"  >
							<div>
								<h5 className="gamesTitle" >
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

					</div>
					{all_broadcasts.length ? <List data={all_broadcasts} /> : <h3 className="center text-center" >No BRODCAST EVENT</h3>}
				</div>
			</div>
		</div>



	)
}

export default MarketplaceSpecs;