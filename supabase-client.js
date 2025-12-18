// supabase-client.js

const SUPABASE_URL = 'https://dmjaxhydwaumhujrculd.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtamF4aHlkd2F1bWh1anJjdWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MTEyNTgsImV4cCI6MjA4MDI4NzI1OH0.nTdfW9Iw3OLyYbWcPGU2T8P_i-9tDeqUn1t2cAsIbn0';

// CDN 전역 객체: window.supabase
const { createClient } = window.supabase;

// 이걸 'db' 같은 새 이름으로 만든다
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 전역에서 쓰고 싶으면 이렇게 내보내기
window.db = db;
