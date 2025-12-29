export const COMMAND_API_KEY = 'hackatime.apikey';
export const COMMAND_API_URL = 'hackatime.apiurl';
export const COMMAND_CONFIG_FILE = 'hackatime.config_file';
export const COMMAND_DASHBOARD = 'hackatime.dashboard';
export const COMMAND_DEBUG = 'hackatime.debug';
export const COMMAND_DISABLE = 'hackatime.disable';
export const COMMAND_LOG_FILE = 'hackatime.log_file';
export const COMMAND_PROXY = 'hackatime.proxy';
export const COMMAND_STATUS_BAR_CODING_ACTIVITY = 'hackatime.status_bar_coding_activity';
export const COMMAND_STATUS_BAR_ENABLED = 'hackatime.status_bar_enabled';

export enum LogLevel {
  DEBUG = 0,
  INFO,
  WARN,
  ERROR,
}

export const AI_RECENT_PASTES_TIME_MS = 500;
export const TIME_BETWEEN_HEARTBEATS_MS = 120000;
export const SEND_BUFFER_SECONDS = 30;

export interface Heartbeat {
  time: number;
  entity: string;
  local_file?: string;
  is_write: boolean;
  lineno: number;
  cursorpos: number;
  lines_in_file: number;
  alternate_project?: string;
  project_folder?: string;
  project_root_count?: number;
  language?: string;
  category?: 'debugging' | 'ai coding' | 'building' | 'code reviewing';
  ai_line_changes?: number;
  human_line_changes?: number;
  is_unsaved_entity?: boolean;
}
