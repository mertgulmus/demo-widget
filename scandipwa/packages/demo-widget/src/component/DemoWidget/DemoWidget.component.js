/**
* @category  ScandiPWA
* @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
* @author    Arturs Strucinskis <arturs.strucinskis@scandiweb.com | info@scandiweb.com>
* @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
* @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
*/
import PropTypes from 'prop-types';
import { createRef, PureComponent } from 'react';

import Html from 'SourceComponent/Html';
import CSS from 'Util/CSS';
import WidgetFactory from 'Component/WidgetFactory';
import { SLIDER } from 'Component/WidgetFactory/WidgetFactory.config';

import './DemoWidget.style';

/** @namespace DemoWidget/Component/DemoWidget/Component */
export class DemoWidgetComponent extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        phrase: PropTypes.string.isRequired,
        days: PropTypes.number.isRequired,
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        noTimeLeft: PropTypes.bool.isRequired,
        link: PropTypes.string.isRequired,
        titleStyle: PropTypes.string.isRequired,
        productUrl: PropTypes.string.isRequired,
        categoryUrl: PropTypes.string.isRequired,
        sliderId: PropTypes.string.isRequired
    };

    widgetRef = createRef();

    componentDidMount() {
        this.setStyles();
    }

    componentDidUpdate() {
        this.setStyles();
    }

    setStyles() {
        const { color } = this.props;
        CSS.setVariable(this.widgetRef, 'div-background-color', color);
    }

    renderImage() {
        const { image } = this.props;
        return (
            <img block="DemoWidget" elem="Image" src={ image } alt={ image } />
        );
    }

    renderTitle() {
        const { title } = this.props;
        const { titleStyle } = this.props;

        return (
            <h1 style={{ color: titleStyle }}>{ title }</h1>
        );
    }

    renderWysiwyg() {
        const { content } = this.props;

        return <Html content={ content } />;
    }

    renderSlider() {
        const { sliderId } = this.props;

        return <WidgetFactory type={ SLIDER } sliderId={ sliderId } />;
    }

    renderTimeBlock(time, suffix) {
        const { noTimeLeft, phrase } = this.props;

        if (noTimeLeft) {
            return (
                <div
                  block="Countdown"
                  elem="TimeBlock"
                >
                     <span>{ `${phrase}` }</span>
                </div>
            );
        }

        return (
            <div
              block="Countdown"
              elem="TimeBlock"
            >
                 <span>{ `${time} ${suffix}` }</span>
            </div>
        );
    }

    renderLink() {
        const { link } = this.props;
        if (!link) {
            return '';
        }

        return (
            <div
              block="DemoWidget"
              elem="Text"
            >
                <a href={ link }>{ __('Link Text') }</a>
            </div>
        );
    }

    renderProductAndCategoryLinks() {
        const {
            productUrl,
            categoryUrl
        } = this.props;

        return (
            <div
              block="DemoWidget"
              elem="ProductAndCategoryHolder"
            >
                <div
                  block="DemoWidget"
                  elem="ProductHolder"
                >
                    <a href={ productUrl }>{ __('Product') }</a>
                </div>
                <div
                  block="DemoWidget"
                  elem="CategoryHolder"
                >
                    <a href={ categoryUrl }>{ __('Category') }</a>
                </div>
            </div>
        );
    }

    render() {
        const {
            days,
            hours,
            minutes,
            seconds
        } = this.props;

        return (
            <div
              block="DemoWidget"
              ref={ this.widgetRef }
            >
                { this.renderTitle() }
                { this.renderImage() }
                { this.renderLink() }
                <div block="DemoWidget" elem="Countdown">
                    { this.renderTimeBlock(days, __('days')) }
                    { this.renderTimeBlock(hours, __('h')) }
                    { this.renderTimeBlock(minutes, __('min')) }
                    { this.renderTimeBlock(seconds, __('sec')) }
                </div>
                { this.renderProductAndCategoryLinks() }
                <div block="DemoWidget" elem="Slider">
                    { this.renderSlider() }
                </div>
                <div block="DemoWidget" elem="Wysiwyg">
                    { this.renderWysiwyg() }
                </div>
            </div>
        );
    }
}

export default DemoWidgetComponent;
