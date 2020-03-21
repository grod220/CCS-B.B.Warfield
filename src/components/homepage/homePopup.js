import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

const IS_LIVE_UNTIL = new Date(2020, 4, 1)

const AlertTitle = styled.h2`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 23px;
  text-transform: uppercase;
  color: #4e4e4e;
`

const AlertBody = styled.div`
  font-size: 20px;
`

const BlueButton = styled.button`
  padding: 0.5em 2.7em;
  border-radius: 0.3em;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  color: #ffffff;
  background-color: #4473f6;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

class HomePopup extends React.Component {
  constructor() {
    super()
    this.state = { showModal: true }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    const active = new Date(Date.now()) < IS_LIVE_UNTIL
    return (
      <>
        {active && (
          <ReactModal
            isOpen={this.state.showModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(12, 12, 12, 0.75)',
                zIndex: '1000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              content: {
                maxWidth: '500px',
                top: 'unset',
                bottom: 'unset',
                right: 'unset',
                left: 'unset',
                maxHeight: 'calc(100vh - 2rem)',
                overflowY: 'auto',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '40px',
              },
            }}
          >
            <AlertTitle>
              Notice{' '}
              <span role="img" aria-label="church">
                ⛪
              </span>
            </AlertTitle>
            <AlertBody>
              <p>
                In order to live out our mandate to <i>love others</i>, our congregation will suspend all general
                gatherings (Sunday worship, Bible studies, and public prayer meetings) until further notice. This is
                done in order to reduce potential spread of the corona virus. We are praying that God’s grace will
                abound in the midst of this present sickness and suffering.
              </p>
              <p>
                Contact: <a href="mailto:calvarystockholm@gmail.com">calvarystockholm@gmail.com</a> if you seek
                assistance or prayer.
              </p>
            </AlertBody>
            <BlueButton onClick={this.handleCloseModal}>Close</BlueButton>
          </ReactModal>
        )}
      </>
    )
  }
}

export default HomePopup
