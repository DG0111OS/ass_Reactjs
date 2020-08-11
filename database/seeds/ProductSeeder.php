<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('products')->insert([
            [
                'category_id' =>2,
                'name' => 'Sản phẩm 1',
                'description' => 'Sản phầm này là một sản phẩm tốt',
                'image' => 'https://picsum.photos/seed/picsum/200/300',
                'price' => 100,
                'quantity' => 100,
            ],
            [
                'category_id' =>1,
                'name' => 'Sản phẩm 2',
                'description' => 'Sản phầm này là một sản phẩm tốt',
                'image' => 'https://picsum.photos/seed/picsum/200/300',
                'price' => 100,
                'quantity' => 100,
            ],
            [
                'category_id' =>2,
                'name' => 'Sản phẩm 3',
                'description' => 'Sản phầm này là một sản phẩm tốt',
                'image' => 'https://picsum.photos/seed/picsum/200/300',
                'price' => 100,
                'quantity' => 100,
            ],
            [
                'category_id' =>3,
                'name' => 'Sản phẩm 4',
                'description' => 'Sản phầm này là một sản phẩm tốt',
                'image' => 'https://picsum.photos/seed/picsum/200/300',
                'price' => 100,
                'quantity' => 100,
            ],
            [
                'category_id' => 3,
                'name' => 'Sản phẩm 5',
                'description' => 'Sản phầm này là một sản phẩm tốt',
                'image' => 'https://picsum.photos/seed/picsum/200/300',
                'price' => 100,
                'quantity' => 100,
            ],
            [
                'category_id' =>1,
                'name' => 'Sản phẩm 6',
                'description' => 'Sản phầm này là một sản phẩm tốt',
                'image' => 'https://picsum.photos/seed/picsum/200/300',
                'price' => 10,
                'quantity' => 100,
            ]
        ]);
    }
}
