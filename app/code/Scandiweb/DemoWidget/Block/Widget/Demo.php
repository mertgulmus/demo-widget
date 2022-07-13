<?php
/**
 * @category  ScandiPWA
 * @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
 * @author    Arturs Strucinskis <arturs.strucinskis@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */
namespace Scandiweb\DemoWidget\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class Demo extends Template implements BlockInterface
{
    // ScandiPWA widget rendering mode does not use this file
    // If you want to use Magento rendering mode, you can use this file to address your template
    // Also see the file for more information -> app/code/Scandiweb/DemoWidget/etc/graphql/di.xml
    // protected $_template = "widget/template.phtml";
}
