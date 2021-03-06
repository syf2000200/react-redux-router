// import brace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import { React, connect, withRouter } from 'common/Util'
import ReactComponentBase from 'base/ReactComponentBase'

class AceExampleView extends ReactComponentBase {
  aceChange = (newValue) => {
      console.log(newValue)
  }

  render(){
      return (
          <div className="acesec">
              <h3 style={{ paddingLeft: '20px' }}>基于：react-ace</h3>
              <AceEditor
                  height="calc(100% - 26px)"
                  width="100%"
                  mode="javascript"
                  theme="github"
                  onChange={this.aceChange}
                  name="UNIQUE_ID_OF_DIV"
                  showGutter
                  showPrintMargin
                  editorProps={{ $blockScrolling: true }}
              />
          </div>
      )
  }
}

export default connect()(withRouter(AceExampleView))
