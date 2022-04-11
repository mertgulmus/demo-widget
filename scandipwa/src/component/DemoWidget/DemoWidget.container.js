/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** @namespace Scandipwa/Component/DemoWidget/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    baseLinkUrl: state.ConfigReducer.base_link_url
});

/** @namespace Scandipwa/Component/DemoWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace Scandipwa/Component/DemoWidget/Container/DemoWidgetContainer */
export class DemoWidgetContainer {
    static propTypes = {
        baseLinkUrl: PropTypes.string.isRequired
    };

    containerProps() {
        const {
            baseLinkUrl
        } = this.props;

        return {
            baseLinkUrl
        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoWidgetContainer);
