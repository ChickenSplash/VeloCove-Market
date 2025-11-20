<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'category' => $this->faker->randomElement([
                'books', 'electronics', 'clothing', 'home', 'toys'
            ]),
            'price' => $this->faker->randomFloat(2, 1, 500),
            'rating' => $this->faker->randomFloat(1, 0, 5),
            'stock_amount' => $this->faker->numberBetween(0, 200),
            'image_url' => $this->faker->imageUrl(),
        ];
    }
}
