<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(
            [
                [
                    'name' => 'Danh Mục 1',
                    'active' => 1,
                    'parent_id' => 0,
                ],
                [
                    'name' => 'Danh Mục 2',
                    'active' => 1,
                    'parent_id' => 0,
                ],
                [
                    'name' => 'Danh Mục 3',
                    'active' => 1,
                    'parent_id' => 0,
                ],
                [
                    'name' => 'Danh Mục 4',
                    'active' => 1,
                    'parent_id' => 0,
                ],

            ]
        );
    }
}
