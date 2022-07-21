<?php
/**
 * @category  ScandiPWA
 * @author    Mert Gulmus <mert.gulmus@scandiweb.com | info@scandiweb.com>
 * @author    Arturs Strucinskis <arturs.strucinskis@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

declare(strict_types=1);

namespace Scandiweb\DemoWidget\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;
use Magento\Catalog\Model\Product;
use Magento\Catalog\Api\ProductRepositoryInterface;
use Magento\Store\Model\StoreManagerInterface;
use Magento\Catalog\Model\CategoryRepository;
use Magento\Framework\View\Element\Template\Context;

class DemoWidget extends Template implements BlockInterface
{
    protected $_template = "widget/demo_widget.phtml";
    protected $_storeManager;
    protected $categoryRepository;
    protected $productModel;
    protected $productRepository;

    public function __construct(
        StoreManagerInterface $storeManager,
        CategoryRepository $categoryRepository,
        Context $context,
        Product $productModel,
        ProductRepositoryInterface $productRepository,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->storeManager = $storeManager;
        $this->productModel = $productModel;
        $this->productRepository = $productRepository;
        $this->categoryRepository = $categoryRepository;
    }

    public function getStoreId() {
        return $this->storeManager->getStore()->getId();
    }

    // Here we use a core magic function getProduct(), that returns us a slug that looks like "product/<product_id>".
    // With the function below, we are substracting the number after the "/", which corresponds to the product/category ID
    function getProductId() {
        $product = $this->getProduct();
        $productId = substr(strrchr($product, '/'), 1);
        return $productId;
    }

    function getCategoryId() {
        $category = $this->getCategory();
        $categoryId = substr(strrchr($category, '/'), 1);
        return $categoryId;
    }

    function getCategoryUrl(){
        $id = $this->getCategoryId();
        $category = $this->categoryRepository->get($id, $this->getStoreId());
        return $category->getUrl();
    }

    function getProductUrl() {
        $productId = (int)$this->getProductId();
        $storeId = $this->getStoreId();
        $product = $this->productRepository->getById($productId, false, $storeId);
        $productUrl = $product->setStoreId($storeId)->getUrlModel()->getUrlInStore($product, ['_escape' => true]);
        return $productUrl;
    }
}

