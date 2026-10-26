import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AccountRoleResponse, ApiError, HealthStatus } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getEnsureAttendeeAccessUrl: () => string;
/**
 * Assigns the attendee role to an unassigned authenticated user. It never changes an instructor role.
 * @summary Ensure a signed-in user has attendee access
 */
export declare const ensureAttendeeAccess: (options?: Parameters<typeof customFetch>[1]) => Promise<AccountRoleResponse>;
export declare const getEnsureAttendeeAccessMutationKey: () => readonly ["ensureAttendeeAccess"];
export declare const getEnsureAttendeeAccessMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof ensureAttendeeAccess>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof ensureAttendeeAccess>>, TError, void, TContext>;
export type EnsureAttendeeAccessMutationResult = NonNullable<Awaited<ReturnType<typeof ensureAttendeeAccess>>>;
export type EnsureAttendeeAccessMutationError = ErrorType<ApiError>;
/**
* @summary Ensure a signed-in user has attendee access
*/
export declare const useEnsureAttendeeAccess: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof ensureAttendeeAccess>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof ensureAttendeeAccess>>, TError, void, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map