import React, { Component } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Headline2, Paragraph } from '@time-with/atoms';
import FontAwesome from '@fortawesome/react-fontawesome';
import {
  ButtonsRow,
  ButtonGreen,
  ButtonBlue,
  ButtonOrange,
  ButtonRed,
} from '@time-with/buttons'
import {
  RootDiv,
  Window,
  BGDIV,
} from './elements'

const defaults = {
  active: false,
  // layout
  windowColor: 'white',
  backgroundColor: 'rgba(0,0,0,0.3)',
  // text
  title: 'Title',
  description: 'Description',
  colorTitle: '#333',
  colorDescription: '#9c9c9c',
  hideDescription: false,
  // buttons
  showButtonA: true,
  showButtonB: true,
  buttonAText: 'OK',
  buttonBText: 'Cancel',
  buttonAType: 'success',
  buttonBType: 'error',
  buttonAIcon: 'check',
  buttonBIcon: 'times',
  buttonACustomHandler: null,
  buttonBCustomHandler: null,
  buttonACustomHandlerParameter: null,
  buttonBCustomHandlerParameter: null,
  closeOnButtonAClick: true,
  closeOnButtonBClick: true,
}

class TWModal extends Component {

  handleClose = () => {
    this.props.closeModal()
  }

  handleButtonA = () => {
    const { 
      buttonACustomHandler,
      closeOnButtonAClick,
      buttonACustomHandlerParameter,
    } = this.props
    if (buttonACustomHandler) { buttonACustomHandler(buttonACustomHandlerParameter) }
    if (closeOnButtonAClick) { this.handleClose() }
  }

  handleButtonB = () => {
    const { 
      buttonBCustomHandler,
      closeOnButtonBClick,
      buttonBCustomHandlerParameter,
    } = this.props
    if (buttonBCustomHandler) { buttonBCustomHandler(buttonBCustomHandlerParameter) }
    if (closeOnButtonBClick) { this.handleClose() }
  }

  handleButtonB = () => {
    this.props.closeModal()
  }

  getButtonFromType = (type) => {
    switch(type) {
      case 'success':
        return ButtonGreen;
      case 'info':
        return ButtonBlue;
      case 'warning':
        return ButtonOrange;
      case 'error':
        return ButtonRed;
    }
  }

  getButton = (which, text, type, icon) => {
    const Button = this.getButtonFromType(type)
    return (
      <Button onClick={this[`handleButton${which}`]}>
        <p>{text}</p>
        <FontAwesome icon={icon} />
      </Button>
    )
  }

  render() {
    const {
      active,
      title,
      description,
      colorTitle,
      colorDescription,
      hideDescription,
      backgroundColor,
      windowColor,
      showButtonA,
      showButtonB,
      buttonAType,
      buttonBType,
      buttonAText,
      buttonBText,
      buttonAIcon,
      buttonBIcon,
    } = this.props
    if (!active) return null
    return (
      <RootDiv id='tw-modal-background' backgroundColor={backgroundColor}>
        <Window id='tw-modal-window' style={{backgroundColor: windowColor}}>
          <Headline2 style={{color: colorTitle}}>{title}</Headline2>
          <br />
          { !hideDescription && <Paragraph style={{maxWidth: '500px', color: colorDescription}}>{description}</Paragraph> }
          <br />
          <ButtonsRow>
            { showButtonA && this.getButton('A', buttonAText, buttonAType, buttonAIcon) }
            { showButtonB && this.getButton('B', buttonBText, buttonBType, buttonBIcon) }
          </ButtonsRow>
        </Window>
        <BGDIV/>
      </RootDiv>
    )
  }
}

export const showModal = function(modalData) {
  return {
    type: 'SHOW_MODAL',
    // layout
    backgroundColor: modalData.backgroundColor || defaults.backgroundColor,
    windowColor: modalData.windowColor || defaults.windowColor,
    // text
    title: modalData.title || defaults.title,
    description: modalData.description || defaults.description,
    colorTitle: modalData.colorTitle || defaults.colorTitle,
    colorDescription: modalData.colorDescription || defaults.colorDescription,
    hideDescription: modalData.hideDescription,
    // buttons
    showButtonA: modalData.showButtonA,
    showButtonB: modalData.showButtonB,
    buttonAText: modalData.buttonAText || defaults.buttonAText,
    buttonBText: modalData.buttonBText || defaults.buttonBText,
    buttonAType: modalData.buttonAType || defaults.buttonAType,
    buttonBType: modalData.buttonBType || defaults.buttonBType,
    buttonAIcon: modalData.buttonAIcon || defaults.buttonAIcon,
    buttonBIcon: modalData.buttonBIcon || defaults.buttonBIcon,
    buttonACustomHandler: modalData.buttonACustomHandler,
    buttonBCustomHandler: modalData.buttonBCustomHandler,
    buttonACustomHandlerParameter: modalData.buttonACustomHandlerParameter,
    buttonBCustomHandlerParameter: modalData.buttonBCustomHandlerParameter,
    closeOnButtonAClick: modalData.closeOnButtonAClick || defaults.closeOnButtonAClick,
    closeOnButtonBClick: modalData.closeOnButtonBClick || defaults.closeOnButtonBClick,
  }
}
export const closeModal = function() {
  return {
    type: 'CLOSE_MODAL',
  }
}

export function modalReducer(state = {
  active: false,
  // layout
  windowColor: defaults.windowColor,
  backgroundColor: defaults.backgroundColor,
  // text
  title: defaults.title,
  description: defaults.description,
  colorTitle: defaults.colorTitle,
  colorDescription: defaults.colorDescription,
  hideDescription: defaults.hideDescription,
  // buttons
  showButtonA: defaults.showButtonA,
  showButtonB: defaults.showButtonB,
  buttonAText: defaults.buttonAText,
  buttonBText: defaults.buttonBText,
  buttonAType: defaults.buttonAType,
  buttonBType: defaults.buttonBType,
  buttonAIcon: defaults.buttonAIcon,
  buttonBIcon: defaults.buttonBIcon,
  buttonACustomHandler: defaults.buttonACustomHandler,
  buttonBCustomHandler: defaults.buttonBCustomHandler,
  buttonACustomHandlerParameter: defaults.buttonACustomHandlerParameter,
  buttonBCustomHandlerParameter: defaults.buttonBCustomHandlerParameter,
  closeOnButtonAClick: defaults.closeOnButtonAClick,
  closeOnButtonBClick: defaults.closeOnButtonBClick,
}, action) {
  switch (action.type) {
    case 'SHOW_MODAL': {
      document.documentElement.style.overflowY = 'hidden'
      return {
        ...state,
        active: true,
        backgroundColor: action.backgroundColor,
        windowColor: action.windowColor,
        // text
        title: action.title,
        description: action.description,
        colorTitle: action.colorTitle,
        colorDescription: action.colorDescription,
        hideDescription: action.hideDescription,
        // buttons
        showButtonA: action.showButtonA,
        showButtonB: action.showButtonB,
        buttonAText: action.buttonAText,
        buttonBText: action.buttonBText,
        buttonAType: action.buttonAType,
        buttonBType: action.buttonBType,
        buttonAIcon: action.buttonAIcon,
        buttonBIcon: action.buttonBIcon,
        buttonACustomHandler: action.buttonACustomHandler,
        buttonBCustomHandler: action.buttonBCustomHandler,
        buttonACustomHandlerParameter: action.buttonACustomHandlerParameter,
        buttonBCustomHandlerParameter: action.buttonBCustomHandlerParameter,
        closeOnButtonAClick: action.closeOnButtonAClick,
        closeOnButtonBClick: action.closeOnButtonBClick,
      };
    }
    case 'CLOSE_MODAL': {
      document.documentElement.style.overflowY = 'scroll'
      return {
        ...state,
        active: false,
      };
    }
    default:
      break;
  }
  return state;
}

const mapStoreToProps = ( store ) => {
  return {
    active: store.modalReducer.active,
    backgroundColor: store.modalReducer.backgroundColor,
    windowColor: store.modalReducer.windowColor,
    // text
    title: store.modalReducer.title,
    description: store.modalReducer.description,
    colorTitle: store.modalReducer.colorTitle,
    colorDescription: store.modalReducer.colorDescription,
    hideDescription: store.modalReducer.hideDescription,
    // buttons
    showButtonA: store.modalReducer.showButtonA,
    showButtonB: store.modalReducer.showButtonB,
    buttonAText: store.modalReducer.buttonAText,
    buttonBText: store.modalReducer.buttonBText,
    buttonAType: store.modalReducer.buttonAType,
    buttonBType: store.modalReducer.buttonBType,
    buttonAIcon: store.modalReducer.buttonAIcon,
    buttonBIcon: store.modalReducer.buttonBIcon,
    buttonACustomHandler: store.modalReducer.buttonACustomHandler,
    buttonBCustomHandler: store.modalReducer.buttonBCustomHandler,
    buttonACustomHandlerParameter: store.modalReducer.buttonACustomHandlerParameter,
    buttonBCustomHandlerParameter: store.modalReducer.buttonBCustomHandlerParameter,
    closeOnButtonAClick: store.modalReducer.closeOnButtonAClick,
    closeOnButtonBClick: store.modalReducer.closeOnButtonBClick,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    closeModal,
  }, dispatch )
};

export default connect( mapStoreToProps, mapDispatchToProps )( TWModal )
