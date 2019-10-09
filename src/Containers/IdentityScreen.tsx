import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  View,
  Text,
  Image
} from 'react-native'
import { RootAction, RootState } from '../Redux/Types'
import styles from './Styles'
import { NodeState } from '../Redux/MainRedux'

class IdentityScreen extends React.Component<StateProps> {
  render() {
    const previewText = !this.props.online
      ? 'waiting to come online...'
      : this.props.ipfsImage == null
        ? 'requesting ipfs hash...'
        : 'ipfs request complete'
    // if (this.props.online) {
    //   return this.renderPanZoom()
    // }
    return (
      <View style={{...styles.container, backgroundColor: '#ADE2FF'}}>
        <View>
          <Text style={styles.header}>You are a</Text>
          <Text style={styles.role}>Villager</Text>
        </View>
        <Image source={require('../images/wolf.png')} style={{ width: 250, height: 250, marginTop: 20 }} />
        <View style={styles.buttonContainer}>
          <Text style={styles.plaintext}>Try to survive the Werewolf attacks.</Text>
        </View>
      </View>
    )
  }


}

interface StateProps {
  nodeState: NodeState
  online: boolean
  ipfsImage?: string
}
function mapStateToProps(state: RootState): StateProps {
  return {
    nodeState: state.main.nodeState,
    online: state.main.online,
    ipfsImage: state.main.ipfsImage
  }
}

function mapDispatchToProps(dispatch: Dispatch<RootAction>): {} {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdentityScreen)