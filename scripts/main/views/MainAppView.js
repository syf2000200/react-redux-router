/**
 * Created by anchao on 2016/7/26.
 */
import {React, connect, PureRenderMixin, createSelector, Link} from '../../common/Util';
import HeaderView from './HeaderView';

const MainAppView = React.createClass({
    mixins: [PureRenderMixin],
    contextTypes: {
        router: React.PropTypes.object
    },
    render: function () {
        let pathname = this.props.pathname;
        let chiefCls = "";

        if (pathname == "/") {
            chiefCls = "login";
        } else {
            chiefCls = "others";
        }

        return (<div id="chief" className={chiefCls}>{this.props.children}</div>);
    }
});

const pathname = state => {
    return state.routing.locationBeforeTransitions.pathname;
};

const appData = createSelector([pathname], (pathname)=> {
    return {
        pathname: pathname
    }
});

export default connect(appData)(MainAppView);