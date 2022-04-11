import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './DemoWidget.style';
import { EXAMPLE_CONST } from './DemoWidget.config';

/** @namespace Scandipwa/Component/DemoWidget/Component/DemoWidgetComponent */
export class DemoWidgetComponent extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        layout: PropTypes.string.isRequired
    };

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

    render() {
        const { layout } = this.props;
        return (
            <div block="DemoWidget" mods={ { layout } }>
                { this.renderTitle() }
                { this.renderImage() }
            </div>
        );
    }
}

export default DemoWidgetComponent;
