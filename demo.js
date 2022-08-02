import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Modal, Divider, Row, Col, Input, Select } from 'antd';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="gutter-example gutter-example-modal container">
          <div>
            <Divider
              orientation="left"
              style={{ borderTop: '1px rgb(0, 0, 0)' }}
            >
              Primary Contact
            </Divider>
            {/* <label className="customLabel-label" >Primary Contact </label> */}
            <Row gutter={24} style={{ marginLeft: '5px', marginRight: '5px' }}>
              <Col sm={8} className="gutter-row">
                <div
                  className="gutter-box"
                  style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
                >
                  <label className="customLabel">First Name</label>
                  <Input
                    className="field"
                    onChange={(e) =>
                      this.setState({
                        set_primaryRecipientFirstName:
                          e.target.value.toString(),
                      })
                    }
                  ></Input>
                </div>
              </Col>
              <Col sm={8} className="gutter-row">
                <div
                  className="gutter-box"
                  style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
                >
                  <label className="customLabel">Last Name</label>
                  <Input
                    className="field"
                    onChange={(e) =>
                      this.setState({
                        set_primaryRecipientLastName: e.target.value.toString(),
                      })
                    }
                  ></Input>
                </div>
              </Col>
              <Col sm={8} className="gutter-row">
                <div
                  className="gutter-box"
                  style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
                >
                  <label className="customLabel">Email</label>
                  <Input
                    className="field"
                    onChange={(e) =>
                      this.setState({
                        set_primaryRecipientEmail: e.target.value.toString(),
                      })
                    }
                  ></Input>
                </div>
              </Col>
            </Row>
          </div>
          {/* <hr className="hr-gutter"></hr> */}
          <Divider orientation="left" style={{ borderTop: '1px rgb(0, 0, 0)' }}>
            Secondary Contact
          </Divider>
          {/* <label className="customLabel-label" >Secondary Contact </label> */}
          <Row gutter={24} style={{ marginLeft: '5px', marginRight: '5px' }}>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
              >
                <label className="customLabel">First Name</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_secondaryRecipientFirstNam: e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
              >
                <label className="customLabel">Last Name</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_secondaryRecipientLastName: e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
              >
                <label className="customLabel">Email</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_secondaryRecipientEmail: e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
          </Row>
          <Divider orientation="left" style={{ borderTop: '1px rgb(0, 0, 0)' }}>
            Secondary Backup Contact
          </Divider>
          {/* <hr className="hr-gutter"></hr>
                      <label className="customLabel-label" >Backup Secondary Contact </label> */}
          <Row gutter={24} style={{ marginLeft: '5px', marginRight: '5px' }}>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
              >
                <label className="customLabel">First Name</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_backUpSecondaryRecipientFirstName:
                        e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
              >
                <label className="customLabel">Last Name</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_backUpSecondaryRecipientLastName:
                        e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '0.5px' }}
              >
                <label className="customLabel">Email</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_backUpSecondaryRecipientEmail:
                        e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
          </Row>
          <Divider orientation="left" style={{ borderTop: '1px rgb(0, 0, 0)' }}>
            Affiliate Sites
          </Divider>
          {/* <hr className="hr-gutter"></hr>
                      <label className="customLabel-label" >Affiliates Site </label> */}
          <Row gutter={24} style={{ marginLeft: '5px', marginRight: '5px' }}>
            <Col sm={8} className="gutter-row">
              <div
                className="gutter-box"
                style={{ paddingTop: '1px', paddingBottom: '20px' }}
              >
                <label className="customLabel">Email</label>
                <Input
                  className="field"
                  onChange={(e) =>
                    this.setState({
                      set_backUpSecondaryRecipientEmail:
                        e.target.value.toString(),
                    })
                  }
                ></Input>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default App;
