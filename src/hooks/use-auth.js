export function useAuth() {
	const currentUser = { id: '1', role: 'admin' };
	return { currentUser };
}