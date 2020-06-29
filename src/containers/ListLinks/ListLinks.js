import React, { Component } from 'react';
import './ListLinks.css';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { getItem, setItem } from '../../services/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

class ListLinks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      linkList: [],
      currentList: [],
      active: 1,
    }
  }

  componentDidMount() {
    let data = getItem()
    if (data) {
      data = data.reverse()
    }
    this.setState({
      linkList: data,
      currentList: data && data.length > 4 ? data.slice(0, 5) : data
    })
  }

  handlerLink = () => {
    this.props.history.push(`/add-link`);
  }

  upVoteHandler = (i) => {
    this.state.currentList[i].points++;
    this.state.linkList.map(item => {
      if (item.linkUrl === this.state.currentList[i].url) {
        item.points++;
      }
    })
    setItem(this.state.linkList);
    this.setState({
      linkList: this.state.linkList
    })
    this.sortHandler(this.state.linkList, this.state.currentList)
  }

  downVoteHandler = (i) => {
    if (this.state.currentList[i].points > 0) {
      this.state.currentList[i].points--;
      this.state.linkList.map(item => {
        if (item.linkUrl === this.state.currentList[i].url) {
          item.points--;
        }
      })
      setItem(this.state.linkList);
      this.setState({
        linkList: this.state.linkList
      })
      this.sortHandler(this.state.linkList, this.state.currentList)
    }
  }

  sortHandler = (linkListParameter, currentListParameter) => {
    const linkList = linkListParameter.sort((a, b) => {
      return b.points - a.points
    });
    const currentList = currentListParameter.sort((a, b) => {
      return b.points - a.points
    });
    this.setState({
      linkList: linkList,
      currentList: currentList
    })
  }

  pagination = () => {
    if (this.state.linkList && this.state.linkList.length > 5) {
      let items = [];
      const count = (this.state.linkList.length / 5) + 1;
      for (let number = 1; number < count; number++) {
        items.push(
          <Pagination.Item key={number} onClick={() => this.handlerActivePage(number)} active={number === this.state.active}>
            {number}
          </Pagination.Item>
        );
      }
      return (
        <Pagination>{items}</Pagination>
      )
    } else {
      return null
    }
  }

  handlerActivePage = (activeNumber) => {
    let sliceNumberFirst = (activeNumber - 1) * 5;
    let sliceNumberTwo = sliceNumberFirst + 5;
    this.setState({
      active: activeNumber,
      currentList: this.state.linkList.slice(sliceNumberFirst, sliceNumberTwo)
    });
  }

  render() {
    return (
      <div className="content-container">
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <div className="add-link-container" onClick={() => this.handlerLink()}>
                <div className="plus-container">
                  <div className="plus-icon-container">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="text-container">
                  <span className="submit-text">SUBMIT A LINK</span>
                </div>
              </div>
              <hr className="hr" />
              {
                this.state.linkList && this.state.linkList.length > 0 ?
                  this.state.currentList.map((item, i) =>
                    <div className="link-container" key={i}>
                      <div className="point-container">
                        <div className="point-text-container">
                          <span className="points-number">{item.points}</span>
                          <span className="points-text">POINTS</span>
                        </div>
                      </div>
                      <div className="link-detail">
                        <div className="link-name">
                          <span>{item.linkName}</span>
                        </div>
                        <div className="link-url">
                          ({item.linkUrl})
                        </div>
                        <div className="vote-container">
                          <div className="up-vote" onClick={() => this.upVoteHandler(i)}>
                            <FontAwesomeIcon icon={faArrowUp} />&nbsp;Up Vote
                          </div>
                          <div className="down-vote" onClick={() => this.downVoteHandler(i)}>
                            <FontAwesomeIcon icon={faArrowDown} />&nbsp;Down Vote
                          </div>
                        </div>
                      </div>
                    </div>
                  ) :
                  <div className="empty-list"><span>Your link list is empty</span></div>
              }
              <div className="pagination">
                {this.pagination()}
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default ListLinks;
