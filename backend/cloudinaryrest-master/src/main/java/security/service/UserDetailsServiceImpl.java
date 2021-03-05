//package security.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import security.entity.Usuario;
//import security.entity.UsuarioPrincipal;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService{
//
//	@Autowired
//	UsuarioService usuarioService;
//	
//	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		// puede que el .get() sea lo que cause el error 500?
//		Usuario usuario = usuarioService.getByUserName(username).get();
//		return UsuarioPrincipal.build(usuario);
//	}
//
//}
