// supabase-client.js
// 모든 커뮤니티 관련 html에서 공통으로 include

const SUPABASE_URL = 'https://dmjaxhydwaumhujrculd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtamF4aHlkd2F1bWh1anJjdWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MTEyNTgsImV4cCI6MjA4MDI4NzI1OH0.nTdfW9Iw3OLyYbWcPGU2T8P_i-9tDeqUn1t2cAsIbn0';

// CDN으로 로드된 window.supabase에서 createClient 함수만 꺼내서 사용
const { createClient } = window.supabase;

// 여기서 만든 supa를 다른 html에서 그대로 사용
const supa = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
