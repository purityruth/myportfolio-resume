


import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      successMessage: "",
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = this.state;

    if (!name || !phone || !email || !message) {
      this.setState({ errorMessage: "Please fill in all required fields." });
      return;
    }

    const formData = new FormData();
    formData.append("contactName", name);
    formData.append("contactPhone", phone);
    formData.append("contactEmail", email);
    formData.append("contactSubject", subject);
    formData.append("contactMessage", message);

    fetch("https://getform.io/f/e798906b-b556-48c5-970d-34ffb6474ba5", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            successMessage: "Your message was sent, thank you!",
            errorMessage: "",
          });
        } else {
          this.setState({
            errorMessage: "There was an error submitting the form. Please try again.",
            successMessage: "",
          });
        }
      })
      .catch((error) => {
        this.setState({
          errorMessage: "There was an error submitting the form. Please try again.",
          successMessage: "",
        });
      });
  };

  render() {
    if (!this.props.data) return null;

    const { name, phone, email, subject, message, successMessage, errorMessage } = this.state;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{this.props.data.contactmessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      size="35"
                      id="contactName"
                      name="name"
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                  <div>
                    <label htmlFor="contactPhone">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={phone}
                      size="15"
                      id="contactPhone"
                      name="phone"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      size="35"
                      id="contactEmail"
                      name="email"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      size="35"
                      id="contactSubject"
                      name="subject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      value={message}
                      cols="50"
                      rows="12"
                      id="contactMessage"
                      name="message"
                      onChange={this.handleChange}
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" type="submit">
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              {errorMessage && <div id="message-warning">{errorMessage}</div>}
              {successMessage && (
                <div id="message-success">
                  <i className="fa fa-check"></i>{successMessage}
                  <br />
                </div>
              )}
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {this.props.data.name}
                  <br />
                  {this.props.data.address.street}
                  <br />
                  {this.props.data.address.city}, {this.props.data.address.state}{" "}
                  {this.props.data.address.zip}
                  <br />
                  <span>{this.props.data.phone}</span>
                </p>
              </div>
            </aside>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                     When they say failure to plan is planning to fail, make sure to get your big dreams driving you in your plans.
                      <a href="./">http://purityruth.co.ke</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://purityruth.co.ke</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
