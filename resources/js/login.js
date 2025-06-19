document.addEventListener('DOMContentLoaded', function() {
  // 로그인 폼 제출 처리
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      console.log('로그인 시도:', email);
      
      try {
        console.log('signIn 함수 호출 전');
        const result = await signIn(email, password);
        console.log('로그인 결과:', result);
        
        if (result && result.user) {
          alert('로그인 성공!');
          // 로그인 성공 후 처리 (예: 페이지 리다이렉트)
          window.location.href = 'index.html';
        } else {
          alert('로그인 실패: 사용자 정보가 없습니다');
        }
      } catch (error) {
        console.error('로그인 오류 상세 정보:', error);
        alert('로그인 실패: ' + error.message);
      }
    });
  }
  
  // 회원가입 폼 제출 처리
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      
      try {
        const user = await signUp(email, password);
        alert('회원가입 성공! 이메일을 확인해주세요.');
      } catch (error) {
        alert('회원가입 실패: ' + error.message);
      }
    });
  }
  
  // 로그아웃 버튼 처리
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async function() {
      try {
        await signOut();
        alert('로그아웃 되었습니다.');
        window.location.href = 'login.html';
      } catch (error) {
        alert('로그아웃 실패: ' + error.message);
      }
    });
  }
  
  // 현재 사용자 정보 표시
  const checkLoginStatus = async () => {
    const user = await getCurrentUser();
    const userInfoEl = document.getElementById('userInfo');
    
    if (user && userInfoEl) {
      userInfoEl.textContent = `${user.email}님 환영합니다!`;
      document.querySelector('.login-container')?.classList.add('logged-in');
    } else if (userInfoEl) {
      userInfoEl.textContent = '로그인이 필요합니다';
      document.querySelector('.login-container')?.classList.remove('logged-in');
    }
  };
  
  checkLoginStatus();
}); 