import React, { Component } from 'react';
import './ListLinks.css';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { getItem, setItem } from '../../services/index.js';
import { SubmitLinkBox, ListItem } from '../../components/App/index.js';
import { DropdownComponent } from '../../components/Ui/index.js';
import { AlertComponent } from '../../components/Ui/index.js'
import { DeleteListItemModal } from '../../modal/index.js'

class ListLinks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      linkList: [],
      currentList: [],
      active: 1,
      openModal: false,
      linkName: null,
      removed: false
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
    this.setState({
      linkList: this.state.linkList
    })
    setItem(this.state.linkList);
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

  openModel = (linkName) => {
    this.setState({
      openModal: true,
      linkName: linkName
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false
    })
  }

  okModal = () => {
    let data = this.state.linkList
    for (let i = 0; i < this.state.linkList.length; i++) {
      if (this.state.linkList[i].linkName === this.state.linkName) {
        data.splice(i, 1);
      }
    }
    setItem(data);
    this.setState({
      openModal: false,
      linkList: data,
      currentList: data && data.length > 4 ? data.slice(0, 5) : data,
      removed: true
    })
    this.handlerActivePage(1);
    setTimeout(() => {
      this.setState({
        removed: false
      })
    }, 1000)
  }

  lessVoted = (linkListParameter, currentListParameter) => {
    const linkList = linkListParameter.sort((a, b) => {
      return a.points - b.points
    });
    const currentList = currentListParameter.sort((a, b) => {
      return a.points - b.points
    });
    this.setState({
      linkList: linkList,
      currentList: currentList
    })
    this.handlerActivePage(1);
  }

  mostVoted = (linkListParameter, currentListParameter) => {
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
    this.handlerActivePage(1);
  }

  render() {
    return (
      <div className="content-container">
        <DeleteListItemModal show={this.state.openModal} linkName={this.state.linkName}
          okModal={() => this.okModal()} closeModal={() => this.closeModal()} />
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              {
                this.state.removed === true ? <AlertComponent linkName={this.state.linkName} linkStatus="removed" /> : null
              }
              <SubmitLinkBox text="SUBMIT A LINK" onClick={() => this.handlerLink()} />
              <hr className="hr" />
              {
                this.state.linkList && this.state.linkList.length > 1 ?
                <div className="dropdown-container"> 
                <DropdownComponent mostVoted={() => this.mostVoted(this.state.linkList, this.state.currentList)}
                 lessVoted={() => this.lessVoted(this.state.linkList, this.state.currentList)}/> 
                </div> : null
              }
              {
                this.state.linkList && this.state.linkList.length > 0 ?
                  this.state.currentList.map((item, i) =>
                    <ListItem points={item.points} key={i} linkName={item.linkName} linkUrl={item.linkUrl}
                      upVoteHandler={() => this.upVoteHandler(i)} downVoteHandler={() => this.downVoteHandler(i)}
                      openModel={() => this.openModel(item.linkName)} />
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
