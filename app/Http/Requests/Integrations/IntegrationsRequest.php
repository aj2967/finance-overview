<?php

namespace App\Http\Requests\Integrations;

use App\Services\Integrations\Validators\IntegrationsCredentialsValidator;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class IntegrationsRequest extends FormRequest
{
    private IntegrationsCredentialsValidator $integrationCredentialsValidator;

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        // Determine the validation rules based on the route or input
        if ($this->isMethod('post')) {
            if ($this->routeIs('integrations.saveConnection')) {
                return [
                    'integration_key' => ['required', 'string'],
                    'credentials' => ['required', 'array'],
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


    protected function failedValidation(Validator $validator)
    {
        dd($validator->errors()->toArray());
    }

    protected function prepareForValidation()
    {
        $credentials = $this->input('credentials');
        if (is_string($credentials)) {
            $decoded = json_decode($credentials, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                $this->merge(['credentials' => $decoded]);
            }
        }
    }


    public function validateCredentials(): ?array
    {
        $integrationKey = ($this->validated())['integration_key'] ?? null;
        $credentials = ($this->validated())['credentials'] ?? null;

        $validator = new IntegrationsCredentialsValidator();
        return $validator->validateFromConfig($integrationKey, $credentials);
    }

    public function integrationKey(): string
    {
        return $this->validated()['integration_key'];
    }

    public function credentials(): array
    {
        return $this->validated()['credentials'];
    }
}
