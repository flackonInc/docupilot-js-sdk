/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    readonly id: number;
    /**
     * globally unique identifier for user
     */
    readonly guid: string;
    first_name?: string;
    last_name?: string;
    email: string;
    timezone?: 'Pacific/Midway' | 'America/Adak' | 'Pacific/Honolulu' | 'Pacific/Marquesas' | 'America/Anchorage' | 'America/Tijuana' | 'America/Los_Angeles' | 'America/Phoenix' | 'America/Chihuahua' | 'America/Denver' | 'America/Belize' | 'America/Chicago' | 'Pacific/Easter' | 'America/Mexico_City' | 'America/Regina' | 'America/Bogota' | 'America/Cancun' | 'America/New_York' | 'America/Port-au-Prince' | 'America/Havana' | 'America/Indiana/Indianapolis' | 'America/Asuncion' | 'America/Halifax' | 'America/Caracas' | 'America/Cuiaba' | 'America/Manaus' | 'America/Santiago' | 'America/Grand_Turk' | 'America/St_Johns' | 'America/Fortaleza' | 'America/Sao_Paulo' | 'America/Cayenne' | 'America/Buenos_Aires' | 'America/Godthab' | 'America/Montevideo' | 'America/Miquelon' | 'America/Bahia' | 'America/Noronha' | 'Atlantic/Azores' | 'Atlantic/Cape_Verde' | 'UTC' | 'Africa/Casablanca' | 'Europe/London' | 'Africa/Monrovia' | 'Europe/Amsterdam' | 'Europe/Belgrade' | 'Europe/Brussels' | 'Europe/Warsaw' | 'Africa/Algiers' | 'Africa/Windhoek' | 'Asia/Amman' | 'Europe/Athens' | 'Asia/Beirut' | 'Africa/Cairo' | 'Asia/Damascus' | 'Asia/Gaza' | 'Africa/Harare' | 'Europe/Helsinki' | 'Asia/Jerusalem' | 'Europe/Kaliningrad' | 'Africa/Tripoli' | 'Asia/Baghdad' | 'Asia/Istanbul' | 'Asia/Kuwait' | 'Europe/Minsk' | 'Europe/Moscow' | 'Africa/Nairobi' | 'Asia/Tehran' | 'Asia/Muscat' | 'Europe/Astrakhan' | 'Asia/Baku' | 'Europe/Samara' | 'Indian/Mauritius' | 'Asia/Tbilisi' | 'Asia/Yerevan' | 'Asia/Kabul' | 'Asia/Tashkent' | 'Asia/Yekaterinburg' | 'Asia/Karachi' | 'Asia/Kolkata' | 'Asia/Colombo' | 'Asia/Katmandu' | 'Asia/Almaty' | 'Asia/Dhaka' | 'Asia/Rangoon' | 'Asia/Novosibirsk' | 'Asia/Bangkok' | 'Asia/Barnaul' | 'Asia/Hovd' | 'Asia/Krasnoyarsk' | 'Asia/Tomsk' | 'Asia/Chongqing' | 'Asia/Irkutsk' | 'Asia/Kuala_Lumpur' | 'Australia/Perth' | 'Asia/Taipei' | 'Asia/Ulaanbaatar' | 'Asia/Pyongyang' | 'Australia/Eucla' | 'Asia/Chita' | 'Asia/Tokyo' | 'Asia/Seoul' | 'Asia/Yakutsk' | 'Australia/Adelaide' | 'Australia/Darwin' | 'Australia/Brisbane' | 'Australia/Canberra' | 'Pacific/Guam' | 'Australia/Hobart' | 'Asia/Vladivostok' | 'Australia/Lord_Howe' | 'Pacific/Bougainville' | 'Asia/Srednekolymsk' | 'Asia/Magadan' | 'Pacific/Norfolk' | 'Asia/Sakhalin' | 'Pacific/Guadalcanal' | 'Asia/Anadyr' | 'Pacific/Auckland' | 'Pacific/Fiji' | 'Pacific/Chatham' | 'Pacific/Tongatapu' | 'Pacific/Apia' | 'Pacific/Kiritimati';
    locale?: string | null;
    readonly theme: 'light' | 'dark' | 'system';
    readonly g2_verified: boolean;
    is_mfa_enabled?: boolean;
};

