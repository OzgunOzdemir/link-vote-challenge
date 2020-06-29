import React, { Component } from 'react';
import './AddLinks.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ButtonComponent, InputComponent, AlertComponent } from '../../components/Ui/index.js';
import { getItem, setItem } from '../../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class AddLinks extends Component {

  constructor(props) {
    super(props)

    this.state = {
      linkName: null,
      linkUrl: null,
      points: null,
      alert: false
    }
  }

  handlerBackLink = () => {
    this.props.history.push(`/`);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addLink = () => {
    const linklist = getItem();
    if (!linklist) {
      const data = [{
        linkName: this.state.linkName,
        linkUrl: this.state.linkUrl,
        points: 0
      }];
      setItem(data)
    } else {
      const data = {
        linkName: this.state.linkName,
        linkUrl: this.state.linkUrl,
        points: 0
      };
      linklist.push(data);
      setItem(linklist)
    }
    this.setState({ alert: true })
    setTimeout(() => {
      this.setState({ alert: false })
    }, 3000)
  }

  render() {
    return (
      <div className="content-container">
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              {
                this.state.alert === true ?
                  <div className="alert">
                    <AlertComponent linkName={this.state.linkName} linkStatus="added." />
                  </div>
                  : null
              }
              <div className="back-link">
                <span className="backlink-text" onClick={() => this.handlerBackLink()}>
                <FontAwesomeIcon icon={faArrowLeft} />&nbsp;Return to List
                </span>
              </div>
              <div className="form-container">
                <div className="form-header">
                  <span className="addnewlink-text">Add New Link</span>
                </div>
                <div>
                  <span>Link Name:</span>
                  <InputComponent type="text" id="linkName" name="linkName" onChange={(e) => this.onChange(e)} placeholder="e.g. Alphabet" />
                </div>
                <div className="divider"></div>
                <div>
                  <span>Link URL:</span>
                  <InputComponent type="text" id="linkUrl" name="linkUrl" onChange={(e) => this.onChange(e)} placeholder="e.g. http://abc.xyz" />
                </div>
                <div className="divider"></div>
                <div className="button-container">
                  <ButtonComponent onClick={() => this.addLink()} text="ADD" />
                </div>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddLinks;
