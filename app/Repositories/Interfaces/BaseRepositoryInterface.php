<?php

namespace App\Repositories\Interfaces;

interface BaseRepositoryInterface
{
    public function all();
    public function find(int $id);
    public function create(array $data);
    public function update(int $id, array $data);
    public function updateOrCreate(array $attributes, array $values);
    public function delete(int $id);
}
