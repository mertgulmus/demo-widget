/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
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

import './DemoWidget.style';

/** @namespace DemoWidget/Component/DemoWidget/Component */
export class DemoWidgetComponent extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        layout: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        widgetRef: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
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
            <img block="DemoWidget" elem="Image" src={ image } alt="" />
        );
    }

    renderTitle() {
        const { title } = this.props;
        return (
            <h1>{ title }</h1>
        );
    }

    renderWysiwyg() {
        const { content } = this.props;
        return <Html content={ content } />;
    }

    // setBackgroundColor() {
    //     const { color, widgetRef } = this.props;
    // }

    render() {
        const { layout } = this.props;

        return (
            <div
              block="DemoWidget"
              ref={ this.widgetRef }
              mods={ { layout } }
            >
                { this.renderTitle() }
                { this.renderImage() }
                { this.renderWysiwyg() }
            </div>
        );
    }
}

export default DemoWidgetComponent;
