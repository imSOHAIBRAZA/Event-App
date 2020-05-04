import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FooterBottom from "../Footer/FooterBottom";
import { Base_Url } from "../../app.constant";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import "./ContactUs.css";
const selectStyle = {
  backgroundColor: "#ffff",
  height: "52px",
  border: "1px solid #FDFDFD",
  width: "100%",
  color: "#B1B1B1",
  borderRadius: ".25rem",
  lineHeight: "1.5",
  verticalAlign: "middle",
  backgroundSize: "8px 10px",
  paddingLeft: "20px"
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      companySize: "",
      phoneNumber: "",
      jobTitle: "",
      industry: "",
      purpose: "",
      country: "",
      category: "",
      message: "",
      toggleForm: false
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleHandler = () => {
    this.setState({ toggleForm: !this.state.toggleForm });
  };

  submitHandler = e => {
    e.preventDefault();

    const data = new FormData();

    this.state.firstName && data.append("first_name", this.state.firstName);
    this.state.lastName && data.append("last_name", this.state.lastName);
    this.state.email && data.append("email", this.state.email);
    this.state.company && data.append("company", this.state.company);
    this.state.companySize &&
      data.append("company_size", this.state.companySize);
    this.state.phoneNumber &&
      data.append("phone_number", this.state.phoneNumber);
    this.state.jobTitle && data.append("job_title", this.state.jobTitle);
    this.state.industry && data.append("industry", this.state.industry);
    this.state.purpose && data.append("purpose", this.state.purpose);
    data.append(
      "country",
      this.props.userReducer.details.country
        ? this.props.userReducer.details.country
        : ""
    );
    this.state.category && data.append("category", this.state.category);
    this.state.message && data.append("message", this.state.message);

    console.log("OUR UPDATE API DATA::", ...data);

    const ajaxRequestHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    console.log("i am here", this.state);
    $(".loading-container").fadeIn();
    axios({
      url: `${Base_Url}/website/contactus`,
      method: "POST",
      headers: ajaxRequestHeaders,
      data
    })
      .then(response => {
        $(".loading-container").fadeOut();
        if (response.data.statusCode == 200) {
          Swal.fire({
            type: "success",
            text: "Message Sent Successfully"
          });
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            companySize: "",
            phoneNumber: "",
            jobTitle: "",
            industry: "",
            purpose: "",
            country: "",
            category: "",
            message: "",
            toggleForm: false
          });
          this.props.history.push("/contact");
        } else {
          Swal.fire({
            type: "success",
            text: "Try Again"
          });
        }
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 406 || error.response.status === 404) {
          Swal.fire({
            type: "error",
            text: error.response.data.message
          });
        } else {
          Swal.fire({
            type: "error",
            text: error.response.data.message
          });
        }
        $(".loading-container").fadeOut();
      });
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        <Header
          image="imagesWeb/contact-bg.png"
          heading="Contact"
          content="Our managed cloud hosting platform takes away all the technical complexities, letting you focus on the growth and success of your website with complete peace of mind."
        />
        <div className="row form-bg">
          <div className="custom-container">
            <div className="contact-frm">
              <div className="contact-hd">
                <h2>Fill out the form</h2>
                <div
                  className="contact-ac-tabs"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #CECBCB",
                      width: "35%",
                      color: "#373F48"
                    }}
                  >
                    <li
                      className={
                        !this.state.toggleForm ? "ActiveTabContactUs" : ""
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="contact-tablinks"
                        onClick={this.toggleHandler}
                      >
                        Individual
                      </div>
                    </li>
                    <li
                      className={
                        this.state.toggleForm ? "ActiveTabContactUs" : ""
                      }
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                    >
                      <div
                        className="contact-tablinks"
                        onClick={this.toggleHandler}
                      >
                        Business
                      </div>
                    </li>
                  </ul>
                </div>
                <p>
                  Enter the following details so that we can reach out to you.
                </p>
              </div>
              <div
                id="individual"
                className={classnames("contact-tabdatas", {
                  "d-none": this.state.toggleForm
                })}
              >
                <form method="POST" onSubmit={this.submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder="Enter first name here"
                          value={this.state.firstName}
                          onChange={e => this.changeHandler(e)}
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter last name here"
                          value={this.state.lastName}
                          onChange={e => this.changeHandler(e)}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter email here"
                          value={this.state.email}
                          onChange={e => this.changeHandler(e)}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          placeholder="Enter number here"
                          value={this.state.phoneNumber}
                          onChange={e => this.changeHandler(e)}
                          name="phoneNumber"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="cus-label">Purpose</label>
                      <div>
                        <select
                          className="custom-select1"
                          value={this.state.purpose}
                          onChange={e => this.changeHandler(e)}
                          name="purpose"
                        >
                          <option value="select-reason">Select reason</option>
                          <option value="investment">Investment</option>
                          <option value="fundraising">Fundraising</option>
                          <option value="careers">Careers </option>
                          <option value="affiliate-maarketing">
                            Affiliate Maarketing
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-input contactForm">
                        <label>Message</label>
                        <textarea
                          rows="4"
                          cols="50"
                          placeholder="Write message here"
                          value={this.state.message}
                          onChange={e => this.changeHandler(e)}
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact_fancycheckbox1">
                        <label className="check_container">
                          I wish to receive digital communications, including
                          marketing, and understand I may opt-out at any time
                          using the unsubscribe link provided in Bricktrade
                          email communications.
                          <input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div
                        className="g-recaptcha pb-3 text-center"
                        data-sitekey="6LfkJdUUAAAAABd0E_XKaY7hJ5jHjEb-GeL1Rhw1"
                      ></div>
                      <div className="form-input text-center contactForm">
                        <button
                          type="submit"
                          className="start-btn ml-auto mr-auto"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div
                id="business"
                class="contact-tabdata"
                className={classnames("contact-tabdatas", {
                  "d-none": !this.state.toggleForm
                })}
              >
                <form method="POST" onSubmit={this.submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder="Enter first name here"
                          value={this.state.firstName}
                          onChange={e => this.changeHandler(e)}
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter last name here"
                          value={this.state.lastName}
                          onChange={e => this.changeHandler(e)}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Company Name</label>
                        <input
                          type="text"
                          placeholder="Enter company name here"
                          value={this.state.company}
                          onChange={e => this.changeHandler(e)}
                          name="company"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="cus-label">Company Size</label>
                      <div>
                        <select
                          value={this.state.companySize}
                          onChange={e => this.changeHandler(e)}
                          name="companySize"
                          className="custom-select1"
                        >
                          <option value="0">Select company size</option>
                          <option value="1-10">1-10</option>
                          <option value="10-50">10-50</option>
                          <option value="50-100">50-100</option>
                          <option value="100-200">100-200</option>
                          <option value="200-500">200-500</option>
                          <option value="500+">500+</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          placeholder="Enter number here"
                          value={this.state.phoneNumber}
                          onChange={e => this.changeHandler(e)}
                          name="phoneNumber"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Job Title</label>
                        <input
                          type="text"
                          placeholder="Enter job title here"
                          value={this.state.jobTitle}
                          onChange={e => this.changeHandler(e)}
                          name="jobTitle"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-input contactForm">
                        <label>Business Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter email here"
                          value={this.state.email}
                          onChange={e => this.changeHandler(e)}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="cus-label">Industry</label>
                      <div>
                        <select
                          value={this.state.industry}
                          onChange={e => this.changeHandler(e)}
                          name="industry"
                          className="custom-select1"
                        >
                          <option value="0">Select industry</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial </option>
                          <option value="land">Land</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label className="cus-label">Category</label>
                      <div>
                        <select
                          value={this.state.category}
                          onChange={e => this.changeHandler(e)}
                          name="category"
                          className="custom-select1"
                        >
                          <option value="0">Select category</option>
                          <option value="Propertyconsultancy">
                            Property consultancy
                          </option>
                          <option value="PropertyManagement">
                            Property Management{" "}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="cus-label">Purpose </label>
                      <div>
                        <select
                          className="custom-select1"
                          value={this.state.purpose}
                          onChange={e => this.changeHandler(e)}
                          name="purpose"
                        >
                          <option value="select reason">Select reason</option>
                          <option value="investment">Investment</option>
                          <option value="fundraising">Fundraising</option>
                          <option value="careers">Careers </option>
                          <option value="affiliate-maarketing">
                            Affiliate Maarketing
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-input contactForm">
                        <label>Message</label>
                        <textarea
                          rows="4"
                          cols="50"
                          placeholder="Write message here"
                          value={this.state.message}
                          onChange={e => this.changeHandler(e)}
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact_fancycheckbox">
                        <label className="check_container">
                          I wish to receive digital communications, including
                          marketing, and understand I may opt-out at any time
                          using the unsubscribe link provided in Bricktrade
                          email communications.
                          <input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div
                        className="g-recaptcha pb-3 text-center"
                        data-sitekey="6LfkJdUUAAAAABd0E_XKaY7hJ5jHjEb-GeL1Rhw1"
                      ></div>
                      <div className="form-input text-center contactForm">
                        <button
                          type="submit"
                          className="start-btn ml-auto mr-auto"
                          onClick={this.submitHandler}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row form-bg">
        <div className="custom-container">
          <div className="contact-frm">
            <div className="contact-hd">
              <h2>Fill out the form</h2>
              <p>
                Enter the following details so that we can reach out to you.
              </p>
            </div>
            <form action="" method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-input">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-input">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-input">
                    <label>Company Name</label>
                    <input type="text" placeholder="Enter company name here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="cus-label">Company Size</label>
                  <div className="1">
                    <select style={selectStyle}>
                      <option value="0">Select company size</option>
                      <option value="1">1-10</option>
                      <option value="2">10-50</option>
                      <option value="3">50-100</option>
                      <option value="4">100-200</option>
                      <option value="4">200-500</option>
                      <option value="4">500+</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-input">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter number here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-input">
                    <label>Job Title</label>
                    <input type="text" placeholder="Enter job title here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-input">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="cus-label">Industry</label>
                  <div className="">
                    <select style={selectStyle}>
                      <option value="0">Select industry</option>
                      <option value="1">Financial Services</option>
                      <option value="2">Financial Services</option>
                      <option value="3">Financial Services</option>
                      <option value="4">Financial Services</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="cus-label">Category</label>
                  <div className="">
                    <select style={selectStyle}>
                      <option value="0">Select category</option>
                      <option value="1">category1</option>
                      <option value="2">category2</option>
                      <option value="3">category3 </option>
                      <option value="4">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="cus-label">Purpose </label>
                  <div className="">
                    <select style={selectStyle}>
                      <option value="0">Select reason</option>
                      <option value="1">Purpose1</option>
                      <option value="2">Purpose2</option>
                      <option value="3">Purpose3</option>
                      <option value="4">Purpose4</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-input">
                    <label>Message</label>
                    <textarea
                      rows="4"
                      cols="50"
                      placeholder="Write message here"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-input text-center">
                    <button type="submit" className="start-btn ml-auto mr-auto">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
        <div className="row query-sect">
          <div className="col-lg-12">
            <div className="">
              <div className="d-flex justify-content-center text-center">
                <div className="query-head">
                  <h3>Have a query?</h3>
                  <p>
                    A purpose-built student accommodation (PBSA) block in
                    Nottingham, UK containing 124 student apartments is
                    currently available for investment on the Smartlands
                    Platform. Nottingham hosts two universities one of whic
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="query-block">
                        <img
                          src="images/office.png"
                          alt="royal-palace"
                          className="img-fluid"
                        />
                        <span>Visit office</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="query-block">
                        <img
                          src="images/online-support.png"
                          alt="taj-mahal"
                          className="img-fluid"
                        />
                        <span>(855) 224-3424</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="newsletter text-center">
              <div className="custom-container">
                <div className="pt-80 white">
                  <h3 className="mb-3 sectiontitle">Newsletter</h3>
                  <p className="mb-32 mt-2 fs-18">Lorem Ipsum dolor simut</p>
                </div>
                <div className="pb-80">
                  <form className="myform" onsubmit="event.preventDefault();">
                    <div className="newsletter-form">
                      <input type="text" placeholder="Email Address" />
                      <input type="submit" value="Subscribe" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <FooterBottom />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  //
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ContactUs);
