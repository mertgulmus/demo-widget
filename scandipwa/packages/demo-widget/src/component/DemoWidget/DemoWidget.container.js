/**
 * @category  ScandiPWA
 * @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
 * @author    Arturs Strucinskis <arturs.strucinskis@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** @namespace Scandipwa/Component/DemoWidget/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    // add props here
    baseLinkUrl: state.ConfigReducer.base_link_url // it's a random state imported from ConfigReducer, nothing crucial
});

/** @namespace Scandipwa/Component/DemoWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({
    // add props here
});

/** @namespace Scandipwa/Component/DemoWidget/Container/DemoWidgetContainer */
export class DemoWidgetContainer {
    static propTypes = {
        // define types of your props here
        baseLinkUrl: PropTypes.string.isRequired
    };

    containerProps() {
        const {
            // pass your props here
            baseLinkUrl
        } = this.props;

        return {
            // pass your props here
            baseLinkUrl
        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoWidgetContainer);
