<?php

/**
 * Maksym
 */

declare(strict_types=1);

namespace Maksym\CustomCategory\ViewModel\Product;

/* use Magento\Framework\View\Element\Block\ArgumentInterface; */

class SubCategory extends \Magento\Framework\DataObject implements \Magento\Framework\View\Element\Block\ArgumentInterface
{

    /**
     * SubCategory constructor.
     *
     */


    public function __construct()
    {
    }

    /**
     * @return string
     */
    public function getSubcategories()
    {
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $category = $objectManager->get('Magento\Framework\Registry')->registry('current_category');
        $subcats = $category->getChildrenCategories();
        return $subcats;
    }
}