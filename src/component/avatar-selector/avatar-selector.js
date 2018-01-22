import React from 'react';
import { List, Grid } from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends React.Component{
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const avatarList = '1a,1b,1c,1e,1f,1g,1h'
                        .split(',')
                        .map(v => ({
                          icon: require(`../img/${v}.jpg`),
                          text: v
                        }));

    const gridHeader = this.state.text
      ?
      <div>
        <span>已选择头像</span>
        <img style={{width: 20}} src={this.state.icon} alt="" />
      </div>
      :
      <div>
        请选择头像
      </div>;

    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid data={avatarList} columnNum={5}
                onClick={elm => {
                  this.setState(elm);
                  this.props.selectAvatar(elm.text);
                }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector;
