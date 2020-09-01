export interface ApiActionPayload {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    data?: string;

    onStart?: string;    // Action
    onSuccess?: string; // Action
    onError?: string; // Action
}