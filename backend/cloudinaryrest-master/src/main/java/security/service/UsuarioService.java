//package security.service;
//
//import java.util.Optional;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import security.entity.Usuario;
//import security.repository.UsuarioRepository;
//
//@Service
//@Transactional
//public class UsuarioService {
//	
//	@Autowired
//	UsuarioRepository usuarioRepository;
//	
//	public Optional<Usuario> getByUserName(String userName){
//		
//		return usuarioRepository.findByUserName(userName);
//	}
//	
//	public boolean existsByUserName(String userName) {
//		return usuarioRepository.existsByUserName(userName);
//	}
//	
//	public void save(Usuario usuario) {
//		usuarioRepository.save(usuario);
//	}
//
//}
