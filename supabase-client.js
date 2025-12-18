// supabase-client.js  (리포 루트에 두기)

const SUPABASE_URL = 'https://dmjaxhydwaumhujrculd.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtamF4aHlkd2F1bWh1anJjdWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MTEyNTgsImV4cCI6MjA4MDI4NzI1OH0.nTdfW9Iw3OLyYbWcPGU2T8P_i-9tDeqUn1t2cAsIbn0';

// CDN 전역 객체에서 createClient 꺼내기
const { createClient } = window.supabase;

// 실제 쿼리에 쓸 클라이언트 인스턴스
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 디버깅용 전역 노출
window.db = db;
