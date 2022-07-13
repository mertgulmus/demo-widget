/* eslint-disable no-magic-numbers */
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
    baseLinkUrl: state.ConfigReducer.base_link_url // it's a random state imported from ConfigReducer, nothing crucial
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
            layout,
            title,
            wysiwyg = '',
            type,
            color,
            date,
            phrase,
            link
        } = this.props;

        const days = Math.floor(this.state.timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((this.state.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((this.state.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((this.state.timeLeft % (1000 * 60)) / 1000);
        // html parser doesn't see opening and closing tags in element format, that's why we replace them with < and >
        const content = wysiwyg.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

        return {
            baseLinkUrl,
            image,
            layout,
            title,
            content,
            type,
            color,
            date,
            phrase,
            link,
            days,
            hours,
            minutes,
            seconds
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

    formatTimeLeft(timeLeft) {
        const {
            days,
            hours,
            seconds,
            minutes
        } = this.props;

        if (timeLeft <= 0) {
            return [0, 0, 0, 0];
        }

        return [days, hours, minutes, seconds];
    }

    render() {
        const { date: phrase } = this.props;
        const { timeLeft } = this.state;

        const [days, hours, minutes, seconds] = this.formatTimeLeft(timeLeft);
        const noTimeLeft = timeLeft <= 0;
        return (
            <DemoWidget
              days={ days }
              hours={ hours }
              minutes={ minutes }
              seconds={ seconds }
              noTimeLeft={ noTimeLeft }
              phrase={ phrase }
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoWidgetContainer);
