<?php

namespace Scandiweb\DemoWidget\Block\Adminhtml\Widget;

use Magento\Backend\Block\Template\Context;
use Magento\Framework\Data\Form\Element\Factory;
use Magento\Framework\Data\Form\Element\Text;
use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;
use Magento\Framework\Data\Form\Element\AbstractElement;

class ColorPicker extends Template implements BlockInterface
{

    /**
     * @var Factory
     */
    protected $elementFactory;

    /**
     * @param Context $context
     * @param Factory $elementFactory
     * @param array $data
     */
    public function __construct(
        Context $context,
        Factory $elementFactory,
        array $data = []
    ) {
        $this->elementFactory = $elementFactory;
        parent::__construct($context, $data);
    }

    /**
     * @throws \Exception
     */
    public function prepareElementHtml(AbstractElement $element)
    {
        $selectedColor = $element->getValue() ?: "#fff";
        $random = random_int(1,10000);

        /** @var Text $input */
        $input = $this->elementFactory->create("text", ['data' => $element->getData()]);
        $input->setId($element->getId());
        $input->setForm($element->getForm());
        $input->setClass("widget-option input-text admin__control-text");
        if ($element->getRequired()) {
            $input->addClass('required-entry');
        }

        $element->setData('after_element_html', $input->getElementHtml() . '
        <p id="colorpickerHolder_' . $random . '"></p>
        <script type="text/javascript">
            require(["jquery", "jquery/colorpicker/js/colorpicker"], function ($) {
                $("#colorpickerHolder_' . $random . '").ColorPicker({
                    flat: true,
                    color: "' . $selectedColor . '",
                    onChange: function (hsb, hex, rgb) {
                        $("#' . $element->getId() . '").css("backgroundColor", "#" + hex);
                        $("#' . $element->getId() . '").val(\'#\' + hex);
                    }
                });

                $("#' . $element->getId() . '").blur(function() {
                    $("#colorpickerHolder_' . $random . '").ColorPickerSetColor($("#' . $element->getId() . '").val());
                });
            });
        </script>');
        return $element;
    }
}
