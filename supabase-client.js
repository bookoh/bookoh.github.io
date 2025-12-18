// supabase-client.js
// 모든 페이지에서 공통 사용

const SUPABASE_URL = 'https://dmjaxhydwaumhujrculd.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtamF4aHlkd2F1bWh1anJjdWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MTEyNTgsImV4cCI6MjA4MDI4NzI1OH0.nTdfW9Iw3OLyYbWcPGU2T8P_i-9tDeqUn1t2cAsIbn0';

// 1) CDN 스크립트가 먼저 로드되어 있어야 함:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

// 2) 전역 supabase 클라이언트 생성
const { createClient } = window.supabase;   // CDN 이 만든 전역 객체
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 선택: 디버깅용으로 전역에 노출
window.supabaseClient = supabase;
