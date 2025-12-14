<!-- 모든 커뮤니티 관련 html에서 공통으로 include -->
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = 'https://dmjaxhydwaumhujrculd.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtamF4aHlkd2F1bWh1anJjdWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MTEyNTgsImV4cCI6MjA4MDI4NzI1OH0.nTdfW9Iw3OLyYbWcPGU2T8P_i-9tDeqUn1t2cAsIbn0';

  const { createClient } = window.supabase;   // 네임스페이스에서 함수만 뽑기
  const supa = createClient(SUPABASE_URL, SUPABASE_ANON_KEY); // 여기만 supa
</script>
