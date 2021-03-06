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
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import AuthNavbar from "../../components/Navbars/AuthNavbar.js";
import AuthFooter from "../../components/Footers/AuthFooter.js";

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    gender: "",
    img: "",
    address: "",
    city: "",
    country: "",
    password: "",
    password1: "",
    occupation: "",
  };

  onChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  validate = () => {
    return true;
  };

  register = async (e) => {
    const { email, password } = this.state;
    // e.preventDefault();
    let error = this.validate();
    if (error) this.setState({ error: false });
    // error = await this.props.onLogIn({ ...this.state });
    if (error) this.setState({ error: false });
    let res = await axios.post("localhost:3000/auth/register", {
      email,
      password,
    });
    // let token = res.token.access.token
    // let refreshToken = res.token.refresh.token
    // authenticteUser(token, refreshToken);
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <AuthNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-2">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/icons/common/github.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/icons/common/google.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-2">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div>
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
          </section>
        </main>
        <AuthFooter />
      </>
    );
  }
}

export default Register;
