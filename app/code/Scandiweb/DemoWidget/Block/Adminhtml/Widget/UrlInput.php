<?php
/**
 * Scandiweb_DemoWidget
 *
 * @category Scandiweb
 * @package  Scandiweb_DemoWidget
 * @author   Davit Ninoshvili <davit.ninoshvili@scandiweb.com | info@scandiweb.com>
 */

declare(strict_types=1);

namespace Scandiweb\DemoWidget\Block\Adminhtml\Widget;

use Magento\Backend\Block\Template;
use Magento\Framework\Data\Form\Element\AbstractElement;
use Magento\Framework\Data\Form\Element\Factory;

/**
 * Class UrlInput
 * @package Scandiweb\DemoWidget\Block\Adminhtml\Widget
 */
class UrlInput extends Template
{
    /**
     * @var Factory
     */
    private $elementFactory;

    /**
     * @param Template\Context $context
     * @param array $data
     * @param Factory $elementFactory
     */
    public function __construct(
        Template\Context $context,
        array            $data = [],
        Factory          $elementFactory
    ) {
        parent::__construct($context, $data);

        $this->elementFactory = $elementFactory;
    }

    /**
     * @param AbstractElement $element
     * @return void
     */
    public function prepareElementHtml(AbstractElement $element)
    {
        /** @var \Magento\Framework\Data\Form\Element\Text $input */
        $input = $this->elementFactory->create("text", ["data" => $element->getData()]);
        $input->setId($element->getId());
        $input->setForm($element->getForm());
        $input->setClass("widget-option input-text admin__control-text");
        $input->addClass("validate-url");
        if ($element->getRequired()) {
            $input->addClass("required-entry");
        }

        $element->setData("after_element_html", $input->getElementHtml());

        return $element;
    }
}