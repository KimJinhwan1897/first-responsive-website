// Supabase 클라이언트 초기화
console.log('Supabase 초기화 시작');
console.log('window.supabase 객체 확인:', window.supabase);

const supabaseUrl = 'https://symbzqomqohasimmtzol.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bWJ6cW9tcW9oYXNpbW10em9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMjczMDEsImV4cCI6MjA2NTkwMzMwMX0.Fh7ztCULGsv_iSuxvkq_mlFZo29cBds-LTxgbYPH2Jg';

let supabase;
try {
  supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
  console.log('Supabase 초기화 완료:', supabase);
} catch (error) {
  console.error('Supabase 초기화 오류:', error);
}

// 로그인 함수
async function signIn(email, password) {
  console.log('signIn 함수 내부 - 이메일:', email);
  try {
    console.log('supabase 객체:', supabase);
    console.log('auth.signInWithPassword 호출 전');
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    
    console.log('로그인 응답 데이터:', data);
    console.log('로그인 응답 오류:', error);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('로그인 오류 전체 스택:', error);
    throw error;
  }
}

// 회원가입 함수
async function signUp(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('회원가입 오류:', error.message);
    throw error;
  }
}

// 로그아웃 함수
async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('로그아웃 오류:', error.message);
    throw error;
  }
}

// 데이터 조회 함수
async function fetchData(tableName) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*');
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('데이터 조회 오류:', error.message);
    throw error;
  }
}

// 데이터 추가 함수
async function insertData(tableName, rowData) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert([rowData]);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('데이터 추가 오류:', error.message);
    throw error;
  }
}

// 현재 로그인 사용자 정보 가져오기
async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    console.error('사용자 정보 조회 오류:', error.message);
    return null;
  }
} 