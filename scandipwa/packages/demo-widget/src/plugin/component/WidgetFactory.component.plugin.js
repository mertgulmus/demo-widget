/**
 * @category  ScandiPWA
 * @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

import RenderWhenVisible from 'Component/RenderWhenVisible';
import { DemoWidgetComponent as DemoWidget } from 'Component/DemoWidget/DemoWidget.component';

const renderMap = (member) => {
    return {
        ...member,
        ['DemoWidget']: {
            component: DemoWidget
        }
    }
};

const renderContent = (args, callback, instance) => {
    const { type } = instance.props;

    const {
        component: Widget,
        fallback
    } = instance.renderMap[type] || {};

    console.log(instance.renderMap);

    if (Widget !== undefined) {
        return (
            <RenderWhenVisible fallback={ fallback }>
                <Widget {...instance.props} />
            </RenderWhenVisible>
        );
    }
};

export default {
    'Component/WidgetFactory/Component': {
        'member-function': {
            renderContent
        },
        'member-property': {
            renderMap
        }
    }
};
