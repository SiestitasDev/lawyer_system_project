import { createClient } from "@supabase/supabase-js";
import { DATABASE_URL, DATABASE_KEY } from "../config/config.js";

export const supabase = createClient(DATABASE_URL, DATABASE_KEY);   