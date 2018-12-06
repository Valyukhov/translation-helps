import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import remark2react from 'remark-react';
import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import RCLinkContainer from './RCLinkContainer';

class TextComponentWithRCLinks extends React.Component {
  state = {
    component: null,
  };

  componentDidMount() {
    const {text, addTab} = this.props;
    const options = {
      remarkReactComponents: {
        a: (props) => <RCLinkContainer {...props} addTab={addTab} />,
        div: (props) => <div {...props} style={{width: '100%'}}/>,
      }
    };
    const component = remark()
    .use(remark2react, options)
    .processSync(text).contents;
    this.setState({
      component,
    });
  };

  render() {
    return this.state.component;
  };
};

TextComponentWithRCLinks.propTypes = {
  text: PropTypes.string.isRequired,
  addTab: PropTypes.func.isRequired,
};

export default TextComponentWithRCLinks;
