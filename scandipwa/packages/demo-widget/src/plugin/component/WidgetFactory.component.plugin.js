/* eslint-disable no-undef */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @category  ScandiPWA
 * @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
 * @author    Arturs Strucinskis <arturs.strucinskis@scandiweb.com | info@scandiweb.com>
 * @author    Raivis Dejus <info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

import { lazy } from 'react';

import RenderWhenVisible from 'Component/RenderWhenVisible';

import DemoWidget from '../../component/DemoWidget';

// TODO figure out why lazy loading breaks the site
// export const DemoWidget = lazy(() => import(
//     /* webpackMode: "lazy", webpackChunkName: "widget-demo" */
//     '../../component/DemoWidget'
// ));

const renderMap = (member) => ({
    ...member,
    DemoWidget: {
        component: DemoWidget
    }
});

const renderContent = (args, callback, instance) => {
    const {
        type,
        image,
        title,
        wysiwyg,
        color,
        link,
        productUrl,
        categoryUrl,
        date,
        phrase,
        sliderId,
    } = instance.props;

    const {
        component: Widget,
        fallback
    } = instance.renderMap[type] || {};

    if (Widget !== undefined) {
        return (
            <RenderWhenVisible fallback={ fallback }>
                <Widget
                    image={ image }
                    title={ title }
                    wysiwyg={ wysiwyg }
                    color={ color }
                    link={ link }
                    productUrl={ productUrl }
                    categoryUrl={ categoryUrl }
                    date={ date }
                    phrase={ phrase }
                    sliderId={ sliderId }
                />
            </RenderWhenVisible>
        );
    }

    // If this extension did not render the necessary content
    // we return control to the core system to render it
    return callback();
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
