// Hook de autenticação simples para desenvolvimento — substitua pela sua implementação real
export function useAuth() {
  // altere role para 'user' para testar comportamento sem permissão
  const currentUser = { id: '1', role: 'admin' };
  return { currentUser };
}
