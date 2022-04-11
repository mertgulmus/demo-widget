<?php
namespace Scandiweb\DemoWidget\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class Demo extends Template implements BlockInterface
{
    protected $_template = "widget/template.phtml";
}