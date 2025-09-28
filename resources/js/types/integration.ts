export interface Integration {
    id: number;
    status: 'active' | 'inactive';
    name: string;
    url: string;
    description: string;
    icon: string;
    category: string;
    tags: [] | string;
    is_featured: boolean;
}

export interface UserIntegration {
    id: number;
    user_id: number;
    integration_id: number;
    type: 'bank' | 'investment';
    provider: string;
    name: string;
    api_key?: string | null;
    access_token?: string | null;
    refresh_token?: string | null;
    auto_sync: 0 | 1;
    sync_frequency: 'manual' | 'hourly' | 'daily' | 'weekly';
    metadata?: Record<string, unknown> | null;
    connected_at?: string | null;
    created_at?: string;
    updated_at?: string;
}
