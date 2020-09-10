import { apiGetParsed, apiPostFormData } from "./apiUtils";

export class SWCClient {
    public getTimeSettings(): Promise<TimeSettings> {
        return apiGetParsed("timesettings");
    }

    public setTimeSettings(payload: TimeSettings): Promise<{}> {
        return apiPostFormData("timesettings", payload);
    }

    public getDisplayEffects(): Promise<DisplayEffects> {
        return apiGetParsed("displayeffects");
    }

    public setDisplayEffects(payload: DisplayEffects): Promise<{}> {
        return apiPostFormData("displayeffects", payload);
    }

    public getNightMode(): Promise<NightMode> {
        return apiGetParsed("nightmode");
    }

    public setNightMode(payload: NightMode): Promise<{}> {
        return apiPostFormData("nightmode", payload);
    }

    public getDisplayEffectsSettings(): Promise<DisplayEffectsSettings> {
        return apiGetParsed("displayeffects/settings");
    }

    public getNightModeSettings(): Promise<NightModeSettings> {
        return apiGetParsed("nightmode/settings");
    }
}

export interface TimeSettings {
    mode: TimeSettingsMode; // (0 = timezone, 1 = manual)
    timezone: string; // = (0-23) [wenn mode = 0]
    use_dst: string; // = (bool)
    manual_time: string; // = (time)
}
export type TimeSettingsMode = "internet" | "custom";
export interface DisplayEffects {
    brightness: string; // = (0 - 100)
    effect_hour: string; // = (effect_type )
    effect_5minute: string; // = (effect_type )
    color_mode_dot: string; // = (color_mode_dot_type )
    color_dot: string; // = #xxxxxx [wenn color_mode_dot = 0]
    color_mode_word: string; // =(color_mode_word_type)
    color_word: string; // = #xxxxxx [wenn color_mode_word = 0]
    color_mode_background: string; // = (color_mode_background_type)
    color_background: string; // = #xxxxxx [wenn color_mode_background = 0]
}
export interface DisplayEffectsSettings {
    effect_type: string[]; // = (string, string, ....)
    color_mode_dot_type: string[]; // = (string, string, ....)
    color_mode_word_type: string[]; // = (string, string, ....)
    color_mode_background_type: string[]; // = (string, string, ....)
}

export interface NightMode {
    mode: string; // (disabled, mode_type...)
    weekday_start: string; //:string, // (time) [wenn mode != 0]
    weekday_end: string; // (time) [wenn mode != 0]
    weekend_start: string; // (time) [wenn mode != 0]
    weekend_end: string; // (time) [wenn mode != 0]
}
export interface NightModeSettings {
    mode_type: string[]; // = (string, string, ....) ohne disabled
}
