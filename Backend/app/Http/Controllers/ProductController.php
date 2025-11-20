<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->search;
        $sort = $request->sort;
        $categoryFilter = $request->categoryFilter;
        $priceMin = $request->priceMin;
        $priceMax = $request->priceMax;
        $inStockOnly = $request->inStockOnly;

        $products = Product::query()
            ->when($search, function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            // If $sort is provided, apply the corresponding ordering.
            // Otherwise (default), order by name ascending.
            ->when($sort, function ($query, $sort) {
                if ($sort === 'nameAsc') {
                    $query->orderBy('name', 'asc');
                } elseif ($sort === 'nameDesc') {
                    $query->orderBy('name', 'desc');
                } elseif ($sort === 'priceAsc') {
                    $query->orderBy('price', 'asc');
                } elseif ($sort === 'priceDesc') {
                    $query->orderBy('price', 'desc');
                } elseif ($sort === 'ratingAsc') {
                    $query->orderBy('rating', 'asc');
                } elseif ($sort === 'ratingDesc') {
                    $query->orderBy('rating', 'desc');
                } else {
                    // Fallback to default if unrecognized sort value
                    $query->orderBy('name', 'asc');
                }
            }, function ($query) {
                // default when no $sort supplied
                $query->orderBy('name', 'asc');
            })
            ->when($categoryFilter, function ($query, $categoryFilter) {
                $query->whereIn('category', $categoryFilter);
            })
            ->when($priceMin && $priceMax, function ($query) use ($priceMin, $priceMax) {
                $query->whereBetween('price', [$priceMin, $priceMax]);
            })
            ->when($priceMin && !$priceMax, function ($query) use ($priceMin) {
                $query->where('price', '>=', $priceMin);
            })
            ->when($priceMax && !$priceMin, function ($query) use ($priceMax) {
                $query->where('price', '<=', $priceMax);
            })
            ->when($inStockOnly, function ($query) {
                $query->where('stock_amount', '>', 0);
            })
            ->paginate(12);

        return $products;
    }
}
