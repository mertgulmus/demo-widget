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
    protected $_template = "widget/template.phtml";

    // If your widget requires some additional data processing, like time format conversions or translations
    // or some data retrieval from the Magento, please add the functions to get the data you need here and
    // call them in the template.phtml
}
