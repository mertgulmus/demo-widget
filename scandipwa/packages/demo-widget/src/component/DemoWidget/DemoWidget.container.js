/**
 * @category  ScandiPWA
 * @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
 * @author    Arturs Strucinskis <arturs.strucinskis@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DataContainer from 'Util/Request/DataContainer';

import { DemoWidgetComponent as DemoWidget } from './DemoWidget.component';

/** @namespace DemoWidget/Component/DemoWidget/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    // it's a random state imported from ConfigReducer, nothing crucial
    baseLinkUrl: state.ConfigReducer.base_link_url
});

/** @namespace DemoWidget/Component/DemoWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({
});

/** @namespace DemoWidget/Component/DemoWidget/Container */
export class DemoWidgetContainer extends DataContainer {
    static propTypes = {
        baseLinkUrl: PropTypes.string.isRequired
    };

    state = {
        timeLeft: 0
    };

    containerFunctions = {};

    containerProps() {
        const {
            baseLinkUrl,
            image,
            title,
            titleStyle,
            wysiwyg = '',
            type,
            color,
            date,
            phrase,
            link = '',
            productUrl = '',
            categoryUrl = '',
            sliderId = 0
        } = this.props;

        const noTimeLeft = this.state.timeLeft <= 0;
        const days = Math.floor(this.state.timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((this.state.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((this.state.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((this.state.timeLeft % (1000 * 60)) / 1000);
        // html parser doesn't see opening and closing tags in element format, that's why we replace them with < and >
        const content = wysiwyg.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        return {
            baseLinkUrl,
            image,
            title,
            titleStyle,
            content,
            type,
            color,
            date,
            phrase,
            link,
            days,
            hours,
            minutes,
            seconds,
            noTimeLeft,
            productUrl,
            categoryUrl,
            sliderId
        };
    }

    __construct(props) {
        super.__construct(props);

        const { date: endDateString } = this.props;
        this.endDate = new Date(endDateString);

        this.state = {
            timeLeft: this.endDate.getTime() - new Date().getTime()
        };

        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                timeLeft: this.endDate.getTime() - new Date().getTime()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <DemoWidget
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoWidgetContainer);
