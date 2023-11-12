import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ozputfebourjzznsyvbr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96cHV0ZmVib3Vyanp6bnN5dmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1Nzc2OTQsImV4cCI6MjAxNTE1MzY5NH0.rVlv-uJ6145ykZiShRH5NAduwGTWV-Ffiv93RhWJyvg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
