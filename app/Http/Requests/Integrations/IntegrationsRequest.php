<?php

namespace App\Http\Requests\Integrations;

use Illuminate\Foundation\Http\FormRequest;

class IntegrationsRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        // Determine the validation rules based on the route or input
        if ($this->isMethod('post')) {
            if ($this->routeIs('integrations.saveConnection')) {
                return [
                    'api_key' => ['required', 'string'],
                ];
            }

            if ($this->routeIs('integrations.updateAutoSync')) {
                return [
                    'auto_sync' => ['required', 'boolean'],
                ];
            }

            if ($this->routeIs('integrations.updateSyncFrequency')) {
                return [
                    'sync_frequency' => ['required', 'integer', 'min:1', 'max:1440'],
                ];
            }
        }

        return [];
    }

    public function getApiKey(): ?string
    {
        return ($this->validated())['api_key'] ?? null;
    }
}
