/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

import image1 from "../assets/img/theme/team-4-800x800.jpg";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import AuthFooter from "../components/Footers/AuthFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-md pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-info">Application Form</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-2">
                      <Form role="form">
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  First name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="First name"
                                  required
                                  type="text"
                                  onChange={(e) =>
                                    this.onChange(e, "firstName")
                                  }
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  placeholder="Last name"
                                  required
                                  type="text"
                                  onChange={(e) => this.onChange(e, "lastName")}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  placeholder="jesse@example.com"
                                  required
                                  type="email"
                                  onChange={(e) => this.onChange(e, "email")}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="dob"
                                >
                                  Date of Birth
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="dob"
                                  placeholder="DD/MM/YYYY"
                                  required
                                  type="date"
                                  onChange={(e) => this.onChange(e, "dob")}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="image-upload"
                                >
                                  Profile Picture
                                </label>
                                <Input
                                  className="form-control-alternative form-control"
                                  id="image-upload"
                                  accept="image/*"
                                  placeholder="Upload an Image"
                                  type="file"
                                  onChange={(e) => this.onChange(e, "img")}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="gender"
                                >
                                  Gender
                                </label>
                                <Input
                                  type="select"
                                  name="gender"
                                  id="gender"
                                  required
                                  onChange={(e) => this.onChange(e, "gender")}
                                >
                                  <option>Select an option</option>
                                  <option value="MALE">Male</option>
                                  <option value="FEMALE">Female</option>
                                  <option value="OTHER">Other</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="occupation"
                                >
                                  Occupation
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="occupation"
                                  placeholder="e.g. Accountant"
                                  type="text"
                                  onChange={(e) =>
                                    this.onChange(e, "occupation")
                                  }
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="password"
                                >
                                  Password
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="password"
                                  placeholder="TRmg$*^mgoQpjt!@"
                                  required
                                  type="password"
                                  onChange={(e) => this.onChange(e, "password")}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="password"
                                >
                                  Confirm Password
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="password"
                                  placeholder="TRmg$*^mgoQpjt!@"
                                  required
                                  type="password"
                                  onChange={(e) =>
                                    this.onChange(e, "password1")
                                  }
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                  id="input-address"
                                  placeholder="Home Address"
                                  type="text"
                                  onChange={(e) => this.onChange(e, "address")}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  City
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="New York"
                                  id="input-city"
                                  placeholder="City"
                                  required
                                  type="text"
                                  onChange={(e) => this.onChange(e, "city")}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Country
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="United States"
                                  id="input-country"
                                  placeholder="Country"
                                  required
                                  type="text"
                                  onChange={(e) => this.onChange(e, "country")}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            onClick={this.register}
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                    <CardBody>
                      <Form></Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <span className="text-light">
                        <small>Already have an account?</small>
                      </span>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="/login"
                        // onClick={(e) => e.preventDefault()}
                      >
                        <small>Login</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </main>
        <AuthFooter />
      </>
    );
  }
}

export default Profile;
