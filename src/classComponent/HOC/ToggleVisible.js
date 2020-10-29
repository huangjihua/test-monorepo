import  * as React from 'react';
import {Modal,Button} from 'antd';

export class ToggleVisible extends React.Component {
	state = {
	  visible: false
	};
	toggle = () => {
	  this.setState({visible: !this.state.visible});
	}
	render() {
	  const {visible} = this.state;
	  const toggle = this.toggle;
	  return (
  		<>{this.props.children({visible, toggle})}</>
	  );
	}
}
//使用
const EditUser = () => (
  <ToggleVisible>
    {({visible, toggle}) => (<>
      <Modal visible={visible}/>
      <Button onClick={toggle}>打开/关闭modal</Button>
    </>)}
  </ToggleVisible>
)
export default EditUser;