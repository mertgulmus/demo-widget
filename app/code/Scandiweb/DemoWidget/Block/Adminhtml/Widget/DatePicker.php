<?php
declare(strict_types=1);

namespace Scandiweb\DemoWidget\Block\Adminhtml\Widget;

use Magento\Backend\Block\Template;
use Magento\Framework\Data\Form\Element\AbstractElement;
use Magento\Framework\Data\Form\Element\Factory;

/**
 * Class DatePicker
 */
class DatePicker extends Template
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
        $input->addCustomAttribute("style", "width: auto");
        $input->setClass("widget-option input-text admin__control-text");
        if ($element->getRequired()) {
            $input->addClass("required-entry");
        }

        $calendarScript = '
            <script>
                require(
                    ["jquery", "mage/translate", "mage/calendar"],
                    function ($, $t) {
                        $("#' . $element->getId() . '").datetimepicker({
                            dateFormat: "yy-m-d",
                            timeFormat: "HH:mm:ss",
                            changeMonth: true,
                            changeYear: true,
                            showsTime: true,
                            showButtonPanel: true,
                            currentText: $t("Go Today"),
                            closeText: $t("Close")
                        });
                    }
                )
            </script>
        ';

        $element->setData("after_element_html", $input->getElementHtml() . $calendarScript);
        $element->setValue('');

        return $element;
    }
}